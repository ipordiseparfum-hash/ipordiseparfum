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
    nav_home: "Home",
    brand_tag: "Fragrance Boutique",
    topbar_text: "عطور أصلية، جودة مضمونة، تجربة فريدة – IPORDISE",
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
    hero_cta_badge: "Explore the collection",
    hero_desc: "Curated perfumes inspired by Morocco's rich heritage. Authentic scents for women, men, and unisex — with express delivery across Morocco and 24/7 personalized support.",
    trust_auth: "100% Authentic",
    trust_delivery: "Free Delivery 299 MAD+",
    trust_support: "24/7 WhatsApp Support",
    trust_auth_desc: "Original fragrances sourced from trusted suppliers.",
    trust_delivery_desc: "Fast delivery across Morocco with careful packaging.",
    trust_support_desc: "Get fast recommendations and order help anytime.",
    trust_returns: "Easy returns",
    trust_returns_desc: "Hassle‑free exchange if something isn’t right.",
    concierge_title: "Personalized recommendations",
    concierge_desc: "Tell us the notes you love (vanilla, musk, fresh, floral, oud…) and we’ll suggest the perfect match in minutes.",
    concierge_cta_wa: "Chat on WhatsApp",
    concierge_cta_finder: "Try the Fragrance Finder",
    cta_shop: "Shop Now",
    cta_best: "View Best Sellers",
    stat_customers: "Happy Customers",
    stat_rating: "Average Rating",
    stat_delivery: "Express Delivery",
    sec_categories_title: "Fragrance",
    sec_categories_desc: "Browse by category like on a big store — clean and easy.",
    sec_families_title: "Shop by Scent Family",
    sec_families_desc: "Pick a vibe and discover perfumes that match.",
    family_fresh: "Fresh",
    family_floral: "Floral",
    family_woody: "Woody",
    family_oriental: "Oriental",
    family_gourmand: "Gourmand",
    sec_new_desc: "Freshly curated scents, just for you.",
    sec_best_title: "Best sellers",
    sec_best_desc: "Top-rated picks customers love.",
    quick_filters: "Quick filters:",
    quick_vanilla: "Vanilla",
    quick_oud: "Oud",
    quick_fresh: "Fresh",
    quick_musk: "Musk",
    quick_gift: "Gift",
    filter_label: "Showing: {cat}",
    sec_recent_title: "Recently viewed",
    sec_recent_desc: "Pick up where you left off.",
    sec_deals_kicker: "LIMITED TIME OFFER",
    flash_text: "Shop now before the offer ends",
    sec_deals_title: "Gucci Intense Oud",
    sec_deals_desc: "Discover our curated collection of premium fragrances and find your signature scent today. Save up to 20% on selected items.",
    sec_deals_cta: "Shop The Collection",
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
    footer_payments: "Payments",
    payment_cod: "Cash on Delivery",
    footer_legal: "Legal",
    footer_rights: "All rights reserved.",
    fav_title: "Favourites",

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
    card_view: "View",
    wa_prefill: "Hello, I'm interested in this product: {name} • Size: {size}",

    chat_title: "Ipordise Assistant",
    chat_sub: "Quick help to choose a scent.",
    chat_quick_reco: "Recommend for me",
    chat_quick_best: "Best sellers",
    chat_quick_delivery: "Delivery",
    chat_quick_payment: "Payment",
    chat_quick_whatsapp: "WhatsApp order",
    chat_ph: "Type a message…",
    chat_note: "Tip: write notes you like (vanilla, musk, fresh…). For real orders, use WhatsApp.",
    chat_hi: "Hi! I’m the IPORDISE assistant.\nI can help with recommendations, prices, delivery, payment, returns, and how to order. Tell me what you like (vanilla, musk, fresh, floral, oud…), or tap an option below.",
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
    ,notes_top: "Top notes"
    ,notes_heart: "Heart notes"
    ,notes_base: "Base notes"
    ,toast_title: "Flash deal 🎁"
    ,toast_meta: "Shop now before the offer ends"
    ,toast_cta: "Shop deals"
    ,toast_alt: "Best sellers"
    ,flash_title: "Flash Deals"
    ,flash_sub: "Limited-time offers • 24h only"
    ,flash_ends: "Ends in"
    ,flash_badge: "BEST PRICE"
  },

  fr: {
    nav_home: "Accueil",
    brand_tag: "Boutique de parfums",
    topbar_text: "عطور أصلية، جودة مضمونة، تجربة فريدة – IPORDISE",
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
    hero_cta_badge: "Explorer la collection",
    hero_desc: "Des parfums inspirés du patrimoine marocain. Pour femme, homme et unisex — avec livraison express au Maroc et support WhatsApp 24/7.",
    trust_auth: "100% Authentique",
    trust_delivery: "Livraison offerte dès 299 MAD+",
    trust_support: "Support WhatsApp 24/7",
    trust_auth_desc: "Parfums originaux provenant de fournisseurs fiables.",
    trust_delivery_desc: "Livraison rapide au Maroc avec emballage soigné.",
    trust_support_desc: "Recommandations rapides et aide à la commande à tout moment.",
    trust_returns: "Retours faciles",
    trust_returns_desc: "Échange simple si quelque chose ne convient pas.",
    concierge_title: "Recommandations personnalisées",
    concierge_desc: "Dites-nous les notes que vous aimez (vanille, musc, frais, floral, oud…) et on vous recommande le parfum idéal en quelques minutes.",
    concierge_cta_wa: "Discuter sur WhatsApp",
    concierge_cta_finder: "Essayer le Finder",
    cta_shop: "Acheter",
    cta_best: "Voir les best-sellers",
    stat_customers: "Clients satisfaits",
    stat_rating: "Note moyenne",
    stat_delivery: "Livraison express",
    sec_categories_title: "Parfums",
    sec_categories_desc: "Parcourez par catégorie, simple et clair.",
    sec_families_title: "Par familles olfactives",
    sec_families_desc: "Choisissez une vibe et découvrez les parfums adaptés.",
    family_fresh: "Frais",
    family_floral: "Floral",
    family_woody: "Boisé",
    family_oriental: "Oriental",
    family_gourmand: "Gourmand",
    sec_new_desc: "Des parfums fraîchement sélectionnés, juste pour vous.",
    sec_best_title: "Meilleures ventes",
    sec_best_desc: "Les choix préférés de nos clients.",
    quick_filters: "Filtres rapides :",
    quick_vanilla: "Vanille",
    quick_oud: "Oud",
    quick_fresh: "Frais",
    quick_musk: "Musc",
    quick_gift: "Cadeau",
    filter_label: "Voir : {cat}",
    sec_recent_title: "Récemment consultés",
    sec_recent_desc: "Reprenez là où vous vous êtes arrêté.",
    sec_deals_kicker: "OFFRE À DURÉE LIMITÉE",
    flash_text: "Achetez avant la fin de l’offre",
    sec_deals_title: "Gucci Intense Oud",
    sec_deals_desc: "Découvrez notre collection de parfums premium et trouvez votre parfum signature. Jusqu’à 20% de réduction sur une sélection.",
    sec_deals_cta: "Découvrir la collection",
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
    footer_payments: "Paiement",
    payment_cod: "Paiement à la livraison",
    footer_legal: "Mentions",
    footer_rights: "Tous droits réservés.",
    fav_title: "Favoris",

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
    card_view: "Voir",
    wa_prefill: "Bonjour, je suis intéressé par ce produit : {name} • Taille : {size}",

    chat_title: "Assistant Ipordise",
    chat_sub: "Aide rapide pour choisir.",
    chat_quick_reco: "Me recommander",
    chat_quick_best: "Best-sellers",
    chat_quick_delivery: "Livraison",
    chat_quick_payment: "Paiement",
    chat_quick_whatsapp: "Commander WhatsApp",
    chat_ph: "Écrire un message…",
    chat_note: "Astuce : écrivez les notes que vous aimez (vanille, musc, frais…). Pour commander, utilisez WhatsApp.",
    chat_hi: "Bonjour ! Je suis l’assistant IPORDISE.\nJe peux aider avec recommandations, prix, livraison, paiement, retours, et comment commander. Dites-moi ce que vous aimez (vanille, musc, frais, floral, oud…), ou choisissez une option ci-dessous.",
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
    ,notes_top: "Notes de tête"
    ,notes_heart: "Notes de cœur"
    ,notes_base: "Notes de fond"
    ,toast_title: "Offre flash 🎁"
    ,toast_meta: "Achetez avant la fin de l’offre"
    ,toast_cta: "Voir les promos"
    ,toast_alt: "Meilleures ventes"
    ,flash_title: "Offres Flash"
    ,flash_sub: "Offres limitées • 24h seulement"
    ,flash_ends: "Se termine dans"
    ,flash_badge: "MEILLEUR PRIX"
  },

  ar: {
    brand_tag: "متجر العطور",
    topbar_text: "عطور أصلية، جودة مضمونة، تجربة فريدة – IPORDISE",
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
    hero_cta_badge: "استكشف التشكيلة",
    hero_desc: "عطور مستوحاة من تراث المغرب. للنساء والرجال واليونيسكس — مع توصيل سريع داخل المغرب ودعم واتساب 24/7.",
    trust_auth: "100% أصلي",
    trust_delivery: "توصيل مجاني 299+ درهم",
    trust_support: "دعم واتساب 24/7",
    trust_auth_desc: "عطور أصلية من موردين موثوقين.",
    trust_delivery_desc: "توصيل سريع داخل المغرب مع تغليف آمن.",
    trust_support_desc: "اقتراحات سريعة ومساعدة في الطلب في أي وقت.",
    trust_returns: "إرجاع سهل",
    trust_returns_desc: "تبديل بدون تعقيد إذا كان هناك أي مشكل.",
    concierge_title: "اقتراحات مخصّصة",
    concierge_desc: "قول لينا النوتات اللي كتعجبك (فانيلا، مسك، فريش، زهري، عود…) وغادي نقترحو عليك الأنسب فدقايق.",
    concierge_cta_wa: "تواصل على واتساب",
    concierge_cta_finder: "جرّب Fragrance Finder",
    cta_shop: "تسوق الآن",
    cta_best: "شاهد الأكثر مبيعاً",
    stat_customers: "زبناء سعداء",
    stat_rating: "معدل التقييم",
    stat_delivery: "توصيل سريع",
    sec_categories_title: "العطور",
    sec_categories_desc: "تصفح حسب الأقسام بطريقة واضحة وسهلة.",
    sec_families_title: "تسوّق حسب العائلة العطرية",
    sec_families_desc: "اختار المود وغادي نوريك العطور المناسبة.",
    family_fresh: "فريش",
    family_floral: "زهري",
    family_woody: "خشبي",
    family_oriental: "شرقي",
    family_gourmand: "غورمون",
    sec_new_desc: "عطور مختارة بعناية، خصيصاً لك.",
    sec_best_title: "الأكثر مبيعاً",
    sec_best_desc: "اختيارات محبوبة عند الزبناء.",
    quick_filters: "فلاتر سريعة:",
    quick_vanilla: "فانيلا",
    quick_oud: "عود",
    quick_fresh: "فريش",
    quick_musk: "مسك",
    quick_gift: "هدية",
    filter_label: "التصنيف: {cat}",
    sec_recent_title: "شاهدت مؤخراً",
    sec_recent_desc: "كمّل منين وقفتي.",
    sec_deals_kicker: "عرض لفترة محدودة",
    flash_text: "تسوق الآن قبل انتهاء العرض",
    sec_deals_title: "Gucci Intense Oud",
    sec_deals_desc: "اكتشف مجموعتنا المختارة من العطور الفاخرة واعثر على عطرك المميز. خصم يصل إلى 20% على منتجات محددة.",
    sec_deals_cta: "تسوق المجموعة",
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
    footer_payments: "الدفع",
    payment_cod: "الدفع عند الاستلام",
    footer_legal: "قانوني",
    footer_rights: "جميع الحقوق محفوظة.",
    fav_title: "المفضلة",

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
    card_view: "شوف",
    wa_prefill: "مرحباً، أنا مهتم بهذا المنتج: {name} • الحجم: {size}",

    chat_title: "مساعد Ipordise",
    chat_sub: "مساعدة سريعة باش تختار.",
    chat_quick_reco: "اقترح عليا",
    chat_quick_best: "الأكثر مبيعاً",
    chat_quick_delivery: "التوصيل",
    chat_quick_payment: "الدفع",
    chat_quick_whatsapp: "طلب عبر واتساب",
    chat_ph: "كتب رسالة…",
    chat_note: "نصيحة: كتب النوتات اللي كتعجبك (فانيلا، مسك، فريش…). باش تطلب فعلاً استعمل واتساب.",
    chat_hi: "مرحبا! أنا مساعد IPORDISE.\nنقدر نعاونك فالاقتراحات، الأثمنة، التوصيل، الدفع، الإرجاع، وكيفاش تطلب. قول ليا شنو كتعجبك (فانيلا، مسك، فريش، فلورال، عود…) ولا اختار من الخيارات لتحت.",
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
    choose_size: "اختيار الحجم",
    notes_top: "النوتات العليا",
    notes_heart: "النوتات الوسطى",
    notes_base: "النوتات الأساسية",
    back_to_home: "الرجوع للرئيسية"
    ,toast_title: "عرض خاطف 🎁"
    ,toast_meta: "تسوق الآن قبل انتهاء العرض"
    ,toast_cta: "تسوق العروض"
    ,toast_alt: "الأكثر مبيعاً"
    ,flash_title: "عروض فلاش"
    ,flash_sub: "عروض محدودة • فقط 24 ساعة"
    ,flash_ends: "ينتهي خلال"
    ,flash_badge: "أفضل سعر"
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
  if (label) {
    const flag = (currentLang==='fr')?'🇫🇷':(currentLang==='ar'?'🇲🇦':'🇺🇸');
    // Use innerHTML to show flag + code
    label.innerHTML = `<span class="flag" aria-hidden="true">${flag}</span>${currentLang.toUpperCase()}`;
  }

  // Hero slider is now background-based; no language swap needed

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
  renderFlashDeals();
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

function isMobileView(){
  try{
    return !!window.matchMedia && window.matchMedia("(max-width: 860px)").matches;
  }catch{
    return (window.innerWidth || 0) <= 860;
  }
}

function syncViewportClasses(){
  const mobile = isMobileView();
  document.body.classList.toggle("is-mobile", mobile);
  document.body.classList.toggle("is-desktop", !mobile);
}

function getProductPrice(p, variantSize = null) {
  if (!p) return 0;
  if (p.price != null && !variantSize) return p.price;
  if (!p.variants || p.variants.length === 0) return p.price || 0;

  let variant;
  if (variantSize) {
    variant = p.variants.find(v => v.size === variantSize);
  }
  // Default to the first variant if no size is given or if the size is not found
  if (!variant) variant = p.variants[0];

  return variant ? (variant.price || 0) : 0;
}

// Price overrides (ensures critical prices stay correct even if products.json loads from an older online copy)
const PRODUCT_VARIANT_PRICE_OVERRIDES = {
  // Jean Paul Gaultier Le Male Elixir
  p16: { '10ml': 110, '20ml': 200, '30ml': 290 },
  // Jean Paul Gaultier – Le Male Le Parfum
  p21: { '10ml': 110, '20ml': 190, '30ml': 275 }
};

// Ensure featured/custom products exist even if products.json comes from an older copy
const ALL_DAY_PRODUCT = {
  id: "p30",
  brand: "IPORDISE",
  name: "All Day",
  category: "unisex",
  isNew: true,
  description: "All Day is a clean and versatile unisex fragrance designed to stay with you from morning to night. Soft, elegant, and easy to wear, it’s perfect for everyday use — office, outings, and special moments.\n\nLong-lasting freshness • Smooth dry-down • Easy signature scent.",
  description_fr: "All Day est un parfum unisex propre et polyvalent, conçu pour vous accompagner du matin au soir. Doux, élégant et facile à porter, il est parfait au quotidien — bureau, sorties et moments spéciaux.\n\nFraîcheur longue tenue • Fond doux • Parfum signature facile.",
  description_ar: "All Day هو عطر يونيكس نظيف ومتعدد الاستخدامات، مصمم ليدوم معك من الصباح إلى الليل. ناعم وأنيق وسهل الاستخدام، مناسب لليوميات — العمل، الخروج والمناسبات.\n\nانتعاش طويل • ثبات مريح • عطر مميز وسهل.",
  image: "https://raw.githubusercontent.com/ipordiseparfum-hash/ipordiseparfum/refs/heads/main/logo.jpeg",
  variants: [
    { size: "10ml", price: 90 },
    { size: "20ml", price: 180 },
    { size: "30ml", price: 270 }
  ],
  rating: 4.7,
  reviews: 0,
  tag: "All Day",
  notes: ["fresh", "clean", "musk", "amber"]
};

function ensureAllDayProduct(){
  try{
    if (!Array.isArray(PRODUCTS)) return;
    if (PRODUCTS.some(p => String(p?.id) === "p30")) return;
    PRODUCTS.push({ ...ALL_DAY_PRODUCT });
  }catch{/* noop */}
}

function applyVariantPriceOverrides(p){
  if (!p || !p.id) return;
  const ov = PRODUCT_VARIANT_PRICE_OVERRIDES[String(p.id)];
  if (!ov) return;

  const order = ['10ml', '20ml', '30ml'];
  const updated = [];
  for (const size of order){
    if (ov[size] == null) continue;
    updated.push({ size, price: ov[size] });
  }

  const existing = Array.isArray(p.variants) ? p.variants : [];
  const extras = existing.filter(v => v && v.size && ov[String(v.size)] == null);
  p.variants = [...updated, ...extras];
  if (ov['10ml'] != null) p.price = ov['10ml'];
}

// ---------- Products ----------
let PRODUCTS = [];

function normalizeSortValue(v){
  const val = String(v || "").trim();
  if (val === "price-asc") return "price_asc";
  if (val === "price-desc") return "price_desc";
  if (val === "rating-desc") return "rating";
  return val || "featured";
}

async function fetchJson(url){
  const res = await fetch(url, { cache:"no-store" });
  if (!res.ok) throw new Error(`Fetch failed: ${url} (${res.status})`);
  return res.json();
}

async function loadProducts(){
  const sources = [
    // Local file (recommended when hosted via a web server)
    "products.json",
    // Online fallback (works even when opening index.html directly via file://)
    "https://raw.githubusercontent.com/ipordiseparfum-hash/ipordiseparfum/refs/heads/main/products.json",
    "https://raw.githubusercontent.com/ipordiseparfum-hash/ipordiseparfum/main/products.json"
  ];

  let lastErr;
  for (const url of sources){
    try{
      const data = await fetchJson(url);
      const list = Array.isArray(data) ? data : (data && Array.isArray(data.products) ? data.products : null);
      if (Array.isArray(list) && list.length){
        PRODUCTS = list;
        try{ PRODUCTS.forEach(applyVariantPriceOverrides); }catch(e){/* noop */}
        ensureAllDayProduct();
        return;
      }
    }catch(e){
      lastErr = e;
    }
  }

  // Fallback if all sources fail
  PRODUCTS = [
    { id:"p1", brand:"IPORDISE", name:"Vanilla Bloom Eau de Parfum", category:"women", price:299, rating:4.7, reviews:1852, tag:"Best Seller", notes:["vanilla","amber","sweet"], image:"assets/logo.svg" },
    { id:"p2", brand:"IPORDISE", name:"Oud Royal Eau de Parfum", category:"men", price:349, rating:4.6, reviews:940, tag:"Popular", notes:["oud","woody","amber"], image:"assets/logo.svg" },
    { id:"p3", brand:"IPORDISE", name:"Musk & Rose Eau de Parfum", category:"unisex", price:319, rating:4.5, reviews:610, tag:"Unisex", notes:["musk","rose","powdery"], image:"assets/logo.svg" },
    { id:"p4", brand:"IPORDISE", name:"Gift Set — Signature Trio", category:"gift", price:499, rating:4.8, reviews:210, tag:"Gift", notes:["vanilla","musk","woody"], image:"assets/logo.svg" },
    { id:"p5", brand:"IPORDISE", name:"Home Diffuser — Amber Nights", category:"home", price:259, rating:4.4, reviews:180, tag:"Home", notes:["amber","warm","sweet"], image:"assets/logo.svg" },
    { id:"p6", brand:"IPORDISE", name:"Travel Spray — Fresh Citrus", category:"travel", price:149, rating:4.3, reviews:95, tag:"Travel", notes:["citrus","fresh","clean"], image:"assets/logo.svg" }
  ];
  ensureAllDayProduct();
  console.warn("Using fallback products list (could not load products.json)", lastErr);
}

// ---------- State ----------
let state = {
  filter: "all",
  search: "",
  lastFilterBeforeSearch: null,
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
const chatbotReset = document.getElementById("chatbotReset");
const chatbotMsgs = document.getElementById("chatbotMsgs");
const chatbotForm = document.getElementById("chatbotForm");

// Search dropdown UI
const searchBox = document.querySelector(".search");
let searchResultsEl = null;
let searchActiveIndex = -1;

function ensureSearchResultsEl(){
  if (!searchBox || searchResultsEl) return;
  searchResultsEl = document.createElement("div");
  searchResultsEl.className = "search__results";
  searchResultsEl.setAttribute("role", "listbox");
  searchResultsEl.id = "searchResults";
  searchBox.appendChild(searchResultsEl);
  elSearch?.setAttribute("aria-controls", "searchResults");
}

function hideSearchResults(){
  if (!searchResultsEl) return;
  searchResultsEl.classList.remove("is-open");
  searchResultsEl.innerHTML = "";
  searchActiveIndex = -1;
  elSearch?.setAttribute("aria-expanded", "false");
}

function getSearchNoResultsText(){
  if (currentLang === "ar") return "ما لقيّنا حتى منتوج";
  if (currentLang === "fr") return "Aucun produit trouvé";
  return "No products found";
}

function getSearchMatches(query, limit = 6){
  const q = normalizeChatText(query);
  if (!q) return [];
  const qTokens = q.split(" ").filter(Boolean);
  if (!qTokens.length || isGenericSearch(qTokens)) return [];

  const scored = PRODUCTS.map(p => {
    const hay = buildSearchHaystack(p);
    if (!hay) return null;
    let score = 0;
    if (q.length >= 3 && hay.includes(q)) score += 6;
    qTokens.forEach(t => { if (hay.includes(t)) score += 2; });
    const nameNorm = normalizeChatText(p?.name || "");
    if (nameNorm.includes(q)) score += 4;
    score += (p.rating || 0) * 0.05;
    return score > 0 ? { p, score } : null;
  }).filter(Boolean);

  scored.sort((a,b)=> b.score - a.score);
  return scored.slice(0, limit).map(x => x.p);
}

function renderSearchResults(query){
  ensureSearchResultsEl();
  if (!searchResultsEl) return;
  const matches = getSearchMatches(query, 6);
  searchActiveIndex = -1;

  if (!query || !matches.length){
    if (query && matches.length === 0){
      searchResultsEl.innerHTML = `<div class="search__empty">${getSearchNoResultsText()}</div>`;
      searchResultsEl.classList.add("is-open");
      elSearch?.setAttribute("aria-expanded", "true");
      return;
    }
    hideSearchResults();
    return;
  }

  searchResultsEl.innerHTML = matches.map(p=>{
    const variants = Array.isArray(p?.variants) ? p.variants : [];
    const sizes = variants.map(v => String(v?.size || "")).filter(Boolean);
    const defaultSize = sizes.includes("10ml") ? "10ml" : (sizes[0] || "");
    const href = `product.html?id=${encodeURIComponent(p.id)}${defaultSize ? `&size=${encodeURIComponent(defaultSize)}` : ""}`;
    const image = p.image || "assets/logo.svg";
    const brand = escapeHtml(p.brand || "");
    const name = escapeHtml(p.name || "");
    const price = formatMoney(getProductPrice(p, defaultSize || null));
    const meta = defaultSize ? `${escapeHtml(defaultSize)} • ${price}` : price;
    return `
      <a class="search__item" role="option" href="${href}" data-search-item>
        <img class="search__thumb" src="${escapeHtml(image)}" alt="" loading="lazy" width="36" height="36" />
        <div class="search__info">
          <div class="search__name">${name}</div>
          <div class="search__meta">${brand} • ${meta}</div>
        </div>
      </a>
    `;
  }).join("");

  searchResultsEl.classList.add("is-open");
  elSearch?.setAttribute("aria-expanded", "true");
}
const chatbotInput = document.getElementById("chatbotInput");
const chatbotQuick = document.getElementById("chatbotQuick");
let chatHasStarted = false;
const chatbotBadge = document.getElementById("chatbotBadge");
const chatbotAttention = document.getElementById("chatbotAttention");
const chatbotAttentionText = document.getElementById("chatbotAttentionText");
const chatbotAttentionClose = document.getElementById("chatbotAttentionClose");
const chatbotOverlay = document.getElementById("chatbotOverlay");
const chatbotPanel = chatbot?.querySelector?.(".chatbot__panel");
const chatbotHead = chatbot?.querySelector?.('.chatbot__head');

// bottom nav
const bottomNav = document.getElementById("bottomNav");

// toast
const toastStack = document.getElementById('toastStack');

// flash deals
const flashDealsViewport = document.getElementById("flashDealsViewport");
const flashDealsTrack = document.getElementById("flashDealsTrack");
const flashPrevBtn = document.querySelector("[data-flash-prev]");
const flashNextBtn = document.querySelector("[data-flash-next]");

// best sellers carousel
const bestViewport = document.getElementById("bestViewport");
const bestPrevBtn = document.querySelector("[data-best-prev]");
const bestNextBtn = document.querySelector("[data-best-next]");

// recently viewed
const recentSection = document.getElementById("recent");
const recentViewport = document.getElementById("recentViewport");
const recentGrid = document.getElementById("recentGrid");
const recentPrevBtn = document.querySelector("[data-recent-prev]");
const recentNextBtn = document.querySelector("[data-recent-next]");

const RECENTLY_VIEWED_KEY = 'ipordise_recently_viewed_v1';

function getRecentlyViewedIds(){
  try{
    const raw = JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || '[]');
    if (!Array.isArray(raw)) return [];
    return raw.map(String).filter(Boolean);
  }catch{
    return [];
  }
}

function addRecentlyViewed(productId){
  const id = String(productId || '').trim();
  if (!id) return;
  const prev = getRecentlyViewedIds();
  const next = [id, ...prev.filter(x => x !== id)].slice(0, 14);
  try{ localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(next)); }catch{}
}

