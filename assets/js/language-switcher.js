// Language Switcher JavaScript
(function() {
    'use strict';
    
    // Language data
    const languages = {
        en: {
            // Navigation
            'nav-home': 'HOME',
            'nav-about': 'ABOUT US',
            'nav-services': 'SERVICES',
            'nav-projects': 'PROJECTS',
            'nav-pages': 'PAGE',
            'nav-blog': 'BLOG',
            'nav-contact': 'CONTACT',
            
            // Sub menus
            'nav-about-us': 'ABOUT US',
            'nav-about-detail': 'ABOUT DETAIL',
            'nav-about-team': 'ABOUT TEAM',
            'nav-about-careers': 'ABOUT CAREERS',
            'nav-services-detail': 'SERVICES DETAIL',
            'nav-projects-full': 'PROJECTS FULL WIDTH',
            'nav-projects-detail': 'PROJECTS DETAIL',
            'nav-testimonial': 'PAGE TESTIMONIAL',
            'nav-pricing': 'PAGE PRICING',
            'nav-blog-single': 'BLOG SINGLE',
            'nav-contact-1': 'CONTACT 1',
            'nav-contact-2': 'CONTACT 2',
            
            // Top bar
            'top-address': '4946 Marmora Road, Central New',
            'top-phone': '+61 3 8376 6284',
            'top-time': 'Mon-Sat: 8am - 6pm',
            'top-follow': 'Follow us:',
            'search-placeholder': 'Search...',
            
            // Language button
            'lang-btn': 'عربي'
        },
        ar: {
            // Navigation
            'nav-home': 'الرئيسية',
            'nav-about': 'من نحن',
            'nav-services': 'الخدمات',
            'nav-projects': 'المشاريع',
            'nav-pages': 'الصفحات',
            'nav-blog': 'المدونة',
            'nav-contact': 'اتصل بنا',
            
            // Sub menus
            'nav-about-us': 'من نحن',
            'nav-about-detail': 'تفاصيل من نحن',
            'nav-about-team': 'فريق العمل',
            'nav-about-careers': 'الوظائف',
            'nav-services-detail': 'تفاصيل الخدمات',
            'nav-projects-full': 'المشاريع عرض كامل',
            'nav-projects-detail': 'تفاصيل المشاريع',
            'nav-testimonial': 'آراء العملاء',
            'nav-pricing': 'الأسعار',
            'nav-blog-single': 'مقال واحد',
            'nav-contact-1': 'اتصل بنا 1',
            'nav-contact-2': 'اتصل بنا 2',
            
            // Top bar
            'top-address': '4946 طريق مارمورا، وسط نيويورك',
            'top-phone': '+61 3 8376 6284',
            'top-time': 'الاثنين-السبت: 8 ص - 6 م',
            'top-follow': 'تابعنا:',
            'search-placeholder': 'بحث...',
            
            // Language button
            'lang-btn': 'English'
        }
    };
    
    // Current language
    let currentLang = localStorage.getItem('language') || 'en';
    
    // Initialize language
    function initLanguage() {
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.body.className = document.body.className.replace(/lang-\w+/, '') + ' lang-' + currentLang;
        updateContent();
    }
    
    // Update all content based on current language
    function updateContent() {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (languages[currentLang][key]) {
                element.textContent = languages[currentLang][key];
            }
        });
        
        // Update placeholders
        const placeholders = document.querySelectorAll('[data-lang-placeholder]');
        placeholders.forEach(element => {
            const key = element.getAttribute('data-lang-placeholder');
            if (languages[currentLang][key]) {
                element.placeholder = languages[currentLang][key];
            }
        });
    }
    
    // Switch language
    function switchLanguage() {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        localStorage.setItem('language', currentLang);
        initLanguage();
        addLanguageButton(); // Re-add language button with new text
    }
    
    // Add language switcher button
    function addLanguageButton() {
        const nav = document.querySelector('#main-nav ul');
        if (nav) {
            // Remove existing language button if any
            const existingBtn = nav.querySelector('.language-switcher');
            if (existingBtn) {
                existingBtn.remove();
            }
            
            const langLi = document.createElement('li');
            langLi.className = 'menu-item language-switcher';
            langLi.innerHTML = `
                <a href="#" id="lang-switch-btn" data-lang="lang-btn">
                    ${languages[currentLang]['lang-btn']}
                </a>
            `;
            nav.appendChild(langLi);
            
            // Add event listener
            document.getElementById('lang-switch-btn').addEventListener('click', function(e) {
                e.preventDefault();
                switchLanguage();
            });
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
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
        getCurrentLang: () => currentLang
    };
    
})(); 