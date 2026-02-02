document.addEventListener('DOMContentLoaded', () => {
  const detailEl = document.getElementById('productDetail');
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const preferredSize = (params.get('size') || '').toLowerCase();

  const t = (en, fr, ar) => {
    try{
      const lang = (window.currentLang || 'en').toLowerCase();
      if (lang === 'fr') return fr ?? en;
      if (lang === 'ar') return ar ?? en;
      return en;
    }catch(e){ return en; }
  };

  const money = (amount) => {
    if (typeof window.formatMoney === 'function') return window.formatMoney(amount);
    // Fallback MAD formatting
    try{
      const n = Number(amount || 0);
      const lang = (window.currentLang || 'en').toLowerCase();
      if(lang === 'ar') return new Intl.NumberFormat('ar-MA', { style:'currency', currency:'MAD' }).format(n);
      return new Intl.NumberFormat('fr-MA').format(n) + " DH";
    }catch(e){
      return `${amount} DH`;
    }
  };

  const escapeHtml = (s) => String(s ?? '').replace(/[&<>"']/g, (c)=>({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));

  const findVariant = (product) => {
    const variants = Array.isArray(product?.variants) ? product.variants : [];
    if (!variants.length) return { size: null, price: product?.price ?? 0 };
    if (preferredSize){
      const v = variants.find(v => String(v.size).toLowerCase() === preferredSize);
      if (v) return v;
    }
    return variants[0];
  };

  const makeWhatsAppLink = (product, variant) => {
    // Ensure we have a phone number, fallback if needed
    const phone = window.WHATSAPP_PHONE_INTL || '212663750210';
    const size = variant?.size ? ` (${variant.size})` : '';
    const price = variant?.price != null ? ` - ${money(variant.price)}` : '';
    const url = window.location.href;
    
    // Improved message format with clear product details
    const msg = t(
      `Hello IPORDISE PARFUM 👋\n\nI am interested in this product and would like to order:\n\n✨ ${product.name}\n📏 Size: ${variant?.size || 'Standard'}\n💰 Price: ${money(variant?.price || product.price)}\n\nLink: ${url}\n\nPlease confirm availability.`,
      `Bonjour IPORDISE PARFUM 👋\n\nJe suis intéressé par ce produit et je souhaite commander :\n\n✨ ${product.name}\n📏 Taille : ${variant?.size || 'Standard'}\n💰 Prix : ${money(variant?.price || product.price)}\n\nLien : ${url}\n\nMerci de confirmer la disponibilité.`,
      `السلام عليكم IPORDISE PARFUM 👋\n\nمهتم بهذا المنتج وبغيت نطلب:\n\n✨ ${product.name}\n📏 الحجم: ${variant?.size || 'عادي'}\n💰 الثمن: ${money(variant?.price || product.price)}\n\nالرابط: ${url}\n\nواش متوفر؟`
    );
    
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  const render = (product) => {
    if (!product){
      detailEl.innerHTML = `
        <div class="card" style="padding:18px">
          <h2 style="margin:0 0 8px">${escapeHtml(t('Product not found','Produit introuvable','المنتج غير موجود'))}</h2>
          <p class="muted" style="margin:0">${escapeHtml(t('Please go back and try another item.','Retournez et essayez un autre produit.','رجع وحاول منتج آخر.'))}</p>
          <div style="margin-top:14px">
            <a class="btn btn-outline" href="index.html">${escapeHtml(t('Back to shop','Retour à la boutique','رجوع للمتجر'))}</a>
          </div>
        </div>`;
      return;
    }

    let selected = findVariant(product);

    const desc = (()=>{
      const lang = (window.currentLang || 'en').toLowerCase();
      if (lang === 'fr' && product.description_fr) return product.description_fr;
      if (lang === 'ar' && product.description_ar) return product.description_ar;
      return product.description || '';
    })();

    const variants = Array.isArray(product.variants) ? product.variants : [];
    const sizesHtml = variants.length ? `
      <div class="pd-block">
        <div class="pd-label">${escapeHtml(t('Choose size','Choisir la taille','اختر الحجم'))}</div>
        <div class="size-chips" id="sizeChips">
          ${variants.map(v => {
            const active = (v.size === selected.size) ? 'active' : '';
            return `<button class="size-chip ${active}" type="button" data-size="${escapeHtml(v.size)}" data-price="${escapeHtml(v.price)}">${escapeHtml(v.size)}</button>`;
          }).join('')}
        </div>
      </div>
    ` : '';

    const accordsHtml = product.main_accords ? `
      <div class="pd-block">
        <div class="pd-label">${escapeHtml(t('Main accords','Accords principaux','المكونات الرئيسية'))}</div>
        <div class="pd-accords">
          ${Object.entries(product.main_accords).sort((a,b) => b[1] - a[1]).map(([k,v]) => `
            <div class="pd-accord">
              <div class="pd-accord__label">${escapeHtml(k)}</div>
              <div class="pd-accord__bar">
                <div class="pd-accord__fill" style="width:${v}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    const notesHtml = product?.notes ? `
      <div class="pd-block">
        <div class="pd-label">${escapeHtml(t('Fragrance notes','Notes olfactives','مكونات العطر'))}</div>
        <div class="pd-notes">
          ${(Array.isArray(product.notes) ? product.notes : Object.values(product.notes)).map(note => `
            <div class="pd-note">
              <div class="pd-note__v">${escapeHtml(note)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    detailEl.innerHTML = `
      <nav class="breadcrumb">
        <a href="index.html#best" aria-label="Back">
          <span>←</span>
          <span>${escapeHtml(t('Shop','Boutique','المتجر'))}</span>
        </a>
        <span class="muted" style="font-weight:700">/</span>
        <span class="muted" style="font-weight:800">${escapeHtml(product.brand || '')}</span>
      </nav>

      <section class="pd">
        <div class="pd-media card">
          <img class="pd-img" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy">
        </div>

        <div class="pd-info">
          <div class="pd-head card">
            <div class="pd-brand">${escapeHtml(product.brand || '')}</div>
            <h1 class="pd-title">${escapeHtml(product.name || '')}</h1>

            <div class="pd-price-row">
              <div class="pd-price">
                <span class="pd-price__label">${escapeHtml(t('Price','Prix','الثمن'))}</span>
                <span class="pd-price__value" id="priceValue">${escapeHtml(money(selected?.price ?? 0))}</span>
                ${selected?.size ? `<span class="pd-price__unit">• ${escapeHtml(selected.size)}</span>` : ''}
              </div>

              <div class="pd-actions">
                <button id="btnFavLocal" class="btn btn-outline" type="button">♡ ${escapeHtml(t('Favorite','Favori','مفضل'))}</button>
                <a id="btnWA" class="btn btn-primary" target="_blank" rel="noopener">WhatsApp</a>
              </div>
            </div>

            ${sizesHtml}

            <div class="pd-qty-row">
              <div class="qty">
                <button id="qtyMinus" type="button" aria-label="minus">−</button>
                <input id="qtyInput" value="1" inputmode="numeric" />
                <button id="qtyPlus" type="button" aria-label="plus">+</button>
              </div>

              <button id="btnAddToCart" class="btn btn-primary" type="button">
                ${escapeHtml(t('Add to cart','Ajouter au panier','أضف للسلة'))}
              </button>
            </div>

            <p class="pd-desc">${escapeHtml(desc)}</p>
          </div>

          ${accordsHtml}
          ${notesHtml}
        </div>
      </section>
    `;

    // --- behaviors
    const priceEl = document.getElementById('priceValue');
    const chips = detailEl.querySelectorAll('.size-chip');
    const waBtn = document.getElementById('btnWA');
    const favBtn = document.getElementById('btnFavLocal');

    const setWA = () => { waBtn.href = makeWhatsAppLink(product, selected); };
    setWA();

    const setPrice = () => {
      if (priceEl) priceEl.textContent = money(selected?.price ?? 0);
      // update unit next to price
      const unit = detailEl.querySelector('.pd-price__unit');
      if (unit) unit.textContent = selected?.size ? `• ${selected.size}` : '';
      setWA();
    };

    chips.forEach(btn => {
      btn.addEventListener('click', () => {
        chips.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selected = { size: btn.dataset.size, price: Number(btn.dataset.price) };
        // keep url updated (nice UX)
        try{
          const u = new URL(window.location.href);
          u.searchParams.set('size', selected.size);
          window.history.replaceState({}, '', u.toString());
        }catch(e){}
        setPrice();
      });
    });

    // qty controls
    const qInput = document.getElementById('qtyInput');
    const getQty = () => {
      const n = parseInt((qInput?.value || '1').toString().replace(/\D/g,''), 10);
      return Number.isFinite(n) && n > 0 ? n : 1;
    };
    const setQty = (v) => { if (qInput) qInput.value = String(v); };

    document.getElementById('qtyMinus')?.addEventListener('click', () => setQty(Math.max(1, getQty()-1)));
    document.getElementById('qtyPlus')?.addEventListener('click', () => setQty(getQty()+1));
    qInput?.addEventListener('input', () => setQty(getQty()));

    // add to cart
    document.getElementById('btnAddToCart')?.addEventListener('click', () => {
      const qty = getQty();
      if (typeof window.addToCart !== 'function'){
        alert(t('Cart function not found.','Fonction panier introuvable.','ميزة السلة غير موجودة.'));
        return;
      }
      for (let i=0;i<qty;i++) window.addToCart(product, selected?.size || null);
    });

    // local wishlist toggle (safe even if global wishlist exists)
    const WL_KEY = 'ipordise_wishlist';
    const getWL = () => {
      try{ return JSON.parse(localStorage.getItem(WL_KEY) || '[]'); }catch(e){ return []; }
    };
    const setWL = (arr) => localStorage.setItem(WL_KEY, JSON.stringify(arr));

    const refreshFav = () => {
      const wl = getWL();
      const on = wl.includes(product.id);
      favBtn.textContent = on ? `♥ ${t('Saved','Enregistré','محفوظ')}` : `♡ ${t('Favorite','Favori','مفضل')}`;
      favBtn.classList.toggle('btn-primary', on);
      favBtn.classList.toggle('btn-outline', !on);
    };

    favBtn?.addEventListener('click', () => {
      const wl = getWL();
      const i = wl.indexOf(product.id);
      if (i >= 0) wl.splice(i,1); else wl.push(product.id);
      setWL(wl);
      refreshFav();
      // if your global fav drawer exists, keep it in sync
      try{ if (typeof window.updateFavUI === 'function') window.updateFavUI(); }catch(e){}
    });
    refreshFav();
  };

  if (!productId){
    detailEl.innerHTML = `
      <div class="card" style="padding:18px">
        <h2 style="margin:0 0 8px">${t('Missing product id','ID produit manquant','معرّف المنتج ناقص')}</h2>
        <a class="btn btn-outline" href="index.html">${t('Back to shop','Retour à la boutique','رجوع للمتجر')}</a>
      </div>`;
    return;
  }

  fetch('products.json')
    .then(r => r.json())
    .then(list => render(list.find(p => String(p.id) === String(productId))))
    .catch(err => {
      console.error(err);
      detailEl.innerHTML = `
        <div class="card" style="padding:18px">
          <h2 style="margin:0 0 8px">${escapeHtml(t('Could not load products','Impossible de charger les produits','تعذر تحميل المنتجات'))}</h2>
          <p class="muted" style="margin:0">${escapeHtml(t('Please check that products.json is in the same folder.','Vérifiez que products.json est dans le même dossier.','تأكد أن products.json في نفس المجلد.'))}</p>
        </div>`;
    });
});