// expose for product page
window.addRecentlyViewed = addRecentlyViewed;

const _delegatedContainers = new WeakSet();
function bindProductCardDelegation(containerEl){
  if (!containerEl) return;
  if (_delegatedContainers.has(containerEl)) return;
  _delegatedContainers.add(containerEl);

  containerEl.addEventListener('click', (e)=>{
    // Record clicks on product links as viewed
    const linkEl = e.target.closest('a[data-card-link]');
    if (linkEl && containerEl.contains(linkEl)){
      const card = linkEl.closest('.flashCard[data-card-id]');
      const id = card?.getAttribute('data-card-id');
      if (id) addRecentlyViewed(id);
      return; // allow navigation
    }

    const wishBtn = e.target.closest('[data-wishlist]');
    if (wishBtn && containerEl.contains(wishBtn)){
      e.preventDefault();
      e.stopPropagation();
      const id = wishBtn.getAttribute('data-wishlist');
      const isAdded = wishlist.toggle(id);
      wishBtn.classList.toggle('active', isAdded);
      updateFavBadge();
      renderFavDrawer();
      const svg = wishBtn.querySelector('svg');
      if (svg) svg.setAttribute('fill', isAdded ? 'currentColor' : 'none');
      return;
    }

    const sizeBtn = e.target.closest('.flashSize[data-card-size]');
    if (sizeBtn && containerEl.contains(sizeBtn)){
      e.preventDefault();
      e.stopPropagation();
      const card = sizeBtn.closest('.flashCard[data-card-id]');
      const id = card?.getAttribute('data-card-id');
      const size = sizeBtn.getAttribute('data-card-size');
      if (!card || !id || !size) return;
      const p = PRODUCTS.find(x => String(x?.id) === String(id));
      if (!p) return;

      card.setAttribute('data-card-size', size);
      card.querySelectorAll('.flashSize[data-card-size]').forEach(b=>{
        const on = (b.getAttribute('data-card-size') === size);
        b.classList.toggle('active', on);
        b.setAttribute('aria-checked', on ? 'true' : 'false');
      });

      const price = getProductPrice(p, size);
      const oldEl = card.querySelector('.flashCard__old');
      const newEl = card.querySelector('.flashCard__new');
      if (oldEl) oldEl.textContent = formatMoney(price);
      if (newEl) newEl.textContent = formatMoney(price);

      const link = card.querySelector('[data-card-link]');
      if (link) link.setAttribute('href', `product.html?id=${encodeURIComponent(id)}&size=${encodeURIComponent(size)}`);
      return;
    }

    const addBtn = e.target.closest('[data-card-add]');
    if (addBtn && containerEl.contains(addBtn)){
      e.preventDefault();
      e.stopPropagation();
      const card = addBtn.closest('.flashCard[data-card-id]');
      const id = card?.getAttribute('data-card-id');
      const size = (card?.getAttribute('data-card-size') || '').trim();
      if (!id) return;
      const p = PRODUCTS.find(x => String(x?.id) === String(id));
      if (!p) return;
      addToCart(p, size || null);
      return;
    }
  }, { passive: false });
}

