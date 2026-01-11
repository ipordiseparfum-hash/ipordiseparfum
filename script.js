// IPORDISE PARFUM - Simple Shop UI (no backend)
// Features: product render, search, category filter, sort, cart drawer, WhatsApp checkout
// + Language (EN/FR/AR), Fragrance Finder, Policies modal, Mobile bottom nav (Android/iOS), Chatbot UI

const WHATSAPP_PHONE_INTL = "212663750210"; // Morocco format for wa.me (remove 0)
const WHATSAPP_DISPLAY = "0663750210";
const STORE_EMAIL = "Ipordise@gmail.com";
const STORE_CURRENCY = "MAD";

// ---------- i18n ----------
const I18N = {
  en: {
    brand_tag: "Fragrance Boutique",
    topbar_text: "Free delivery in Morocco from 299 MAD • Pay on delivery available",
    topbar_link: "See deals",
    nav_categories: "Categories",
    nav_best: "Best Sellers",
    nav_new: "New Arrivals",
    nav_deals: "Deals",
    nav_brands: "Brands",
    nav_contact: "Contact",
    drawer_menu: "Menu",
    cat_all: "Shop All",
    cat_women: "Women's Fragrances",
    cat_men: "Men's Fragrances",
    cat_unisex: "Unisex Fragrances",
    cat_gift: "Gift Sets",
    cat_home: "Home Fragrance",
    cat_travel: "Travel Size",
    tile_women: "Women’s",
    tile_men: "Men’s",
    tile_unisex: "Unisex",
    search_ph: "Search perfumes, brands, notes...",
    hero_pill: "✨ Premium Moroccan Fragrances",
    hero_title: "Discover Your Signature Scent",
    hero_desc: "Curated perfumes inspired by Morocco's rich heritage. Authentic scents for women, men, and unisex — with express delivery across Morocco and 24/7 personalized support.",
    trust_auth: "100% Authentic",
    trust_delivery: "Free Delivery 299 MAD+",
    trust_support: "24/7 WhatsApp Support",
    cta_shop: "Shop Now",
    cta_best: "View Best Sellers",
    stat_customers: "Happy Customers",
    stat_rating: "Average Rating",
    stat_delivery: "Express Delivery",
    sec_categories_title: "Fragrance",
    sec_categories_desc: "Browse by category like on a big store — clean and easy.",
    sec_new_desc: "Freshly curated scents, just for you.",
    sec_best_title: "Best sellers",
    sec_best_desc: "Top-rated picks customers love.",
    sec_deals_kicker: "More to discover",
    sec_deals_title: "Fragrance deals for you",
    sec_deals_desc: "Save on selected fragrances. Limited offers updated weekly.",
    sec_deals_cta: "Shop deals",
    sec_brands_title: "Featured Brands",
    sec_brands_desc: "A clean brand row that looks premium on mobile.",
    sec_reviews_title: "Customer Reviews",
    sec_reviews_desc: "Sample reviews for layout preview — replace with real customer feedback when you have it.",
    review_1: "Fast delivery and the scent lasts all day. I’ll order again!",
    review_2: "Great packaging and helpful WhatsApp support. Very professional.",
    review_3: "Loved the recommendations — the perfume matches my style perfectly.",
    review_sample: "Sample",
    sec_contact_title: "Contact IPORDISE PARFUM",
    sec_contact_desc: "Need help choosing a fragrance? Tell us your favorite notes (vanilla, musk, fresh, floral…) and we’ll recommend the perfect match.",
    form_name: "Name",
    form_name_ph: "Your name",
    form_message: "Message",
    form_message_ph: "What kind of fragrance are you looking for?",
    form_send: "Send message",
    footer_shop: "Shop",
    footer_support: "Support",
    footer_legal: "Legal",
    footer_rights: "All rights reserved.",

    pol_terms: "Terms of Use",
    pol_privacy: "Privacy Policy",
    pol_shipping: "Shipping & Delivery",
    pol_returns: "Returns & Refunds",
    pol_cookies: "Cookies",

    sec_finder_title: "Fragrance Finder",
    sec_finder_desc: "Answer 3 quick questions and we’ll suggest scents that match your vibe.",
    finder_q1: "Who are you shopping for?",
    finder_q2: "Pick your mood",
    finder_q3: "How strong do you want it?",
    finder_mood_fresh: "Fresh",
    finder_mood_sweet: "Sweet",
    finder_mood_woody: "Woody",
    finder_mood_oriental: "Oriental",
    finder_int_light: "Light",
    finder_int_medium: "Medium",
    finder_int_strong: "Strong",
    finder_hint: "Choose options above to see suggestions.",
    finder_cta: "Browse best sellers",
    finder_wa: "Ask on WhatsApp",

    bn_home: "Home",
    bn_categories: "Categories",
    bn_search: "Search",
    bn_cart: "Cart",
    bn_whatsapp: "WhatsApp",
    wa_prefill: "Hello, I'm interested in this product: {name} • Size: {size}",

    chat_title: "Ipordise Assistant",
    chat_sub: "Quick help to choose a scent.",
    chat_quick_reco: "Recommend for me",
    chat_quick_best: "Best sellers",
    chat_quick_delivery: "Delivery",
    chat_quick_whatsapp: "WhatsApp order",
    chat_ph: "Type a message…",
    chat_note: "Tip: write notes you like (vanilla, musk, fresh…). For real orders, use WhatsApp.",
    chat_hi: "Hi 👋 Tell me what you like: vanilla / musk / fresh / floral / woody…",
    chat_generic_greeting: "Hello! How can I help you today?",
    chat_welcome: "You're welcome! Let me know if you need anything else.",
    chat_payment: "We offer cash on delivery. You pay when you receive your order.",
    chat_contact: `You can reach us on WhatsApp at ${WHATSAPP_DISPLAY} or by email at ${STORE_EMAIL}.`,
    contact_phone_label: "Phone / WhatsApp",
    contact_email_label: "Email",
    chat_attention_bubble: "👋 Hi! Need help choosing a perfume? Click here.",
    chat_men_suggestion: "Of course! Here are some popular fragrances for men:",
    chat_women_suggestion: "Of course! Here are some popular fragrances for women:",
    checkout_title: "Shipping Information",
    checkout_desc: "Please fill in your details. Your order will be confirmed on WhatsApp.",
    checkout_name_ph: "Your full name",
    checkout_phone_label: "Phone Number",
    checkout_phone_ph: "e.g., 0612345678",
    checkout_city: "City",
    checkout_city_ph: "e.g., Casablanca",
    checkout_address: "Address",
    checkout_address_ph: "Your full address for delivery",
    checkout_confirm: "Confirm Order on WhatsApp",
    cart_subtotal: "Subtotal",
    cart_delivery: "Delivery",
    cart_delivery_info: "Calculated on WhatsApp",
    translate_unavailable: "Translation not available; showing English.",
    choose_size: "Choose size"
  },

  fr: {
    brand_tag: "Boutique de parfums",
    topbar_text: "Livraison gratuite au Maroc dès 299 MAD • Paiement à la livraison disponible",
    topbar_link: "Voir les offres",
    nav_categories: "Catégories",
    nav_best: "Meilleures ventes",
    nav_new: "Nouveautés",
    nav_deals: "Promos",
    nav_brands: "Marques",
    nav_contact: "Contact",
    drawer_menu: "Menu",
    cat_all: "Tout voir",
    cat_women: "Parfums Femme",
    cat_men: "Parfums Homme",
    cat_unisex: "Parfums Unisex",
    cat_gift: "Coffrets Cadeaux",
    cat_home: "Parfums Maison",
    cat_travel: "Format Voyage",
    tile_women: "Femme",
    tile_men: "Homme",
    tile_unisex: "Unisex",
    search_ph: "Rechercher parfums, marques, notes…",
    hero_pill: "✨ Parfums marocains premium",
    hero_title: "Trouvez votre parfum signature",
    hero_desc: "Des parfums inspirés du patrimoine marocain. Pour femme, homme et unisex — avec livraison express au Maroc et support WhatsApp 24/7.",
    trust_auth: "100% Authentique",
    trust_delivery: "Livraison offerte dès 299 MAD+",
    trust_support: "Support WhatsApp 24/7",
    cta_shop: "Acheter",
    cta_best: "Voir les best-sellers",
    stat_customers: "Clients satisfaits",
    stat_rating: "Note moyenne",
    stat_delivery: "Livraison express",
    sec_categories_title: "Parfums",
    sec_categories_desc: "Parcourez par catégorie, simple et clair.",
    sec_new_desc: "Des parfums fraîchement sélectionnés, juste pour vous.",
    sec_best_title: "Meilleures ventes",
    sec_best_desc: "Les choix préférés de nos clients.",
    sec_deals_kicker: "À découvrir",
    sec_deals_title: "Des offres pour vous",
    sec_deals_desc: "Économisez sur une sélection. Offres mises à jour chaque semaine.",
    sec_deals_cta: "Voir les promos",
    sec_brands_title: "Marques en vedette",
    sec_brands_desc: "Une rangée de marques propre et premium.",
    sec_reviews_title: "Avis clients",
    sec_reviews_desc: "Avis d’exemple pour la mise en page — remplacez par de vrais avis quand vous en avez.",
    review_1: "Livraison rapide et le parfum tient toute la journée. Je recommande !",
    review_2: "Très bon packaging et support WhatsApp réactif. Professionnel.",
    review_3: "J’ai adoré les recommandations — parfait pour mon style.",
    review_sample: "Exemple",
    sec_contact_title: "Contacter IPORDISE PARFUM",
    sec_contact_desc: "Besoin d’aide pour choisir ? Dites-nous vos notes préférées (vanille, musc, frais, floral…) et on vous conseille.",
    form_name: "Nom",
    form_name_ph: "Votre nom",
    form_message: "Message",
    form_message_ph: "Quel type de parfum cherchez-vous ?",
    form_send: "Envoyer",
    footer_shop: "Boutique",
    footer_support: "Support",
    footer_legal: "Mentions",
    footer_rights: "Tous droits réservés.",

    pol_terms: "Conditions d’utilisation",
    pol_privacy: "Politique de confidentialité",
    pol_shipping: "Livraison",
    pol_returns: "Retours & remboursements",
    pol_cookies: "Cookies",

    sec_finder_title: "Fragrance Finder",
    sec_finder_desc: "Répondez à 3 questions et on vous suggère des parfums.",
    finder_q1: "Pour qui achetez-vous ?",
    finder_q2: "Choisissez votre mood",
    finder_q3: "Quelle intensité ?",
    finder_mood_fresh: "Frais",
    finder_mood_sweet: "Sucré",
    finder_mood_woody: "Boisé",
    finder_mood_oriental: "Oriental",
    finder_int_light: "Léger",
    finder_int_medium: "Moyen",
    finder_int_strong: "Fort",
    finder_hint: "Choisissez des options ci-dessus pour voir des suggestions.",
    finder_cta: "Voir les best-sellers",
    finder_wa: "Demander sur WhatsApp",

    bn_home: "Accueil",
    bn_categories: "Catégories",
    bn_search: "Recherche",
    bn_cart: "Panier",
    bn_whatsapp: "WhatsApp",
    wa_prefill: "Bonjour, je suis intéressé par ce produit : {name} • Taille : {size}",

    chat_title: "Assistant Ipordise",
    chat_sub: "Aide rapide pour choisir.",
    chat_quick_reco: "Me recommander",
    chat_quick_best: "Best-sellers",
    chat_quick_delivery: "Livraison",
    chat_quick_whatsapp: "Commander WhatsApp",
    chat_ph: "Écrire un message…",
    chat_note: "Astuce : écrivez les notes que vous aimez (vanille, musc, frais…). Pour commander, utilisez WhatsApp.",
    chat_hi: "Bonjour 👋 Dites-moi ce que vous aimez : vanille / musc / frais / floral / boisé…",
    chat_generic_greeting: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
    chat_welcome: "De rien ! N'hésitez pas si vous avez d'autres questions.",
    chat_payment: "Nous proposons le paiement à la livraison. Vous payez lorsque vous recevez votre commande.",
    chat_contact: `Vous pouvez nous joindre sur WhatsApp au ${WHATSAPP_DISPLAY} ou par email à ${STORE_EMAIL}.`,
    contact_phone_label: "Téléphone / WhatsApp",
    contact_email_label: "E-mail",
    chat_attention_bubble: "👋 Bonjour ! Besoin d’aide pour choisir un parfum ? Cliquez ici.",
    chat_men_suggestion: "Bien sûr ! Voici quelques parfums populaires pour homme :",
    chat_women_suggestion: "Bien sûr ! Voici quelques parfums populaires pour femme :",
    checkout_title: "Informations de livraison",
    checkout_desc: "Veuillez remplir vos informations. Votre commande sera confirmée sur WhatsApp.",
    checkout_name_ph: "Votre nom complet",
    checkout_phone_label: "Numéro de téléphone",
    checkout_phone_ph: "ex: 0612345678",
    checkout_city: "Ville",
    checkout_city_ph: "ex: Casablanca",
    checkout_address: "Adresse",
    checkout_address_ph: "Votre adresse complète pour la livraison",
    checkout_confirm: "Confirmer la commande sur WhatsApp",
    cart_subtotal: "Sous-total",
    cart_delivery: "Livraison",
    cart_delivery_info: "Calculé sur WhatsApp",
    translate_unavailable: "Traduction non disponible; affichage en anglais.",
    choose_size: "Choisir la taille"
  },

  ar: {
    brand_tag: "متجر العطور",
    topbar_text: "توصيل مجاني داخل المغرب ابتداءً من 299 درهم • الدفع عند الاستلام متوفر",
    topbar_link: "شوف العروض",
    nav_categories: "الأقسام",
    nav_best: "الأكثر مبيعاً",
    nav_new: "وصل جديد",
    nav_deals: "عروض",
    nav_brands: "الماركات",
    nav_contact: "تواصل معنا",
    drawer_menu: "القائمة",
    cat_all: "تسوق الكل",
    cat_women: "عطور نسائية",
    cat_men: "عطور رجالية",
    cat_unisex: "عطور يونيسكس",
    cat_gift: "باقات هدايا",
    cat_home: "عطور منزلية",
    cat_travel: "حجم السفر",
    tile_women: "نساء",
    tile_men: "رجال",
    tile_unisex: "يونيسكس",
    search_ph: "بحث عن العطور، الماركات، النوتات…",
    hero_pill: "✨ عطور مغربية فاخرة",
    hero_title: "اكتشف عطرك المميز",
    hero_desc: "عطور مستوحاة من تراث المغرب. للنساء والرجال واليونيسكس — مع توصيل سريع داخل المغرب ودعم واتساب 24/7.",
    trust_auth: "100% أصلي",
    trust_delivery: "توصيل مجاني 299+ درهم",
    trust_support: "دعم واتساب 24/7",
    cta_shop: "تسوق الآن",
    cta_best: "شاهد الأكثر مبيعاً",
    stat_customers: "زبناء سعداء",
    stat_rating: "معدل التقييم",
    stat_delivery: "توصيل سريع",
    sec_categories_title: "العطور",
    sec_categories_desc: "تصفح حسب الأقسام بطريقة واضحة وسهلة.",
    sec_new_desc: "عطور مختارة بعناية، خصيصاً لك.",
    sec_best_title: "الأكثر مبيعاً",
    sec_best_desc: "اختيارات محبوبة عند الزبناء.",
    sec_deals_kicker: "اكتشف المزيد",
    sec_deals_title: "عروض خاصة لك",
    sec_deals_desc: "تخفيضات على عطور مختارة. عروض تتجدد أسبوعياً.",
    sec_deals_cta: "تسوق العروض",
    sec_brands_title: "ماركات مختارة",
    sec_brands_desc: "صف ماركات أنيق ومناسب للموبايل.",
    sec_reviews_title: "آراء الزبناء",
    sec_reviews_desc: "هذه آراء تجريبية لعرض التصميم — عوّضها بآراء حقيقية لاحقاً.",
    review_1: "توصيل سريع وريحة كتدوم نهار كامل. غادي نعاود نطلب!",
    review_2: "تغليف زوين ودعم واتساب كيساعد بزاف. خدمة احترافية.",
    review_3: "عجباتني الاقتراحات — العطر جا مناسب لذوقي.",
    review_sample: "تجريبي",
    sec_contact_title: "تواصل مع IPORDISE PARFUM",
    sec_contact_desc: "باغي مساعدة باش تختار؟ قولينا النوتات اللي كتعجبك (فانيلا، مسك، فريش…) وغادي نقترحو عليك الأنسب.",
    form_name: "الاسم",
    form_name_ph: "سمّيتك",
    form_message: "الرسالة",
    form_message_ph: "شنو نوع العطر اللي كتقلب عليه؟",
    form_send: "إرسال",
    footer_shop: "المتجر",
    footer_support: "الدعم",
    footer_legal: "قانوني",
    footer_rights: "جميع الحقوق محفوظة.",

    pol_terms: "شروط الاستخدام",
    pol_privacy: "سياسة الخصوصية",
    pol_shipping: "الشحن والتوصيل",
    pol_returns: "الإرجاع والاسترجاع",
    pol_cookies: "الكوكيز",

    sec_finder_title: "مساعد اختيار العطر",
    sec_finder_desc: "جاوب على 3 أسئلة وغادي نقترحو عليك عطور مناسبة.",
    finder_q1: "لمن كتشري؟",
    finder_q2: "شنو المود ديالك؟",
    finder_q3: "باغي الريحة قوية شحال؟",
    finder_mood_fresh: "فريش",
    finder_mood_sweet: "حلو",
    finder_mood_woody: "خشبي",
    finder_mood_oriental: "شرقي",
    finder_int_light: "خفيف",
    finder_int_medium: "متوسط",
    finder_int_strong: "قوي",
    finder_hint: "اختار من فوق باش يبانوا الاقتراحات.",
    finder_cta: "شوف الأكثر مبيعاً",
    finder_wa: "سول فواتساب",

    bn_home: "الرئيسية",
    bn_categories: "الأقسام",
    bn_search: "بحث",
    bn_cart: "السلة",
    bn_whatsapp: "واتساب",
    wa_prefill: "مرحباً، أنا مهتم بهذا المنتج: {name} • الحجم: {size}",

    chat_title: "مساعد Ipordise",
    chat_sub: "مساعدة سريعة باش تختار.",
    chat_quick_reco: "اقترح عليا",
    chat_quick_best: "الأكثر مبيعاً",
    chat_quick_delivery: "التوصيل",
    chat_quick_whatsapp: "طلب عبر واتساب",
    chat_ph: "كتب رسالة…",
    chat_note: "نصيحة: كتب النوتات اللي كتعجبك (فانيلا، مسك، فريش…). باش تطلب فعلاً استعمل واتساب.",
    chat_hi: "مرحبا 👋 قول ليا شنو كتعجبك: فانيلا / مسك / فريش / فلورال / خشبي…",
    chat_generic_greeting: "مرحبا! كيفاش نقدر نساعدك اليوم؟",
    chat_welcome: "على الرحب والسعة! مرحبا بأي سؤال آخر.",
    chat_payment: "عندنا الدفع عند الاستلام. كتخلص حتى توصلك الطلبية.",
    chat_contact: `تقدر تواصل معانا على واتساب ${WHATSAPP_DISPLAY} أو بالإيميل ${STORE_EMAIL}.`,
    contact_phone_label: "الهاتف / واتساب",
    contact_email_label: "البريد الإلكتروني",
    chat_attention_bubble: "👋 مرحباً! محتاج مساعدة لاختيار عطر؟ اضغط هنا.",
    chat_men_suggestion: "أكيد! هادو بعض العطور الرجالية المحبوبة:",
    chat_women_suggestion: "أكيد! هادو بعض العطور النسائية المحبوبة:",
    checkout_title: "معلومات التوصيل",
    checkout_desc: "المرجو ملء معلوماتك. سيتم تأكيد طلبك على واتساب.",
    checkout_name_ph: "الاسم الكامل",
    checkout_phone_label: "رقم الهاتف",
    checkout_phone_ph: "مثال: 0612345678",
    checkout_city: "المدينة",
    checkout_city_ph: "مثال: الدار البيضاء",
    checkout_address: "العنوان",
    checkout_address_ph: "عنوانك الكامل للتوصيل",
    checkout_confirm: "تأكيد الطلب عبر واتساب",
    cart_subtotal: "المجموع",
    cart_delivery: "التوصيل",
    cart_delivery_info: "يُحسب عند تأكيد الطلب",
    translate_unavailable: "الترجمة غير متوفرة؛ يتم العرض بالإنجليزية.",
    choose_size: "اختيار الحجم"
  }
};

