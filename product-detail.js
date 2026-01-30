/* Product Detail Page Logic (clean JS)
   Fixes: previous file was corrupted by pasted CSS (causing JS syntax errors).
   Features: size selection, correct price, quantity controls, add-to-cart integration.
*/

(() => {
  'use strict';

  const readParams = () => new URLSearchParams(window.location.search);
  const getParam = (k) => readParams().get(k);

  const setParam = (k, v) => {
    const p = readParams();
    const hasValue = v !== null && v !== undefined && String(v).trim() !== '';
    if (!hasValue) p.delete(k);
    else p.set(k, String(v));
    const q = p.toString();
    const url = q ? `${window.location.pathname}?${q}` : window.location.pathname;
    window.history.replaceState(null, '', url);
  };

  const escapeHtml = (str) => {
    if (typeof window.escapeHtml === 'function') return window.escapeHtml(str);
    return String(str ?? '').replace(/[&<>"']/g, s => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[s]));
  };

  const formatMoney = (n) => {
    if (typeof window.formatMoney === 'function') return window.formatMoney(n);
    const num = Number(n);
    if (!Number.isFinite(num)) return '—';
    return `${num} MAD`;
  };

  const getPrice = (product, size) => {
    if (typeof window.getProductPrice === 'function') return window.getProductPrice(product, size || null);
    const variants = Array.isArray(product?.variants) ? product.variants : [];
    const v = variants.find(x => String(x?.size || '').trim() === String(size || '').trim()) || variants[0];
    return v ? Number(v.price) : NaN;
  };

  async function loadProductsFallback() {
    const res = await fetch('products.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to load products.json (${res.status})`);
    return await res.json();
  }

  function pickDefaultSize(product, requestedSize) {
    const variants = Array.isArray(product?.variants) ? product.variants : [];
    const sizes = variants.map(v => String(v?.size || '')).filter(Boolean);
    if (!sizes.length) return null;

    const req = String(requestedSize || '').trim();
    if (req && sizes.includes(req)) return req;

    if (sizes.includes('10ml')) return '10ml';
    return sizes[0];
  }

  function resolveDescription(product) {
    const lang = (document.documentElement.lang || 'en').toLowerCase();
    const key = `description_${lang}`;
    return product?.[key] || product?.description || '';
  }

  function renderNotFound() {
    const el = document.getElementById('productDetail');
    if (!el) return;
    el.innerHTML = `
      <div class="text-center" style="padding: 40px 0;">
        <p style="margin: 0 0 10px;">Product not found.</p>
        <a class="btn btn--ghost" href="index.html">Back to home</a>
      </div>
    `;
    document.title = 'Product Not Found - IPORDISE PARFUM';
  }

  function renderProduct(product) {
    const container = document.getElementById('productDetail');
    if (!container) return;

    const variants = Array.isArray(product?.variants) ? product.variants : [];
    const sizes = variants.map(v => String(v?.size || '')).filter(Boolean);
    const selectedSize = pickDefaultSize(product, getParam('size'));
    const price = sizes.length ? getPrice(product, selectedSize) : NaN;

    const desc = resolveDescription(product);
    const safeDesc = escapeHtml(desc).replace(/\n/g, '<br>');

    document.title = `${product?.name || 'Product'} - IPORDISE PARFUM`;

    const sizeButtons = sizes.length ? `
      <div style="margin: 14px 0 6px;">
        <div class="muted small" style="margin-bottom: 10px;">${escapeHtml(document.documentElement.lang === 'ar' ? 'الحجم' : (document.documentElement.lang === 'fr' ? 'Taille' : 'Size'))}</div>
        <div class="flashCard__sizes" role="radiogroup" aria-label="Choose size" id="pdSizes">
          ${sizes.map(s => {
            const active = (s === selectedSize) ? 'active' : '';
            const checked = (s === selectedSize) ? 'true' : 'false';
            return `<button class="flashSize ${active}" type="button" data-pd-size="${escapeHtml(s)}" role="radio" aria-checked="${checked}">${escapeHtml(s)}</button>`;
          }).join('')}
        </div>
      </div>
    ` : '';

    container.innerHTML = `
      <div class="product-detail-layout">
        <div class="product-detail__image-container">
          <img src="${escapeHtml(product?.image || '')}" alt="${escapeHtml(product?.name || '')}" class="product-detail__image">
        </div>

        <div class="product-detail__info">
          <p class="product-detail__brand">${escapeHtml(product?.brand || '')}</p>
          <h1 class="product-detail__name">${escapeHtml(product?.name || '')}</h1>

          <p class="product-detail__price" id="pdPrice">
            ${Number.isFinite(price) ? formatMoney(price) : (variants.length ? formatMoney(variants[0].price) : 'Price not available')}
            ${selectedSize ? `<span class="product-detail__size">/ ${escapeHtml(selectedSize)}</span>` : ''}
          </p>

          ${sizeButtons}

          <div class="product-detail__description">
            ${safeDesc}
          </div>

          <div class="product-detail__actions">
            <div class="product-detail__quantity">
              <label for="pdQuantity" class="visually-hidden">Quantity</label>
              <button class="quantity-btn" id="pdDec" type="button" aria-label="Decrease quantity">-</button>
              <input type="number" id="pdQuantity" value="1" min="1" class="quantity-input" inputmode="numeric">
              <button class="quantity-btn" id="pdInc" type="button" aria-label="Increase quantity">+</button>
            </div>
            <button class="btn btn--primary btn--full add-to-cart-btn" id="pdAdd" type="button">
              ${escapeHtml((window.t && typeof window.t === 'function' && window.t('add_to_cart')) ? window.t('add_to_cart') : (document.documentElement.lang === 'fr' ? 'Ajouter au panier' : (document.documentElement.lang === 'ar' ? 'زيد للسلة' : 'Add to cart')))}
            </button>
          </div>

          <div class="product-detail__meta">
            ${product?.category ? `<p><strong>Category:</strong> ${escapeHtml(product.category)}</p>` : ''}
            ${product?.tag ? `<p><strong>Tag:</strong> ${escapeHtml(product.tag)}</p>` : ''}
          </div>
        </div>
      </div>
    `;

    bindInteractions(product, selectedSize, sizes);
  }

  function bindInteractions(product, initialSize, sizes) {
    let selectedSize = initialSize;

    const qtyInput = document.getElementById('pdQuantity');
    const inc = document.getElementById('pdInc');
    const dec = document.getElementById('pdDec');
    const addBtn = document.getElementById('pdAdd');
    const priceEl = document.getElementById('pdPrice');
    const sizesWrap = document.getElementById('pdSizes');

    const clampQty = () => {
      if (!qtyInput) return 1;
      let q = parseInt(qtyInput.value, 10);
      if (!Number.isFinite(q) || q < 1) q = 1;
      qtyInput.value = String(q);
      return q;
    };

    inc?.addEventListener('click', () => {
      if (!qtyInput) return;
      const q = clampQty();
      qtyInput.value = String(q + 1);
    });

    dec?.addEventListener('click', () => {
      if (!qtyInput) return;
      const q = clampQty();
      qtyInput.value = String(Math.max(1, q - 1));
    });

    qtyInput?.addEventListener('change', clampQty);
    qtyInput?.addEventListener('input', () => {
      if (qtyInput.value.trim() === '') return;
      clampQty();
    });

    if (sizesWrap && sizes.length) {
      sizesWrap.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-pd-size]');
        if (!btn) return;
        const size = btn.getAttribute('data-pd-size');
        if (!size) return;
        selectedSize = size;

        sizesWrap.querySelectorAll('.flashSize').forEach(b => {
          const isOn = b.getAttribute('data-pd-size') === size;
          b.classList.toggle('active', isOn);
          b.setAttribute('aria-checked', isOn ? 'true' : 'false');
        });

        const newPrice = getPrice(product, selectedSize);
        if (priceEl) {
          priceEl.innerHTML = `
            ${Number.isFinite(newPrice) ? formatMoney(newPrice) : 'Price not available'}
            <span class="product-detail__size">/ ${escapeHtml(selectedSize)}</span>
          `;
        }

        setParam('size', selectedSize);
      });
    }

    addBtn?.addEventListener('click', () => {
      const qty = clampQty();

      if (Array.isArray(product?.variants) && product.variants.length && !selectedSize) {
        selectedSize = String(product.variants[0]?.size || '');
      }

      if (typeof window.addToCart !== 'function') {
        alert('Cart is not ready. Please refresh the page.');
        return;
      }

      for (let i = 0; i < qty; i += 1) {
        window.addToCart(product, selectedSize || null);
      }

      if (qtyInput) qtyInput.value = '1';
    });
  }

  async function init() {
    const productId = getParam('id');
    if (!productId) {
      renderNotFound();
      return;
    }

    try {
      let products = Array.isArray(window.PRODUCTS) && window.PRODUCTS.length ? window.PRODUCTS : null;

      if (!products) {
        for (let i = 0; i < 30; i += 1) {
          await new Promise(r => setTimeout(r, 50));
          if (Array.isArray(window.PRODUCTS) && window.PRODUCTS.length) {
            products = window.PRODUCTS;
            break;
          }
        }
      }

      if (!products) products = await loadProductsFallback();

      const product = products.find(p => String(p?.id) === String(productId));
      if (!product) {
        renderNotFound();
        return;
      }

      const picked = pickDefaultSize(product, getParam('size'));
      if (picked && getParam('size') !== picked) setParam('size', picked);

      renderProduct(product);
    } catch (err) {
      console.error('Product detail error:', err);
      renderNotFound();
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