function updateRecentArrows(){
  if (!recentViewport || !recentPrevBtn || !recentNextBtn) return;
  const maxScroll = recentViewport.scrollWidth - recentViewport.clientWidth;
  const x = recentViewport.scrollLeft;
  const atStart = x <= 2;
  const atEnd = x >= (maxScroll - 2);
  recentPrevBtn.disabled = atStart;
  recentNextBtn.disabled = atEnd;
}

function initRecentlyViewed(){
  if (!recentSection || !recentGrid || !recentViewport) return;

  const ids = getRecentlyViewedIds();
  const items = ids.map(id => PRODUCTS.find(p => String(p?.id) === String(id))).filter(Boolean);

  if (!items.length){
    recentSection.hidden = true;
    return;
  }

  recentSection.hidden = false;
  recentGrid.innerHTML = items.map(productCard).join('');
  observeAnimatableElements();
  bindProductCardDelegation(recentGrid);

  updateRecentArrows();
  recentViewport.addEventListener('scroll', throttle(updateRecentArrows, 120));
  window.addEventListener('resize', throttle(updateRecentArrows, 150));

  recentPrevBtn?.addEventListener('click', ()=>{
    const delta = Math.round(recentViewport.clientWidth * 0.85);
    recentViewport.scrollBy({ left: -delta, behavior: 'smooth' });
  });
  recentNextBtn?.addEventListener('click', ()=>{
    const delta = Math.round(recentViewport.clientWidth * 0.85);
    recentViewport.scrollBy({ left: delta, behavior: 'smooth' });
  });
}

function updateBestArrows(){
  if (!bestViewport || !bestPrevBtn || !bestNextBtn) return;
  const maxScroll = bestViewport.scrollWidth - bestViewport.clientWidth;
  const x = bestViewport.scrollLeft;
  const atStart = x <= 2;
  const atEnd = x >= (maxScroll - 2);
  bestPrevBtn.disabled = atStart;
  bestNextBtn.disabled = atEnd;
}

function initBestSellersCarousel(){
  if (!bestViewport) return;

  updateBestArrows();

  bestViewport.addEventListener("scroll", throttle(updateBestArrows, 120));
  window.addEventListener("resize", throttle(updateBestArrows, 150));

  bestPrevBtn?.addEventListener("click", ()=>{
    const delta = Math.round(bestViewport.clientWidth * 0.85);
    bestViewport.scrollBy({ left: -delta, behavior: "smooth" });
  });
  bestNextBtn?.addEventListener("click", ()=>{
    const delta = Math.round(bestViewport.clientWidth * 0.85);
    bestViewport.scrollBy({ left: delta, behavior: "smooth" });
  });

  bestViewport.addEventListener("keydown", (e)=>{
    if (e.key === "ArrowLeft") { e.preventDefault(); bestPrevBtn?.click(); }
    if (e.key === "ArrowRight") { e.preventDefault(); bestNextBtn?.click(); }
  });

  // Desktop drag-to-scroll only (avoid fighting native mobile swipe)
  const enableDrag = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (enableDrag){
    let isPointerDown = false;
    let didDrag = false;
    let startX = 0;
    let startScrollLeft = 0;

    bestViewport.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      if (e.target.closest('button, a, input, select, textarea, [role="button"]')) return;
      isPointerDown = true;
      didDrag = false;
      startX = e.clientX;
      startScrollLeft = bestViewport.scrollLeft;
      bestViewport.setPointerCapture?.(e.pointerId);
    });
    bestViewport.addEventListener('pointermove', (e) => {
      if (!isPointerDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) didDrag = true;
      bestViewport.scrollLeft = startScrollLeft - dx;
    });
    const endDrag = () => {
      isPointerDown = false;
      setTimeout(() => { didDrag = false; }, 0);
    };
    bestViewport.addEventListener('pointerup', endDrag);
    bestViewport.addEventListener('pointercancel', endDrag);
    bestViewport.addEventListener('click', (e) => {
      if (!didDrag) return;
      e.preventDefault();
      e.stopPropagation();
    }, true);
  }

  // Autoplay: smooth slide card-by-card (pause on interaction)
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  let autoTimer = null;
  let resumeTimer = null;
  let autoScrollingUntil = 0;
  let isPointerActive = false;
  let isHovering = false;
  let hasFocus = false;

  const IDLE_RESUME_MS = 2200;

  const getStep = () => {
    const firstCard = document.querySelector('#productGrid > .flashCard, #productGrid > .card, #productGrid > article');
    if (!firstCard) return Math.round(bestViewport.clientWidth * 0.85);
    const cardW = firstCard.getBoundingClientRect().width || 252;
    const gap = parseFloat(getComputedStyle(document.getElementById('productGrid')).gap || '14') || 14;
    return Math.round(cardW + gap);
  };

  const tick = () => {
    if (!bestViewport) return;
    const maxScroll = bestViewport.scrollWidth - bestViewport.clientWidth;
    const x = bestViewport.scrollLeft;
    const atEnd = x >= (maxScroll - 6);

    // Ignore scroll events caused by our own smooth scrolling
    autoScrollingUntil = Date.now() + 900;

    if (atEnd) {
      bestViewport.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      bestViewport.scrollBy({ left: getStep(), behavior: 'smooth' });
    }
  };

  const startAuto = () => {
    if (autoTimer) return;
    autoTimer = setInterval(tick, 3200);
  };
  const stopAuto = () => {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  };

  const scheduleResume = () => {
    if (resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      // Only resume when user is clearly idle
      if (isPointerActive || isHovering || hasFocus) return;
      startAuto();
    }, IDLE_RESUME_MS);
  };

  const userActivity = () => {
    stopAuto();
    scheduleResume();
  };

  // Start after initial paint (ensures widths are correct)
  requestAnimationFrame(() => startAuto());

  // Pause autoplay while the user is interacting; resume only after idle.
  bestViewport.addEventListener('pointerdown', () => {
    isPointerActive = true;
    userActivity();
  }, { passive: true });
  bestViewport.addEventListener('pointerup', () => {
    isPointerActive = false;
    scheduleResume();
  }, { passive: true });
  bestViewport.addEventListener('pointercancel', () => {
    isPointerActive = false;
    scheduleResume();
  }, { passive: true });

  bestViewport.addEventListener('touchstart', () => {
    isPointerActive = true;
    userActivity();
  }, { passive: true });
  bestViewport.addEventListener('touchend', () => {
    isPointerActive = false;
    scheduleResume();
  }, { passive: true });
  bestViewport.addEventListener('touchcancel', () => {
    isPointerActive = false;
    scheduleResume();
  }, { passive: true });

  bestViewport.addEventListener('wheel', () => userActivity(), { passive: true });

  // If the user is scrolling (dragging/swiping), keep postponing resume until idle.
  bestViewport.addEventListener('scroll', () => {
    if (Date.now() < autoScrollingUntil) return;
    userActivity();
  }, { passive: true });

  bestViewport.addEventListener('mouseenter', () => {
    isHovering = true;
    stopAuto();
  }, { passive: true });
  bestViewport.addEventListener('mouseleave', () => {
    isHovering = false;
    scheduleResume();
  }, { passive: true });
  bestViewport.addEventListener('focusin', () => {
    hasFocus = true;
    stopAuto();
  }, { passive: true });
  bestViewport.addEventListener('focusout', () => {
    hasFocus = false;
    scheduleResume();
  }, { passive: true });
}

// ========================================
// WISHLIST SYSTEM
// ========================================
const wishlist = {
  key: 'ipordise_wishlist',
  items: new Set(),
  
  init() {
    try {
      const saved = JSON.parse(localStorage.getItem(this.key) || '[]');
      this.items = new Set(saved);
    } catch {
      this.items = new Set();
    }
  },
  
  add(productId) {
    this.items.add(productId);
    this.save();
  },
  
  remove(productId) {
    this.items.delete(productId);
    this.save();
  },
  
  toggle(productId) {
    if (this.items.has(productId)) {
      this.remove(productId);
      return false;
    } else {
      this.add(productId);
      return true;
    }
  },
  
  has(productId) {
    return this.items.has(productId);
  },
  
  count() { return this.items.size; },

  list() { return [...this.items]; },

  save() {
    localStorage.setItem(this.key, JSON.stringify([...this.items]));
    try{ updateFavBadge(); renderFavDrawer(); }catch(e){ /* noop */ }
  }
};

// Initialize wishlist
wishlist.init();

// ========================================
// FAVOURITES (Drawer)
// ========================================
function updateFavBadge(){
  const el = document.getElementById('favCount');
  if (!el) return;
  const c = wishlist.count();
  el.textContent = String(c);
  el.style.display = c ? 'inline-flex' : 'none';
  const btn = document.getElementById('btnFav');
  if (btn) btn.classList.toggle('has-items', !!c);
}

