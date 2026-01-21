// KH-01/app.js
(function () {
  const i18n = {
    tr: {
      skip: "İçeriğe atla",
      headerTag: "Dijital Kartvizit",
      headerSub: "Profesyonel • Sade • Düzenli",

      navAbout: "Hakkımda",
      navExp: "Deneyim",
      navProj: "Projeler",
      navSkills: "Beceriler",
      navContact: "İletişim",

      heroKicker: "Merhaba, ben",
      heroRole: "Landschaftsarchitekt • #OPEN_TO_WORK",
      metaLocationLabel: "Konum",
      metaLocationValue: "Düsseldorf, North Rhine-Westphalia, Almanya",
      metaAudienceLabel: "Hedef",
      metaAudienceValue: "İş fırsatları & projeler",
      metaFocusLabel: "Odak",
      metaFocusValue: "Peyzaj tasarımı • BIM • OpenBIM (IFC)",

      ctaPrimary: "İletişime Geç",
      ctaLinkedIn: "LinkedIn",
      ctaInstagram: "Instagram",
      heroNote: "Almanya’da aktif iş arayışı • BIM (Vectorworks 2025 & Archicad) • OpenBIM/IFC.",
      visualCaption: "Dengeli tasarım • Akışkan okuma",

      aboutTitle: "Kısa Özet",
      aboutSub: "Bir bakışta kim olduğumu ve ne yaptığımı görün.",
      aboutP1:
        "Düsseldorf merkezli peyzaj mimarıyım. Peyzaj tasarımı/planlama süreçlerinde teknik çizim ve BIM odaklı çalışma disiplinini bir araya getiriyorum.",
      aboutP2:
        "Vectorworks 2025 ve Archicad tarafında BIM-Planer sertifikalarım var; OpenBIM (IFC) ile veri alışverişi, arazi modeli, görselleştirme ve proje organizasyonu konularında pratik deneyim sunuyorum.",

      expTitle: "Deneyim",
      expSub: "Zaman çizgisi gibi okunur, detay kaybolmaz.",
      exp1Role: "Landscape Architect",
      exp1When: "Oct 2012 — Oct 2023",
      exp1Company: "T.C. Tarım ve Orman Bakanlığı • Bursa, Türkiye",
      exp1B1: "Peyzaj uygulama ve bakım süreçlerinde planlama/koordinasyon.",
      exp1B2: "Teknik çizim ve saha ihtiyaçları arasında net iletişim.",
      exp1B3: "Araçlar: SketchUp ve ilgili tasarım/çizim araçları.",
      exp2Role: "Teknik Danışman (Freelance)",
      exp2When: "Oct 2023 — May 2025",
      exp2Company: "Akfidan Peyzaj • Remote • Bursa, Türkiye",
      exp2B1: "Tasarım/uygulama süreçlerine teknik destek ve danışmanlık.",
      exp2B2: "Dokümantasyon, koordinasyon ve teslim odaklı çalışma.",

      exp3Role: "Career Break",
      exp3When: "Jun 2025 — Sep 2025",
      exp3Company: "Düsseldorf, Almanya",
      exp3B1: "Almanya’ya taşınma ve yoğun dil eğitimi.",
      exp3B2: "VHS üzerinden Almanca B2 seviyesini tamamlama.",

      projTitle: "Sertifikalar & Öne Çıkanlar",
      projSub: "BIM ve yazılım tarafındaki güncel yetkinlikler.",
      projPill: "Top CAD",
      projHeader: "BIM-Planer Sertifikaları",
      projHint: "Vectorworks 2025 • Archicad • OpenBIM",
      proj1Name: "Vectorworks 2025 — BIM Planer",
      proj1Desc: "BIM uyumlu modelleme, sınıf/katman organizasyonu ve üretim çıktıları.",
      proj1Tag1: "BIM",
      proj1Tag2: "Vectorworks",
      proj2Name: "Archicad — BIM Planer",
      proj2Desc: "Duvar/pencere/kapı, merdiven ve çatı gibi akıllı elemanlarla BIM iş akışı.",
      proj2Tag1: "BIM",
      proj2Tag2: "Archicad",
      proj3Name: "OpenBIM / IFC • Arazi Modeli • Görselleştirme",
      proj3Desc: "IFC ile veri alışverişi, dijital arazi modeli ve render/ışık-kamera ayarları.",
      proj3Tag1: "OpenBIM",
      proj3Tag2: "IFC",

      skillsTitle: "Beceriler",
      skillsSub: "Dengeli yoğunluk: hızlı taranır, abartı yok.",

      contactTitle: "İletişim",
      contactSub: "Linkleri ekleyince burası tek tıkla çalışır hale gelir.",
      contactFast: "Hızlı",
      contactNormal: "Normal",
      contactSlow: "Yavaş",
      contactEmail: "E-posta",
      contactSocial: "Sosyal",

      footerLine: "Sade & net kişisel sayfa",
      toTop: "Yukarı",
    },

    en: {
      skip: "Skip to content",
      headerTag: "Digital Business Card",
      headerSub: "Professional • Clean • Organized",

      navAbout: "About",
      navExp: "Experience",
      navProj: "Projects",
      navSkills: "Skills",
      navContact: "Contact",

      heroKicker: "Hi, I'm",
      heroRole: "Landscape Architect • #OPEN_TO_WORK",
      metaLocationLabel: "Location",
      metaLocationValue: "Düsseldorf, North Rhine-Westphalia, Germany",
      metaAudienceLabel: "Audience",
      metaAudienceValue: "Job opportunities & projects",
      metaFocusLabel: "Focus",
      metaFocusValue: "Landscape design • BIM • OpenBIM (IFC)",

      ctaPrimary: "Contact",
      ctaLinkedIn: "LinkedIn",
      ctaInstagram: "Instagram",
      heroNote: "Actively open to work in Germany • BIM (Vectorworks 2025 & Archicad) • OpenBIM/IFC.",
      visualCaption: "Balanced design • Smooth scroll",

      aboutTitle: "Quick Summary",
      aboutSub: "Understand who I am and what I do at a glance.",
      aboutP1:
        "I’m a Düsseldorf-based landscape architect, combining landscape design/planning with a structured, BIM-oriented workflow and solid technical drafting practice.",
      aboutP2:
        "I hold BIM Planner certifications for Vectorworks 2025 and Archicad, with hands-on focus on OpenBIM (IFC) exchange, digital terrain models, visualization, and project organization.",

      expTitle: "Experience",
      expSub: "Reads like a timeline without losing detail.",
      exp1Role: "Landscape Architect",
      exp1When: "Oct 2012 — Oct 2023",
      exp1Company: "Republic of Türkiye Ministry of Agriculture and Forestry • Bursa, Türkiye",
      exp1B1: "Planning and coordination across landscape implementation and maintenance processes.",
      exp1B2: "Clear communication between technical drafting needs and on-site requirements.",
      exp1B3: "Tools: SketchUp and related design/drafting tools.",
      exp2Role: "Technical Consultant (Freelance)",
      exp2When: "Oct 2023 — May 2025",
      exp2Company: "Akfidan Peyzaj • Remote • Bursa, Türkiye",
      exp2B1: "Technical support and consulting for design/implementation workflows.",
      exp2B2: "Delivery-focused work with documentation and coordination.",

      exp3Role: "Career Break",
      exp3When: "Jun 2025 — Sep 2025",
      exp3Company: "Düsseldorf, Germany",
      exp3B1: "Relocation to Germany and intensive language study.",
      exp3B2: "Completed German level B2 at VHS (Volkshochschule).",

      projTitle: "Certifications & Highlights",
      projSub: "Current capabilities in BIM and software workflows.",
      projPill: "Top CAD",
      projHeader: "BIM Planner Certifications",
      projHint: "Vectorworks 2025 • Archicad • OpenBIM",
      proj1Name: "Vectorworks 2025 — BIM Planner",
      proj1Desc: "BIM-ready modelling, class/layer organization, and production outputs.",
      proj1Tag1: "BIM",
      proj1Tag2: "Vectorworks",
      proj2Name: "Archicad — BIM Planner",
      proj2Desc: "BIM workflow with intelligent elements (walls, doors/windows, stairs, roofs).",
      proj2Tag1: "BIM",
      proj2Tag2: "Archicad",
      proj3Name: "OpenBIM / IFC • Terrain Models • Visualization",
      proj3Desc: "IFC interoperability, digital terrain modelling, and in-tool visualization/rendering.",
      proj3Tag1: "OpenBIM",
      proj3Tag2: "IFC",

      skillsTitle: "Skills",
      skillsSub: "Balanced density: scannable and grounded.",

      contactTitle: "Contact",
      contactSub: "Once links are added, this section becomes one-click contact.",
      contactFast: "Fast",
      contactNormal: "Normal",
      contactSlow: "Slow",
      contactEmail: "Email",
      contactSocial: "Social",

      footerLine: "Clean, structured personal page",
      toTop: "Top",
    },
  };

  const qsa = (s, el = document) => Array.from(el.querySelectorAll(s));
  const qs = (s, el = document) => el.querySelector(s);

  function setLang(lang) {
    const dict = i18n[lang] || i18n.tr;
    qsa("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (dict[key] != null) node.textContent = dict[key];
    });

    qsa("[data-lang-btn]").forEach((btn) => {
      const on = btn.getAttribute("data-lang-btn") === lang;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    document.documentElement.lang = lang;
    try { localStorage.setItem("kh01_lang", lang); } catch (_) {}
  }

  // Language buttons
  qsa("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang-btn")));
  });

  // Top button
  const toTop = qs("[data-to-top]");
  if (toTop) {
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Prevent placeholder links from jumping to top (until real URLs are provided)
  qsa("[data-placeholder-link]").forEach((a) => {
    a.addEventListener("click", (e) => e.preventDefault());
  });

  // Init language
  let initial = "tr";
  try {
    const saved = localStorage.getItem("kh01_lang");
    if (saved === "en" || saved === "tr") initial = saved;
  } catch (_) {}
  setLang(initial);
})();
