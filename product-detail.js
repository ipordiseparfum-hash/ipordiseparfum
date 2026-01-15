(function(){
  function q(name){ return new URLSearchParams(location.search).get(name); }
  function escapeHtml(str){
    return String(str||"").replace(/[&<>'"]/g, function(s){
      return ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#039;","\"":"&quot;"}[s]);
    });
  }
  function formatMoney(amount){
    const lang = window.currentLang || "en";
    try{
      return new Intl.NumberFormat(
        lang === "ar" ? "ar-MA" : (lang === "fr" ? "fr-MA" : "en-US"),
        { style:"currency", currency:"MAD", maximumFractionDigits: 0 }
      ).format(amount);
    }catch(e){
      return `${amount} MAD`;
    }
  }
  function formatParagraphs(text){
    return (text||"").split("\n").filter(Boolean).map(t=>`<p>${escapeHtml(t)}</p>`).join("");
  }

  const id = q("id");
  const target = document.getElementById("productDetail");
  if (!target) return;

  if (!id){
    target.innerHTML = `<div class="muted" style="padding:40px 0; text-align:center;">
      Product not specified. <a href="index.html">Back to shop</a>
    </div>`;
    return;
  }

  let productData = null;
  let selectedSize = null;

  function getLocalized(field){
    const lang = window.currentLang || "en";
    if (!productData) return "";
    if (lang === "fr" && productData[`${field}_fr`]) return productData[`${field}_fr`];
    if (lang === "ar" && productData[`${field}_ar`]) return productData[`${field}_ar`];
    return productData[field] || "";
  }

  function getVariantPrice(size){
    if (!productData) return 0;
    const vars = productData.variants || [];
    const v = vars.find(x => x.size === size);
    return v ? (v.price || 0) : (productData.price || 0);
  }

  function defaultSize(){
    const vars = productData?.variants || [];
    if (!vars.length) return null;
    // Prefer 20ml if exists (best choice), else first variant
    const best = vars.find(v => v.size === "20ml");
    return (best ? best.size : vars[0].size);
  }

  function buildWhatsAppHref(){
    const phone = (typeof WHATSAPP_PHONE_INTL !== "undefined") ? WHATSAPP_PHONE_INTL : "";
    const size = selectedSize || "";
    const name = getLocalized("name") || productData?.name || "";
    const template = (typeof t === "function" && t("wa_prefill")) ? t("wa_prefill") : "Hello, I'm interested in this product: {name} • Size: {size}";
    const message = template.replace("{name}", name).replace("{size}", size);
    return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : `https://wa.me/?text=${encodeURIComponent(message)}`;
  }

  function render(){
    const p = productData;
    if (!p) return;

    const lang = window.currentLang || "en";
    const name = escapeHtml(getLocalized("name") || p.name);
    const brand = escapeHtml(p.brand || "");
    const img = escapeHtml(p.image || "https://raw.githubusercontent.com/ipordiseparfum-hash/ipordiseparfum/main/logo.jpeg");
    const descHtml = formatParagraphs(getLocalized("description") || p.description || "");

    const vars = p.variants || [];
    if (!selectedSize) selectedSize = defaultSize();

    const chips = vars.length ? `
      <div class="product__vars">
        <div class="muted small" style="font-weight:800; margin-bottom:6px;">${escapeHtml((typeof t === "function" && t("choose_size")) ? t("choose_size") : "Choose size")}</div>
        <div class="size-chips" role="radiogroup" aria-label="Choose size">
          ${vars.map(v=>{
            const active = (v.size === selectedSize) ? "active" : "";
            const badge = (v.size === "20ml") ? `<span style="margin-left:8px; font-weight:900; color:var(--brand);">★</span>` : "";
            return `<button class="size-chip ${active}" type="button" data-size="${escapeHtml(v.size)}" role="radio" aria-checked="${v.size===selectedSize}">
              ${escapeHtml(v.size)}${badge}
            </button>`;
          }).join("")}
        </div>
        <div class="product__price" id="productPrice" style="margin-top:12px; font-size:22px; font-weight:900;">
          ${formatMoney(getVariantPrice(selectedSize))}
        </div>
        <div class="muted small" style="margin-top:6px;">
          ${lang === "ar" ? "عطر أصلي • تقسيم احترافي ونظيف" : (lang === "fr" ? "Parfum original • Décant professionnel" : "Original fragrance • Professional decanting")}
        </div>
      </div>
    ` : `<div class="product__price" id="productPrice" style="font-size:22px; font-weight:900;">${formatMoney(p.price||0)}</div>`;

    const backLabel = (lang === "ar") ? "الرجوع للرئيسية" : (lang === "fr" ? "Retour à l'accueil" : "Back to home");

    target.innerHTML = `
      <div class="productDetail__wrap" dir="${lang === "ar" ? "rtl" : "ltr"}">
        <div class="breadcrumb">
          <a href="index.html">← ${escapeHtml(backLabel)}</a>
        </div>

        <div class="productDetail__left">
          <img src="${img}" alt="${name}" class="productDetail__img" loading="lazy">
        </div>

        <div class="productDetail__right">
          <div class="product__brand">${brand}</div>
          <h1 class="product__name">${name}</h1>
          <div class="product__meta">
            <span class="stars">${"★★★★★".slice(0, Math.round(p.rating||4.5))}</span>
            <span class="muted small">(${p.reviews||0})</span>
          </div>

          <div class="product__desc">${descHtml}</div>

          ${chips}

          <div class="product__actions" style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
            <button id="btnAddDetail" class="btn btn--primary">+ ${(typeof t==="function" && t("bn_cart")) ? t("bn_cart") : "Add to cart"}</button>
            <a id="btnWhatsApp" class="btn btn--wa" target="_blank" rel="noopener">${(typeof t==="function" && t("bn_whatsapp")) ? t("bn_whatsapp") : "WhatsApp"}</a>
          </div>

          <div class="muted small" style="margin-top:10px;">
            ${lang === "ar" ? "معلومة: اختيار الحجم يغيّر السعر تلقائياً." : (lang === "fr" ? "Info : le prix change selon la taille." : "Tip: price updates based on the size you select.")}
          </div>
        </div>
      </div>
    `;

    // Wire chips
    target.querySelectorAll(".size-chip").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        selectedSize = btn.dataset.size;
        // update UI states
        target.querySelectorAll(".size-chip").forEach(b=>{
          const on = (b.dataset.size === selectedSize);
          b.classList.toggle("active", on);
          b.setAttribute("aria-checked", on ? "true" : "false");
        });
        const priceEl = document.getElementById("productPrice");
        if (priceEl) priceEl.textContent = formatMoney(getVariantPrice(selectedSize));
        const wa = document.getElementById("btnWhatsApp");
        if (wa) wa.href = buildWhatsAppHref();
      });
    });

    // WhatsApp href
    const wa = document.getElementById("btnWhatsApp");
    if (wa) wa.href = buildWhatsAppHref();

    // Add to cart
    const btnAdd = document.getElementById("btnAddDetail");
    if (btnAdd){
      const originalText = btnAdd.innerHTML;
      btnAdd.addEventListener("click", ()=>{
        if (typeof addToCart === "function") {
          addToCart(p, selectedSize || null);
          
          // Open cart drawer to show the item was added
          if (typeof openDrawer === "function" && typeof cartDrawer !== "undefined") {
            openDrawer(cartDrawer);
          }

          // Provide visual feedback on the button
          btnAdd.textContent = 'Added ✓';
          setTimeout(() => { btnAdd.innerHTML = originalText; }, 1500);

        } else { console.warn("addToCart is not available"); }
      });
    }
  }

  // React to language changes from global script (dispatches 'languagechange')
  document.addEventListener("languagechange", ()=>{ render(); });

  // Keep certain product prices in sync (even if products.json is outdated somewhere)
  const PRICE_OVERRIDES = {
    p16: { '10ml': 90, '20ml': 180, '30ml': 270 },
    p21: { '10ml': 90, '20ml': 170, '30ml': 255 }
  };
  function applyOverrides(p){
    if (!p || !p.id) return;
    const ov = PRICE_OVERRIDES[String(p.id)];
    if (!ov) return;
    const order = ['10ml','20ml','30ml'];
    const updated = order.filter(s => ov[s] != null).map(s => ({ size: s, price: ov[s] }));
    const existing = Array.isArray(p.variants) ? p.variants : [];
    const extras = existing.filter(v => v && v.size && ov[String(v.size)] == null);
    p.variants = [...updated, ...extras];
    if (ov['10ml'] != null) p.price = ov['10ml'];
  }

  fetch("products.json", { cache:"no-store" })
    .then(r=>r.json())
    .then(list=>{
      productData = (list||[]).find(x=>String(x.id)===String(id));
      if (!productData){
        target.innerHTML = `<div class="muted" style="padding:40px 0; text-align:center;">
          Product not found. <a href="index.html">Back to shop</a>
        </div>`;
        return;
      }
      applyOverrides(productData);
      try{ window.addRecentlyViewed?.(productData.id); }catch{}
      render();
    })
    .catch(err=>{
      console.error(err);
      target.innerHTML = `<div class="muted" style="padding:40px 0; text-align:center;">
        Failed to load product. <a href="index.html">Back</a>
      </div>`;
    });
})();
