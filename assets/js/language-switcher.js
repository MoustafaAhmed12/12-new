// Language Switcher JavaScript
(function () {
  "use strict";

  // Language data
  const languages = {
    en: {
      // Navigation
      "nav-home": "HOME",
      "nav-about": "ABOUT US",
      "nav-services": "SERVICES",
      "nav-projects": "PROJECTS",
      "nav-pages": "PAGE",
      "nav-blog": "BLOG",
      "nav-contact": "CONTACT",

      // Sub menus
      "nav-about-us": "ABOUT US",
      "nav-about-detail": "ABOUT DETAIL",
      "nav-about-team": "ABOUT TEAM",
      "nav-about-careers": "ABOUT CAREERS",
      "nav-services-detail": "SERVICES DETAIL",
      "nav-projects-full": "PROJECTS FULL WIDTH",
      "nav-projects-detail": "PROJECTS DETAIL",
      "nav-testimonial": "PAGE TESTIMONIAL",
      "nav-pricing": "PAGE PRICING",
      "nav-blog-single": "BLOG SINGLE",
      "nav-contact-1": "CONTACT 1",
      "nav-contact-2": "CONTACT 2",

      // Top bar
      "top-address": "4946 Marmora Road, Central New",
      "top-phone": "+61 3 8376 6284",
      "top-time": "Mon-Sat: 8am - 6pm",
      "top-follow": "Follow us:",
      "search-placeholder": "Search...",

      // Language button
      "lang-btn": "ar",

      // Hero section
      // Hero section
      "hero-title1": "A GLOBAL LEADER IN INFRASTRUCTURE",
      "hero-title12": "WE WILL BE HAPPY",
      "hero-subtitle1": "TO TAKE CARE OF YOUR WORK",
      "hero-title2": "World-Class Quality Standards",
      "hero-title22": "We deliver results that match your trust.",
      "hero-subtitle2": "WE WILL BE HAPPY",
      "hero-title3": "A GLOBAL LEADER IN INFRASTRUCTURE",
      "hero-title32": "WE WILL BE HAPPY",
      "hero-subtitle3": "TO TAKE CARE OF YOUR WORK",
      "contact-us": "Contact Us",

      "choose-title": "YOUR BEST CHOOSE",
      "choose-subtitle":
        "More than 500 projects completed in Autora - With over 25 years of combined experience, we have the knowledge to serve you.",
      "choose-box1-title": "BEST QUALITY",
      "choose-box1-text":
        "United Abad Services are committed to meeting the highest quality standards without compromising our safety culture.",
      "choose-box2-title": "ON TIME",
      "choose-box2-text":
        "At our company, we respect the customer’s time and schedule and always complete the projects on timely fashion way.",
      "choose-box3-title": "EXPERIENCED",
      "choose-box3-text":
        "As the saying goes practice makes perfect. With our years of experience you can bet on us to get the job done exactly to your requirements.",
      "about-btn": "ABOUT US",

      // About Section
      "about-title": "WELCOME TO UNITED ABAD",
      "about-subtitle":
        "We have successfully completed projects in numerous regions across the country. United Abad Construction Services has a proven track record of:",
      "about-list1":
        "Completing projects on time & Following budget guidelines",
      "about-list2": "Elevated quality of workmanship",
      "about-list3": "Meeting diverse supplier requirements",
      "about-list4":
        "Implementing appropriate safety precautions and procedures",
      "about-button": "GET IN TOUCH",

      "services-title": "BEST SERVICES",
      "services-subtitle":
        "United Abad Construction Services offers a full range of construction services from initial design to project completion.",
      "services-item1": "DESIGN & BUILD",
      "services-item2": "BUILDING ENVELOPES",
      "services-item3": "CONSTRUCTION",
      "services-item4": "DESIGN & BUILD",
      "services-button": "ALL SERVICES",

      // Projects Section
      "projects-title": "FEATURED PROJECT",
      "project-item-title": "LAKE MEADOWS APARTMENTS",
      "project-meta-architecture": "Architecture",
      "project-meta-building": "Building",
      "projects-button": "ALL PROJECTS",

      "all-services-title": "ALL SERVICES",
      "all-services-subtitle":
        "Would you like to know how we can contribute to the success of your project? Please contact us.",

      "service-design-build-title": "DESIGN & BUILD",
      "service-design-build-desc":
        "We understand the project expectations and manage these requirements with the design team. Innovation is an integral part of every stage of the project.",

      "service-preconstruction-title": "PRECONSTRUCTION SERVICES",
      "service-preconstruction-desc":
        "United Abad Construction Services provides the right resources and expertise to evaluate concepts through our leading preconstruction services team.",
      "service-construction-management-title": "CONSTRUCTION MANAGEMENT",
      "service-construction-management-desc":
        "We work closely with architects and designers to understand the project and develop targeted solutions to improve all stages of construction.",
      "service-building-envelopes-title": "BUILDING ENVELOPES",
      "service-building-envelopes-desc":
        "Our in-house envelope teams provide a variety of solutions for new building projects or updating existing building envelopes.",
      "service-metal-building-title": "METAL BUILDING SERVICES",
      "service-metal-building-desc":
        "Over the past decade, we have completed over 5 million square feet of metal building systems in Canada and the United States.",
      "service-concrete-structures-title": "CONCRETE STRUCTURES",
      "service-concrete-structures-desc":
        "We have a talented team of industry experts who can execute complex concrete work to the specifications of each project.",

      "tabs-overview-title": "OVERVIEW",
      "tabs-faqs-title": "FAQS",
      "tabs-our-focus": "OUR FOCUS",
      "tabs-dedicated": "DEDICATED",
      "tabs-committed": "COMMITTED",
      "tabs-content-p":
        "We aim to exceed your expectations, meet deadlines, and successfully manage your budget. We provide our clients with first-class general contracting, construction management, site surveying, design and build services.",
      "tabs-list-1":
        "We have successfully completed projects in numerous states.",
      "tabs-list-2":
        "We are licensed to work as a general contractor in most states.",
      "tabs-list-3":
        "We are open to obtaining new licenses if opportunities arise.",
      "faq-q1": "Are there any hosting companies you recommend?",
      "faq-q2": "We use technology to get the job done faster",
      "faq-q3": "Employees are continuously trained on safety issues",
      "faq-a":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",

      // TESTIMONIALS
      "testimonials-title": "TESTIMONIALS",
      "testimonials-subtitle":
        "Our clients are our partners. We are committed to delivering the best possible service and results.",
      "testimonials-item-title": "John Doe",
      "testimonials-item-text":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "testimonials-item-meta": "CEO, Company Name",

      // QUOTE
      "quote-title": "START EXECUTING YOUR PROJECT",
      "quote-button": "START NOW",

      // FOOTER
      "footer-title": "ABOUT US",
      "footer-subtitle":
        "We have over 15 years of experience able to help you 24 hours a day.",
      "footer-address": "PO BOX 16122 COLLINS STREET",
      "footer-phone": "+613 8376 6284",
      "footer-email": "info@autora.com",
      "footer-copyright": "Copyright © 2025 United Abad Services",
      "footer-recent-posts": "RECENT POSTS",
      "footer-recent-posts-title": "SMART BUILDING WITH CONCRETE SUSTAINABLE",
      "footer-tags": "TAGS",
      "footer-instagram-photos": "INSTAGRAM PHOTOS",
      "footer-copyright": "Copyright © 2025 United Abad",
      "footer-home": "HOME",
      "footer-about-us": "ABOUT US",
      "footer-services": "SERVICES",
      "footer-projects": "PROJECTS",
      "footer-page": "PAGE",
      "footer-blog": "BLOG",
      "footer-contact": "CONTACT",

      // Contact Page
      "contact-title": "CONTACT US",
      "contact-subtitle":
        "Are you interested in finding out how Autora Construction Services can make your project. For more information on our services please contact us.",
      // INPUTS
      "input-name": "Name*",
      "input-email": "Your Email*",
      "input-phone": "Phone",
      "input-subject": "Subject",
      "input-message": "Message*",
      "input-button": "SEND US",

      info: "INFOMATION",

      name: "DESIGN-BUILD",
      subTitle:
        "We develop and understand project expectations and then manage those needs with a design [...]",
      btn: "DETAILS",

      special_services: "SPECIAL SERVICES",
      design_build: "DESIGN & BUILD",
      design_build_desc:
        "We work to develop and understand project expectations and then manage those needs with a customized, qualified design team. Innovation should happen throughout a project",
      service_consultant: "SERVICE CONSULTANT",
      service_consultant_desc:
        "Through our Design-Build service, we provides a single source of responsibility to the client...",
      our_services_include: "OUR SERVICES INCLUDE:",
      interior_design_planning: "Interior Design Planning",
      colour_finish_consultations: "Colour & Finish Consultations",
      custom_lighting: "Architectural & Custom Lighting",
      glass_specifications: "Glass & Acrylic Specifications",
      this_service_desc:
        "THIS AWESOME SERVICE BRINGS FULL INTEREST INFORMATION FOR YOUR PURPOSE",
      download_pdf: "Download .PDF",
      download_doc: "Download .DOC",
      contact_us: "CONTACT US FOR DESIGN-BUILD SERVICES TODAY",

      design_build: "Design - Build",
      construction_manager: "Construction manager",
      metal_building_services: "Metal building services",
      preconstruction_services: "Preconstruction services",
      building_envelopes: "Building envelopes",
      concrete_structures: "Concrete structures",

      how_can_we_help: "HOW CAN WE HELP ?",
      description:
        "Are you interested in finding out how we can make your project. Please email us.",

      get_in_touch: "GET IN TOUCH",
    },
    ar: {
      // Navigation
      "nav-home": "الرئيسية",
      "nav-about": "من نحن",
      "nav-services": "الخدمات",
      "nav-projects": "المشاريع",
      "nav-pages": "الصفحات",
      "nav-blog": "المدونة",
      "nav-contact": "اتصل بنا",

      // Sub menus
      "nav-about-us": "من نحن",
      "nav-about-detail": "تفاصيل من نحن",
      "nav-about-team": "فريق العمل",
      "nav-about-careers": "الوظائف",
      "nav-services-detail": "تفاصيل الخدمات",
      "nav-projects-full": "المشاريع عرض كامل",
      "nav-projects-detail": "تفاصيل المشاريع",
      "nav-testimonial": "آراء العملاء",
      "nav-pricing": "الأسعار",
      "nav-blog-single": "مقال واحد",
      "nav-contact-1": "اتصل بنا 1",
      "nav-contact-2": "اتصل بنا 2",

      // Top bar
      "top-address": "4946 طريق مارمورا، وسط نيويورك",
      "top-phone": "+61 3 8376 6284",
      "top-time": "الاثنين-السبت: 8 ص - 6 م",
      "top-follow": "تابعنا:",
      "search-placeholder": "بحث...",

      // Language button
      "lang-btn": "en",

      // Hero section
      "hero-title1": "نبني اليوم... لأجل غدٍ أقوى",
      "hero-title12": "مشاريع هندسية برؤية مستقبلية",
      "hero-subtitle1": "نصنع مستقبلًا أقوى من أساسه",
      "hero-title2": "معايير جودة عالمية",
      "hero-title22": ".نقدّم نتائج تليق بثقتك",
      "hero-subtitle2": ".نلتزم بأعلى المعايير في كل مرحلة",
      "hero-title3": "حلول مقاولات متكاملة",
      "hero-title32": ".نخطط، ننفذ، ونُنجز بفعالية",
      "hero-subtitle3": ".كل ما تحتاجه تحت سقف واحد",
      "contact-us": "تواصل معنا",

      // Icon Box Section
      "choose-title": "اختيارك الأفضل",

      "choose-subtitle":
        "أكثر من 500 مشروع تم تنفيذه، وأكثر من 25 عامًا من الخبرة تجمع بين الكفاءة والمعرفة لخدمتك.",

      "choose-box1-title": "أفضل جودة",

      "choose-box1-text":
        "نلتزم في أبعاد المتحدة بأعلى معايير الجودة دون المساس بثقافة السلامة لدينا.",

      "choose-box2-title": "الالتزام بالمواعيد",

      "choose-box2-text":
        "نحترم وقت عملائنا ونحرص دائمًا على إنجاز المشاريع في الوقت المحدد ووفق الجدول الزمني المتفق عليه.",

      "choose-box3-title": "خبرة موثوقة",

      "choose-box3-text":
        "كما يُقال: التمرين يصنع الإتقان. وبفضل سنوات خبرتنا، يمكنك الوثوق بنا لإنجاز العمل وفقًا لمتطلباتك بدقة.",

      "about-btn": "من نحن",
      // About Section
      "about-title": "مرحبًا بكم في أبعاد المتحدة",
      "about-subtitle":
        "نفذنا بنجاح مشاريع في مناطق متعددة على مستوى الدولة. لدى شركة أبعاد المتحدة سجل حافل في:",
      "about-list1": "إنجاز المشاريع في الوقت المحدد والالتزام بالميزانية",
      "about-list2": "جودة تنفيذ عالية ومتميزة",
      "about-list3": "الوفاء بمتطلبات الموردين المتنوعة",
      "about-list4": "تطبيق إجراءات ومعايير السلامة بشكل فعال",
      "about-button": "تواصل معنا",

      "services-title": "أفضل الخدمات",
      "services-subtitle":
        "تقدم أبعاد المتحدة مجموعة متكاملة من خدمات البناء من التصميم الأولي وحتى تسليم المشروع.",
      "services-item1": "تصميم وتنفيذ",
      "services-item2": "أنظمة تغليف المباني",
      "services-item3": "أعمال الإنشاءات",
      "services-item4": "إدارة المشاريع الإنشائية",
      "services-button": "كل الخدمات",
      // Projects Section
      "projects-title": "مشاريعنا المميزة",
      "project-item-title": "شقق ليك ميدوز",
      "project-meta-architecture": "تصميم معماري",
      "project-meta-building": "إنشاءات",
      "projects-button": "جميع المشاريع",

      "all-services-title": "جميع الخدمات",
      "all-services-subtitle":
        "هل ترغب في معرفة كيف يمكننا أن نساهم في نجاح مشروعك؟ يرجى التواصل معنا.",

      "service-design-build-title": "التصميم والبناء",
      "service-design-build-desc":
        "نقوم بفهم توقعات المشروع وندير هذه المتطلبات مع فريق التصميم. الابتكار جزء لا يتجزأ من كل مراحل المشروع.",

      "service-preconstruction-title": "خدمات ما قبل البناء",
      "service-preconstruction-desc":
        "توفر شركة إبعاد المتحدة الموارد والخبرة المناسبة لتقييم المفاهيم من خلال فريق خدمات ما قبل البناء الرائد لدينا.",

      "service-construction-management-title": "إدارة البناء",
      "service-construction-management-desc":
        "نعمل عن كثب مع المهندسين المعماريين والمصممين لفهم المشروع وتطوير حلول مستهدفة لتحسين جميع مراحل البناء.",

      "service-building-envelopes-title": "أنظمة واجهات المباني",
      "service-building-envelopes-desc":
        "توفر فرق التغليف الداخلية لدينا حلولًا متنوعة لمشاريع المباني الجديدة أو تحديث واجهات المباني القائمة.",

      "service-metal-building-title": "خدمات المباني المعدنية",
      "service-metal-building-desc":
        "خلال العقد الماضي، أنجزنا أكثر من 5 ملايين قدم مربع من أنظمة المباني المعدنية في كندا والولايات المتحدة.",

      "service-concrete-structures-title": "الهياكل الخرسانية",
      "service-concrete-structures-desc":
        "لدينا فريق موهوب من خبراء الصناعة قادر على تنفيذ الأعمال الخرسانية المعقدة حسب متطلبات كل مشروع.",

      "tabs-overview-title": "نظرة عامة",
      "tabs-faqs-title": "الأسئلة الشائعة",
      "tabs-our-focus": "تركيزنا",
      "tabs-dedicated": "الالتزام",
      "tabs-committed": "الوفاء بالالتزامات",
      "tabs-content-p":
        "نهدف إلى تجاوز توقعاتك، والالتزام بالجداول الزمنية، وإدارة ميزانيتك بنجاح. نحن نقدم لعملائنا خدمات مقاولات عامة وإدارة إنشاءات ومسح مواقع وتصميم وتنفيذ من الدرجة الأولى.",
      "tabs-list-1": "نجحنا في إتمام مشاريع في العديد من الولايات.",
      "tabs-list-2": "لدينا ترخيص للعمل كمقاول عام في معظم الولايات.",
      "tabs-list-3": "نحن منفتحون للحصول على تراخيص جديدة إذا توفرت الفرص.",
      "faq-q1": "هل هناك شركات استضافة تنصحون بها؟",
      "faq-q2": "نستخدم التكنولوجيا لإنجاز العمل بسرعة أكبر",
      "faq-q3": "يتم تدريب الموظفين باستمرار على مسائل السلامة",
      "faq-a":
        "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. تم استخدام لوريم إيبسوم كنص قياسي منذ القرن الخامس عشر. يتم استخدامه لتوفير محتوى تجريبي هنا.",

      // TESTIMONIALS
      "testimonials-title": "آراء العملاء",
      "testimonials-subtitle":
        "عملائنا هم عملاءنا. نلتزم بتقديم أفضل الخدمات والنتائج.",
      "testimonials-item-title": "جون دو",
      "testimonials-item-text":
        "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. تم استخدام لوريم إيبسوم كنص قياسي منذ القرن الخامس عشر. يتم استخدامه لتوفير محتوى تجريبي هنا.",
      "testimonials-item-meta": "رئيس مجلس الإدارة، شركة Company Name",

      // QUOTE
      "quote-title": "ابدأ تنفيذ مشروعك الآن",
      "quote-button": "ابدأ الآن",

      // FOOTER
      "footer-title": "من نحن",
      "footer-subtitle":
        "لدينا أكثر من 15 عامًا من الخبرة ونستطيع أن نساعدك 24 ساعة في اليوم.",
      "footer-address": "PO BOX 16122 COLLINS STREET",
      "footer-phone": "+613 8376 6284",
      "footer-email": "info@autora.com",
      "footer-copyright": "Copyright © 2025 إبعاد المتحدة",
      "footer-recent-posts": "المقالات الأخيرة",
      "footer-recent-posts-title": "المباني الذكية بالخرسانة المستدامة",
      "footer-tags": "الوسوم",
      "footer-instagram-photos": "صور فيسبوك",
      "footer-copyright": "حقوق النشر © 2025 إبعاد المتحدة",
      "footer-home": "الرئيسية",
      "footer-about-us": "من نحن",
      "footer-services": "الخدمات",
      "footer-projects": "المشاريع",
      "footer-page": "الصفحة",
      "footer-blog": "المدونة",
      "footer-contact": "الاتصال",

      // Contact Page
      "contact-title": "اتصل بنا",
      "contact-subtitle":
        "هل ترغب في معرفة كيف يمكننا أن نساهم في نجاح مشروعك؟ يرجى التواصل معنا.",
      //inputs
      "input-name": "الاسم",
      "input-email": "البريد الإلكتروني",
      "input-phone": "الهاتف",
      "input-message": "الرسالة",
      "input-subject": "الموضوع",
      "input-required": "هذا الحقل مطلوب",
      "input-invalid": "البريد الإلكتروني غير صالح",
      "input-button": "إرسال",

      info: "معلومات",

      name: "محمد حسن",
      subTitle:
        "هل ترغب في معرفة كيف يمكننا أن نساهم في نجاح مشروعك؟ يرجى التواصل معنا",
      btn: "تفاصيل",

      special_services: "الخدمات الخاصة",
      design_build: "تصميم وبناء",
      design_build_desc:
        "نعمل على تطوير وفهم توقعات المشروع ثم ندير هذه الاحتياجات بفريق تصميم مؤهل ومخصص. يجب أن يحدث الابتكار طوال المشروع",
      service_consultant: "مستشار الخدمة",
      service_consultant_desc:
        "من خلال خدمة التصميم والبناء، نوفر مصدرًا واحدًا للمسؤولية تجاه العميل...",
      our_services_include: "تشمل خدماتنا:",
      interior_design_planning: "تخطيط التصميم الداخلي",
      colour_finish_consultations: "استشارات الألوان والتشطيبات",
      custom_lighting: "الإضاءة المعمارية والمخصصة",
      glass_specifications: "مواصفات الزجاج والأكريليك",
      this_service_desc: "تقدم هذه الخدمة الرائعة معلومات كاملة لأغراضك",
      download_pdf: "تحميل ملف .PDF",
      download_doc: "تحميل ملف .DOC",
      contact_us: "تواصل معنا للحصول على خدمات التصميم والبناء اليوم",
      how_can_we_help: "كيف يمكننا مساعدتك؟",
      get_in_touch: "تواصل معنا",
      design_build: "تصميم - بناء",
      construction_manager: "مدير الإنشاءات",
      metal_building_services: "خدمات المباني المعدنية",
      preconstruction_services: "خدمات ما قبل البناء",
      building_envelopes: "أغلفة المباني",
      concrete_structures: "الهياكل الخرسانية",
      description:
        "هل أنت مهتم بمعرفة كيف يمكننا تنفيذ مشروعك؟ يرجى مراسلتنا عبر البريد الإلكتروني.",
    },
  };

  // Current language
  let currentLang = localStorage.getItem("language") || "en";

  // Initialize language
  function initLanguage() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.body.className =
      document.body.className.replace(/lang-\w+/, "") + " lang-" + currentLang;
    updateContent();
  }

  // Update all content based on current language
  function updateContent() {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (languages[currentLang][key]) {
        element.textContent = languages[currentLang][key];
      }
    });

    // Update placeholders
    const placeholders = document.querySelectorAll("[data-lang-placeholder]");
    placeholders.forEach((element) => {
      const key = element.getAttribute("data-lang-placeholder");
      if (languages[currentLang][key]) {
        element.placeholder = languages[currentLang][key];
      }
    });
  }

  // Switch language
  function switchLanguage() {
    currentLang = currentLang === "en" ? "ar" : "en";
    localStorage.setItem("language", currentLang);
    initLanguage();
    addLanguageButton(); // Re-add language button with new text
  }

  // Add language switcher button
  function addLanguageButton() {
    const nav = document.querySelector("#main-nav ul");
    if (nav) {
      // Remove existing language button if any
      const existingBtn = nav.querySelector(".language-switcher");
      if (existingBtn) {
        existingBtn.remove();
      }

      const langLi = document.createElement("li");
      langLi.className = "menu-item language-switcher";
      langLi.innerHTML = `
                <a href="#" id="lang-switch-btn" data-lang="lang-btn">
                    ${languages[currentLang]["lang-btn"]}
                </a>
            `;
      nav.appendChild(langLi);

      // Add event listener
      document
        .getElementById("lang-switch-btn")
        .addEventListener("click", function (e) {
          e.preventDefault();
          switchLanguage();
        });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initLanguage();
      addLanguageButton();
    });
  } else {
    initLanguage();
    addLanguageButton();
  }

  // Make functions globally available
  window.LanguageSwitcher = {
    switchLanguage: switchLanguage,
    getCurrentLang: () => currentLang,
  };
})();