const DEFAULT_LANG = localStorage.getItem("ipordise_lang") || "en";
let currentLang = DEFAULT_LANG; window.currentLang = currentLang;

function t(key){
  const dict = I18N[currentLang] || I18N.en;
  return (dict && dict[key] != null) ? dict[key] : (I18N.en[key] ?? key);
}

function applyI18n(lang){
  currentLang = (I18N[lang] ? lang : "en");
  localStorage.setItem("ipordise_lang", currentLang);

  document.documentElement.lang = currentLang;
  document.documentElement.dir = (currentLang === "ar") ? "rtl" : "ltr";
  window.currentLang = currentLang;

  const label = document.getElementById("langLabel");
  if (label) label.textContent = currentLang.toUpperCase();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!key) return;
    el.setAttribute("placeholder", t(key));
  });

  // language menu state
  document.querySelectorAll(".langOption").forEach(btn => {
    const is = btn.dataset.setLang === currentLang;
    btn.classList.toggle("active", is);
    btn.setAttribute("aria-checked", is ? "true" : "false");
  });

  // dispatch a language change event for other modules to react
  try{ document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: currentLang } })); }catch(e){ /* noop */ }

  // refresh dynamic UI
  renderProducts();
  updateCartUI();
  renderFinder();
  if (chatHasStarted) seedChatIfEmpty();
} 