function favRowHTML(p){
  const name = escapeHtml(p?.name || '');
  const brand = escapeHtml(p?.brand || '');
  const img = escapeHtml(p?.image || '');
  const price = formatMoney(getProductPrice(p));
  const href = `product.html?id=${encodeURIComponent(p.id)}`;
  return `
    <div class="cartItem favItem">
      <a class="cartItem__img" href="${href}">
        <img src="${img}" alt="${name}" loading="lazy">
      </a>
      <div class="cartItem__meta">
        <div class="cartItem__name">${name}</div>
        <div class="muted small">${brand}</div>
        <div class="cartItem__price"><strong>${price}</strong></div>
      </div>
      <div class="cartItem__actions">
        <button class="icon-btn" type="button" data-fav-remove="${escapeHtml(p.id)}" aria-label="Remove from favourites" title="Remove">
          <span class="icon icon--close" aria-hidden="true"></span>
        </button>
      </div>
    </div>`;
}

function renderFavDrawer(){
  const wrap = document.getElementById('favItems');
  if (!wrap) return;
  const ids = wishlist.list();
  if (!ids.length){
    wrap.innerHTML = `
      <div class="fav-empty">
        <div class="fav-empty__icon" aria-hidden="true">♡</div>
        <div class="fav-empty__text">${currentLang==='ar' ? 'ما كاين حتى مفضل حالياً' : (currentLang==='fr' ? 'Aucun favori pour le moment' : 'No favourites yet')}</div>
        <a href="index.html#best" class="btn btn--primary btn--full fav-empty__cta">${currentLang==='ar' ? 'تسوق دابا' : (currentLang==='fr' ? 'Découvrir' : 'Shop now')}</a>
      </div>`;
    return;
  }
  const items = ids
    .map(id => PRODUCTS.find(p => String(p.id) === String(id)))
    .filter(Boolean);
  wrap.innerHTML = items.map(favRowHTML).join('');
}

function openFavDrawer(){
  const drawer = document.getElementById('favDrawer');
  if (!drawer) return;
  drawer.setAttribute('aria-hidden','false');
  drawer.classList.add('open');
  renderFavDrawer();
}
function closeFavDrawer(){
  const drawer = document.getElementById('favDrawer');
  if (!drawer) return;
  drawer.setAttribute('aria-hidden','true');
  drawer.classList.remove('open');
}

(function initFavDrawer(){
  const btn = document.getElementById('btnFav');
  btn?.addEventListener('click', openFavDrawer);
  document.addEventListener('click', (e)=>{
    const t = e.target;
    if (t && t.closest('[data-close-fav]')) closeFavDrawer();
    const rm = t && t.closest('[data-fav-remove]');
    if (rm){
      const id = rm.getAttribute('data-fav-remove');
      wishlist.remove(id);
      // sync any visible heart buttons
      document.querySelectorAll(`[data-wishlist="${CSS.escape(String(id))}"]`).forEach(b=>b.classList.remove('active'));
      updateFavBadge();
      renderFavDrawer();
    }
  });
  document.getElementById('btnClearFav')?.addEventListener('click', ()=>{
    wishlist.items = new Set();
    wishlist.save();
    // sync hearts
    document.querySelectorAll('[data-wishlist]').forEach(b=>b.classList.remove('active'));
    updateFavBadge();
    renderFavDrawer();
  });
  updateFavBadge();
})();


// ========================================
// FLASH DEALS (Carousel)
// ========================================
const FLASH_DEALS_CONFIG = [
  { id: "p16", discount: 25 },
  { id: "p21", discount: 25 }
];

const FLASH_DEAL_PRICE_OVERRIDES = {
  // Le Male Elixir (flash offer prices)
  p16: { '10ml': 90, '20ml': 180, '30ml': 270 },
  // Le Male Le Parfum (flash offer prices)
  p21: { '10ml': 90, '20ml': 170, '30ml': 255 }
};

let flashCountdownInterval = null;

function getPreferredFlashSizes(p){
  const variants = Array.isArray(p?.variants) ? p.variants : [];
  const sizes = variants.map(v => String(v?.size || "")).filter(Boolean);
  if (!sizes.length) return [];

  const preferredOrder = ["10ml", "30ml", "50ml", "20ml"];
  const picked = [];
  for (const s of preferredOrder){
    if (sizes.includes(s) && !picked.includes(s)) picked.push(s);
  }
  for (const s of sizes){
    if (picked.length >= 3) break;
    if (!picked.includes(s)) picked.push(s);
  }
  return picked.slice(0, 3);
}

function computeDiscountedPrice(price, percent){
  const p = Number(price || 0);
  const d = Number(percent || 0);
  return Math.max(0, Math.round(p * (1 - d / 100)));
}

function getFlashDealPrice(p, size, discount){
  const ov = FLASH_DEAL_PRICE_OVERRIDES[String(p?.id)];
  if (ov && size && ov[String(size)] != null) return Number(ov[String(size)]) || 0;
  return computeDiscountedPrice(getProductPrice(p, size), discount);
}

function getFlashDealList(){
  const out = [];
  for (const cfg of FLASH_DEALS_CONFIG){
    const p = PRODUCTS.find(x => String(x?.id) === String(cfg.id));
    if (p) out.push({ product: p, discount: cfg.discount });
  }

  // No fallback: Flash Deals should only show the configured products.
  return out;
}

