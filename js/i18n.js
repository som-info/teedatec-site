/* Teedatec – client-side i18n (en / tr / fa) */
(function (global) {
  'use strict';

  var SUPPORTED = ['en', 'tr', 'fa'];
  var STORAGE_KEY = 'lang';

  var META = {
    en: {
      title: 'Amir Namvar – Full-Stack Web Developer | Teedatec',
      description: 'Amir Namvar (Teedatec) is a freelance full-stack web developer with 5+ years of professional web development experience. Creator of teedatec.ir — building fast, responsive websites, web apps and APIs with React, Node.js and Django.',
      ogLocale: 'en_US'
    },
    tr: {
      title: 'Amir Namvar – Full-Stack Web Geliştirici | Teedatec',
      description: 'Amir Namvar (Teedatec), 5+ yıllık profesyonel web geliştirme deneyimine sahip freelance full-stack web geliştiricisidir. teedatec.ir’in geliştiricisi — React, Node.js ve Django ile hızlı, duyarlı web siteleri, web uygulamaları ve API’ler geliştirir.',
      ogLocale: 'tr_TR'
    },
    fa: {
      title: 'امیر نامور – توسعه‌دهنده فول‌استک وب | Teedatec',
      description: 'سلام! من امیر نامور (Teedatec) هستم، توسعه‌دهنده فول‌استک وب و فریلنسر با بیش از ۵ سال سابقه حرفه‌ای. سازنده teedatec.ir هستم و با React، Node.js و Django وب‌سایت، وب‌اپلیکیشن و API سریع و واکنش‌گرا می‌سازم.',
      ogLocale: 'fa_IR'
    }
  };

  var T = {
    en: {
      skip: 'Skip to content',
      brand_aria: 'Teedatec – back to top',
      nav_aria: 'Primary',
      nav_open: 'Open menu',
      nav_close: 'Close menu',
      nav_about: 'About',
      nav_experience: 'Experience',
      nav_skills: 'Skills',
      nav_services: 'Services',
      nav_projects: 'Projects',
      nav_process: 'How I Work',
      nav_contact: 'Contact',
      theme_to_dark: 'Switch to dark theme',
      theme_to_light: 'Switch to light theme',
      theme_title: 'Toggle theme',
      lang_aria: 'Language',
      lang_label: 'Language',
      hero_hi: "Hi, I'm",
      hero_role: 'Full-Stack Web Developer',
      hero_tagline: 'I build fast, responsive websites and web apps with <strong>React</strong>, <strong>Node.js</strong> and <strong>Django</strong> — clean code, solid APIs and interfaces that work on every screen.',
      hero_cta_work: 'View my work',
      hero_cta_hire: 'Hire me',
      hero_badges_aria: 'Highlights',
      hero_badge_years: '5+ years of professional web development',
      hero_badge_freelance: 'Professional since 2021',
      hero_photo_alt: 'Black and white portrait of Amir Namvar',
      about_title: 'About',
      about_photo_alt: 'Amir Namvar',
      about_lead: "I'm Amir Namvar, a freelance full-stack web developer working under the name <strong>Teedatec</strong>, with <strong>5+ years of professional web development</strong> experience. I design and build web products end to end — from responsive, accessible front-ends in React to secure REST APIs with Node.js/Express or Django. I independently built the Persian e-commerce site at <a href=\"https://teedatec.ir\" target=\"_blank\" rel=\"noopener noreferrer\">teedatec.ir</a>.",
      about_p2: 'I care about performance, maintainable code and clear communication. Whether you need a new website, a web application built from a design, or help fixing and speeding up an existing project, I focus on delivering reliable work that is easy to extend. I work with clients in English, Turkish and Persian.',
      about_fact1_v: '5+ years',
      about_fact1_l: 'web development',
      about_fact2_v: '2021',
      about_fact2_l: 'professional since',
      about_fact3_v: 'Full-stack',
      about_fact3_l: 'React · Node.js · Django',
      languages_title: 'Languages',
      lang_en_name: 'English',
      lang_en_level: 'Professional working proficiency',
      lang_tr_name: 'Turkish',
      lang_tr_level: 'Conversational',
      lang_fa_name: 'Persian',
      lang_fa_level: 'Native',
      experience_title: 'Experience',
      exp1_role: 'Full-Stack Web Developer',
      exp1_org: 'Teedatec',
      exp1_period: 'Aug 2026 – Present',
      exp1_b1: 'Independently developed the complete Persian-language e-commerce website at <a href="https://teedatec.ir" target="_blank" rel="noopener noreferrer">teedatec.ir</a>.',
      exp1_b2: 'Building and maintaining websites and web applications under the Teedatec name.',
      exp1_b3: 'Open to remote roles and freelance work.',
      exp2_role: 'Freelance Web Developer',
      exp2_org: 'Ataç',
      exp2_period: 'Jun 2021 – May 2026',
      exp2_b1: 'Freelance web developer and member of the team building the website\'s user interface (front-end / UI).',
      exp3_role: 'Accounting & Management',
      exp3_org: 'Earlier career',
      exp3_period: '2012 – 2021',
      exp3_b1: 'Accountant at Danesh Hesab Arya (2012–2013) and Kavosh Ahram Yadak (2013–2015).',
      exp3_b2: 'Senior Project Accountant at Rah Sazan Qom (2015–2017).',
      exp3_b3: 'Executive Manager at Armaghan Pardazesh Arvin (2017–2021), leading 13+ internal audit projects and managing a team of four.',
      exp3_biz: 'Business background: my accounting and management experience helps me understand business operations and financial workflows.',
      exp_tags_aria: 'Main technologies',
      learning_title: 'Education & Learning',
      learning_lead: 'Continuous learning is part of how I work. Here is my formal education, and how I keep improving:',
      learning_sub: 'Continuous learning',
      edu1_degree: "Associate's degree in Software Engineering",
      edu1_school: 'Islamic Azad University, North Tehran Branch',
      edu1_period: '2017 – 2019',
      edu2_degree: "Bachelor's degree in Accounting",
      edu2_school: 'Payame Noor University, Tehran',
      edu2_period: '2007 – 2012',
      learn1_h: 'Official documentation',
      learn1_p: 'Learning tools and frameworks from their official docs and guides, so I understand how things work — not just how to copy them.',
      learn2_h: 'Open source',
      learn2_p: 'Reading and studying open-source code to pick up proven patterns, conventions and best practices.',
      learn3_h: 'Real projects',
      learn3_p: 'Building and shipping real websites and applications — every project brings new problems to solve and lessons to keep.',
      learn4_h: 'Staying current',
      learn4_p: 'Following updates in the React, Node.js and Django ecosystems and adopting new features when they make projects better.',
      skills_title: 'Skills',
      skills_frontend: 'Frontend',
      skills_backend: 'Backend',
      skills_tools: 'Tools',
      services_title: 'Services',
      svc1_h: 'Websites & web apps from scratch',
      svc1_p: 'Complete, responsive websites and full-stack web applications — planned, built and ready to deploy.',
      svc2_h: 'Design to React',
      svc2_p: 'Turning Figma or other designs into pixel-accurate, accessible and reusable React components.',
      svc3_h: 'REST APIs & admin panels',
      svc3_p: 'Secure, well-structured APIs with Node.js/Express or Django REST Framework, plus admin dashboards to manage your data.',
      svc4_h: 'Bug fixing & performance',
      svc4_p: 'Finding and fixing bugs, improving load times and Core Web Vitals, and cleaning up existing codebases.',
      projects_title: 'Projects',
      proj_featured: 'Featured',
      proj_live: 'Live',
      live_site: 'Visit site',
      proj_teedatec_title: 'Teedatec.ir: Persian E-commerce Store',
      proj_teedatec_p: 'A complete Persian-language (RTL) e-commerce website, built independently.',
      tech_aria: 'Technologies',
      github: 'GitHub',
      github_sr_shopnest: ' repository for ShopNest (opens in new tab)',
      github_sr_taskflow: ' repository for TaskFlow (opens in new tab)',
      github_sr_lumen: ' repository for Lumen Landing (opens in new tab)',
      github_sr_inkwell: ' repository for Inkwell (opens in new tab)',
      github_sr_pulse: ' repository for Pulse Chat (opens in new tab)',
      github_sr_tablebook: ' repository for Tablebook (opens in new tab)',
      proj_shopnest_alt: 'ShopNest store home page with product grid and category filters',
      proj_shopnest_p: 'Full-stack e-commerce store with product catalog, search, persistent cart and checkout via a REST API.',
      proj_taskflow_alt: 'TaskFlow Kanban board with To Do, In Progress and Done columns',
      proj_taskflow_p: 'Kanban task management dashboard with drag & drop, filters, live stats and JWT authentication.',
      proj_lumen_alt: 'Lumen SaaS landing page hero with analytics dashboard mockup',
      proj_lumen_p: 'Responsive SaaS landing page with pricing toggle, FAQ accordion, form validation and dark mode.',
      proj_inkwell_alt: 'Inkwell blog home page with post list, categories and tag cloud',
      proj_inkwell_p: 'Django blog with categories, tags, search, moderated comments, pagination and a customised admin — server-rendered and responsive.',
      proj_pulse_alt: 'Pulse Chat room with messages, online users list and typing indicator',
      proj_pulse_p: 'Real-time chat with rooms, nicknames, online users, typing indicator and message history persisted to JSON.',
      proj_tablebook_alt: 'Tablebook restaurant home page with hero section and table booking button',
      proj_tablebook_p: 'Restaurant website with menu, table reservations with live availability and validation, and an admin bookings list.',
      process_title: 'How I Work',
      process_lead: "A simple, transparent process — you always know what's happening and what comes next.",
      step1_h: 'Contact & discussion',
      step1_p: 'You tell me about your project, goals and timeline. I ask questions until the requirements are clear.',
      step2_h: 'Proposal & quote',
      step2_p: 'I send a clear proposal with scope, milestones, timeline and price — no surprises later.',
      step3_h: 'Design & development',
      step3_p: 'I build your project in stages and share regular updates and previews so you can give feedback early.',
      step4_h: 'Testing & delivery',
      step4_p: 'Everything is tested on different devices and browsers, then deployed and handed over with the source code.',
      step5_h: 'Support',
      step5_p: 'After launch I\'m available for fixes, small changes and further improvements as your project grows.',
      contact_title: 'Contact',
      contact_lead: "Have a project in mind or need help with an existing one? Send me a message, email me or reach me on WhatsApp or Telegram — I'll get back to you.",
      label_email: 'Email',
      label_whatsapp: 'WhatsApp',
      label_telegram: 'Telegram',
      label_github: 'GitHub',
      label_linkedin: 'LinkedIn',
      opens_tab: ' (opens in new tab)',
      form_name: 'Name',
      form_email: 'Email',
      form_message: 'Message',
      form_ph_name: 'Your name',
      form_ph_email: 'you@example.com',
      form_ph_message: 'Tell me about your project…',
      form_submit: 'Send message',
      form_noscript: 'JavaScript is off — you can also email me directly at',
      form_err_required_name: 'Please enter your name.',
      form_err_required_email: 'Please enter your email.',
      form_err_required_message: 'Please enter your message.',
      form_err_email: 'Please enter a valid email address.',
      form_err_short: 'Please write at least 10 characters.',
      form_err_fields: 'Please fix the highlighted fields.',
      form_sending: 'Sending…',
      form_ok: "Thanks! Your message has been sent. I'll get back to you soon.",
      form_fail: 'Sorry, the message could not be sent. Opening your email app instead…',
      form_mailto: 'Opening your email app… If nothing happens, email me at {email}.',
      form_mailto_subject: 'Project inquiry from {name}',
      footer_copy: '© {year} Teedatec · Amir Namvar',
      footer_phone: 'WhatsApp / Telegram:',
      footer_wa_sr: ' (WhatsApp, opens in new tab)',
      footer_top: 'Back to top ↑',
      page404_title: 'Page not found | Teedatec',
      page404_h1: 'Page not found',
      page404_p: "Sorry, the page you're looking for doesn't exist or has moved.",
      page404_btn: 'Back to home',
      brand_home: 'Teedatec – home'
    },

    tr: {
      skip: 'İçeriğe geç',
      brand_aria: 'Teedatec – başa dön',
      nav_aria: 'Ana menü',
      nav_open: 'Menüyü aç',
      nav_close: 'Menüyü kapat',
      nav_about: 'Hakkımda',
      nav_experience: 'Deneyim',
      nav_skills: 'Yetenekler',
      nav_services: 'Hizmetler',
      nav_projects: 'Projeler',
      nav_process: 'Çalışma Şeklim',
      nav_contact: 'İletişim',
      theme_to_dark: 'Koyu temaya geç',
      theme_to_light: 'Açık temaya geç',
      theme_title: 'Temayı değiştir',
      lang_aria: 'Dil',
      lang_label: 'Dil',
      hero_hi: 'Merhaba, ben',
      hero_role: 'Full-Stack Web Geliştirici',
      hero_tagline: '<strong>React</strong>, <strong>Node.js</strong> ve <strong>Django</strong> ile hızlı, duyarlı web siteleri ve web uygulamaları geliştiriyorum — temiz kod, sağlam API’ler ve her ekranda çalışan arayüzler.',
      hero_cta_work: 'Çalışmalarımı gör',
      hero_cta_hire: 'Benimle çalışın',
      hero_badges_aria: 'Öne çıkanlar',
      hero_badge_years: '5+ yıl profesyonel web geliştirme',
      hero_badge_freelance: '2021’den beri profesyonel',
      hero_photo_alt: 'Amir Namvar’ın siyah-beyaz portresi',
      about_title: 'Hakkımda',
      about_photo_alt: 'Amir Namvar',
      about_lead: 'Ben Amir Namvar; <strong>Teedatec</strong> adıyla çalışan freelance full-stack web geliştiricisiyim ve <strong>5+ yıllık profesyonel web geliştirme</strong> deneyimine sahibim. Web ürünlerini uçtan uca tasarlayıp geliştiriyorum — React ile erişilebilir, duyarlı ön yüzlerden Node.js/Express veya Django ile güvenli REST API’lere kadar. Farsça e-ticaret sitesini <a href="https://teedatec.ir" target="_blank" rel="noopener noreferrer">teedatec.ir</a> adresinde bağımsız olarak geliştirdim.',
      about_p2: 'Performansa, sürdürülebilir koda ve net iletişime önem veririm. Yeni bir site, tasarımdan üretilmiş bir web uygulaması veya mevcut bir projeyi düzeltip hızlandırmak için yardıma ihtiyacınız olsun; güvenilir ve genişletmesi kolay iş teslim etmeye odaklanırım. İngilizce, Türkçe ve Farsça müşterilerle çalışıyorum.',
      about_fact1_v: '5+ yıl',
      about_fact1_l: 'web geliştirme',
      about_fact2_v: '2021',
      about_fact2_l: 'profesyonel başlangıç',
      about_fact3_v: 'Full-stack',
      about_fact3_l: 'React · Node.js · Django',
      languages_title: 'Diller',
      lang_en_name: 'İngilizce',
      lang_en_level: 'Profesyonel çalışma düzeyi',
      lang_tr_name: 'Türkçe',
      lang_tr_level: 'Konuşma seviyesi',
      lang_fa_name: 'Farsça',
      lang_fa_level: 'Ana dil',
      experience_title: 'Deneyim',
      exp1_role: 'Full-Stack Web Geliştirici',
      exp1_org: 'Teedatec',
      exp1_period: 'Ağu 2026 – Günümüz',
      exp1_b1: 'Tam Farsça e-ticaret web sitesini <a href="https://teedatec.ir" target="_blank" rel="noopener noreferrer">teedatec.ir</a> adresinde bağımsız olarak geliştirdim.',
      exp1_b2: 'Teedatec adı altında web siteleri ve web uygulamaları geliştirme ve sürdürme.',
      exp1_b3: 'Uzaktan roller ve freelance çalışmaya açığım.',
      exp2_role: 'Freelance Web Geliştirici',
      exp2_org: 'Ataç',
      exp2_period: 'Haz 2021 – May 2026',
      exp2_b1: 'Freelance web geliştirici ve web sitesinin kullanıcı arayüzünü (ön yüz / UI) oluşturan ekibin üyesi.',
      exp3_role: 'Muhasebe ve Yönetim',
      exp3_org: 'Önceki kariyer',
      exp3_period: '2012 – 2021',
      exp3_b1: 'Danesh Hesab Arya’da (2012–2013) ve Kavosh Ahram Yadak’ta (2013–2015) muhasebeci.',
      exp3_b2: 'Rah Sazan Qom’da Kıdemli Proje Muhasebecisi (2015–2017).',
      exp3_b3: 'Armaghan Pardazesh Arvin’de İcra Müdürü (2017–2021); 13+ iç denetim projesine liderlik ve dört kişilik ekip yönetimi.',
      exp3_biz: 'İş geçmişi: muhasebe ve yönetim deneyimim, iş operasyonlarını ve finansal iş akışlarını anlamama yardımcı oluyor.',
      exp_tags_aria: 'Ana teknolojiler',
      learning_title: 'Eğitim ve Öğrenme',
      learning_lead: 'Sürekli öğrenmek çalışma şeklimin bir parçası. İşte resmi eğitimim ve kendimi nasıl geliştirmeye devam ettiğim:',
      learning_sub: 'Sürekli öğrenme',
      edu1_degree: 'Yazılım Mühendisliği önlisans derecesi',
      edu1_school: 'İslam Azad Üniversitesi, Kuzey Tahran Şubesi',
      edu1_period: '2017 – 2019',
      edu2_degree: 'Muhasebe lisans derecesi',
      edu2_school: 'Payame Noor Üniversitesi, Tahran',
      edu2_period: '2007 – 2012',
      learn1_h: 'Resmi dokümantasyon',
      learn1_p: 'Araçları ve çerçeveleri resmi belgelerinden ve kılavuzlarından öğreniyorum — sadece kopyalamak için değil, nasıl çalıştıklarını anlamak için.',
      learn2_h: 'Açık kaynak',
      learn2_p: 'Kanıtlanmış kalıpları, kuralları ve iyi uygulamaları öğrenmek için açık kaynak kodları okuyup inceliyorum.',
      learn3_h: 'Gerçek projeler',
      learn3_p: 'Gerçek web siteleri ve uygulamalar geliştirip yayınlıyorum — her proje yeni sorunlar ve kalıcı dersler getiriyor.',
      learn4_h: 'Güncel kalmak',
      learn4_p: 'React, Node.js ve Django ekosistemlerindeki güncellemeleri takip ediyor; projeleri iyileştiren yeni özellikleri benimsiyorum.',
      skills_title: 'Yetenekler',
      skills_frontend: 'Ön yüz',
      skills_backend: 'Arka yüz',
      skills_tools: 'Araçlar',
      services_title: 'Hizmetler',
      svc1_h: 'Sıfırdan web siteleri ve uygulamalar',
      svc1_p: 'Planlanmış, geliştirilmiş ve yayına hazır; tam, duyarlı web siteleri ve full-stack web uygulamaları.',
      svc2_h: 'Tasarımdan React’e',
      svc2_p: 'Figma veya diğer tasarımları piksel hassasiyetinde, erişilebilir ve yeniden kullanılabilir React bileşenlerine dönüştürme.',
      svc3_h: 'REST API’ler ve yönetim panelleri',
      svc3_p: 'Node.js/Express veya Django REST Framework ile güvenli, iyi yapılandırılmış API’ler ve verilerinizi yönetmek için paneller.',
      svc4_h: 'Hata giderme ve performans',
      svc4_p: 'Hataları bulup düzeltme, yükleme sürelerini ve Core Web Vitals’ı iyileştirme, mevcut kod tabanlarını temizleme.',
      projects_title: 'Projeler',
      proj_featured: 'Öne çıkan',
      proj_live: 'Canlı',
      live_site: 'Siteyi ziyaret et',
      proj_teedatec_title: 'Teedatec.ir: Farsça E-ticaret Mağazası',
      proj_teedatec_p: 'Bağımsız olarak geliştirilmiş, tam Farsça (RTL) e-ticaret web sitesi.',
      tech_aria: 'Teknolojiler',
      github: 'GitHub',
      github_sr_shopnest: ' ShopNest deposu (yeni sekmede açılır)',
      github_sr_taskflow: ' TaskFlow deposu (yeni sekmede açılır)',
      github_sr_lumen: ' Lumen Landing deposu (yeni sekmede açılır)',
      github_sr_inkwell: ' Inkwell deposu (yeni sekmede açılır)',
      github_sr_pulse: ' Pulse Chat deposu (yeni sekmede açılır)',
      github_sr_tablebook: ' Tablebook deposu (yeni sekmede açılır)',
      proj_shopnest_alt: 'Ürün ızgarası ve kategori filtreleriyle ShopNest mağaza ana sayfası',
      proj_shopnest_p: 'Ürün kataloğu, arama, kalıcı sepet ve REST API üzerinden ödeme içeren full-stack e-ticaret mağazası.',
      proj_taskflow_alt: 'Yapılacaklar, Devam Eden ve Tamamlanan sütunlarıyla TaskFlow Kanban panosu',
      proj_taskflow_p: 'Sürükle-bırak, filtreler, canlı istatistikler ve JWT kimlik doğrulamalı Kanban görev yönetimi panosu.',
      proj_lumen_alt: 'Analitik panosu mockup’ı ile Lumen SaaS açılış sayfası hero bölümü',
      proj_lumen_p: 'Fiyatlandırma anahtarı, SSS akordeonu, form doğrulama ve koyu mod içeren duyarlı SaaS açılış sayfası.',
      proj_inkwell_alt: 'Yazı listesi, kategoriler ve etiket bulutuyla Inkwell blog ana sayfası',
      proj_inkwell_p: 'Kategoriler, etiketler, arama, moderasyonlu yorumlar, sayfalama ve özelleştirilmiş yönetim paneli olan Django blogu — sunucu tarafında render edilen ve duyarlı.',
      proj_pulse_alt: 'Mesajlar, çevrimiçi kullanıcı listesi ve yazıyor göstergesiyle Pulse Chat odası',
      proj_pulse_p: 'Odalar, takma adlar, çevrimiçi kullanıcılar, yazıyor göstergesi ve JSON’a kaydedilen mesaj geçmişiyle gerçek zamanlı sohbet.',
      proj_tablebook_alt: 'Hero bölümü ve masa rezervasyon düğmesiyle Tablebook restoran ana sayfası',
      proj_tablebook_p: 'Menü, canlı müsaitlik ve doğrulamalı masa rezervasyonları ile yönetici rezervasyon listesi içeren restoran web sitesi.',
      process_title: 'Çalışma Şeklim',
      process_lead: 'Basit ve şeffaf bir süreç — her zaman ne olduğunu ve sırada neyin geldiğini bilirsiniz.',
      step1_h: 'İletişim ve görüşme',
      step1_p: 'Projenizi, hedeflerinizi ve zaman çizelgenizi anlatırsınız. Gereksinimler netleşene kadar sorular sorarım.',
      step2_h: 'Teklif ve fiyat',
      step2_p: 'Kapsam, kilometre taşları, zaman çizelgesi ve fiyat içeren net bir teklif gönderirim — sonradan sürpriz yok.',
      step3_h: 'Tasarım ve geliştirme',
      step3_p: 'Projenizi aşamalı geliştirir, erken geri bildirim verebilmeniz için düzenli güncelleme ve önizleme paylaşırım.',
      step4_h: 'Test ve teslim',
      step4_p: 'Her şey farklı cihaz ve tarayıcılarda test edilir; ardından kaynak koduyla birlikte dağıtılıp teslim edilir.',
      step5_h: 'Destek',
      step5_p: 'Yayından sonra düzeltmeler, küçük değişiklikler ve proje büyüdükçe ek iyileştirmeler için ulaşılabilirim.',
      contact_title: 'İletişim',
      contact_lead: 'Aklınızda bir proje mi var veya mevcut birinde yardıma mı ihtiyacınız var? Mesaj gönderin, e-posta atın ya da WhatsApp veya Telegram’dan yazın — size dönüş yaparım.',
      label_email: 'E-posta',
      label_whatsapp: 'WhatsApp',
      label_telegram: 'Telegram',
      label_github: 'GitHub',
      label_linkedin: 'LinkedIn',
      opens_tab: ' (yeni sekmede açılır)',
      form_name: 'Ad',
      form_email: 'E-posta',
      form_message: 'Mesaj',
      form_ph_name: 'Adınız',
      form_ph_email: 'ornek@eposta.com',
      form_ph_message: 'Projenizden bahsedin…',
      form_submit: 'Mesaj gönder',
      form_noscript: 'JavaScript kapalı — doğrudan e-posta da gönderebilirsiniz:',
      form_err_required_name: 'Lütfen adınızı girin.',
      form_err_required_email: 'Lütfen e-posta adresinizi girin.',
      form_err_required_message: 'Lütfen mesajınızı girin.',
      form_err_email: 'Lütfen geçerli bir e-posta adresi girin.',
      form_err_short: 'Lütfen en az 10 karakter yazın.',
      form_err_fields: 'Lütfen vurgulanan alanları düzeltin.',
      form_sending: 'Gönderiliyor…',
      form_ok: 'Teşekkürler! Mesajınız gönderildi. En kısa sürede dönüş yapacağım.',
      form_fail: 'Üzgünüm, mesaj gönderilemedi. Bunun yerine e-posta uygulamanız açılıyor…',
      form_mailto: 'E-posta uygulamanız açılıyor… Bir şey olmazsa {email} adresine yazın.',
      form_mailto_subject: '{name} adlı kişiden proje talebi',
      footer_copy: '© {year} Teedatec · Amir Namvar',
      footer_phone: 'WhatsApp / Telegram:',
      footer_wa_sr: ' (WhatsApp, yeni sekmede açılır)',
      footer_top: 'Başa dön ↑',
      page404_title: 'Sayfa bulunamadı | Teedatec',
      page404_h1: 'Sayfa bulunamadı',
      page404_p: 'Üzgünüz, aradığınız sayfa yok veya taşınmış.',
      page404_btn: 'Ana sayfaya dön',
      brand_home: 'Teedatec – ana sayfa'
    },

    fa: {
      skip: 'برو به محتوای اصلی',
      brand_aria: 'Teedatec – برگشت به بالا',
      nav_aria: 'منوی اصلی',
      nav_open: 'باز کردن منو',
      nav_close: 'بستن منو',
      nav_about: 'درباره من',
      nav_experience: 'سوابق کاری',
      nav_skills: 'مهارت‌ها',
      nav_services: 'خدمات',
      nav_projects: 'پروژه‌ها',
      nav_process: 'نحوه کار',
      nav_contact: 'تماس',
      theme_to_dark: 'رفتن به حالت تیره',
      theme_to_light: 'رفتن به حالت روشن',
      theme_title: 'عوض کردن تم',
      lang_aria: 'زبان',
      lang_label: 'زبان',
      hero_hi: 'سلام، من',
      hero_role: 'توسعه‌دهنده فول‌استک وب',
      hero_tagline: 'با <strong>React</strong>، <strong>Node.js</strong> و <strong>Django</strong> وب‌سایت و وب‌اپلیکیشن‌های سریع و واکنش‌گرا می‌سازم؛ با کدی تمیز، APIهای محکم و ظاهری که روی هر صفحه‌ای درست و مرتب نمایش داده می‌شه.',
      hero_cta_work: 'نمونه‌کارها رو ببینید',
      hero_cta_hire: 'بیاید با هم کار کنیم',
      hero_badges_aria: 'نکته‌های کلیدی',
      hero_badge_years: 'بیش از ۵ سال تجربه حرفه‌ای در توسعه وب',
      hero_badge_freelance: 'کار حرفه‌ای از سال ۲۰۲۱',
      hero_photo_alt: 'عکس سیاه‌وسفید امیر نامور',
      about_title: 'درباره من',
      about_photo_alt: 'امیر نامور',
      about_lead: 'من امیر نامورم؛ توسعه‌دهنده فول‌استک وب و فریلنسر که با نام <strong>Teedatec</strong> کار می‌کنم و <strong>بیش از ۵ سال تجربه حرفه‌ای توسعه وب</strong> دارم. محصولات وب رو از صفر تا صد طراحی و پیاده‌سازی می‌کنم؛ از فرانت‌اند واکنش‌گرا و دسترس‌پذیر با React گرفته تا APIهای REST امن با Node.js/Express یا Django. فروشگاه اینترنتی فارسی <a href="https://teedatec.ir" target="_blank" rel="noopener noreferrer">teedatec.ir</a> رو هم خودم، به‌تنهایی ساختم.',
      about_p2: 'برام مهمه که سایت سریع باشه، کدش راحت نگهداری بشه و ارتباطمون شفاف باشه. فرقی نمی‌کنه یه وب‌سایت جدید بخواید، یه وب‌اپلیکیشن بر اساس طرحی که دارید، یا کمک برای رفع اشکال و سریع‌تر کردن پروژه‌ای که الان دارید؛ تمرکزم روی تحویل کاریه که بشه بهش اعتماد کرد و راحت توسعه‌اش داد. با مشتری‌ها به انگلیسی، ترکی و فارسی کار می‌کنم.',
      about_fact1_v: '۵+ سال',
      about_fact1_l: 'توسعه وب',
      about_fact2_v: '۲۰۲۱',
      about_fact2_l: 'کار حرفه‌ای از سال',
      about_fact3_v: 'فول‌استک',
      about_fact3_l: 'React · Node.js · Django',
      languages_title: 'زبان‌ها',
      lang_en_name: 'انگلیسی',
      lang_en_level: 'در حد کاری و حرفه‌ای',
      lang_tr_name: 'ترکی',
      lang_tr_level: 'در حد مکالمه',
      lang_fa_name: 'فارسی',
      lang_fa_level: 'زبان مادری',
      experience_title: 'سوابق کاری',
      exp1_role: 'توسعه‌دهنده فول‌استک وب',
      exp1_org: 'Teedatec',
      exp1_period: 'اوت ۲۰۲۶ تا الان',
      exp1_b1: 'فروشگاه اینترنتی کامل فارسی <a href="https://teedatec.ir" target="_blank" rel="noopener noreferrer">teedatec.ir</a> رو به‌تنهایی طراحی و پیاده‌سازی کردم.',
      exp1_b2: 'ساخت و پشتیبانی وب‌سایت‌ها و وب‌اپلیکیشن‌ها با برند Teedatec.',
      exp1_b3: 'برای همکاری دورکاری و پروژه‌های فریلنس آماده‌ام.',
      exp2_role: 'توسعه‌دهنده وب فریلنس',
      exp2_org: 'Ataç',
      exp2_period: 'ژوئن ۲۰۲۱ – مه ۲۰۲۶',
      exp2_b1: 'توسعه‌دهنده وب فریلنس و عضو تیم ساخت رابط کاربری (فرانت‌اند / UI) وب‌سایت.',
      exp3_role: 'حسابداری و مدیریت',
      exp3_org: 'مسیر شغلی قبلی',
      exp3_period: '۲۰۱۲ – ۲۰۲۱',
      exp3_b1: 'حسابدار در دانش حساب آریا (۲۰۱۲–۲۰۱۳) و کاوش اهرم یدک (۲۰۱۳–۲۰۱۵).',
      exp3_b2: 'حسابدار ارشد پروژه در راه‌سازان قم (۲۰۱۵–۲۰۱۷).',
      exp3_b3: 'مدیر اجرایی در ارمغان پردازش آروین (۲۰۱۷–۲۰۲۱)؛ رهبری بیش از ۱۳ پروژه حسابرسی داخلی و مدیریت یک تیم چهارنفره.',
      exp3_biz: 'پیشینه کسب‌وکاری: سابقه حسابداری و مدیریت کمکم می‌کنه روند کار یه کسب‌وکار و گردش‌های مالی‌اش رو بهتر بفهمم.',
      exp_tags_aria: 'فناوری‌های اصلی',
      learning_title: 'تحصیلات و یادگیری',
      learning_lead: 'یادگیری همیشه بخشی از کار منه. این‌ها تحصیلات رسمی‌ام و راه‌هاییه که مهارت‌هام رو به‌روز نگه می‌دارم:',
      learning_sub: 'یادگیری همیشگی',
      edu1_degree: 'فوق‌دیپلم مهندسی نرم‌افزار',
      edu1_school: 'دانشگاه آزاد اسلامی، واحد تهران شمال',
      edu1_period: '۲۰۱۷ – ۲۰۱۹',
      edu2_degree: 'کارشناسی حسابداری',
      edu2_school: 'دانشگاه پیام نور، تهران',
      edu2_period: '۲۰۰۷ – ۲۰۱۲',
      learn1_h: 'مستندات رسمی',
      learn1_p: 'ابزارها و فریم‌ورک‌ها رو از مستندات و راهنماهای رسمی خودشون یاد می‌گیرم تا بفهمم واقعاً چطور کار می‌کنن، نه اینکه فقط کد کپی کنم.',
      learn2_h: 'متن‌باز',
      learn2_p: 'با خوندن و بررسی کدهای متن‌باز، الگوها، قراردادها و روش‌های جاافتاده و امتحان‌پس‌داده رو یاد می‌گیرم.',
      learn3_h: 'پروژه‌های واقعی',
      learn3_p: 'وب‌سایت‌ها و اپلیکیشن‌های واقعی می‌سازم و منتشر می‌کنم؛ هر پروژه یه چالش تازه داره و یه درس که یادم می‌مونه.',
      learn4_h: 'به‌روز ماندن',
      learn4_p: 'تغییرات دنیای React، Node.js و Django رو دنبال می‌کنم و هر جا قابلیت‌های جدید پروژه رو بهتر کنن، ازشون استفاده می‌کنم.',
      skills_title: 'مهارت‌ها',
      skills_frontend: 'فرانت‌اند',
      skills_backend: 'بک‌اند',
      skills_tools: 'ابزارها',
      services_title: 'خدمات',
      svc1_h: 'وب‌سایت و وب‌اپ از صفر تا صد',
      svc1_p: 'وب‌سایت‌های کامل و واکنش‌گرا و وب‌اپلیکیشن‌های فول‌استک؛ از برنامه‌ریزی و ساخت تا آماده شدن برای انتشار.',
      svc2_h: 'از طرح تا React',
      svc2_p: 'طرح‌های Figma (یا هر طرح دیگه‌ای) رو به کامپوننت‌های React دقیق، دسترس‌پذیر و قابل استفاده دوباره تبدیل می‌کنم.',
      svc3_h: 'APIهای REST و پنل مدیریت',
      svc3_p: 'APIهای امن و مرتب با Node.js/Express یا Django REST Framework، همراه با داشبورد مدیریت برای داده‌هاتون.',
      svc4_h: 'رفع باگ و بهینه‌سازی',
      svc4_p: 'پیدا کردن و رفع باگ‌ها، کم کردن زمان بارگذاری، بهتر کردن Core Web Vitals و مرتب کردن کدهای فعلی پروژه.',
      projects_title: 'پروژه‌ها',
      proj_featured: 'ویژه',
      proj_live: 'آنلاینه',
      live_site: 'دیدن سایت',
      proj_teedatec_title: 'Teedatec.ir: فروشگاه اینترنتی فارسی',
      proj_teedatec_p: 'یه فروشگاه اینترنتی کامل به زبان فارسی (راست‌چین) که به‌تنهایی ساختمش.',
      tech_aria: 'فناوری‌ها',
      github: 'GitHub',
      github_sr_shopnest: ' مخزن ShopNest (در زبانه جدید باز می‌شود)',
      github_sr_taskflow: ' مخزن TaskFlow (در زبانه جدید باز می‌شود)',
      github_sr_lumen: ' مخزن Lumen Landing (در زبانه جدید باز می‌شود)',
      github_sr_inkwell: ' مخزن Inkwell (در زبانه جدید باز می‌شود)',
      github_sr_pulse: ' مخزن Pulse Chat (در زبانه جدید باز می‌شود)',
      github_sr_tablebook: ' مخزن Tablebook (در زبانه جدید باز می‌شود)',
      proj_shopnest_alt: 'صفحه اصلی فروشگاه ShopNest با شبکه محصولات و فیلتر دسته‌بندی',
      proj_shopnest_p: 'فروشگاه اینترنتی فول‌استک با کاتالوگ محصولات، جست‌وجو، سبد خریدی که پاک نمی‌شه و تسویه‌حساب از طریق REST API.',
      proj_taskflow_alt: 'برد کانبان TaskFlow با ستون‌های To Do، In Progress و Done',
      proj_taskflow_p: 'داشبورد مدیریت کارها به سبک کانبان با کشیدن و رها کردن، فیلترها، آمار لحظه‌ای و احراز هویت JWT.',
      proj_lumen_alt: 'بخش بالای لندینگ SaaS لومن با موکاپ داشبورد تحلیلی',
      proj_lumen_p: 'لندینگ‌پیج واکنش‌گرای SaaS با سوییچ قیمت‌گذاری، پرسش‌های متداول آکاردئونی، اعتبارسنجی فرم و حالت تیره.',
      proj_inkwell_alt: 'صفحه اصلی بلاگ Inkwell با فهرست نوشته‌ها، دسته‌ها و ابر برچسب',
      proj_inkwell_p: 'وبلاگ Django با دسته‌بندی، برچسب، جست‌وجو، نظرهایی که قبل از انتشار بررسی می‌شن، صفحه‌بندی و پنل مدیریت اختصاصی؛ با رندر سمت سرور و طراحی واکنش‌گرا.',
      proj_pulse_alt: 'اتاق Pulse Chat با پیام‌ها، فهرست کاربران آنلاین و نشانگر در حال نوشتن',
      proj_pulse_p: 'چت لحظه‌ای با اتاق‌های گفت‌وگو، نام مستعار، نمایش کاربران آنلاین، نشانگر «در حال نوشتن…» و تاریخچه پیام‌ها که توی JSON ذخیره می‌شه.',
      proj_tablebook_alt: 'صفحه اصلی رستوران Tablebook با بخش هیرو و دکمه رزرو میز',
      proj_tablebook_p: 'وب‌سایت رستوران با منو، رزرو میز با نمایش لحظه‌ای میزهای خالی و اعتبارسنجی، به‌همراه فهرست رزروها برای مدیر.',
      process_title: 'نحوه کار',
      process_lead: 'یه روند ساده و شفاف؛ همیشه می‌دونید کار به کجا رسیده و قدم بعدی چیه.',
      step1_h: 'تماس و گفت‌وگو',
      step1_p: 'از پروژه، هدف‌ها و زمان‌بندی‌تون برام می‌گید. منم سؤال می‌پرسم تا همه‌چیز کاملاً روشن بشه.',
      step2_h: 'پیشنهاد و قیمت',
      step2_p: 'یه پیشنهاد شفاف براتون می‌فرستم، با محدوده کار، مراحل اصلی، زمان‌بندی و قیمت؛ بدون هیچ غافلگیری بعدی.',
      step3_h: 'طراحی و توسعه',
      step3_p: 'پروژه رو مرحله‌به‌مرحله جلو می‌برم و با گزارش و پیش‌نمایش‌های منظم، از همون اول نظرتون رو می‌گیرم.',
      step4_h: 'تست و تحویل',
      step4_p: 'همه‌چیز روی دستگاه‌ها و مرورگرهای مختلف تست می‌شه؛ بعد سایت منتشر می‌شه و کد منبع رو هم تحویلتون می‌دم.',
      step5_h: 'پشتیبانی',
      step5_p: 'بعد از راه‌اندازی هم برای رفع اشکال، تغییرات کوچیک و بهبودهای بعدی، همراه با رشد پروژه در دسترسم.',
      contact_title: 'در تماس باشیم',
      contact_lead: 'پروژه‌ای تو ذهنتونه یا برای پروژه فعلی‌تون کمک لازم دارید؟ پیام بدید، ایمیل بزنید یا از واتساپ و تلگرام در ارتباط باشیم؛ حتماً جواب می‌دم.',
      label_email: 'ایمیل',
      label_whatsapp: 'واتساپ',
      label_telegram: 'تلگرام',
      label_github: 'گیت‌هاب',
      label_linkedin: 'لینکدین',
      opens_tab: ' (در زبانه جدید باز می‌شود)',
      form_name: 'نام',
      form_email: 'ایمیل',
      form_message: 'پیام',
      form_ph_name: 'اسمتون',
      form_ph_email: 'you@example.com',
      form_ph_message: 'از پروژه‌تون برام بگید…',
      form_submit: 'ارسال پیام',
      form_noscript: 'جاوااسکریپت مرورگرتون خاموشه؛ می‌تونید مستقیم ایمیل بزنید به',
      form_err_required_name: 'لطفاً اسمتون رو بنویسید.',
      form_err_required_email: 'لطفاً ایمیلتون رو بنویسید.',
      form_err_required_message: 'لطفاً پیامتون رو بنویسید.',
      form_err_email: 'لطفاً یه آدرس ایمیل درست وارد کنید.',
      form_err_short: 'لطفاً دست‌کم ۱۰ حرف بنویسید.',
      form_err_fields: 'لطفاً فیلدهای مشخص‌شده رو درست کنید.',
      form_sending: 'در حال ارسال…',
      form_ok: 'ممنونم! پیامتون رسید. به‌زودی جواب می‌دم.',
      form_fail: 'ای بابا، پیام ارسال نشد. به‌جاش برنامه ایمیل باز می‌شه…',
      form_mailto: 'برنامه ایمیل داره باز می‌شه… اگه اتفاقی نیفتاد، به {email} ایمیل بزنید.',
      form_mailto_subject: 'درخواست پروژه از طرف {name}',
      footer_copy: '© {year} Teedatec · امیر نامور',
      footer_phone: 'واتساپ / تلگرام:',
      footer_wa_sr: ' (واتساپ، در زبانه جدید باز می‌شود)',
      footer_top: 'برگشت به بالا ↑',
      page404_title: 'صفحه پیدا نشد | Teedatec',
      page404_h1: 'صفحه پیدا نشد',
      page404_p: 'ببخشید! صفحه‌ای که دنبالش هستید وجود نداره یا جابه‌جا شده.',
      page404_btn: 'برگشت به صفحه اصلی',
      brand_home: 'Teedatec – صفحه اصلی'
    }
  };

  function detectLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var q = (params.get('lang') || '').toLowerCase();
      if (SUPPORTED.indexOf(q) !== -1) return q;
      var saved = null;
      try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
      if (SUPPORTED.indexOf(saved) !== -1) return saved;
      var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
      if (nav.indexOf('tr') === 0) return 'tr';
      if (nav.indexOf('fa') === 0) return 'fa';
    } catch (e) { /* ignore */ }
    return 'en';
  }

  function t(lang, key) {
    var dict = T[lang] || T.en;
    if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    if (Object.prototype.hasOwnProperty.call(T.en, key)) return T.en[key];
    return null;
  }

  function format(str, vars) {
    if (!str) return str;
    return str.replace(/\{(\w+)\}/g, function (_, k) {
      return vars && vars[k] != null ? String(vars[k]) : '';
    });
  }

  function setMeta(lang) {
    var m = META[lang] || META.en;
    document.title = m.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', m.description);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', m.title.replace(' | Teedatec', '').replace(' | Teedatec', ''));
    // Keep a cleaner og:title without brand suffix where present
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', m.description);
    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', m.ogLocale);
    var twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', m.title.split(' | ')[0]);
    var twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', m.description);
  }

  function ensureHreflang() {
    var base = 'https://teedatec.com/';
    if (document.querySelector('link[hreflang]')) return;
    var existing = document.querySelectorAll('link[data-i18n-hreflang]');
    if (existing.length) return;
    var langs = [
      { hreflang: 'en', href: base },
      { hreflang: 'tr', href: base + '?lang=tr' },
      { hreflang: 'fa', href: base + '?lang=fa' },
      { hreflang: 'x-default', href: base }
    ];
    var head = document.head;
    langs.forEach(function (item) {
      var link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', item.hreflang);
      link.setAttribute('href', item.href);
      link.setAttribute('data-i18n-hreflang', '1');
      head.appendChild(link);
    });
  }

  function ensureFaFont(lang) {
    var id = 'font-vazirmatn';
    var existing = document.getElementById(id);
    if (lang === 'fa') {
      if (!existing) {
        var link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&display=swap';
        document.head.appendChild(link);
      }
    }
  }

  function apply(lang, persist) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'en';
    var root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    root.setAttribute('data-lang', lang);
    ensureFaFont(lang);
    setMeta(lang);
    ensureHreflang();

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(lang, key);
      if (val == null) return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    // Logo monogram: Persian puts family name first (NA), others use AN
    document.querySelectorAll('.brand-mark text').forEach(function (el) {
      el.textContent = lang === 'fa' ? 'NA' : 'AN';
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var raw = el.getAttribute('data-i18n-attr');
      if (!raw) return;
      raw.split(';').forEach(function (pair) {
        pair = pair.trim();
        if (!pair) return;
        var colon = pair.indexOf(':');
        if (colon === -1) return;
        var attr = pair.slice(0, colon).trim();
        var key = pair.slice(colon + 1).trim();
        var val = t(lang, key);
        if (val != null) el.setAttribute(attr, val);
      });
    });

    // Contact details for the Persian version
    var contactSwap = [
      ['infosomamir@gmail.com', 'info@teedatec.ir'],
      ['905556755787', '989106840174'],
      ['+90 555 675 57 87', '+98 910 684 0174']
    ];
    function swapContact(str) {
      contactSwap.forEach(function (pair) {
        str = str.split(lang === 'fa' ? pair[0] : pair[1]).join(lang === 'fa' ? pair[1] : pair[0]);
      });
      return str;
    }
    document.querySelectorAll('a[href^="mailto:"], a[href*="wa.me/"], a[href*="t.me/"]').forEach(function (el) {
      if (!el.hasAttribute('data-contact-href')) el.setAttribute('data-contact-href', el.getAttribute('href'));
      el.setAttribute('href', lang === 'fa' ? swapContact(el.getAttribute('data-contact-href')) : el.getAttribute('data-contact-href'));
      var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
      while (walker.nextNode()) {
        var next = swapContact(walker.currentNode.nodeValue);
        if (next !== walker.currentNode.nodeValue) walker.currentNode.nodeValue = next;
      }
    });
    document.querySelectorAll('form[data-mailto]').forEach(function (form) {
      if (!form.hasAttribute('data-contact-mailto')) form.setAttribute('data-contact-mailto', form.getAttribute('data-mailto'));
      form.setAttribute('data-mailto', lang === 'fa' ? swapContact(form.getAttribute('data-contact-mailto')) : form.getAttribute('data-contact-mailto'));
    });

    // Footer year copy
    var yearEl = document.getElementById('year');
    var footerCopy = document.querySelector('[data-i18n-footer-copy]');
    if (footerCopy) {
      var year = yearEl ? yearEl.textContent : String(new Date().getFullYear());
      footerCopy.textContent = format(t(lang, 'footer_copy'), { year: year });
    }

    // Language switcher UI state
    document.querySelectorAll('[data-lang-option]').forEach(function (btn) {
      var code = btn.getAttribute('data-lang-option');
      var active = code === lang;
      btn.setAttribute('aria-pressed', String(active));
      btn.classList.toggle('active', active);
    });
    document.querySelectorAll('[data-lang-current]').forEach(function (el) {
      el.textContent = lang.toUpperCase();
    });

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
      try {
        var url = new URL(window.location.href);
        if (lang === 'en') url.searchParams.delete('lang');
        else url.searchParams.set('lang', lang);
        history.replaceState(null, '', url.pathname + url.search + url.hash);
      } catch (e) { /* ignore */ }
    }

    // Notify listeners (e.g. main.js theme aria labels)
    try {
      document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } }));
    } catch (e) { /* older browsers */ }

    return lang;
  }

  function closeMobileNav() {
    var navToggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('nav-menu');
    if (navToggle && menu && menu.classList.contains('open')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', t(rootLang(), 'nav_open'));
      menu.classList.remove('open');
    }
  }

  function initSwitcher() {
    // Desktop dropdowns
    document.querySelectorAll('.lang-switch').forEach(function (wrap) {
      var btn = wrap.querySelector('.lang-switch-btn');
      var panel = wrap.querySelector('.lang-switch-menu');
      if (!btn || !panel) return;

      function close() {
        wrap.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
      function open() {
        wrap.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (wrap.classList.contains('open')) close(); else open();
      });

      document.addEventListener('click', function (e) {
        if (!wrap.contains(e.target)) close();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') close();
      });
    });

    // All language option buttons (desktop menu + mobile pills)
    document.querySelectorAll('[data-lang-option]').forEach(function (opt) {
      opt.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var code = opt.getAttribute('data-lang-option');
        apply(code, true);
        document.querySelectorAll('.lang-switch.open').forEach(function (w) {
          w.classList.remove('open');
          var b = w.querySelector('.lang-switch-btn');
          if (b) b.setAttribute('aria-expanded', 'false');
        });
        closeMobileNav();
      });
    });
  }

  function rootLang() {
    return document.documentElement.getAttribute('lang') || 'en';
  }

  // Expose API
  global.TeedaI18n = {
    SUPPORTED: SUPPORTED,
    detect: detectLang,
    apply: apply,
    t: function (key, vars) {
      var val = t(rootLang(), key);
      return vars ? format(val, vars) : val;
    },
    format: format,
    getLang: rootLang,
    init: function () {
      var lang = detectLang();
      // Persist URL param choice
      try {
        var params = new URLSearchParams(window.location.search);
        var q = (params.get('lang') || '').toLowerCase();
        if (SUPPORTED.indexOf(q) !== -1) {
          try { localStorage.setItem(STORAGE_KEY, q); } catch (e) { /* ignore */ }
        }
      } catch (e) { /* ignore */ }
      apply(lang, false);
      initSwitcher();
    }
  };
})(window);