// ---------- Utilities ----------
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
function formatMoney(amount){
  try{
    return new Intl.NumberFormat(currentLang === "ar" ? "ar-MA" : (currentLang === "fr" ? "fr-MA" : "en-US"), {
      style: "currency",
      currency: STORE_CURRENCY,
      maximumFractionDigits: 0
    }).format(amount);
  }catch{
    return `${amount} ${STORE_CURRENCY}`;
  }
}

function clamp(n,min,max){ return Math.max(min, Math.min(max,n)); }

function isMobileOS(){
  const ua = navigator.userAgent || navigator.vendor || window.opera || "";
  if (/android/i.test(ua)) return true;
  if (/iPad|iPhone|iPod/.test(ua)) return true;
  if (navigator.platform === "MacIntel" && navigator.maxTouchPoints && navigator.maxTouchPoints > 1) return true; // iPadOS
  return false;
}

// ---------- Products ----------
let PRODUCTS = [];

async function loadProducts(){
  try{
    const res = await fetch("products.json", { cache:"no-store" });
    if (!res.ok) throw new Error("products.json not found");
    const data = await res.json();
    if (Array.isArray(data)) PRODUCTS = data;
  }catch(e){
    // fallback
    PRODUCTS = [
      { id:"p1", brand:"IPORDISE", name:"Vanilla Bloom Eau de Parfum", category:"women", price:299, rating:4.7, reviews:1852, tag:"Best Seller", notes:["vanilla","amber","sweet"] }
    ];
    console.warn("Using fallback products list", e);
  }
}

// ---------- State ----------
let state = {
  filter: "all",
  search: "",
  sort: "featured",
  cart: loadCart()
};

function loadCart(){
  try{
    return JSON.parse(localStorage.getItem("ipordise_cart") || "[]");
  }catch{
    return [];
  }
}
function saveCart(){
  localStorage.setItem("ipordise_cart", JSON.stringify(state.cart));
}

// ---------- DOM ----------
const elGrid = document.getElementById("productGrid");
const elSearch = document.getElementById("searchInput");
const elClear = document.getElementById("clearSearch");
const elSort = document.getElementById("sortSelect");

const menuDrawer = document.getElementById("menuDrawer");
const cartDrawer = document.getElementById("cartDrawer");

const btnMenu = document.getElementById("btnMenu");
const btnCart = document.getElementById("btnCart");
const cartItems = document.getElementById("cartItems");
const cartSubtotal = document.getElementById("cartSubtotal");
const elCartCount = document.getElementById("cartCount");
const btnCheckout = document.getElementById("btnCheckout");
const btnClearCart = document.getElementById("btnClearCart");
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

// language UI
const btnLang = document.getElementById("btnLang");
const langMenu = document.getElementById("langMenu");
const langWrap = btnLang?.closest(".lang");

// policy modal
const policyModal = document.getElementById("policyModal");
const policyTitle = document.getElementById("policyTitle");
const policyBody = document.getElementById("policyBody");

// checkout modal
const checkoutModal = document.getElementById("checkoutModal");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutSubtotal = document.getElementById("checkoutSubtotal");
const btnConfirmCheckout = document.getElementById("btnConfirmCheckout");

// finder
const finderResult = document.getElementById("finderResult");
const finderWhatsApp = document.getElementById("finderWhatsApp");

// chatbot
const chatbot = document.getElementById("chatbot");
const chatbotFab = document.getElementById("chatbotFab");
const chatbotClose = document.getElementById("chatbotClose");
const chatbotMsgs = document.getElementById("chatbotMsgs");
const chatbotForm = document.getElementById("chatbotForm");
const chatbotInput = document.getElementById("chatbotInput");
const chatbotQuick = document.getElementById("chatbotQuick");
let chatHasStarted = false;
const chatbotBadge = document.getElementById("chatbotBadge");
const chatbotAttention = document.getElementById("chatbotAttention");
const chatbotAttentionText = document.getElementById("chatbotAttentionText");
const chatbotAttentionClose = document.getElementById("chatbotAttentionClose");

// bottom nav
const bottomNav = document.getElementById("bottomNav");

// ---------- Drawers ----------
function openDrawer(drawer){
  if (!drawer) return;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden","false");
}
function closeDrawer(drawer){
  if (!drawer) return;
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden","true");
}

// ---------- Modals (Policy, Checkout) ----------
function openModal(modal){
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
}
function closeModal(modal){
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
}
function openCheckoutModal(){
  if (!checkoutModal || !state.cart.length) return;
  closeDrawer(cartDrawer);
  checkoutSubtotal.textContent = formatMoney(cartTotal());
  openModal(checkoutModal);
}

document.addEventListener("click", (e) => {
  const drawerClose = e.target.closest("[data-close-drawer]");
  if (drawerClose) closeDrawer(drawerClose.closest(".drawer"));

  const modalClose = e.target.closest("[data-close-modal]");
  if (modalClose) closeModal(modalClose.closest(".modal"));
});

// Menu button only on Android/iOS/iPad, hide for desktop web
if (isMobileOS()){
  document.body.classList.add("is-mobile-os");
} else {
  document.body.classList.add("is-desktop");
}

btnMenu?.addEventListener("click", ()=> openDrawer(menuDrawer));
btnCart?.addEventListener("click", () => openDrawer(cartDrawer));


// ---------- Desktop nav dropdown ----------
const dropdown = document.querySelector(".nav-dropdown");
const dropdownTrigger = document.querySelector(".nav-dropdown__trigger");
const dropdownMenu = document.querySelector(".nav-dropdown__menu");
function closeDropdown(){
  dropdown?.classList.remove("open");
  dropdownTrigger?.setAttribute("aria-expanded","false");
  dropdownMenu?.setAttribute("aria-hidden","true");
}
dropdownTrigger?.addEventListener("click", () => {
  const isOpen = dropdown?.classList.toggle("open");
  dropdownTrigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  dropdownMenu?.setAttribute("aria-hidden", isOpen ? "false" : "true");
});
document.addEventListener("click", (e) => {
  if (!dropdown) return;
  if (!dropdown.contains(e.target)) closeDropdown();
});
document.addEventListener("keydown",(e)=>{
  if(e.key==="Escape") {
    closeDropdown();
    closeModal(policyModal);
    closeModal(checkoutModal);
  }
});

// Dropdown filter links
document.querySelectorAll(".nav-dropdown__item[data-filter]").forEach(a=>{
  a.addEventListener("click", ()=>{
    const f = a.dataset.filter || "all";
    setFilter(f);
    closeDropdown();
  });
});


// ---------- Header compact on scroll ----------
const header = document.getElementById("header");
let lastScrollY = 0;
window.addEventListener("scroll", throttle(() => {
  const y = window.scrollY || 0;
  const compact = y > 12;
  header?.classList.toggle("header--compact", compact);
  lastScrollY = y;
}, 100));

// ---------- Search / Sort ----------
elSearch?.addEventListener("input", (e)=>{
  state.search = (e.target.value || "").trim().toLowerCase();
  document.querySelector(".search")?.classList.toggle("hasValue", !!state.search);
  renderProducts();
});
elClear?.addEventListener("click", ()=>{
  if (!elSearch) return;
  elSearch.value = "";
  state.search = "";
  document.querySelector(".search")?.classList.remove("hasValue");
  renderProducts();
});
elSort?.addEventListener("change", (e)=>{
  state.sort = e.target.value;
  renderProducts();
});