function renderFlashDeals(){
  if (!flashDealsTrack) return;

  const deals = getFlashDealList();
  if (!deals.length){
    flashDealsTrack.innerHTML = "";
    return;
  }

  flashDealsTrack.innerHTML = deals.map(({ product: p, discount })=>{
    const brand = escapeHtml((p.brand || "").toUpperCase());
    const name = escapeHtml(p.name || "");
    const img = escapeHtml(p.image || "assets/logo.svg");

    const sizes = getPreferredFlashSizes(p);
    const defaultSize = sizes.includes("10ml") ? "10ml" : (sizes[0] || null);
    const basePrice = getProductPrice(p, defaultSize);
    const newPrice = getFlashDealPrice(p, defaultSize, discount);

    const isWishlisted = wishlist.has(p.id);
    const href = `product.html?id=${encodeURIComponent(p.id)}${defaultSize ? `&size=${encodeURIComponent(defaultSize)}` : ""}`;

    const addLabel = currentLang === 'fr' ? 'Ajouter' : (currentLang === 'ar' ? 'زيد للسلة' : 'Add to cart');

    return `
      <article class="flashCard" role="listitem" data-flash-id="${escapeHtml(p.id)}" data-flash-discount="${escapeHtml(discount)}" data-flash-size="${escapeHtml(defaultSize || "")}">
        <div class="flashCard__top" aria-hidden="true">
          <span class="flashCard__badge">${escapeHtml(t("flash_badge"))}</span>
          <span class="flashCard__off">-${escapeHtml(discount)}%</span>
        </div>

        <button class="flashCard__wish ${isWishlisted ? "active" : ""}" data-wishlist="${escapeHtml(p.id)}" aria-label="Add to wishlist" title="Add to wishlist" type="button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWishlisted ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <a class="flashCard__link" data-flash-link href="${href}" aria-label="Open product">
          <div class="flashCard__media">
            <img class="flashCard__img" src="${img}" alt="${name}" loading="lazy" decoding="async" width="220" height="220" />
          </div>
        </a>

        <div class="flashCard__inner">
          <div class="flashCard__brand">${brand}</div>
          <div class="flashCard__title">${name}</div>

          <div class="flashCard__prices" aria-label="Pricing">
            <span class="flashCard__old">${formatMoney(basePrice)}</span>
            <span class="flashCard__new">${formatMoney(newPrice)}</span>
          </div>

          ${sizes.length ? `
            <div class="flashCard__sizes" role="radiogroup" aria-label="Choose size">
              ${sizes.map(s=>{
                const active = (s === defaultSize) ? "active" : "";
                return `<button class="flashSize ${active}" type="button" data-flash-size="${escapeHtml(s)}" role="radio" aria-checked="${s===defaultSize}">${escapeHtml(s)}</button>`;
              }).join("")}
            </div>
          ` : ""}

          <div class="flashCard__actions">
            <button class="flashAdd" type="button" data-flash-add="${escapeHtml(p.id)}">${escapeHtml(addLabel)}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  updateFlashArrows();
}

function updateFlashArrows(){
  if (!flashDealsViewport || !flashPrevBtn || !flashNextBtn) return;
  const maxScroll = flashDealsViewport.scrollWidth - flashDealsViewport.clientWidth;
  const x = flashDealsViewport.scrollLeft;
  const atStart = x <= 2;
  const atEnd = x >= (maxScroll - 2);
  flashPrevBtn.disabled = atStart;
  flashNextBtn.disabled = atEnd;
}

function initFlashDeals(){
  if (!flashDealsViewport || !flashDealsTrack) return;

  renderFlashDeals();

  flashDealsViewport.addEventListener("scroll", throttle(updateFlashArrows, 120));
  window.addEventListener("resize", throttle(updateFlashArrows, 150));

  flashPrevBtn?.addEventListener("click", ()=>{
    const delta = Math.round(flashDealsViewport.clientWidth * 0.85);
    flashDealsViewport.scrollBy({ left: -delta, behavior: "smooth" });
  });
  flashNextBtn?.addEventListener("click", ()=>{
    const delta = Math.round(flashDealsViewport.clientWidth * 0.85);
    flashDealsViewport.scrollBy({ left: delta, behavior: "smooth" });
  });

  flashDealsViewport.addEventListener("keydown", (e)=>{
    if (e.key === "ArrowLeft") { e.preventDefault(); flashPrevBtn?.click(); }
    if (e.key === "ArrowRight") { e.preventDefault(); flashNextBtn?.click(); }
  });

  // Desktop drag-to-scroll (keeps mobile native swipe)
  let isPointerDown = false;
  let didDrag = false;
  let startX = 0;
  let startScrollLeft = 0;

  flashDealsViewport.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    if (e.target.closest('button, a, input, select, textarea, [role="button"]')) return;
    isPointerDown = true;
    didDrag = false;
    startX = e.clientX;
    startScrollLeft = flashDealsViewport.scrollLeft;
    flashDealsViewport.setPointerCapture?.(e.pointerId);
  });

  flashDealsViewport.addEventListener('pointermove', (e) => {
    if (!isPointerDown) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) didDrag = true;
    flashDealsViewport.scrollLeft = startScrollLeft - dx;
  });

  const endDrag = () => {
    isPointerDown = false;
    setTimeout(() => { didDrag = false; }, 0);
  };
  flashDealsViewport.addEventListener('pointerup', endDrag);
  flashDealsViewport.addEventListener('pointercancel', endDrag);

  // Prevent accidental click-through after dragging
  flashDealsViewport.addEventListener('click', (e) => {
    if (!didDrag) return;
    e.preventDefault();
    e.stopPropagation();
  }, true);

  // Event delegation for wishlist + size selector
  flashDealsTrack.addEventListener("click", (e)=>{
    const wishBtn = e.target.closest("[data-wishlist]");
    if (wishBtn){
      const id = wishBtn.getAttribute("data-wishlist");
      const isAdded = wishlist.toggle(id);
      wishBtn.classList.toggle("active", isAdded);
      updateFavBadge();
      renderFavDrawer();
      updateFavBadge();
      renderFavDrawer();
      updateFavBadge();
      renderFavDrawer();
      const svg = wishBtn.querySelector("svg");
      if (svg) svg.setAttribute("fill", isAdded ? "currentColor" : "none");
      return;
    }

    const addBtn = e.target.closest("[data-flash-add]");
    if (addBtn){
      const card = addBtn.closest('.flashCard');
      const id = card?.getAttribute('data-flash-id');
      const size = (card?.getAttribute('data-flash-size') || '').trim();
      if (!id) return;
      const p = PRODUCTS.find(x => String(x?.id) === String(id));
      if (!p) return;
      addToCart(p, size || null);
      return;
    }

    const sizeBtn = e.target.closest(".flashSize[data-flash-size]");
    if (!sizeBtn) return;

    const card = sizeBtn.closest(".flashCard");
    if (!card) return;

    const id = card.getAttribute("data-flash-id");
    const discount = Number(card.getAttribute("data-flash-discount") || 0);
    const size = sizeBtn.getAttribute("data-flash-size");
    if (!id || !size) return;

    const p = PRODUCTS.find(x => String(x?.id) === String(id));
    if (!p) return;

    card.setAttribute("data-flash-size", size);
    card.querySelectorAll(".flashSize").forEach(b=>{
      const on = (b.getAttribute("data-flash-size") === size);
      b.classList.toggle("active", on);
      b.setAttribute("aria-checked", on ? "true" : "false");
    });

    const basePrice = getProductPrice(p, size);
    const newPrice = getFlashDealPrice(p, size, discount);
    const oldEl = card.querySelector(".flashCard__old");
    const newEl = card.querySelector(".flashCard__new");
    if (oldEl) oldEl.textContent = formatMoney(basePrice);
    if (newEl) newEl.textContent = formatMoney(newPrice);

    const link = card.querySelector("[data-flash-link]");
    if (link) link.setAttribute("href", `product.html?id=${encodeURIComponent(id)}&size=${encodeURIComponent(size)}`);
  });
}

function initFlashCountdown24h(){
  const countdownEl = document.getElementById("dealCountdown");
  if (!countdownEl) return;

  if (flashCountdownInterval) {
    try{ clearInterval(flashCountdownInterval); }catch(e){/* noop */}
    flashCountdownInterval = null;
  }

  // Simple 24h countdown starting from page load (UI-only)
  let remaining = 24 * 3600;
  const tick = ()=>{
    const h = String(Math.floor(remaining / 3600)).padStart(2, "0");
    const m = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
    const s = String(remaining % 60).padStart(2, "0");
    countdownEl.textContent = `${h}:${m}:${s}`;
    remaining = Math.max(0, remaining - 1);
  };
  tick();
  flashCountdownInterval = setInterval(tick, 1000);
}

// ---------- Drawers ----------
function syncDrawerScrollLock(){
  try{
    const anyOpen = !!document.querySelector('.drawer.open');
    document.documentElement.classList.toggle('drawer-open', anyOpen);
    document.body.classList.toggle('drawer-open', anyOpen);
  }catch(e){/* noop */}
}

function openDrawer(drawer){
  if (!drawer) return;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden","false");
  syncDrawerScrollLock();
}
function closeDrawer(drawer){
  if (!drawer) return;
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden","true");
  syncDrawerScrollLock();
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

// Smooth-scroll hash links (also works when drawers are open)
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const hash = link.getAttribute('href') || '';
  if (hash.length <= 1) return;
  const target = document.querySelector(hash);
  if (!target) return;
  e.preventDefault();
  closeDrawer(menuDrawer);
  closeDrawer(cartDrawer);
  const favDrawer = document.getElementById('favDrawer');
  if (favDrawer) closeDrawer(favDrawer);
  setTimeout(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', hash);
  }, 30);
});

// Mobile layout should be based on viewport width (more reliable than UA)
syncViewportClasses();
window.addEventListener("resize", throttle(syncViewportClasses, 150));

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
    closeDrawer(menuDrawer);
    closeDrawer(cartDrawer);
  }
});

// Dropdown filter links (desktop nav removed from header; keep safe no-op if present elsewhere)
document.querySelectorAll(".nav-dropdown__item[data-filter]").forEach(a=>{
  a.addEventListener("click", ()=>{
    const f = a.dataset.filter || "all";
    setFilter(f);
    closeDropdown();
  });
});


// ---------- Header compact on scroll ----------
const header = document.getElementById("header");
const toTopBtn = document.getElementById("toTopBtn");
let lastScrollY = 0;
window.addEventListener("scroll", throttle(() => {
  const y = window.scrollY || 0;
  const compact = y > 12;
  header?.classList.toggle("header--compact", compact);
  toTopBtn?.classList.toggle("toTop--show", y > 520);
  lastScrollY = y;
}, 100));

toTopBtn?.addEventListener("click", ()=>{
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
});

// ---------- Search / Sort ----------
elSearch?.addEventListener("input", (e)=>{
  const raw = (e.target.value || "").trim();
  state.search = normalizeChatText(raw);
  document.querySelector(".search")?.classList.toggle("hasValue", !!raw);

  renderSearchResults(raw);

  if (state.search && state.filter !== "all"){
    if (!state.lastFilterBeforeSearch) state.lastFilterBeforeSearch = state.filter;
    state.filter = "all";
    document.querySelectorAll(".cat[data-filter]").forEach(b=>{
      b.classList.toggle("active", (b.dataset.filter||"all")===state.filter);
    });
  }

  if (!state.search && state.lastFilterBeforeSearch){
    setFilter(state.lastFilterBeforeSearch);
    state.lastFilterBeforeSearch = null;
    return;
  }

  renderProducts();
});
elClear?.addEventListener("click", ()=>{
  if (!elSearch) return;
  elSearch.value = "";
  state.search = "";
  document.querySelector(".search")?.classList.remove("hasValue");
  hideSearchResults();
  if (state.lastFilterBeforeSearch){
    setFilter(state.lastFilterBeforeSearch);
    state.lastFilterBeforeSearch = null;
    return;
  }
  renderProducts();
});
elSearch?.addEventListener("search", ()=>{
  if (!state.search) return;
  document.getElementById("best")?.scrollIntoView({ behavior: "smooth", block: "start" });
});
elSearch?.addEventListener("focus", (e)=>{
  const raw = (e.target.value || "").trim();
  if (raw) renderSearchResults(raw);
});
elSearch?.addEventListener("keydown", (e)=>{
  if (!searchResultsEl || !searchResultsEl.classList.contains("is-open")) return;
  const items = Array.from(searchResultsEl.querySelectorAll("[data-search-item]"));
  if (!items.length) return;

  if (e.key === "ArrowDown"){
    e.preventDefault();
    searchActiveIndex = (searchActiveIndex + 1) % items.length;
  }
  if (e.key === "ArrowUp"){
    e.preventDefault();
    searchActiveIndex = (searchActiveIndex - 1 + items.length) % items.length;
  }
  if (e.key === "Enter"){
    if (searchActiveIndex >= 0 && items[searchActiveIndex]){
      e.preventDefault();
      items[searchActiveIndex].click();
      return;
    }
  }
  if (e.key === "Escape"){
    hideSearchResults();
    return;
  }

  items.forEach((el, idx)=>{
    el.classList.toggle("is-active", idx === searchActiveIndex);
    if (idx === searchActiveIndex) el.scrollIntoView({ block: "nearest" });
  });
});

document.addEventListener("click", (e)=>{
  if (!searchBox || !searchResultsEl) return;
  if (!searchBox.contains(e.target)) hideSearchResults();
});
elSort?.addEventListener("change", (e)=>{
  state.sort = normalizeSortValue(e.target.value);
  renderProducts();
});

// ---------- Category buttons ----------
const categoryFilterLabel = document.getElementById("categoryFilterLabel");
const CATEGORY_LABEL_KEYS = {
  all: "cat_all",
  women: "tile_women",
  men: "tile_men",
  unisex: "tile_unisex",
  gift: "cat_gift",
  home: "cat_home",
  travel: "cat_travel"
};

function updateCategoryFilterLabel(){
  if (!categoryFilterLabel) return;
  if (!state.filter || state.filter === "all"){
    categoryFilterLabel.textContent = "";
    return;
  }
  const labelKey = CATEGORY_LABEL_KEYS[state.filter] || "cat_all";
  const label = t(labelKey);
  categoryFilterLabel.textContent = t("filter_label").replace("{cat}", label);
}

document.querySelectorAll(".cat[data-filter]").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    setFilter(btn.dataset.filter || "all");
    const bestSection = document.getElementById("best");
    bestSection?.scrollIntoView({behavior:"smooth", block:"start"});
    setTimeout(()=> document.getElementById("bestViewport")?.focus({ preventScroll: true }), 300);
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
  updateCategoryFilterLabel();
  // highlight category tiles
  document.querySelectorAll(".cat[data-filter]").forEach(b=>{
    b.classList.toggle("active", (b.dataset.filter||"all")===state.filter);
  });
}

document.addEventListener("languagechange", ()=>{
  updateCategoryFilterLabel();
});

// ---------- Render products ----------
const GENERIC_SEARCH_TOKENS = new Set([
  "parfum","parfums","perfume","perfumes","fragrance","fragrances",
  "عطر","عطور","parfumerie"
]);

const CATEGORY_ALIASES = {
  men: ["men","mens","man","male","homme","hommes","رجال","رجالي","للرجال"],
  women: ["women","womens","woman","female","femme","femmes","نساء","نسائي","للنساء"],
  unisex: ["unisex","unisexe","mixte","للجنسين","مشترك"],
  gift: ["gift","gifts","cadeau","coffret","هدايا","هدية"],
  home: ["home","maison","home fragrance","منزل","بيتي"],
  travel: ["travel","voyage","travel size","mini","سفر","حجم السفر"]
};

function getCategoryLabel(cat){
  const c = String(cat || "").toLowerCase();
  const map = {
    women: "tile_women",
    men: "tile_men",
    unisex: "tile_unisex",
    gift: "cat_gift",
    home: "cat_home",
    travel: "cat_travel"
  };
  const key = map[c];
  if (typeof t === "function" && key) return t(key);
  return cat || "";
}

function buildSearchHaystack(p){
  const variants = Array.isArray(p?.variants) ? p.variants : [];
  const sizes = variants.map(v=>v?.size).filter(Boolean).join(" ");
  const cat = String(p?.category || "").toLowerCase();
  const catAliases = CATEGORY_ALIASES[cat] || [];
  const parts = [
    p?.brand,
    p?.name,
    p?.name_fr,
    p?.name_ar,
    p?.tag,
    p?.category,
    catAliases.join(" "),
    sizes,
    (p?.notes || []).join(" "),
    p?.description,
    p?.description_fr,
    p?.description_ar
  ].filter(Boolean).join(" ");

  return normalizeChatText(parts);
}

function isGenericSearch(tokens){
  if (!tokens.length) return false;
  return tokens.every(t => GENERIC_SEARCH_TOKENS.has(t));
}

function getFilteredProducts(){
  let items = [...PRODUCTS];

  if (state.filter && state.filter !== "all"){
    items = items.filter(p => (p.category||"").toLowerCase() === state.filter);
  }

  if (state.search){
    const q = state.search;
    const qTokens = q.split(" ").filter(Boolean);
    if (!isGenericSearch(qTokens)){
      items = items.filter(p=>{
        const hay = buildSearchHaystack(p);
        if (!hay) return false;
        if (q.length >= 3 && hay.includes(q)) return true;
        return qTokens.every(t => hay.includes(t));
      });
    }
  }

  // sort
  const sort = normalizeSortValue(state.sort);
  if (sort === "price_asc") items.sort((a,b)=>getProductPrice(a)-getProductPrice(b));
  if (sort === "price_desc") items.sort((a,b)=>getProductPrice(b)-getProductPrice(a));
  if (sort === "rating") items.sort((a,b)=>(b.rating||0)-(a.rating||0));
  // featured: keep original order

  return items;
}

function productCard(p){
  const image = p.image || 'assets/logo.svg';
  const variants = Array.isArray(p?.variants) ? p.variants : [];
  const sizes = variants.map(v => String(v?.size || "")).filter(Boolean);
  const defaultSize = sizes.includes("10ml") ? "10ml" : (sizes[0] || "");
  const price = getProductPrice(p, defaultSize || null);

  // Keep displayed content the same (no fake discounts): show "old" as the same value.
  const oldPrice = price;
  const newPrice = price;

  const brand = escapeHtml((p.brand || "").toUpperCase());
  const name = escapeHtml(p.name || "");

  const stars = "★★★★★".slice(0, Math.round(clamp(p.rating||4.5,0,5)));
  const reviews = Number(p.reviews || 0);
  const notes = Array.isArray(p?.notes) ? p.notes.slice(0, 3) : [];
  const catLabel = getCategoryLabel(p?.category);

  const isWishlisted = wishlist.has(p.id);
  const href = `product.html?id=${encodeURIComponent(p.id)}${defaultSize ? `&size=${encodeURIComponent(defaultSize)}` : ""}`;

  // Badge text (reuses existing product fields; no new content)
  const badgeText = p.tag ? String(p.tag) : (p.isNew ? "New" : (p.isBestseller ? "Bestseller" : ""));

  const addLabel = currentLang === 'fr' ? 'Ajouter' : (currentLang === 'ar' ? 'زيد للسلة' : 'Add to cart');
  const viewLabel = (typeof t === "function" && t("card_view")) ? t("card_view") : (currentLang === 'fr' ? 'Voir' : (currentLang === 'ar' ? 'شوف' : 'View'));

  return `
    <article class="flashCard flashCard--product animate-on-scroll" data-card-id="${escapeHtml(p.id)}" data-card-size="${escapeHtml(defaultSize)}">
      ${badgeText ? `
        <div class="flashCard__top" aria-hidden="true">
          <span class="flashCard__badge">${escapeHtml(badgeText)}</span>
        </div>
      ` : ""}

      <button class="flashCard__wish ${isWishlisted ? "active" : ""}" data-wishlist="${escapeHtml(p.id)}" aria-label="Add to wishlist" title="Add to wishlist" type="button">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWishlisted ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>

      <a class="flashCard__link" data-card-link href="${href}" aria-label="Open product">
        <div class="flashCard__media">
          <img class="flashCard__img" src="${escapeHtml(image)}" alt="${name}" loading="lazy" decoding="async" width="220" height="220" />
        </div>
      </a>

      <div class="flashCard__inner">
        <div class="flashCard__brand">${brand}</div>
        <div class="flashCard__title">${name}</div>

        <div class="flashCard__meta" aria-label="Rating">
          <span class="stars" aria-label="${(p.rating||0)} rating">${stars}</span>
          <span class="muted small">(${reviews})</span>
        </div>

        <div class="flashCard__metaRow" aria-label="Quick info">
          ${catLabel ? `<span class="metaPill">${escapeHtml(catLabel)}</span>` : ""}
          ${defaultSize ? `<span class="metaPill">${escapeHtml(defaultSize)}</span>` : ""}
          ${p.tag ? `<span class="metaPill">${escapeHtml(p.tag)}</span>` : ""}
        </div>

        ${notes.length ? `
          <div class="flashCard__notes" aria-label="Notes">
            ${notes.map(n => `<span class="notePill">${escapeHtml(n)}</span>`).join("")}
          </div>
        ` : ""}

        <div class="flashCard__prices" aria-label="Pricing">
          <span class="flashCard__old">${formatMoney(oldPrice)}</span>
          <span class="flashCard__new">${formatMoney(newPrice)}</span>
        </div>

        ${sizes.length ? `
          <div class="flashCard__sizes" role="radiogroup" aria-label="Choose size">
            ${sizes.map(s=>{
              const active = (s === defaultSize) ? "active" : "";
              return `<button class="flashSize ${active}" type="button" data-card-size="${escapeHtml(s)}" role="radio" aria-checked="${s===defaultSize}">${escapeHtml(s)}</button>`;
            }).join("")}
          </div>
        ` : ""}

        <div class="flashCard__actions">
          <button class="flashAdd" type="button" data-card-add="${escapeHtml(p.id)}">${escapeHtml(addLabel)}</button>
          <a class="flashLink" href="${href}">${escapeHtml(viewLabel)}</a>
        </div>
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

  // Event delegation (wishlist, size select, add to cart)
  bindProductCardDelegation(elGrid);
}

function renderProductSkeletons(count = 8){
  if (!elGrid) return;
  const items = Array.from({ length: count }).map(() => `
    <article class="flashCard flashCard--product skeleton" aria-hidden="true">
      <div class="flashCard__media">
        <div class="skeletonBox" style="width:160px; height:160px; border-radius:14px;"></div>
      </div>
      <div class="flashCard__inner" style="gap:10px;">
        <div class="skeletonBox" style="height:12px; width:45%;"></div>
        <div class="skeletonBox" style="height:14px; width:90%;"></div>
        <div class="skeletonBox" style="height:12px; width:60%;"></div>
        <div class="skeletonBox" style="height:16px; width:55%;"></div>
        <div class="skeletonBox" style="height:40px; width:100%; border-radius:12px;"></div>
      </div>
    </article>
  `).join('');
  elGrid.innerHTML = items;
}

function showToast({ title, message, actionLabel, onAction, timeoutMs = 2600 } = {}){
  if (!toastStack) return;
  const el = document.createElement('div');
  el.className = 'toast';

  const safeTitle = escapeHtml(title || (currentLang === 'fr' ? 'Ajouté au panier' : (currentLang === 'ar' ? 'تزاد فالسلة' : 'Added to cart')));
  const safeMessage = escapeHtml(message || '');

  el.innerHTML = `
    <div>
      <p class="toast__title">${safeTitle}</p>
      ${safeMessage ? `<p class="toast__meta">${safeMessage}</p>` : ''}
    </div>
    <div class="toast__actions">
      ${actionLabel ? `<button class="toast__btn" type="button" data-toast-action>${escapeHtml(actionLabel)}</button>` : ''}
      <button class="toast__close" type="button" aria-label="Close">×</button>
    </div>
  `;

  toastStack.appendChild(el);
  requestAnimationFrame(() => el.classList.add('is-in'));

  const close = () => {
    el.classList.remove('is-in');
    setTimeout(() => el.remove(), 180);
  };

  el.querySelector('.toast__close')?.addEventListener('click', close);
  el.querySelector('[data-toast-action]')?.addEventListener('click', () => {
    try{ onAction && onAction(); } finally{ close(); }
  });

  if (timeoutMs > 0) setTimeout(close, timeoutMs);
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, s => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[s]));
}

