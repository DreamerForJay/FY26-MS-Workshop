// Main JavaScript file for CV website

document.addEventListener('DOMContentLoaded', function() {
    
    // Translation Data
    const translations = {
        zh: {
            "t-name": "楊杰倫 (Chieh-Lun Yang)",
            "t-title": "彰師大資工系學生｜TMYTEK",
            "t-tagline": "熱愛技術實作、AI 應用與跨域協作，持續把想法做成可被使用的產品。",
            "t-location": "桃園市楊梅區",
            "t-resume-link": "下載最新履歷 PDF",
            "t-about-title": "關於我",
            "t-about-desc": "我是一位富有創意、熱愛學習與分享的資工學生，具備成長型思維、團隊溝通與活動執行經驗。關注 AI、軟體測試、產品應用及跨域創新，期待透過實務專案持續累積技術並為團隊創造價值。",
            "t-exp-title": "工作經歷",
            "t-exp1-role": "科技日報校園大使", "t-exp1-time": "2026/03 - 至今", "t-exp1-comp": "鴻海精密工業股份有限公司",
            "t-exp1-list": "<li>負責 AI、自動化與產業趨勢內容，協助提升校園對鴻海科技布局的認知。</li><li>協助校園活動、科技展覽與招募活動的現場執行與流程規劃。</li><li>蒐集學生對科技議題與職涯發展的回饋，支援後續內容與活動策略。</li>",
            "t-exp2-role": "104 校園大使｜職涯課程組", "t-exp2-time": "2025/07 - 2026/07", "t-exp2-comp": "一零四資訊科技股份有限公司",
            "t-exp2-list": "<li>協助推廣全國實習打工競賽並參與評分方式規劃，活動收到 600+ 件作品。</li><li>擔任彰師大職涯體驗課程助教，協調企業講師、課程時程與資訊。</li><li>參與品牌內容、產品共創與跨校專案合作。</li>",
            "t-exp3-role": "暑期軟體測試實習生", "t-exp3-time": "2025/07 - 2025/08", "t-exp3-comp": "冠捷科技股份有限公司 (TPV Technology)",
            "t-exp3-list": "<li>執行多語系介面、功能、回歸與異常情境測試。</li><li>參與多語系翻譯測試自動化工具開發，提升測試流程效率。</li><li>進行 Bug Tracking、問題重現，並與 RD、QA、PM 跨部門協作。</li>",
            "t-exp4-role": "技術組校園大使", "t-exp4-time": "2024/12 - 2025/06", "t-exp4-comp": "康斯特科技｜Glows.ai",
            "t-exp4-list": "<li>協助測試系統運作流程與穩定性。</li><li>支援 2025 AI Expo、COMPUTEX 等展覽的現場技術展示與溝通。</li>",
            "t-edu-title": "教育背景", "t-edu1-dept": "資訊工程學系", "t-edu1-time": "2023/09 - 2027/06（預計）", "t-edu1-school": "國立彰化師範大學 (NCUE)",
            "t-edu1-desc": "大一上 91.53（系排 5）、大一下 94.04（系排 3）、大二上 91.33（系排 5）、大二下 94.44（系排 2）。",
            "t-lead-title": "活動與領導經驗", "t-lead4-role": "活動組", "t-lead4-time": "2025/09 - 至今", "t-lead4-comp": "彰師大資工系學會", "t-lead4-list": "<li>協助規劃與執行系上大型活動。</li><li>負責活動現場協調與支援。</li>",
            "t-lead1-role": "器材組組長", "t-lead1-time": "2025/02 - 至今", "t-lead1-comp": "NCUE 資訊研究社 (NCUEITC)", "t-lead1-list": "<li>管理社團器材並提供技術支援。</li><li>協助辦理程式工作坊與技術交流活動。</li>",
            "t-lead2-role": "社群成員", "t-lead2-time": "2023/09 - 2025/02", "t-lead2-comp": "GDSC / GDG / 投資研習社", "t-lead2-list": "<li>參與 GDSC 聯合技術交流、DevFest Taipei 2024、SITCON 2025 與 COMPUTEX。</li><li>投入開源、前端與創新技術應用。</li>",
            "t-lead3-role": "副會長暨公關", "t-lead3-time": "2025/06 - 至今", "t-lead3-comp": "彰師大轉學生聯誼會", "t-lead3-list": "<li>參與轉學生社群核心營運。</li><li>負責對外溝通、活動宣傳與社群經營。</li>",
            "t-skill-title": "技能與專長", "t-skill-prog": "程式語言", "t-skill-tool": "工具與平台", "t-skill-soft": "軟實力", "t-skill-s1": "團隊溝通", "t-skill-s2": "活動協調", "t-skill-s3": "自主學習", "t-skill-s4": "社群經營",
            "t-proj-title": "精選專案與獎項", "t-proj1-title": "Merlance 智慧記憶項鍊", "t-proj1-desc": "2025 康寧創星家創新應用競賽優等獎。整合 AI 語音互動、微型投影、光引導與 GPS 安全功能，為長者打造兼具情感陪伴與生活安全的穿戴裝置。",
            "t-proj2-title": "Digital Detoxifier 數位戒斷方案", "t-proj2-desc": "AI Junior Award 2025。以使用分析、溫和提醒與內容轉移三階段設計，改善碎片化內容與數位成癮問題。",
            "t-proj3-title": "IEYI 世界青少年創客發明展", "t-proj3-desc": "2022 台灣區銅牌獎，展現團隊合作、創意思考與實作能力。"
        },
        en: {
            "t-name": "Chieh-Lun Yang", "t-title": "NCUE CSIE Student | TMYTEK", "t-tagline": "Turning ideas in AI, software, and cross-domain collaboration into practical products.", "t-location": "Yangmei, Taoyuan, Taiwan", "t-resume-link": "Download latest resume (PDF)",
            "t-about-title": "About Me", "t-about-desc": "I am a creative computer science student who enjoys learning, sharing knowledge, and building practical solutions. My interests include AI applications, software testing, product development, and cross-domain innovation. I bring a growth mindset, clear communication, and hands-on project experience to every team.",
            "t-exp-title": "Work Experience",
            "t-exp1-role": "Technology Daily Campus Ambassador", "t-exp1-time": "Mar 2026 - Present", "t-exp1-comp": "Hon Hai Precision Industry Co., Ltd. (Foxconn)", "t-exp1-list": "<li>Create internal content on technology trends, AI, and automation.</li><li>Support campus events, technology exhibitions, and recruiting activities.</li><li>Gather student feedback on technology and career topics to inform future content and event strategy.</li>",
            "t-exp2-role": "Campus Ambassador - Career Program Division", "t-exp2-time": "Jul 2025 - Jul 2026", "t-exp2-comp": "104 Corporation", "t-exp2-list": "<li>Promoted a nationwide internship competition and helped plan scoring criteria for 600+ submissions.</li><li>Coordinated enterprise speakers, schedules, and course information as an NCUE career-program teaching assistant.</li><li>Contributed to brand content, product co-creation, and cross-campus projects.</li>",
            "t-exp3-role": "Summer Software Testing Intern", "t-exp3-time": "Jul 2025 - Aug 2025", "t-exp3-comp": "TPV Technology", "t-exp3-list": "<li>Performed multilingual UI, functional, regression, and exception-scenario testing.</li><li>Contributed to a multilingual translation test-automation tool.</li><li>Tracked and reproduced bugs while collaborating with RD, QA, and PM teams.</li>",
            "t-exp4-role": "Technical Student Ambassador", "t-exp4-time": "Dec 2024 - Jun 2025", "t-exp4-comp": "KonstTech | Glows.ai", "t-exp4-list": "<li>Tested system workflows and stability.</li><li>Supported technical demonstrations at AI Expo Taiwan 2025 and COMPUTEX.</li>",
            "t-edu-title": "Education", "t-edu1-dept": "Computer Science and Information Engineering", "t-edu1-time": "Sep 2023 - Jun 2027 (Expected)", "t-edu1-school": "National Changhua University of Education", "t-edu1-desc": "Freshman Fall 91.53 (Rank 5), Freshman Spring 94.04 (Rank 3), Sophomore Fall 91.33 (Rank 5), Sophomore Spring 94.44 (Rank 2).",
            "t-lead-title": "Activities & Leadership", "t-lead4-role": "Event Planning Committee", "t-lead4-time": "Sep 2025 - Present", "t-lead4-comp": "NCUE CSIE Student Association", "t-lead4-list": "<li>Plan and execute department events.</li><li>Coordinate on-site operations and event support.</li>",
            "t-lead1-role": "Equipment Manager", "t-lead1-time": "Feb 2025 - Present", "t-lead1-comp": "NCUE IT Club", "t-lead1-list": "<li>Manage equipment and provide technical support.</li><li>Support programming workshops and technical exchanges.</li>",
            "t-lead2-role": "Member", "t-lead2-time": "Sep 2023 - Feb 2025", "t-lead2-comp": "GDSC / GDG / Investment Research Club", "t-lead2-list": "<li>Participated in GDSC exchanges, DevFest Taipei 2024, SITCON 2025, and COMPUTEX.</li><li>Explored open source, frontend development, and innovative applications.</li>",
            "t-lead3-role": "Vice President & Public Relations", "t-lead3-time": "Jun 2025 - Present", "t-lead3-comp": "NCUE Transfer Students Union", "t-lead3-list": "<li>Help lead the transfer-student community.</li><li>Manage external communication, event promotion, and social media.</li>",
            "t-skill-title": "Skills & Expertise", "t-skill-prog": "Programming Languages", "t-skill-tool": "Tools & Platforms", "t-skill-soft": "Soft Skills", "t-skill-s1": "Team Communication", "t-skill-s2": "Event Coordination", "t-skill-s3": "Self-directed Learning", "t-skill-s4": "Community Management",
            "t-proj-title": "Featured Projects & Awards", "t-proj1-title": "Merlance Smart Memory Pendant", "t-proj1-desc": "Excellence Award at the 2025 Corning Innovation Competition. A wearable for older adults combining AI voice interaction, micro-projection, light guidance, and GPS safety features.", "t-proj2-title": "Digital Detoxifier", "t-proj2-desc": "AI Junior Award 2025 project using analysis, gentle reminders, and content redirection to improve digital habits.", "t-proj3-title": "IEYI World Youth Invention Exhibition", "t-proj3-desc": "2022 Taiwan Regional Bronze Medal, demonstrating teamwork, creativity, and hands-on innovation."
        }
    };

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ Light Mode';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
        
        showNotification(isDark ? 'Dark mode enabled' : 'Light mode enabled');
    });

    // Language Toggle
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'zh';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        langToggle.textContent = lang === 'zh' ? '🌐 English' : '🌐 中文';
        
        // Update texts
        const data = translations[lang];
        for (const [key, value] of Object.entries(data)) {
            const element = document.getElementById(key);
            if (element) {
                if (key.endsWith('list')) {
                    element.innerHTML = value; // Use innerHTML for lists
                } else {
                    element.textContent = value; // Use textContent for plain text
                }
            }
        }
    }

    // Initialize Language
    setLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        setLanguage(currentLang === 'zh' ? 'en' : 'zh');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll animations using IntersectionObserver
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
    
    // Function to show notifications
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Add styles dynamically or through CSS
        Object.assign(notification.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-lg)',
            zIndex: '1000',
            transition: 'opacity 0.3s ease'
        });
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
    
    console.log('CV website loaded successfully!');
});