// ---------- Category buttons ----------
document.querySelectorAll(".cat[data-filter]").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    setFilter(btn.dataset.filter || "all");
    document.getElementById("best")?.scrollIntoView({behavior:"smooth"});
  });
});
document.querySelectorAll(".drawer__link[data-filter]").forEach(a=>{
  a.addEventListener("click", ()=>{
    setFilter(a.dataset.filter || "all");
    closeDrawer(menuDrawer);
  });
});

function setFilter(filter){
  state.filter = filter || "all";
  renderProducts();
  // highlight category tiles
  document.querySelectorAll(".cat[data-filter]").forEach(b=>{
    b.classList.toggle("active", (b.dataset.filter||"all")===state.filter);
  });
}

// ---------- Render products ----------
function getFilteredProducts(){
  let items = [...PRODUCTS];

  if (state.filter && state.filter !== "all"){
    items = items.filter(p => (p.category||"").toLowerCase() === state.filter);
  }

  if (state.search){
    const q = state.search;
    items = items.filter(p=>{
      const hay = `${p.brand||""} ${p.name||""} ${(p.notes||[]).join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }

  // sort
  if (state.sort === "price_asc") items.sort((a,b)=>(a.price||0)-(b.price||0));
  if (state.sort === "price_desc") items.sort((a,b)=>(b.price||0)-(a.price||0));
  if (state.sort === "rating") items.sort((a,b)=>(b.rating||0)-(a.rating||0));
  // featured: keep original order

  return items;
}

function productCard(p){
  const stars = "★★★★★".slice(0, Math.round(clamp(p.rating||4.5,0,5)));
  const tag = p.tag ? `<span class="tag">${escapeHtml(p.tag)}</span>` : "";
  const image = p.image || 'https://raw.githubusercontent.com/ipordiseparfum-hash/ipordiseparfum/main/logo.jpeg';

  return `
    <article class="card animate-on-scroll">
      <a href="product.html?id=${escapeHtml(p.id)}" class="card__link" aria-label="View product: ${escapeHtml(p.name||"")}">
        <div class="card__img">
          ${p.tag ? `<span class="card__tag">${escapeHtml(p.tag)}</span>` : ""}
          <img src="${escapeHtml(image)}" alt="${escapeHtml(p.name||"")}" loading="lazy" width="200" height="200">
        </div>
        <div class="card__body">
          <div class="card__brand">${escapeHtml(p.brand||"")}</div>
          <h3 class="card__name">${escapeHtml(p.name||"")}</h3>
          <div class="card__meta">
            <span class="stars" aria-label="${(p.rating||0)} rating">${stars}</span>
            <span class="muted small">(${p.reviews||0})</span>
          </div>
        </div>
      </a>
      <div class="card__actions">
        ${ (p.variants && p.variants.length) ? `<select class="variantSelect" data-id="${escapeHtml(p.id)}">${p.variants.map(v=>`<option value="${escapeHtml(v.size||'')}">${escapeHtml(v.size||'')}</option>`).join('')}</select>` : ''}
        ${ (p.price != null) ? `<div class="card__price">${formatMoney(p.price)}</div>` : `<div class="card__price muted small">Choose size</div>` }
        <button class="btn btn--small btn--primary" data-add="${escapeHtml(p.id)}">+ Add</button>
      </div>
    </article>
  `;
}

function renderProducts(){
  if (!elGrid) return;
  const items = getFilteredProducts();

  if (!items.length){
    elGrid.innerHTML = `<div class="muted" style="padding:12px 0;">${currentLang==="ar" ? "ما لقيّنا حتى منتوج. جرّب تبدل الفيلتر." : (currentLang==="fr" ? "Aucun produit trouvé. Essayez de changer les filtres." : "No products found. Try clearing filters.")}</div>`;
    return;
  }

  elGrid.innerHTML = items.map(productCard).join("");
  observeAnimatableElements(); // Observe newly rendered cards

  elGrid.querySelectorAll("[data-add]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const id = btn.getAttribute("data-add");
      const p = PRODUCTS.find(x=>x.id===id);
      if (!p) return;
      const sel = elGrid.querySelector(`.variantSelect[data-id="${id}"]`);
      const variant = sel ? sel.value : null;
      addToCart(p, variant);
      openDrawer(cartDrawer);
    });
  });
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, s => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[s]));
}

// ---------- Cart ----------
function addToCart(p, variant){
  const key = variant ? `${p.id}::${variant}` : p.id;
  const item = state.cart.find(i=>i.key===key);
  if (item) item.qty += 1;
  else state.cart.push({ key, id:p.id, variant: variant || null, qty:1 });
  saveCart();
  updateCartUI();
}

function removeFromCart(key){
  state.cart = state.cart.filter(i=>i.key!==key);
  saveCart();
  updateCartUI();
}

function changeQty(key, delta){
  const item = state.cart.find(i=>i.key===key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
}
function cartTotal(){
  return state.cart.reduce((sum,i)=>{
    const p = PRODUCTS.find(x=>x.id===i.id);
    return sum + (p ? (p.price||0)*i.qty : 0);
  },0);
}
function updateCartUI(){
  const count = state.cart.reduce((s,i)=>s+i.qty,0);
  if (elCartCount) elCartCount.textContent = String(count);

  if (!cartItems || !cartSubtotal) return;

  if (!state.cart.length){
    cartItems.innerHTML = `
      <div class="cart__empty" style="padding:18px 0; text-align:center;">
        <div style="font-size:48px; margin-bottom:12px;">👜</div>
        <div class="muted" style="margin-bottom:12px;">${currentLang==="ar" ? "السلة خاوية ✨" : (currentLang==="fr" ? "Votre panier est vide ✨" : "Your bag is empty ✨")}</div>
        <a href="#deals" class="btn btn--primary">${currentLang==="ar" ? "تسوق الآن" : (currentLang==="fr" ? "Magasinez" : "Shop deals")}</a>
      </div>
    `;
    cartSubtotal.textContent = formatMoney(0);
    if (cartSubtotal) cartSubtotal.setAttribute('aria-live','polite');
    return;
  }

  cartItems.innerHTML = state.cart.map(i=>{
    const p = PRODUCTS.find(x=>x.id===i.id) || {};
    const unit = p.price != null ? formatMoney(p.price) : '';
    const lineTotal = formatMoney((p.price||0) * i.qty);

    return `
      <div class="cartItem" data-key="${escapeHtml(i.key)}">
        <div class="cartItem__thumb">
          <img src="${escapeHtml(p.image || '')}" alt="${escapeHtml(p.name || '')}" loading="lazy">
        </div>
        <div class="cartItem__details">
          <div>
            <div class="cartItem__name">${escapeHtml(p.name||"")}</div>
            <div class="cartItem__meta muted small">${escapeHtml(p.brand||"")}${i.variant ? ' • '+escapeHtml(i.variant) : ''}</div>
          </div>

          <div class="cartItem__controls">
            <div class="cartItem__qty">
              <button class="qtyBtn" aria-label="Decrease quantity" data-qty="-1" data-key="${escapeHtml(i.key)}">−</button>
              <span class="qtyNum" aria-live="polite">${i.qty}</span>
              <button class="qtyBtn" aria-label="Increase quantity" data-qty="1" data-key="${escapeHtml(i.key)}">+</button>
            </div>
            <button class="icon-btn cartItem__remove" data-remove="${escapeHtml(i.key)}" aria-label="Remove ${escapeHtml(p.name||'')}">
              <span class="icon icon--close" aria-hidden="true"></span>
            </button>
          </div>
        </div>

        <div class="cartItem__price">
          <div class="cartItem__unit muted small">${unit}</div>
          <div class="cartItem__total">${lineTotal}</div>
        </div>
      </div>
    `;
  }).join("");

  cartItems.querySelectorAll("[data-remove]").forEach(b=>{
    b.addEventListener("click", ()=> removeFromCart(b.dataset.remove));
  });
  cartItems.querySelectorAll(".qtyBtn").forEach(b=>{
    b.addEventListener("click", ()=>{
      const delta = parseInt(b.dataset.qty,10);
      const key = b.dataset.key;
      changeQty(key, delta);
    });
  });

  cartSubtotal.textContent = formatMoney(cartTotal());
  if (cartSubtotal) cartSubtotal.setAttribute('aria-live','polite');

  cartItems.querySelectorAll("[data-remove]").forEach(b=>{
    b.addEventListener("click", ()=> removeFromCart(b.dataset.remove));
  });
  cartItems.querySelectorAll(".qtyBtn").forEach(b=>{
    b.addEventListener("click", ()=>{
      const delta = parseInt(b.dataset.qty,10);
      const key = b.dataset.key;
      changeQty(key, delta);
    });
  });

  cartSubtotal.textContent = formatMoney(cartTotal());
}

btnClearCart?.addEventListener("click", ()=>{
  state.cart = [];
  saveCart();
  updateCartUI();
});

btnCheckout?.addEventListener("click", () => {
  openCheckoutModal();
});

checkoutForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!state.cart.length) return;

    const name = checkoutForm.querySelector("input[name='name']")?.value?.trim();
    const city = checkoutForm.querySelector("input[name='city']")?.value?.trim();
    const phone = checkoutForm.querySelector("input[name='phone']")?.value?.trim();
    const address = checkoutForm.querySelector("textarea[name='address']")?.value?.trim();

    if (!name || !city || !address || !phone) {
      alert(currentLang === 'ar' ? 'المرجو ملء جميع الخانات' : (currentLang === 'fr' ? 'Veuillez remplir tous les champs' : 'Please fill all fields'));
      return;
    }

    // Build order lines
    const lines = state.cart.map(i=>{
      const p = PRODUCTS.find(x=>x.id===i.id);
      const name = p ? p.name : i.id;
      const price = p ? p.price : 0;
      const variant = i.variant ? ` (${i.variant})` : '';
      return `• ${name}${variant} x${i.qty} — ${formatMoney(price * i.qty)}`;
    }).join("\n");

    const total = cartTotal();

    // WhatsApp message
    const hello = currentLang==="ar" ? "السلام عليكم IPORDISE PARFUM 👋" : (currentLang==="fr" ? "Bonjour IPORDISE PARFUM 👋" : "Hello IPORDISE PARFUM 👋");

    const msg =
      `${hello}\n\n` +
      `${currentLang==="ar" ? "بغيت نطلب هادشي:" : (currentLang==="fr" ? "Je souhaite commander :" : "I would like to order the following:")}\n` +
      `${lines}\n\n` +
      `*${currentLang==="ar" ? "المجموع" : (currentLang==="fr" ? "Total" : "Total")}: ${formatMoney(total)}*\n\n` +
      `--- ${currentLang==="ar" ? "معلومات التوصيل" : (currentLang==="fr" ? "Informations de livraison" : "Shipping Information")} ---\n` +
      `*${currentLang==="ar" ? "الاسم" : (currentLang==="fr" ? "Nom" : "Name")}:* ${name}\n` +
      `*${currentLang==="ar" ? "الهاتف" : (currentLang==="fr" ? "Téléphone" : "Phone")}:* ${phone}\n` +
      `*${currentLang==="ar" ? "المدينة" : (currentLang==="fr" ? "Ville" : "City")}:* ${city}\n` +
      `*${currentLang==="ar" ? "العنوان" : (currentLang==="fr" ? "Adresse" : "Address")}:* ${address}\n\n` +
      `${currentLang==="ar" ? "شكراً!" : (currentLang==="fr" ? "Merci !" : "Thank you!")}`;

    const url = `https://wa.me/${WHATSAPP_PHONE_INTL}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    closeModal(checkoutModal);
});

// Email checkout (uses same form fields)
const btnConfirmEmail = document.getElementById('btnConfirmEmail');
btnConfirmEmail?.addEventListener('click', ()=>{
  if (!state.cart.length) return alert(currentLang === 'ar' ? 'السلة خاوية' : (currentLang === 'fr' ? 'Votre panier est vide' : 'Your cart is empty'));
  const name = checkoutForm.querySelector("input[name='name']")?.value?.trim();
  const city = checkoutForm.querySelector("input[name='city']")?.value?.trim();
  const phone = checkoutForm.querySelector("input[name='phone']")?.value?.trim();
  const address = checkoutForm.querySelector("textarea[name='address']")?.value?.trim();

  if (!name || !city || !address || !phone) {
    alert(currentLang === 'ar' ? 'المرجو ملء جميع الخانات' : (currentLang === 'fr' ? 'Veuillez remplir tous les champs' : 'Please fill all fields'));
    return;
  }

  const lines = state.cart.map(i=>{
    const p = PRODUCTS.find(x=>x.id===i.id);
    const name = p ? p.name : i.id;
    const price = p ? p.price : 0;
    const variant = i.variant ? ` (${i.variant})` : '';
    return `- ${name}${variant} x${i.qty} — ${formatMoney(price * i.qty)}`;
  }).join("\n");

  const total = cartTotal();

  const subject = (currentLang === 'ar') ? `طلب من الموقع - ${name}` : (currentLang === 'fr' ? `Commande depuis le site - ${name}` : `Order from website - ${name}`);
  const body = `Hello IPORDISE PARFUM,

I would like to place the following order:\n\n${lines}\n\nTotal: ${formatMoney(total)}\n\nShipping information:\nName: ${name}\nPhone: ${phone}\nCity: ${city}\nAddress: ${address}\n\nPlease confirm receipt and next steps.\n\nThank you!`;

  window.location.href = `mailto:${STORE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  closeModal(checkoutModal);
});

// Quick open checkout modal from 'Checkout — Email' on cart
const btnCheckoutEmail = document.getElementById('btnCheckoutEmail');
btnCheckoutEmail?.addEventListener('click', ()=>{
  openCheckoutModal();
  // focus first input for quick filling
  setTimeout(()=> checkoutForm.querySelector("input[name='name']")?.focus(), 250);
});

// ---------- Contact form ----------
form?.addEventListener("submit", (e)=>{
  e.preventDefault();
  const name = form.querySelector("input[name='name']")?.value?.trim() || "";
  const message = form.querySelector("textarea[name='message']")?.value?.trim() || "";
  if (!name || !message) return;
  const subject = `Message from ${name} via website`;
  const full = `Name: ${name}\n\nMessage:\n${message}`;
  const body = encodeURIComponent(full);
  window.location.href = `mailto:${STORE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
  if (formNote){
    formNote.textContent = currentLang==="ar" ? "تم فتح تطبيق الإيميل… إلا ما تحلش، صيفط لينا مباشرة." : (currentLang==="fr" ? "Ouverture de votre application email…" : "Opening your email app…");
  }
});

// ---------- Language menu ----------
function closeLangMenu(){
  langWrap?.classList.remove("open");
  btnLang?.setAttribute("aria-expanded","false");
}
btnLang?.addEventListener("click", ()=>{
  const isOpen = langWrap?.classList.toggle("open");
  btnLang.setAttribute("aria-expanded", isOpen ? "true" : "false");
});
document.addEventListener("click", (e)=>{
  if (!langWrap) return;
  if (!langWrap.contains(e.target)) closeLangMenu();
});
document.addEventListener("keydown",(e)=>{ if(e.key==="Escape") closeLangMenu(); }); // Merged with other escape handlers

document.querySelectorAll(".langOption").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    applyI18n(btn.dataset.setLang || "en");
    closeLangMenu();
  });
});