// ---------- Cart ----------
function showSizeSelectionModal(product) {
  const sizeModal = document.getElementById("sizeModal");
  const sizeSelectionOptions = document.getElementById("sizeSelectionOptions");
  const sizeProductInfo = document.getElementById("sizeProductInfo");
  const sizeError = document.getElementById("sizeError");
  
  if (!sizeModal || !sizeSelectionOptions) return;
  
  // Reset state
  sizeModal.dataset.currentProduct = JSON.stringify(product);
  sizeModal.dataset.selectedSize = '';
  if (sizeError) sizeError.style.display = 'none';
  
  // If no variants, add directly
  if (!product.variants || product.variants.length === 0) {
    addToCart(product, null);
    openDrawer(cartDrawer);
    return;
  }
  
  // Populate and open modal
  if (sizeProductInfo) {
    sizeProductInfo.innerHTML = `<img src="${escapeHtml(product.image || '')}" alt="${escapeHtml(product.name || '')}" class="size-product__img"><div class="size-product__details"><div class="size-product__brand">${escapeHtml(product.brand || '')}</div><div class="size-product__name">${escapeHtml(product.name || '')}</div></div>`;
  }
  
  sizeSelectionOptions.innerHTML = product.variants.map(v => `<button class="size-option" data-size="${escapeHtml(v.size)}" data-price="${v.price}"><div class="size-option__content"><div class="size-option__size">${escapeHtml(v.size)}</div><div class="size-option__price">${formatMoney(v.price)}</div></div><div class="size-option__check">✓</div></button>`).join('');
  
  openModal(sizeModal);
}

