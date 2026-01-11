(function(){
  function q(name){ return new URLSearchParams(location.search).get(name); }
  function escapeHtml(str){ return String(str||"").replace(/[&<>'"]/g, s => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#039;","\"":"&quot;"}[s])); }
  function formatParagraphs(text){ return (text||"").split('\n').filter(Boolean).map(t=>`<p>${escapeHtml(t)}</p>`).join(''); }

  const id = q('id');
  const target = document.getElementById('productDetail');
  if (!target){ console.warn('No productDetail container'); return; }
  if (!id){ target.innerHTML = '<div class="muted">Product not specified. <a href="index.html">Back to shop</a></div>'; return; }

  let productData = null;

  function getLocalized(field){
    const lang = window.currentLang || 'en';
    if (!productData) return '';
    if (lang === 'fr' && productData[`${field}_fr`]) return productData[`${field}_fr`];
    if (lang === 'ar' && productData[`${field}_ar`]) return productData[`${field}_ar`];
    return productData[field];
  }

  function renderProduct(){
    const p = productData;
    if (!p) return;
    const image = p.image || 'https://raw.githubusercontent.com/ipordiseparfum-hash/ipordiseparfum/main/logo.jpeg';

    const variantsHtml = (p.variants && p.variants.length)
      ? `<label for="variant">${t('choose_size') || 'Choose size'}</label><select id="variant">${p.variants.map(v=>`<option value="${escapeHtml(v.size)}">${escapeHtml(v.size)}</option>`).join('')}</select>`
      : '';

    const priceHtml = (p.price != null) ? `<div class="product__price">${formatMoney(p.price)}</div>` : `<div class="muted small">${t('choose_size') || 'Choose size'}</div>`;

    const name = escapeHtml(getLocalized('name') || p.name);
    const descriptionHtml = formatParagraphs(getLocalized('description') || p.description || '');

    const lang = window.currentLang || 'en';
    const translationAvailable = (lang === 'en') || (lang === 'fr' && p.description_fr) || (lang === 'ar' && p.description_ar);
    const transNote = (!translationAvailable && lang !== 'en') ? `<div class="muted small" style="margin-top:8px;">${t('translate_unavailable')}</div>` : '';

    // language buttons
    const langButtons = `
      <div class="product__lang">
        <button class="langBtn" data-lang="en">EN</button>
        <button class="langBtn" data-lang="fr">FR</button>
        <button class="langBtn" data-lang="ar">AR</button>
      </div>
    `;

    target.innerHTML = `
      <div class="productDetail__wrap" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">
        <div class="productDetail__left">
          <img src="${escapeHtml(image)}" alt="${name}" class="productDetail__img" loading="lazy">
        </div>
        <div class="productDetail__right">
          ${langButtons}
          <div class="product__brand">${escapeHtml(p.brand)}</div>
          <h1 class="product__name">${name}</h1>
          <div class="product__meta"><span class="stars">${'★★★★★'.slice(0, Math.round(p.rating||4.5))}</span> <span class="muted small">(${p.reviews||0})</span></div>
          <div class="product__desc">${descriptionHtml}${transNote}</div>
          <div class="product__vars">
            ${variantsHtml}
            ${priceHtml}
          </div>
          <div class="product__actions" style="margin-top:10px; display:flex; gap:8px; align-items:center;">
            <button id="btnAddDetail" class="btn btn--primary">+ Add to bag</button>
            <a id="btnWhatsApp" class="btn btn--wa" target="_blank" rel="noopener" aria-label="${t('bn_whatsapp') || 'WhatsApp'}">${t('bn_whatsapp') || 'WhatsApp'}</a>
          </div>
        </div>
      </div>
    `;

    // wire language buttons
    target.querySelectorAll('.langBtn').forEach(b=>{
      b.classList.toggle('active', b.dataset.lang === (window.currentLang||'en'));
      b.addEventListener('click', ()=>{
        if (typeof applyI18n === 'function') applyI18n(b.dataset.lang);
        // UI will re-render via languagechange event
      });
    });

    // Wire up add button
    const btn = document.getElementById('btnAddDetail');
    btn.addEventListener('click', ()=>{
      const sel = document.getElementById('variant');
      const variant = sel ? sel.value : null;
      if (typeof addToCart === 'function'){
        addToCart(p, variant);
        if (typeof openDrawer === 'function' && typeof cartDrawer !== 'undefined') openDrawer(cartDrawer);
        btn.textContent = 'Added ✓';
        setTimeout(()=>btn.textContent = '+ Add to bag', 1500);
      } else {
        const key = variant ? `${p.id}::${variant}` : p.id;
        const cart = JSON.parse(localStorage.getItem('ipordise_cart')||'[]');
        const item = cart.find(i=>i.key===key);
        if (item) item.qty += 1; else cart.push({ key, id:p.id, variant: variant || null, qty:1 });
        localStorage.setItem('ipordise_cart', JSON.stringify(cart));
        btn.textContent = 'Added ✓';
        setTimeout(()=>btn.textContent = '+ Add to bag', 1500);
      }
    });

    // WhatsApp helper: build url and set href
    function updateWhatsAppLink(){
      const btnWa = document.getElementById('btnWhatsApp');
      if (!btnWa) return;
      const sel = document.getElementById('variant');
      const size = sel ? sel.value : (p.variants && p.variants.length ? p.variants[0].size : '');
      const prodName = getLocalized('name') || p.name;
      const template = (typeof t === 'function') ? t('wa_prefill') || '' : '';
      const message = (template || "Hello, I'm interested in this product: {name} • Size: {size}").replace('{name}', prodName).replace('{size}', size);
      const phone = (typeof WHATSAPP_PHONE_INTL !== 'undefined') ? WHATSAPP_PHONE_INTL : '';
      const url = phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : `https://wa.me/?text=${encodeURIComponent(message)}`;
      btnWa.href = url;
    }

    // generate link initially and when variant changes
    updateWhatsAppLink();
    const variantSelect = document.getElementById('variant');
    if (variantSelect){
      variantSelect.addEventListener('change', updateWhatsAppLink);
    }

  }

  // React to language changes
  document.addEventListener('languagechange', ()=>{ renderProduct(); });

  fetch('products.json', {cache: 'no-store'}).then(r=>r.json()).then(list=>{
    productData = (list||[]).find(x=>x.id===id);
    if (!productData) { target.innerHTML = `<div class="muted">Product not found. <a href="index.html">Back to shop</a></div>`; return; }
    renderProduct();
  }).catch(err=>{ console.error(err); target.innerHTML = `<div class="muted">Failed to load product. <a href="index.html">Back</a></div>`; });
})();