// ---------- Policies modal ----------
const POLICY_CONTENT = {
  en: {
    terms: {
      title: "Terms of Use",
      html: `
        <p>IPORDISE PARFUM is a demo storefront (no payment on the website). Orders are confirmed on WhatsApp.</p>
        <h3>Use of the site</h3>
        <ul>
          <li>Do not abuse forms, cart, or chatbot.</li>
          <li>Product names/prices can change without notice.</li>
        </ul>
        <h3>Orders</h3>
        <p>Checkout opens WhatsApp or your email app with your cart details. Delivery fees are confirmed during order confirmation (WhatsApp or email).</p>
      `
    },
    privacy: {
      title: "Privacy Policy",
      html: `
        <p>We only use basic data you send voluntarily (WhatsApp message or email).</p>
        <ul>
          <li>No account is required.</li>
          <li>No payment data is stored on this website.</li>
        </ul>
      `},
    shipping: {
      title: "Shipping & Delivery",
      html: `
        <p>Delivery across Morocco. Free delivery can apply from 299 MAD (see banner).</p>
        <ul>
          <li>Delivery time depends on your city.</li>
          <li>Delivery fee confirmed on WhatsApp.</li>
        </ul>
      `
    },
    returns: {
      title: "Returns & Refunds",
      html: `
        <p>If there is a problem with your order, contact us on WhatsApp within 24h after delivery.</p>
        <ul>
          <li>Keep the packaging and receipt.</li>
          <li>We will propose exchange or refund depending on the case.</li>
        </ul>
      `
    },
    cookies: {
      title: "Cookies",
      html: `
        <p>This website uses local storage to keep your cart and language choice.</p>
        <ul>
          <li>No advertising cookies are required.</li>
        </ul>
      `
    }
  },
  fr: {
    terms: { title:"Conditions d’utilisation", html:`<p>IPORDISE PARFUM est une vitrine (pas de paiement sur le site). Les commandes se confirment sur WhatsApp.</p><h3>Utilisation</h3><ul><li>Ne pas abuser du formulaire, panier ou chatbot.</li><li>Les prix peuvent changer.</li></ul><h3>Commandes</h3><p>Le checkout ouvre WhatsApp avec les détails du panier.</p>` },
    privacy: { title:"Politique de confidentialité", html:`<p>Nous utilisons uniquement les infos que vous envoyez volontairement (WhatsApp ou email).</p><ul><li>Pas de compte requis.</li><li>Aucune donnée de paiement stockée.</li></ul>` },
    shipping: { title:"Livraison", html:`<p>Livraison partout au Maroc. Livraison gratuite possible dès 299 MAD (selon la bannière).</p><ul><li>Délai selon la ville.</li><li>Frais confirmés sur WhatsApp.</li></ul>` },
    returns: { title:"Retours & remboursements", html:`<p>En cas de problème, contactez-nous sur WhatsApp dans les 24h après livraison.</p><ul><li>Gardez l’emballage.</li><li>Échange ou remboursement selon le cas.</li></ul>` },
    cookies: { title:"Cookies", html:`<p>Le site utilise le stockage local pour le panier et la langue.</p><ul><li>Pas de cookies publicitaires nécessaires.</li></ul>` }
  },
  ar: {
    terms: { title:"شروط الاستخدام", html:`<p>هذا الموقع واجهة عرض (بدون أداء داخل الموقع). تأكيد الطلب يكون عبر واتساب.</p><h3>استعمال الموقع</h3><ul><li>ممنوع الإساءة لاستعمال الفورم/السلة/الشات.</li><li>الثمن يمكن يتبدل.</li></ul><h3>الطلبات</h3><p>الشراء كيفتح واتساب بتفاصيل السلة.</p>` },
    privacy: { title:"سياسة الخصوصية", html:`<p>كنستعملو غير المعلومات اللي كتصيفط لينا بإرادتك (واتساب أو إيميل).</p><ul><li>ما كاينش حساب إجباري.</li><li>ما كنجمعوش بيانات الأداء داخل الموقع.</li></ul>` },
    shipping: { title:"الشحن والتوصيل", html:`<p>توصيل داخل المغرب. ممكن توصيل مجاني ابتداءً من 299 درهم (حسب البانر).</p><ul><li>المدة كتختلف حسب المدينة.</li><li>الثمن كيتأكد فواتساب.</li></ul>` },
    returns: { title:"الإرجاع والاسترجاع", html:`<p>إلى كان شي مشكل فالطلب تواصل معانا فواتساب فـ 24 ساعة من بعد التوصيل.</p><ul><li>خلي التغليف.</li><li>تعويض أو استرجاع حسب الحالة.</li></ul>` },
    cookies: { title:"الكوكيز", html:`<p>الموقع كيعتمد على التخزين المحلي باش يحتافظ بالسلة واللغة.</p><ul><li>ما كايناش كوكيز إعلانات ضرورية.</li></ul>` }
  }
};