function addToCart(p, variant){
  const key = variant ? `${p.id}::${variant}` : p.id;
  const item = state.cart.find(i=>i.key===key);
  if (item) item.qty += 1;
  else state.cart.push({ key, id:p.id, variant: variant || null, qty:1 });
  saveCart();
  updateCartUI();

  const msg = `${p?.name ? p.name : ''}${variant ? ` • ${variant}` : ''}`.trim();
  showToast({
    title: currentLang === 'fr' ? 'Ajouté au panier' : (currentLang === 'ar' ? 'تزاد فالسلة' : 'Added to cart'),
    message: msg,
    actionLabel: currentLang === 'fr' ? 'Voir panier' : (currentLang === 'ar' ? 'شوف السلة' : 'View cart'),
    onAction: () => openDrawer(cartDrawer)
  });
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
    const price = getProductPrice(p, i.variant);
    return sum + (price * i.qty);
  },0);
}
function updateCartUI(){
  const count = state.cart.reduce((s,i)=>s+i.qty,0);
  if (elCartCount) elCartCount.textContent = String(count);

  if (!cartItems || !cartSubtotal) return;

  if (!state.cart.length){
    cartItems.innerHTML = `
      <div class="cart__empty">
        <div class="cart__empty-icon" aria-hidden="true">👜</div>
        <div class="cart__empty-text">${currentLang==="ar" ? "السلة خاوية ✨" : (currentLang==="fr" ? "Votre panier est vide ✨" : "Your bag is empty ✨")}</div>
        <div class="cart__empty-sub">${currentLang==="ar" ? "اكتشف العطور الأكثر مبيعاً وأحدث العروض." : (currentLang==="fr" ? "Découvrez les best‑sellers et les nouvelles offres." : "Discover best sellers and new offers.")}</div>
        <div class="cart__empty-actions">
          <a href="#best" class="btn btn--primary">${currentLang==="ar" ? "تسوق الآن" : (currentLang==="fr" ? "Voir les best‑sellers" : "Shop best sellers")}</a>
          <a href="#categories" class="btn btn--ghost">${currentLang==="ar" ? "تصفح الفئات" : (currentLang==="fr" ? "Parcourir les catégories" : "Browse categories")}</a>
        </div>
      </div>
    `;
    cartSubtotal.textContent = formatMoney(0);
    if (cartSubtotal) cartSubtotal.setAttribute('aria-live','polite');
    return;
  }

  cartItems.innerHTML = state.cart.map(i=>{
    const p = PRODUCTS.find(x=>x.id===i.id) || {};
    const price = getProductPrice(p, i.variant);
    const lineTotal = formatMoney(price * i.qty);

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
          <div class="cartItem__unit muted small">${formatMoney(price)}</div>
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
      const price = getProductPrice(p, i.variant);
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
    const price = getProductPrice(p, i.variant);
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

// Quick open checkout modal from 'Order by Email (Quick)'
const btnOrderDirectEmail = document.getElementById('btnOrderDirectEmail');
btnOrderDirectEmail?.addEventListener('click', ()=>{
  openCheckoutModal();
  setTimeout(()=> checkoutForm.querySelector("input[name='name']")?.focus(), 250);
});

// ---------- Newsletter signup ----------
form?.addEventListener("submit", (e)=>{
  e.preventDefault();
  const email = form.querySelector("input[name='email']")?.value?.trim() || "";
  if (!email) return;
  const subject = currentLang === "ar"
    ? "اشتراك في النشرة البريدية"
    : (currentLang === "fr" ? "Inscription à la newsletter" : "Newsletter signup");
  const full = `Newsletter signup: ${email}`;
  window.location.href = `mailto:${STORE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(full)}`;
  if (formNote){
    formNote.textContent = currentLang==="ar"
      ? "شكراً! تم فتح تطبيق البريد لإكمال الاشتراك."
      : (currentLang==="fr" ? "Merci ! Ouverture de votre application email…" : "Thanks! Opening your email app to complete signup…");
  }
});

// ---------- Quick filters (below hero) ----------
function applyQuickFilter(term){
  if (!elSearch) return;
  const raw = String(term || "").trim();
  if (!raw) return;
  elSearch.value = raw;
  state.search = normalizeChatText(raw);
  document.querySelector(".search")?.classList.toggle("hasValue", !!raw);
  renderSearchResults(raw);

  if (state.search && state.filter !== "all"){
    if (!state.lastFilterBeforeSearch) state.lastFilterBeforeSearch = state.filter;
    state.filter = "all";
    document.querySelectorAll(".cat[data-filter]").forEach(b=>{
      b.classList.toggle("active", (b.dataset.filter||"all")===state.filter);
    });
  }

  renderProducts();
  document.getElementById("best")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll("[data-quick-filter]").forEach(btn=>{
  btn.addEventListener("click", ()=> applyQuickFilter(btn.dataset.quickFilter));
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
    nav_home: "الرئيسية",
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
          <div class="muted small">${formatMoney(getProductPrice(p))} • ${(p.rating||4.5).toFixed(1)}★</div>
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
function initDealsRotator() {
    const dealProducts = ['p27', 'p28', 'p13', 'p26']; // Products to rotate
    const textContainer = document.querySelector('.promo-banner__text');
    const imageContainer = document.querySelector('.promo-banner__visual');
    const imageEl = document.getElementById('dealImage');
    const titleEl = document.getElementById('dealTitle');
    const descEl = document.getElementById('dealDesc');
    const countdownEl = document.getElementById('dealCountdown');

    if (!imageEl || !titleEl || !descEl || !textContainer || !imageContainer) return;

    let currentIndex = 0;

    function updateDeal() {
        const productId = dealProducts[currentIndex];
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        // Animate out
        textContainer.classList.add('is-changing');
        imageContainer.classList.add('is-changing');

        setTimeout(() => {
            // Update content
            imageEl.src = product.image;
            titleEl.textContent = product.name;
            descEl.textContent = (product.description || '').split('\n')[0];
            // Animate in
            textContainer.classList.remove('is-changing');
            imageContainer.classList.remove('is-changing');
        }, 500); // Match CSS transition duration

        currentIndex = (currentIndex + 1) % dealProducts.length;
    }

    function initCountdown() {
        let remaining = 8 * 3600 + 25 * 60 + 10; // 8h 25m 10s
        setInterval(() => {
            remaining--;
            const h = String(Math.floor(remaining / 3600)).padStart(2, '0');
            const m = String(Math.floor((remaining % 3600) / 60)).padStart(2, '0');
            const s = String(remaining % 60).padStart(2, '0');
            if (countdownEl) countdownEl.innerHTML = `${t('sec_deals_kicker')} &bull; ${h}:${m}:${s}`;
        }, 1000);
    }

    setInterval(updateDeal, 5000);
    initCountdown();
}

// ---------- Bottom nav ----------
bottomNav?.addEventListener("click", (e)=>{
  const btn = e.target.closest("[data-bottom]");
  if (!btn) return;
  const action = btn.dataset.bottom;
  if (action==="home") window.scrollTo({ top:0, behavior:"smooth" });
  if (action==="categories"){
    document.getElementById("categories")?.scrollIntoView({behavior:"smooth"});
  }
  if (action==="search"){
    document.getElementById("header")?.scrollIntoView({behavior:"smooth"});
    setTimeout(()=> elSearch?.focus(), 200);
  }
  if (action==="cart") openDrawer(cartDrawer);
});

// ---------- Desktop/Web menu smooth scroll ----------
document.querySelectorAll(".webNav__link").forEach((a)=>{
  a.addEventListener("click", (e)=>{
    const href = a.getAttribute("href") || "";
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    const target = id ? document.getElementById(id) : null;
    if (!target) {
      // fallback for '#header' / '#'
      window.scrollTo({ top: 0, behavior: "smooth" });
      e.preventDefault();
      return;
    }
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// ---------- Chatbot (UI only) ----------
function setChatOpenClass(isOpen){
  document.documentElement.classList.toggle('chatbot-open', !!isOpen);
  document.body.classList.toggle('chatbot-open', !!isOpen);
}

function setChatViewportVars(){
  // Helps on iOS Safari where fixed elements can be covered by the keyboard.
  const vv = window.visualViewport;
  const height = vv ? vv.height : window.innerHeight;
  const offsetTop = vv ? vv.offsetTop : 0;

  try{
    document.documentElement.style.setProperty('--vvh', `${Math.round(height)}px`);
    document.documentElement.style.setProperty('--vvOffsetTop', `${Math.round(offsetTop)}px`);
  }catch(e){/* noop */}
}

function scrollChatToBottom(){
  if (!chatbotMsgs) return;
  chatbotMsgs.scrollTop = chatbotMsgs.scrollHeight;
}

if (chatbot){
  setChatViewportVars();
  window.addEventListener('resize', setChatViewportVars, { passive: true });
  if (window.visualViewport){
    window.visualViewport.addEventListener('resize', setChatViewportVars, { passive: true });
    window.visualViewport.addEventListener('scroll', setChatViewportVars, { passive: true });
  }
}

function triggerChatQuick(action){
  if (!action) return false;
  const btn = chatbotQuick?.querySelector(`[data-quick="${action}"]`);
  if (btn){
    btn.click();
    return true;
  }
  return false;
}

function openChat(){
  if (!chatbot) return;
  chatbot.classList.add("open");
  chatbot.setAttribute("aria-hidden","false");
  chatbotFab?.setAttribute("aria-label", "Close chat");
  chatbotOverlay?.setAttribute('aria-hidden', 'false');
  setChatOpenClass(true);
  setChatViewportVars();
  // Mobile = treat as a modal drawer
  const isMobile = window.matchMedia && window.matchMedia('(max-width: 860px)').matches;
  chatbotPanel?.setAttribute('aria-modal', isMobile ? 'true' : 'false');
  // Clear any inline drag styles
  if (chatbotPanel){
    chatbotPanel.style.transform = '';
    chatbotPanel.style.transition = '';
  }
  if (chatbotOverlay){
    chatbotOverlay.style.opacity = '';
    chatbotOverlay.style.transition = '';
  }
  chatHasStarted = true;
  seedChatIfEmpty();
  setTimeout(()=>{
    try{ chatbotInput?.focus({ preventScroll: true }); }catch(e){ chatbotInput?.focus(); }
    setTimeout(scrollChatToBottom, 60);
  }, 150);
}
function closeChat(){
  if (!chatbot) return;
  chatbot.classList.remove("open");
  chatbot.setAttribute("aria-hidden","true");
  chatbotFab?.setAttribute("aria-label", "Open chat");
  chatbotOverlay?.setAttribute('aria-hidden', 'true');
  chatbotPanel?.setAttribute('aria-modal', 'false');
  setChatOpenClass(false);
  // Reset any inline drag styles
  if (chatbotPanel){
    chatbotPanel.style.transform = '';
    chatbotPanel.style.transition = '';
  }
  if (chatbotOverlay){
    chatbotOverlay.style.opacity = '';
    chatbotOverlay.style.transition = '';
  }
  try{ chatbotInput?.blur(); }catch(e){}
}
function toggleChat() {
  if (chatbot?.classList.contains("open")) closeChat();
  else openChat();
}
chatbotFab?.addEventListener("click", toggleChat);
chatbotClose?.addEventListener("click", closeChat);
chatbotOverlay?.addEventListener('click', closeChat);
chatbotReset?.addEventListener("click", ()=>{
  if (!chatbotMsgs) return;
  chatbotMsgs.innerHTML = "";
  _chatFallbacks = 0;
  seedChatIfEmpty();
  setTimeout(()=> chatbotInput?.focus(), 50);
});

chatbotInput?.addEventListener('focus', ()=>{
  setChatViewportVars();
  setTimeout(scrollChatToBottom, 80);
});

// Mobile: swipe/drag down on header to close (bottom-sheet feel)
(function initChatDragToClose(){
  if (!chatbot || !chatbotHead || !chatbotPanel) return;

  const isMobileNow = ()=> window.matchMedia && window.matchMedia('(max-width: 860px)').matches;

  const drag = {
    active: false,
    pointerId: null,
    startY: 0,
    currentY: 0,
    lastY: 0,
    lastT: 0,
    velocity: 0
  };

  const setDraggingStyles = (isDragging)=>{
    if (!chatbotPanel) return;
    chatbotPanel.style.transition = isDragging ? 'none' : '';
    if (chatbotOverlay) chatbotOverlay.style.transition = isDragging ? 'none' : '';
  };

  const applyDrag = (dy)=>{
    const y = Math.max(0, dy);
    drag.currentY = y;
    chatbotPanel.style.transform = `translateX(-50%) translateY(${y}px)`;
    if (chatbotOverlay){
      const opacity = Math.max(0, Math.min(1, 1 - (y / 320)));
      chatbotOverlay.style.opacity = String(opacity);
    }
  };

  const finishDrag = ()=>{
    if (!drag.active) return;
    drag.active = false;
    const dy = drag.currentY;
    const v = drag.velocity; // px/ms

    setDraggingStyles(false);

    // Fast swipe or long drag closes
    const shouldClose = dy > 140 || v > 0.75;
    // Reset inline styles before state change
    chatbotPanel.style.transform = '';
    if (chatbotOverlay) chatbotOverlay.style.opacity = '';

    if (shouldClose) closeChat();
  };

  chatbotHead.addEventListener('pointerdown', (e)=>{
    if (!chatbot.classList.contains('open')) return;
    if (!isMobileNow()) return;
    // Don’t start drag when tapping action buttons
    if (e.target && e.target.closest && e.target.closest('button, a')) return;

    drag.active = true;
    drag.pointerId = e.pointerId;
    drag.startY = e.clientY;
    drag.currentY = 0;
    drag.lastY = e.clientY;
    drag.lastT = performance.now();
    drag.velocity = 0;

    setDraggingStyles(true);
    try{ chatbotHead.setPointerCapture(e.pointerId); }catch(err){}
    try{ e.preventDefault(); }catch(err){}
  }, { passive: false });

  chatbotHead.addEventListener('pointermove', (e)=>{
    if (!drag.active) return;
    if (drag.pointerId !== null && e.pointerId !== drag.pointerId) return;

    const now = performance.now();
    const dt = now - drag.lastT;
    if (dt > 0){
      drag.velocity = (e.clientY - drag.lastY) / dt;
      drag.lastY = e.clientY;
      drag.lastT = now;
    }

    const dy = e.clientY - drag.startY;
    applyDrag(dy);
    try{ e.preventDefault(); }catch(err){}
  }, { passive: false });

  chatbotHead.addEventListener('pointerup', finishDrag);
  chatbotHead.addEventListener('pointercancel', finishDrag);
})();

document.addEventListener("keydown", (e)=>{
  if (e.key !== "Escape") return;
  if (chatbot?.classList.contains("open")) closeChat();
});

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
    sendBotMessage(t("chat_hi"), {
      intent: 'greeting',
      chips: [
        { action: 'recommend', label: t('chat_quick_reco') || 'Recommend' },
        { action: 'best', label: t('chat_quick_best') || 'Best sellers' },
        { action: 'delivery', label: t('chat_quick_delivery') || 'Delivery' },
        { action: 'payment', label: t('chat_quick_payment') || 'Payment' },
        { action: 'whatsapp', label: t('chat_quick_whatsapp') || 'WhatsApp' }
      ]
    });
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
  if (triggerChatQuick(action)) return;
  // Policies
  if (action && action.startsWith('policy_')){
    const key = action.replace('policy_','');
    const allowed = ['terms','privacy','shipping','returns','cookies'];
    if (allowed.includes(key)){
      openPolicy(key);
      const msg = currentLang === 'ar'
        ? 'فتحت ليك صفحة السياسة. إذا بغيتي نعاونك أكثر قول ليا السؤال ديالك.'
        : (currentLang === 'fr'
          ? 'J’ai ouvert la politique correspondante. Dites-moi votre question si besoin.'
          : 'I opened the policy for you. Tell me your question if you want details.');
      sendBotMessage(msg, { intent: 'policy' });
      return;
    }
  }
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

  const lines = items.map(p=>`• ${p.name} (${formatMoney(getProductPrice(p))})`).join("\n");
  return (currentLang==="ar" ? "هادو اقتراحات:" : (currentLang==="fr" ? "Voici des suggestions :" : "Here are suggestions:")) + "\n" + lines;
}

function normalizeChatText(text){
  const s = String(text || "").trim();
  // Basic Latin cleanup
  let out = s.normalize ? s.normalize('NFD') : s;
  out = out.replace(/[\u0300-\u036f]/g, '');
  out = out.toLowerCase();
  // Basic Arabic normalization (kept light)
  out = out
    .replace(/[إأآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/ة/g, 'ه');
  out = out.replace(/[^\p{L}\p{N}\s]+/gu, ' ').replace(/\s+/g, ' ').trim();
  return out;
}

function includesAny(haystack, needles){
  for (const n of needles){
    if (!n) continue;
    if (haystack.includes(n)) return true;
  }
  return false;
}

function tokens(text){
  const tks = normalizeChatText(text).split(' ').filter(Boolean);
  return tks.length ? tks : [];
}

function findProductsByQuery(query, limit = 3){
  const qTokens = new Set(tokens(query));
  if (!qTokens.size) return [];

  const scored = PRODUCTS.map(p => {
    const hay = `${p.brand || ''} ${p.name || ''} ${(p.notes||[]).join(' ')}`;
    const pTokens = new Set(tokens(hay));
    let score = 0;
    qTokens.forEach(tk => { if (pTokens.has(tk)) score += 2; });

    // bonus for partial name match
    const qNorm = normalizeChatText(query);
    const nameNorm = normalizeChatText(p.name || '');
    if (qNorm.length >= 3 && nameNorm.includes(qNorm)) score += 4;
    if ((p.tag || '').toLowerCase().includes('best')) score += 0.2;
    score += (p.rating || 0) * 0.05;
    return { p, score };
  }).filter(x => x.score > 0.5);

  scored.sort((a,b)=> b.score - a.score);
  return scored.slice(0, limit).map(x => x.p);
}

function makeOrderHowToText(){
  if (currentLang === 'ar'){
    return 'باش تطلب:\n1) اختار المنتج + الحجم\n2) زيد للسلة\n3) افتح السلة → Checkout\n4) غادي نأكدّو الطلب فواتساب.';
  }
  if (currentLang === 'fr'){
    return 'Pour commander :\n1) Choisissez un produit + une taille\n2) Ajoutez au panier\n3) Ouvrez le panier → Checkout\n4) On confirme la commande sur WhatsApp.';
  }
  return 'How to order:\n1) Choose a product + size\n2) Add to cart\n3) Open cart → Checkout\n4) We confirm the order on WhatsApp.';
}

function makeUnknownFallback(){
  if (currentLang === 'ar'){
    return 'ما فهمتش السؤال مزيان. نقدر نعاونك فالعطور/الأثمنة/التوصيل/الدفع/الإرجاع. إلى بغيتي جواب دقيق، صيفط لينا السؤال فواتساب.';
  }
  if (currentLang === 'fr'){
    return "Je ne suis pas sûr de la réponse. Je peux aider pour parfums/prix/livraison/paiement/retours. Pour une réponse exacte, écrivez-nous sur WhatsApp.";
  }
  return "I’m not sure about that. I can help with perfumes/prices/delivery/payment/returns. For an exact answer, message us on WhatsApp.";
}

function getChatResponse(userText){
  const raw = String(userText || '').trim();
  const lower = normalizeChatText(raw);
  const chips = [];

  // greetings / thanks
  if (includesAny(lower, ['hello','hi','hey','bonjour','salut','salam','السلام','مرحبا','اهلا','bonjour'])){
    return { intent:'greeting', text: t('chat_generic_greeting') };
  }
  if (includesAny(lower, ['thanks','thank you','merci','شكرا','chokran','thx'])){
    return { intent:'thanks', text: t('chat_welcome') };
  }

  // policies
  if (includesAny(lower, ['return','refund','retour','rembourse','إرجاع','استرجاع','تعويض'])){
    chips.push({ action:'policy_returns', label: currentLang==='ar' ? 'سياسة الإرجاع' : (currentLang==='fr' ? 'Politique retours' : 'Returns policy') });
    chips.push({ action:'open_whatsapp', label: t('bn_whatsapp') || 'WhatsApp' });
    return { intent:'returns', text: currentLang==='ar' ? 'الإرجاع/الاسترجاع: تواصل معانا فواتساب خلال 24 ساعة من بعد التوصيل.' : (currentLang==='fr' ? 'Retours: contactez-nous sur WhatsApp dans les 24h après livraison.' : 'Returns: contact us on WhatsApp within 24h after delivery.'), chips };
  }
  if (includesAny(lower, ['delivery','shipping','livraison','expedition','توصيل','شحن'])){
    chips.push({ action:'policy_shipping', label: currentLang==='ar' ? 'سياسة التوصيل' : (currentLang==='fr' ? 'Livraison' : 'Shipping') });
    return { intent:'delivery', text: t('topbar_text'), chips };
  }
  if (includesAny(lower, ['privacy','confidential','خصوصيه','خصوصية','vie privee','privacy policy'])){
    chips.push({ action:'policy_privacy', label: currentLang==='ar' ? 'سياسة الخصوصية' : (currentLang==='fr' ? 'Confidentialité' : 'Privacy') });
    return { intent:'privacy', text: currentLang==='ar' ? 'كنستعملو غير المعلومات اللي كتصيفط لينا بإرادتك (واتساب أو إيميل).' : (currentLang==='fr' ? "On utilise seulement les infos que vous envoyez volontairement (WhatsApp ou email)." : 'We only use the info you send voluntarily (WhatsApp or email).'), chips };
  }
  if (includesAny(lower, ['terms','conditions','شروط','condition','terms of use'])){
    chips.push({ action:'policy_terms', label: currentLang==='ar' ? 'الشروط' : (currentLang==='fr' ? 'Conditions' : 'Terms') });
    return { intent:'terms', text: currentLang==='ar' ? 'هذا الموقع واجهة عرض: تأكيد الطلب كيتدار عبر واتساب.' : (currentLang==='fr' ? 'Le site est une vitrine: la confirmation se fait sur WhatsApp.' : 'This site is a storefront demo: orders are confirmed on WhatsApp.'), chips };
  }

  // payment / contact
  if (includesAny(lower, ['payment','pay','paiement','دفع','أداء','performance'])){
    chips.push({ action:'open_whatsapp', label: t('bn_whatsapp') || 'WhatsApp' });
    return { intent:'payment', text: t('chat_payment'), chips };
  }
  if (includesAny(lower, ['contact','email','mail','phone','whatsapp','واتساب','تواصل','رقم'])){
    chips.push({ action:'open_whatsapp', label: t('bn_whatsapp') || 'WhatsApp' });
    return { intent:'contact', text: t('chat_contact'), chips };
  }

  // how to order
  if (includesAny(lower, ['order','buy','how to','commander','acheter','كيفاش','كيف','طلب','نطلب'])){
    chips.push({ action:'order_whatsapp', label: currentLang==='ar' ? 'طلب عبر واتساب' : (currentLang==='fr' ? 'Commander WhatsApp' : 'Order on WhatsApp') });
    return { intent:'how_to_order', text: makeOrderHowToText(), chips };
  }

  // deals / discounts
  if (includesAny(lower, ['deal','discount','promo','offer','offre','sold','تخفيض','عرض','عروض'])){
    chips.push({ action:'best', label: t('chat_quick_best') || 'Best sellers' });
    chips.push({ action:'open_whatsapp', label: t('bn_whatsapp') || 'WhatsApp' });
    return { intent:'deals', text: currentLang==='ar' ? 'كاينين عروض محدودة. شوف قسم Deals فالصفحة، أو سولنا فواتساب على عرض اليوم.' : (currentLang==='fr' ? "Il y a des offres limitées. Voir la section Deals, ou demandez l’offre du jour sur WhatsApp." : 'We have limited-time offers. See the Deals section, or ask us on WhatsApp for today’s best offer.'), chips };
  }

  // product price / availability / search
  const isPriceQuestion = includesAny(lower, ['price','how much','cost','prix','combien','ثمن','بشحال','سعر']);
  const products = findProductsByQuery(raw, 3);
  if (isPriceQuestion && products.length){
    const p = products[0];
    const price = formatMoney(getProductPrice(p));
    chips.push({ action:'open_whatsapp', label: t('bn_whatsapp') || 'WhatsApp' });
    return { intent:'price', text: `${p.name}: ${price}`, chips };
  }
  if (products.length && includesAny(lower, ['have','available','stock','disponible','avez vous','كاين','موجود'])){
    const list = products.map(p=>`• ${p.name} (${formatMoney(getProductPrice(p))})`).join('\n');
    chips.push({ action:'open_whatsapp', label: t('bn_whatsapp') || 'WhatsApp' });
    return { intent:'product_search', text: (currentLang==='ar' ? 'ها شنو لقيت:' : (currentLang==='fr' ? 'Voici ce que j’ai trouvé :' : 'Here’s what I found:')) + `\n${list}`, chips };
  }
  if (products.length && !isPriceQuestion && includesAny(lower, ['recommend','suggest','reco','اقترح','اقترحلي','نقترح','suggestion'])){
    const list = products.map(p=>`• ${p.name} (${formatMoney(getProductPrice(p))})`).join('\n');
    chips.push({ action:'open_whatsapp', label: t('bn_whatsapp') || 'WhatsApp' });
    return { intent:'recommendation', text: (currentLang==='ar' ? 'كنقترح عليك:' : (currentLang==='fr' ? 'Je vous recommande :' : 'I recommend:')) + `\n${list}`, chips };
  }

  // notes-based recommendation (existing logic)
  const rec = recommendFromText(raw);
  if (rec){
    chips.push({ action:'open_whatsapp', label: t('bn_whatsapp') || 'WhatsApp' });
    return { intent:'recommendation', text: rec, chips: chips.length ? chips : undefined };
  }

  // final fallback
  chips.push({ action:'open_whatsapp', label: t('bn_whatsapp') || 'WhatsApp' });
  chips.push({ action:'policy_shipping', label: currentLang==='ar' ? 'التوصيل' : (currentLang==='fr' ? 'Livraison' : 'Delivery') });
  chips.push({ action:'policy_returns', label: currentLang==='ar' ? 'الإرجاع' : (currentLang==='fr' ? 'Retours' : 'Returns') });
  return { intent:'unknown', text: makeUnknownFallback(), chips };
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
  if (q==="payment"){
    addMsg(currentLang==="ar" ? "الدفع" : (currentLang==="fr" ? "Paiement" : "Payment"), "me");
    sendBotMessage(t("chat_payment"), { intent: 'payment' });
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

  const res = getChatResponse(text);
  sendBotMessage(res.text, {
    intent: res.intent,
    chips: res.chips,
    user: text,
    onShown: ()=>{
      if (res.intent === 'unknown' || res.intent === 'recommendation'){
        _chatFallbacks++;
        if (_chatFallbacks >= 3){
          sendBotMessage(
            currentLang === 'ar'
              ? 'إلى بغيتي، صيفط لينا السؤال فواتساب وغادي نجاوبوك بسرعة.'
              : (currentLang === 'fr'
                ? 'Si vous voulez, envoyez votre question sur WhatsApp et on vous répond vite.'
                : 'If you want, send your question on WhatsApp and we’ll reply quickly.'),
            { intent: 'escalation', chips: [ { action: 'open_whatsapp', label: t('bn_whatsapp') || 'WhatsApp' } ] }
          );
          _chatFallbacks = 0;
        }
      } else {
        _chatFallbacks = 0;
      }
    }
  });
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

// ---------- Hero slider ----------
function initHeroSlider(){
  const slides = Array.from(document.querySelectorAll('.hero__bg'));
  if (!slides.length) return;

  // Desktop (wide) hero images
  const desktopUrls = [
    'https://raw.githubusercontent.com/ipordiseparfum-hash/ipordiseparfum/refs/heads/main/hero%20section%201%20mens.png',
    'https://raw.githubusercontent.com/ipordiseparfum-hash/ipordiseparfum/refs/heads/main/hero%20section%202%20women.png'
  ];

  // Optional: add dedicated mobile crops here (recommended for best results).
  // If you don't have mobile-specific files yet, we fallback to desktop images.
  const mobileUrls = [
    'https://raw.githubusercontent.com/ipordiseparfum-hash/ipordiseparfum/refs/heads/main/hero%20section%201%20mens.png',
    'https://raw.githubusercontent.com/ipordiseparfum-hash/ipordiseparfum/refs/heads/main/hero%20section%202%20women.png'
  ];

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Preload images to avoid flashes during swap
  const preload = (urls) => {
    try{
      urls.forEach(u => { 
        const img = new Image(); 
        img.decoding = 'async'; 
        img.loading = 'eager'; 
        img.src = u;
        // If image fails to load, mark it as failed
        img.onerror = () => {
          console.warn('Failed to load hero image:', u);
          // Could implement fallback logic here
        };
      });
    }catch(e){}
  };
  preload(desktopUrls);
  preload(mobileUrls);

  const pickUrls = () => {
    const isMobile = window.matchMedia && window.matchMedia('(max-width: 860px)').matches;
    return (isMobile ? mobileUrls : desktopUrls);
  };

  const applyUrls = () => {
    const urls = pickUrls();
    slides.forEach((el, i)=>{
      const url = urls[i % urls.length];
      if (el.dataset.bgApplied === url) return;
      el.style.backgroundImage = `url("${url}")`;
      el.dataset.bgApplied = url;
    });
  };

  applyUrls();

  // Ensure the first slide is visible
  slides.forEach((s, i)=> s.classList.toggle('is-active', i === 0));

  // Update backgrounds on viewport changes (mobile ↔ desktop)
  try{
    const mq = window.matchMedia('(max-width: 860px)');
    mq.addEventListener ? mq.addEventListener('change', applyUrls) : mq.addListener(applyUrls);
  }catch(e){}

  if (slides.length <= 1 || prefersReduced) return;

  let idx = 0;
  setInterval(()=>{
    slides[idx].classList.remove('is-active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('is-active');
  }, 4500);
}

// ---------- Init ----------
(async function init(){
  // Perceived performance: show skeletons immediately
  renderProductSkeletons(8);
  await loadProducts();
  // default: highlight filter all
  setFilter("all");
  initBestSellersCarousel();

  // year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  applyI18n(DEFAULT_LANG);
  updateCartUI();
  renderFinder();
  handleChatbotAttention();
  initScrollAnimations();
  initFlashDeals();
  initFlashCountdown24h();
  initRecentlyViewed();
  if (document.querySelector('.promo-banner')) initDealsRotator();
  initHeroSlider();

  // Size modal listeners
  const sizeModal = document.getElementById("sizeModal");
  if (sizeModal) {
    const sizeSelectionOptions = document.getElementById("sizeSelectionOptions");
    const sizeError = document.getElementById("sizeError");
    const btnAddToCartSize = document.getElementById("btnAddToCartSize");

    sizeSelectionOptions?.addEventListener('click', (e) => {
      const btn = e.target.closest('.size-option');
      if (btn) {
        sizeSelectionOptions.querySelectorAll('.size-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        sizeModal.dataset.selectedSize = btn.dataset.size;
        if (sizeError) sizeError.style.display = 'none';
      }
    });

    btnAddToCartSize?.addEventListener('click', () => {
      const selectedSize = sizeModal.dataset.selectedSize;
      if (!selectedSize) {
        if (sizeError) {
          sizeError.style.display = 'block';
          sizeError.classList.add('shake');
          setTimeout(() => sizeError.classList.remove('shake'), 500);
        }
        return;
      }
      
      const product = JSON.parse(sizeModal.dataset.currentProduct || '{}');
      if (product.id) {
        addToCart(product, selectedSize);
        closeModal(sizeModal);
        openDrawer(cartDrawer);
      }
    });

    document.querySelectorAll('[data-close-size-modal]').forEach(el => {
      el.addEventListener('click', () => closeModal(sizeModal));
    });
  }

  // Premium Loading Screen
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    // Hide loading screen after content loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 600);
      }, 800); // Minimum show time for premium feel
    });
  }
})();