function openPolicy(key){
  const lang = POLICY_CONTENT[currentLang] ? currentLang : "en";
  const pol = POLICY_CONTENT[lang][key];
  if (!pol) return;
  policyTitle.textContent = pol.title;
  policyBody.innerHTML = pol.html;
  openModal(policyModal);
}
document.querySelectorAll("[data-open-policy]").forEach(a=>{
  a.addEventListener("click", (e)=>{
    e.preventDefault();
    openPolicy(a.dataset.openPolicy);
  });
});

// ---------- Fragrance Finder ----------
const finderState = { audience:null, mood:null, intensity:null };

function setFinderChoice(group, value){
  finderState[group] = value;
  document.querySelectorAll(`[data-finder="${group}"]`).forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.value === value);
  });
  renderFinder();
}

document.querySelectorAll("[data-finder]").forEach(btn=>{
  btn.addEventListener("click", ()=> setFinderChoice(btn.dataset.finder, btn.dataset.value));
});

function moodToNotes(mood){
  if (!mood) return [];
  if (mood==="fresh") return ["fresh","citrus","lemon","mint"];
  if (mood==="sweet") return ["vanilla","sweet","honey","coconut","pistachio","cherry"];
  if (mood==="woody") return ["cedar","sandalwood","oud","woody","vetiver"];
  if (mood==="oriental") return ["amber","musk","spice","patchouli","cinnamon","oriental"];
  return [];
}

function renderFinder(){
  if (!finderResult) return;

  if (!finderState.audience || !finderState.mood || !finderState.intensity){
    finderResult.innerHTML = `<div class="finder__hint">${t("finder_hint")}</div>`;
    return;
  }

  let items = PRODUCTS.filter(p => (p.category||"").toLowerCase() === finderState.audience);

  const wanted = moodToNotes(finderState.mood);
  if (wanted.length){
    items = items
      .map(p => {
        const notes = (p.notes || []).map(x => String(x).toLowerCase());
        const score = wanted.reduce((s, w) => s + (notes.includes(w) ? 1 : 0), 0);
        return { p, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => (b.score - a.score) || ((b.p.rating || 0) - (a.p.rating || 0)))
      .slice(0, 3)
      .map(x => x.p);
  } else {
    items = items.sort((a,b)=>(b.rating||0)-(a.rating||0)).slice(0,3);
  }

  if (!items.length){
    finderResult.innerHTML = `<div class="finder__hint">${currentLang==="ar" ? "ما لقيّناش اقتراحات. جرّب تبدل الاختيارات." : (currentLang==="fr" ? "Aucune suggestion. Essayez d’autres choix." : "No suggestions. Try different choices.")}</div>`;
    return;
  }

  finderResult.innerHTML = `
    <div class="finder__hint" style="margin-bottom:10px;">${currentLang==="ar" ? "اقتراحات لك:" : (currentLang==="fr" ? "Suggestions pour vous :" : "Suggestions for you:")}</div>
    <div style="display:grid; gap:10px;">
      ${items.map(p=>`
        <div class="miniCard">
          <div><strong>${escapeHtml(p.name||"")}</strong> <span class="muted small">• ${escapeHtml(p.brand||"")}</span></div>
          <div class="muted small">${p.price != null ? formatMoney(p.price) + ' • ' : ''}${(p.rating||4.5).toFixed(1)}★</div>
        </div>
      `).join("")}
    </div>
  `;

  // update WhatsApp link with finder choices
  const msg = `${currentLang==="ar" ? "السلام عليكم" : (currentLang==="fr" ? "Bonjour" : "Hello")} IPORDISE PARFUM 👋\n` +
              `${currentLang==="ar" ? "بغيت اقتراح عطر:" : (currentLang==="fr" ? "Je veux une recommandation :" : "I want a recommendation:")}\n` +
              `• ${currentLang==="ar" ? "الفئة" : (currentLang==="fr" ? "Catégorie" : "Category")}: ${finderState.audience || "-"}\n` +
              `• ${currentLang==="ar" ? "المود" : (currentLang==="fr" ? "Mood" : "Mood")}: ${finderState.mood || "-"}\n` +
              `• ${currentLang==="ar" ? "القوة" : (currentLang==="fr" ? "Intensité" : "Intensity")}: ${finderState.intensity || "-"}\n` +
              `\n${currentLang==="ar" ? "شنو كتقترحو عليا؟" : (currentLang==="fr" ? "Que me conseillez-vous ?" : "What do you recommend?")}`;
  if (finderWhatsApp) finderWhatsApp.href = `https://wa.me/${WHATSAPP_PHONE_INTL}?text=${encodeURIComponent(msg)}`;
}

// ---------- Promo banner JS ----------
function initPromoBanner(){
  try{
    const timerEl = document.getElementById('promoTimer');
    const badgeEl = document.getElementById('promoBadge');
    if (!timerEl) return;

    // start at 2:15:34
    let remaining = 2*3600 + 15*60 + 34;
    function tick(){
      if (remaining <= 0){
        timerEl.textContent = '00:00:00';
        if (badgeEl) badgeEl.textContent = 'Offer ended';
        return;
      }
      const h = String(Math.floor(remaining/3600)).padStart(2,'0');
      const m = String(Math.floor((remaining%3600)/60)).padStart(2,'0');
      const s = String(remaining%60).padStart(2,'0');
      timerEl.textContent = `${h}:${m}:${s}`;
      remaining--;
    }
    tick();
    setInterval(tick, 1000);

    // options
    // Use data-product on buttons for direct mapping and support smooth swap animations
    function getProductById(id){ return (window.PRODUCTS || []).find(x=>x.id === id) || null; }

    // promo image preload cache
    const _promoImageCache = {};
    function preloadImage(src){
      return new Promise((resolve)=>{
        if (!src) return resolve(false);
        if (_promoImageCache[src] === true) return resolve(true);
        if (_promoImageCache[src] instanceof Promise) return _promoImageCache[src].then(()=>resolve(true)).catch(()=>resolve(false));

        const p = new Promise((res)=>{
          const img = new Image();
          img.onload = ()=>{ _promoImageCache[src] = true; res(true); };
          img.onerror = ()=>{ _promoImageCache[src] = false; res(false); };
          img.src = src;
        });
        _promoImageCache[src] = p;
        p.then(()=>resolve(true)).catch(()=>resolve(false));
      });
    }

    function animateSwap(el, updateFn){
      if (!el) { updateFn(); return; }
      el.classList.add('fade-out','slide-out');
      setTimeout(()=>{
        updateFn();
        el.classList.remove('fade-out','slide-out');
        el.classList.add('fade-in','slide-in');
        setTimeout(()=> el.classList.remove('fade-in','slide-in'), 420);
      }, 220);
    }

    function updatePromoDisplayByProductId(pid){
      const prod = getProductById(pid) || {};
      const img = prod.image || document.getElementById('promoPreviewImg')?.src;
      const bottleBackSrc = prod.backImage || document.getElementById('promoBottleBack')?.src;
      const name = prod.name || pid;
      const lang = window.currentLang || 'en';
      const desc = (lang === 'fr' && prod.description_fr) ? prod.description_fr.split('\n')[0] : (lang === 'ar' && prod.description_ar) ? prod.description_ar.split('\n')[0] : (prod.description || '').split('\n')[0] || '';

      const previewImg = document.getElementById('promoPreviewImg');
      const previewName = document.getElementById('promoPreviewName');
      const previewDesc = document.getElementById('promoPreviewDesc');
      const bottleFront = document.getElementById('promoBottleFront');
      const bottleBack = document.getElementById('promoBottleBack');

      // preload images then animate swap
      Promise.all([preloadImage(img), preloadImage(bottleBackSrc)]).then(()=> {
        if (previewImg){
          animateSwap(previewImg, ()=> { previewImg.src = img; previewImg.removeAttribute('aria-hidden'); });
        }
        if (previewName){ animateSwap(previewName, ()=> previewName.textContent = name); }
        if (previewDesc){ animateSwap(previewDesc, ()=> previewDesc.textContent = desc); }

        if (bottleFront){
          bottleFront.classList.add('swap-out');
          setTimeout(()=>{
            bottleFront.src = img;
            bottleFront.classList.remove('swap-out');
            bottleFront.classList.add('swap-in');
            setTimeout(()=> bottleFront.classList.remove('swap-in'), 460);
          }, 220);
        }
        if (bottleBack){
          bottleBack.classList.add('swap-out');
          setTimeout(()=>{
            bottleBack.src = bottleBackSrc;
            bottleBack.classList.remove('swap-out');
            bottleBack.classList.add('swap-in');
            setTimeout(()=> bottleBack.classList.remove('swap-in'), 460);
          }, 220);
        }

        // announce to screen readers
        const live = document.getElementById('promoPreviewName');
        if (live) live.setAttribute('aria-live', 'polite');
      });
    }

    // Buttons binding with keyboard support
    const optionBtns = Array.from(document.querySelectorAll('.promo-option'));
    optionBtns.forEach((btn, idx)=>{
      const pid = btn.dataset.product;
      const p = getProductById(pid);
      if (p){ if (p.image) preloadImage(p.image); if (p.backImage) preloadImage(p.backImage); }

      btn.addEventListener('click', ()=>{
        optionBtns.forEach(b=>{ b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
        btn.classList.add('active'); btn.setAttribute('aria-pressed','true');
        if (pid) updatePromoDisplayByProductId(pid);
      });

      btn.addEventListener('keydown', (e)=>{
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown'){
          const next = optionBtns[(idx+1) % optionBtns.length]; next.focus(); e.preventDefault();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp'){
          const prev = optionBtns[(idx-1 + optionBtns.length) % optionBtns.length]; prev.focus(); e.preventDefault();
        } else if (e.key === 'Enter' || e.key === ' '){ btn.click(); e.preventDefault(); }
      });
    });

    // initialize with first option (respect data-product)
    const first = document.querySelector('.promo-option.active') || document.querySelector('.promo-option');
    if (first){ first.classList.add('active'); first.setAttribute('aria-pressed','true'); const pid = first.dataset.product; if (pid) updatePromoDisplayByProductId(pid); }

    document.querySelectorAll('.promo-shop-btn').forEach(b=> b.addEventListener('click', (e)=>{ e.preventDefault(); document.getElementById('deals')?.scrollIntoView({behavior:'smooth'}); }));

    document.getElementById('promoWhatsApp')?.addEventListener('click', (e)=>{
      e.preventDefault();
      const selected = document.querySelector('.promo-option.active');
      const selText = selected ? selected.getAttribute('data-key') : '';
      const base = (currentLang === 'ar' ? 'مرحباً، أنا مهتم بهذا العرض:' : (currentLang === 'fr' ? 'Bonjour, je suis intéressé par cette offre :' : "Hello, I'm interested in this offer:"));
      const message = selText ? `${base} ${selText}` : base;
      const url = `https://wa.me/${WHATSAPP_PHONE_INTL}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    });

  }catch(e){ console.warn('promo init failed', e); }
}

// ---------- Bottom nav ----------
bottomNav?.addEventListener("click", (e)=>{
  const btn = e.target.closest("[data-bottom]");
  if (!btn) return;
  const action = btn.dataset.bottom;
  if (action==="home") window.scrollTo({ top:0, behavior:"smooth" });
  if (action==="categories"){
    // open drawer on mobile OS; fallback to section scroll
    if (isMobileOS()) openDrawer(menuDrawer);
    else document.getElementById("categories")?.scrollIntoView({behavior:"smooth"});
  }
  if (action==="search"){
    document.getElementById("header")?.scrollIntoView({behavior:"smooth"});
    setTimeout(()=> elSearch?.focus(), 200);
  }
  if (action==="cart") openDrawer(cartDrawer);
});

// ---------- Chatbot (UI only) ----------
function openChat(){
  if (!chatbot) return;
  chatbot.classList.add("open");
  chatbot.setAttribute("aria-hidden","false");
  chatbotFab?.setAttribute("aria-label", "Close chat");
  chatHasStarted = true;
  seedChatIfEmpty();
  setTimeout(()=> chatbotInput?.focus(), 150);
}
function closeChat(){
  if (!chatbot) return;
  chatbot.classList.remove("open");
  chatbot.setAttribute("aria-hidden","true");
  chatbotFab?.setAttribute("aria-label", "Open chat");
}
function toggleChat() {
  if (chatbot?.classList.contains("open")) closeChat();
  else openChat();
}
chatbotFab?.addEventListener("click", toggleChat);
chatbotClose?.addEventListener("click", closeChat);

function addMsg(text, who="bot"){
  if (!chatbotMsgs) return;
  const div = document.createElement("div");
  div.className = `msg ${who==="me" ? "msg--me" : ""}`;
  div.textContent = text;
  chatbotMsgs.appendChild(div);
  chatbotMsgs.scrollTop = chatbotMsgs.scrollHeight;
}
function seedChatIfEmpty(){
  if (!chatbotMsgs) return;
  if (chatbotMsgs.childElementCount===0){
    sendBotMessage(t("chat_hi"), { intent: 'greeting' });
  }
}

// Chat logging + typing simulation + helper
let _chatLogs = JSON.parse(localStorage.getItem('ipordise_chat_logs')||'[]');
let _chatFallbacks = 0;
function logChatEntry(entry){
  try{
    _chatLogs.push(entry);
    if (_chatLogs.length > 300) _chatLogs.shift();
    localStorage.setItem('ipordise_chat_logs', JSON.stringify(_chatLogs));
  }catch(e){/* noop */}
}

function showTyping(){
  if (!chatbotMsgs) return;
  hideTyping();
  const d = document.createElement('div');
  d.className = 'msg msg--typing';
  d.innerHTML = '<div class="typing"><span></span><span></span><span></span></div>';
  chatbotMsgs.appendChild(d);
  chatbotMsgs.scrollTop = chatbotMsgs.scrollHeight;
}
function hideTyping(){
  if (!chatbotMsgs) return;
  const tEl = chatbotMsgs.querySelector('.msg--typing');
  if (tEl) tEl.remove();
}

function sendBotMessage(text, opts){
  opts = opts || {};
  const len = String(text||'').length;
  const base = Math.min(1200 + len * 20, 2800);
  showTyping();
  setTimeout(()=>{
    hideTyping();
    if (!chatbotMsgs) return;
    const div = document.createElement('div');
    div.className = 'msg';
    div.innerHTML = opts.html ? opts.html : escapeHtml(String(text||''));
    chatbotMsgs.appendChild(div);

    // add chips (quick replies) if provided
    if (opts.chips && Array.isArray(opts.chips) && opts.chips.length){
      const chips = document.createElement('div');
      chips.className = 'msg__chips';
      chips.innerHTML = opts.chips.map(c=>`<button class="chip" data-quick="${c.action}">${escapeHtml(c.label)}</button>`).join('');
      div.appendChild(chips);
      chips.querySelectorAll('button').forEach(b=> b.addEventListener('click', ()=> handleQuickFromChat(b.dataset.quick) ));
    }

    chatbotMsgs.scrollTop = chatbotMsgs.scrollHeight;

    logChatEntry({ ts: Date.now(), lang: currentLang, user: opts.user || null, bot: text, intent: opts.intent || null });

    if (typeof opts.onShown === 'function') setTimeout(()=> opts.onShown(div), 50);
  }, opts.delay || base);
}

function handleQuickFromChat(action){
  if (!action) return;
  if (action === 'open_whatsapp' || action === 'order_whatsapp'){
    // Open WhatsApp with a small prefilled message
    const msg = t('wa_prefill') || "Hello, I'm interested in this product: {name} • Size: {size}";
    // try to pull last suggested product name from chat logs
    const lastSuggestion = _chatLogs.slice().reverse().find(l => l && l.intent === 'recommendation');
    const productName = (lastSuggestion && lastSuggestion.bot) ? (lastSuggestion.bot.split('\n')[1] || '').replace('• ','').trim() : '';
    const message = msg.replace('{name}', productName || '').replace('{size}', '10ml');
    const url = `https://wa.me/${WHATSAPP_PHONE_INTL}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    return;
  }
  if (action === 'more_recommend'){
    const items = [...PRODUCTS].sort((a,b)=>(b.rating||0)-(a.rating||0)).slice(0,6);
    const text = items.map(p=>`• ${p.name}`).join('\n');
    sendBotMessage((currentLang === 'ar' ? 'هادو اقتراحات أكثر:' : (currentLang === 'fr' ? 'Voici plus de suggestions :' : 'Here are more suggestions:')) + '\n' + text, { intent: 'recommendation' });
    return;
  }
  if (action === 'note_vanilla' || action === 'note_musk' || action === 'note_fresh'){
    const mapping = { note_vanilla: (currentLang==='ar' ? 'فانيلا' : (currentLang==='fr' ? 'vanille' : 'vanilla')), note_musk: (currentLang==='ar' ? 'مسك' : (currentLang==='fr' ? 'musc' : 'musk')), note_fresh: (currentLang==='ar' ? 'فريش' : (currentLang==='fr' ? 'frais' : 'fresh')) };
    const val = mapping[action] || '';
    if (chatbotInput){ chatbotInput.value = val; chatbotForm.dispatchEvent(new Event('submit', { bubbles:true, cancelable:true })); }
    return;
  }
  // fallback to quick actions handled elsewhere
}

// Admin helper: print chat logs
function showChatLogs(){ try{ const logs = JSON.parse(localStorage.getItem('ipordise_chat_logs')||'[]'); console.table(logs); return logs; }catch(e){ console.warn('no logs'); return []; } }


function recommendFromText(text){
  const q = (text||"").toLowerCase();
  const wanted = [];
  ["vanilla","musk","fresh","citrus","rose","oud","amber","woody","sweet","jasmine","sandalwood","cedar","mint","lemon","patchouli"].forEach(n=>{
    if (q.includes(n)) wanted.push(n);
  });

  let items = [...PRODUCTS];
  if (wanted.length){
    items = items.map(p=>{
      const notes = (p.notes||[]).map(x=>String(x).toLowerCase());
      const score = wanted.reduce((s,w)=> s + (notes.includes(w) ? 1 : 0), 0);
      return { p, score };
    }).sort((a,b)=>(b.score-a.score)||((b.p.rating||0)-(a.p.rating||0))).slice(0,3).map(x=>x.p);
  } else {
    items = items.sort((a,b)=>(b.rating||0)-(a.rating||0)).slice(0,3);
  }

  if (!items.length) return currentLang==="ar" ? "ما لقيتش اقتراحات دابا. سولني فواتساب 👍" : (currentLang==="fr" ? "Je n’ai pas de suggestion maintenant. Écrivez-nous sur WhatsApp 👍" : "I couldn't find suggestions right now. Ask us on WhatsApp 👍");

  const lines = items.map(p=>`• ${p.name}${p.price != null ? ' ('+formatMoney(p.price)+')' : ''}`).join("\n");
  return (currentLang==="ar" ? "هادو اقتراحات:" : (currentLang==="fr" ? "Voici des suggestions :" : "Here are suggestions:")) + "\n" + lines;
}

chatbotQuick?.addEventListener("click",(e)=>{
  const b = e.target.closest("[data-quick]");
  if (!b) return;
  const q = b.dataset.quick;
  if (q==="recommend"){
    addMsg(currentLang==="ar" ? "بغيت اقتراح" : (currentLang==="fr" ? "Je veux une recommandation" : "I want a recommendation"), "me");
    sendBotMessage(currentLang==="ar" ? "كتب ليا النوتات اللي كتفضل (مثلاً: فانيلا، مسك، فريش…)." : (currentLang==="fr" ? "Dites-moi vos notes préférées (vanille, musc, frais…)." : "Tell me your favorite notes (vanilla, musk, fresh…)."), {
      intent: 'ask_notes',
      chips: [
        { action: 'note_vanilla', label: currentLang === 'ar' ? 'فانيلا' : (currentLang === 'fr' ? 'Vanille' : 'Vanilla') },
        { action: 'note_musk', label: currentLang === 'ar' ? 'مسك' : (currentLang === 'fr' ? 'Musc' : 'Musk') },
        { action: 'note_fresh', label: currentLang === 'ar' ? 'فريش' : (currentLang === 'fr' ? 'Frais' : 'Fresh') }
      ]
    });
  }
  if (q==="best"){
    addMsg(currentLang==="ar" ? "الأكثر مبيعاً" : (currentLang==="fr" ? "Best-sellers" : "Best sellers"), "me");
    const items = [...PRODUCTS].sort((a,b)=>(b.rating||0)-(a.rating||0)).slice(0,3);
    sendBotMessage(items.map(p=>`• ${p.name}`).join("\n"), { intent: 'best', chips: [ { action: 'more_recommend', label: currentLang==='ar' ? 'المزيد' : (currentLang==='fr' ? 'Plus' : 'More') }, { action: 'open_whatsapp', label: t('bn_whatsapp') || 'WhatsApp' } ] });
    document.getElementById("best")?.scrollIntoView({behavior:"smooth"});
  }
  if (q==="delivery"){
    addMsg(currentLang==="ar" ? "التوصيل" : (currentLang==="fr" ? "Livraison" : "Delivery"), "me");
    sendBotMessage(t("topbar_text"), { intent: 'delivery' });
  }
  if (q==="whatsapp"){
    addMsg(currentLang==="ar" ? "بغيت نطلب فواتساب" : (currentLang==="fr" ? "Je veux commander sur WhatsApp" : "I want to order on WhatsApp"), "me");
    sendBotMessage(`WhatsApp: ${WHATSAPP_DISPLAY}`, { intent: 'whatsapp', onShown: ()=> window.open(`https://wa.me/${WHATSAPP_PHONE_INTL}`, "_blank") });
  }
});

chatbotForm?.addEventListener("submit",(e)=>{
  e.preventDefault();
  const text = (chatbotInput?.value || "").trim();
  if (!text) return;
  addMsg(text, "me");
  try{ logChatEntry({ ts: Date.now(), lang: currentLang, user: text, bot: null }); }catch(e){}
  chatbotInput.value = "";

  // simple intents
  const lower = text.toLowerCase();

  // --- Greetings ---
  if (["hello", "hi", "hey", "bonjour", "salut", "مرحبا", "السلام"].some(g => lower.startsWith(g))) {
    sendBotMessage(t("chat_generic_greeting"), { intent: 'greeting' });
    return;
  }

  // --- Thanks ---
  if (["thanks", "thank you", "merci", "شكرا"].some(g => lower.includes(g))) {
    sendBotMessage(t("chat_welcome"), { intent: 'thanks' });
    return;
  }

  // --- WhatsApp ---
  if (lower.includes("whatsapp") || lower.includes("واتساب")) {
    sendBotMessage(`WhatsApp: ${WHATSAPP_DISPLAY}`, { intent: 'whatsapp', onShown: ()=> window.open(`https://wa.me/${WHATSAPP_PHONE_INTL}?text=${encodeURIComponent(text)}`, "_blank") });
    return;
  }

  // --- Delivery ---
  if (lower.includes("delivery") || lower.includes("livraison") || lower.includes("توصيل")) {
    sendBotMessage(t("topbar_text"), { intent: 'delivery' });
    return;
  }

  // --- Payment ---
  if (lower.includes("payment") || lower.includes("pay") || lower.includes("paiement") || lower.includes("دفع") || lower.includes("أداء")) {
    sendBotMessage(t("chat_payment"), { intent: 'payment' });
    return;
  }

  // --- Contact ---
  if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("تواصل")) {
    sendBotMessage(t("chat_contact"), { intent: 'contact' });
    return;
  }

  // --- Best sellers ---
  if (lower.includes("best") || lower.includes("meille") || lower.includes("الأكثر")) {
    const items = [...PRODUCTS].sort((a,b)=>(b.rating||0)-(a.rating||0)).slice(0,3);
    sendBotMessage(items.map(p=>`• ${p.name}`).join("\n"), { intent: 'best', chips: [ { action: 'open_whatsapp', label: t('bn_whatsapp') || 'WhatsApp' }, { action: 'more_recommend', label: currentLang==='ar' ? 'المزيد' : (currentLang==='fr' ? 'Plus' : 'More') } ] });
    return;
  }

  // --- Category specific ---
  if (lower.includes("men") || lower.includes("homme") || lower.includes("رجال")) {
    sendBotMessage(t("chat_men_suggestion"), { intent: 'men_suggestion' });
    const items = PRODUCTS.filter(p => p.category === 'men').sort((a,b)=>(b.rating||0)-(a.rating||0)).slice(0,3);
    if (items.length) sendBotMessage(items.map(p=>`• ${p.name}`).join("\n"), { intent: 'men_suggestion' });
    return;
  }
  if (lower.includes("women") || lower.includes("femme") || lower.includes("نساء")) {
    sendBotMessage(t("chat_women_suggestion"), { intent: 'women_suggestion' });
    const items = PRODUCTS.filter(p => p.category === 'women').sort((a,b)=>(b.rating||0)-(a.rating||0)).slice(0,3);
    if (items.length) sendBotMessage(items.map(p=>`• ${p.name}`).join("\n"), { intent: 'women_suggestion' });
    return;
  }

  // --- Fallback: recommend from text ---
  const reply = recommendFromText(text);
  sendBotMessage(reply, { intent: 'recommendation', onShown: ()=>{
    const kw = currentLang === 'ar' ? 'واتساب' : (currentLang === 'fr' ? 'WhatsApp' : 'WhatsApp');
    if (reply && reply.includes(kw)){
      _chatFallbacks++;
      if (_chatFallbacks >= 2){
        sendBotMessage(currentLang === 'ar' ? 'بغيت نتواصلو فواتساب باش نعاونك مباشرة؟' : (currentLang === 'fr' ? 'Souhaitez-vous que l’on prenne la commande via WhatsApp ?' : 'Would you like us to take the order on WhatsApp?'), { chips: [ { action: 'open_whatsapp', label: t('bn_whatsapp') || 'WhatsApp' } ], intent: 'escalation' });
      }
    } else {
      _chatFallbacks = 0;
    }
  } });
});

function handleChatbotAttention() {
  if (localStorage.getItem("ipordise_chat_notif_seen")) return;

  let attentionTimeout;

  const showAttention = () => {
    if (chatbotAttentionText) chatbotAttentionText.textContent = t("chat_attention_bubble");
    chatbotBadge?.classList.add("visible");
    chatbotAttention?.classList.add("visible");
    chatbotAttention?.setAttribute("aria-hidden", "false");

    // Auto-hide bubble after 8 seconds
    attentionTimeout = setTimeout(hideAttentionBubble, 8000);
  };

  const hideAttentionBubble = () => {
    chatbotAttention?.classList.remove("visible");
    chatbotAttention?.setAttribute("aria-hidden", "true");
  };

  const dismissAttention = (e) => {
    if (e) e.stopPropagation();
    clearTimeout(attentionTimeout);
    localStorage.setItem("ipordise_chat_notif_seen", "true");

    chatbotBadge?.classList.remove("visible");
    hideAttentionBubble();

    // Clean up listeners
    chatbotFab?.removeEventListener("click", dismissAndOpenChat);
    chatbotAttention?.removeEventListener("click", dismissAndOpenChat);
    chatbotAttentionClose?.removeEventListener("click", dismissAttention);

    // Restore original fab click listener
    chatbotFab?.addEventListener("click", toggleChat);
  };

  const dismissAndOpenChat = (e) => {
    dismissAttention(e);
    openChat();
  };

  setTimeout(showAttention, 3000);

  chatbotFab?.removeEventListener("click", toggleChat);
  chatbotFab?.addEventListener("click", dismissAndOpenChat);
  chatbotAttention?.addEventListener("click", dismissAndOpenChat);
  chatbotAttentionClose?.addEventListener("click", dismissAttention);
}

// ---------- Scroll Animations ----------
let scrollObserver;

function initScrollAnimations() {
  // Fallback for older browsers
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll(".animate-on-scroll").forEach(el => el.classList.add('is-visible'));
    return;
  }

  scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Performance: stop observing once visible
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  observeAnimatableElements();
}

function observeAnimatableElements() {
    if (!scrollObserver) return;
    document.querySelectorAll(".animate-on-scroll:not(.is-visible)").forEach(el => scrollObserver.observe(el));
}
// ---------- Init ----------
(async function init(){
  await loadProducts();
  // default: highlight filter all
  setFilter("all");

  // year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  applyI18n(DEFAULT_LANG);
  updateCartUI();
  renderFinder();
  handleChatbotAttention();
  initScrollAnimations();
  initPromoBanner();
})();