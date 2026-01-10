// Main JavaScript file for CV website

document.addEventListener('DOMContentLoaded', function() {
    
    // Translation Data
    const translations = {
        "zh": {
            "t-name": "楊杰倫 (Chieh-Lun Yang)",
            "t-title": "國立彰化師範大學 資訊工程學系",
            "t-tagline": "熱愛技術、勇於挑戰、跳脫舒適圈，熱衷於知識分享與社群經營。",
            "t-location": "桃園市楊梅區",
            "t-about-title": "關於我",
            "t-about-desc": "我是個富有創意、熱愛學習且樂於分享的人，擁有強烈的求知慾與成長型思維。具備良好溝通能力與團隊合作經驗，期待能在實務中累積技術、拓展視野，並為團隊貢獻價值。",
            
            "t-exp-title": "工作經歷",
            "t-exp1-role": "104 校園大使｜職涯課程組",
            "t-exp1-time": "2025/07 - 至今",
            "t-exp1-comp": "一零四資訊科技股份有限公司",
            "t-exp1-list": "<li>協助舉辦全國實習打工競賽，擔任評審並審閱 600+ 件作品。</li><li>推廣校園品牌活動，進行內容創作與社群經營。</li><li>參與產品共創、職涯課程推廣與跨校專案合作。</li>",
            
            "t-exp2-role": "暑期軟體測試實習生",
            "t-exp2-time": "2025/07 - 2025/08",
            "t-exp2-comp": "冠捷科技股份有限公司 (TPV Technology)",
            "t-exp2-list": "<li>參與顯示器語言翻譯測試自動化系統專案。</li><li>協助程式撰寫、功能驗證與報告整理。</li><li>與研發團隊合作，提升專案流程效率。</li>",
            
            "t-exp3-role": "技術組校園大使",
            "t-exp3-time": "2024/12 - 2025/07",
            "t-exp3-comp": "康斯特科技 (Glows.ai 雲端算力平台)",
            "t-exp3-list": "<li>協助測試與驗證系統運作流程與穩定性。</li><li>支援 2025 AI Expo 等資訊展覽現場技術展示與溝通。</li>",

            "t-edu-title": "學歷",
            "t-edu1-dept": "資訊工程學系",
            "t-edu1-time": "2023/09 - 2027/06 (預計)",
            "t-edu1-school": "國立彰化師範大學 (NCUE)",
            "t-edu1-desc": "學術表現優秀，曾獲得班排第 2 名。積極參與社群與技術活動。",

            "t-lead-title": "活動與社群領導",
            "t-lead1-role": "副會長 & 公關",
            "t-lead1-time": "2025/06 - 至今",
            "t-lead1-comp": "彰師大轉學生聯誼社",
            "t-lead1-list": "<li>擔任學校轉學生交流平台主要負責人之一。</li><li>負責對外聯繫、活動宣傳與社群經營，提升社團參與率。</li>",

            "t-lead2-role": "設備管理幹部",
            "t-lead2-time": "2025/02 - 至今",
            "t-lead2-comp": "NCUE 資訊社 (NCUEITC)",
            "t-lead2-list": "<li>負責管理社團內部電腦設備與技術支援。</li><li>協助辦理程式工作坊與技術交流活動。</li>",

            "t-lead3-role": "社團參與成員",
            "t-lead3-time": "2023/09 - 2025/02",
            "t-lead3-comp": "GDSC / GDG 開源社",
            "t-lead3-list": "<li>積極參與跨校 GDSC 聯合技術交流、DevFest Taipei 2024、SITCON 2025 等活動。</li><li>關注開源、前端技術與創新應用。</li>",

            "t-skill-title": "技能專長",
            "t-skill-prog": "程式語言",
            "t-skill-tool": "工具與平台",
            "t-skill-soft": "軟實力",
            "t-skill-s1": "團隊溝通",
            "t-skill-s2": "活動組織",
            "t-skill-s3": "自主學習",
            "t-skill-s4": "社群經營",

            "t-proj-title": "精選專案與獎項",
            "t-proj1-title": "Merlance 智慧記憶項鍊",
            "t-proj1-desc": "康寧創星家創新競賽優等獎。結合 AI 語音、3D 投影與感測技術的穿戴裝置，解決高齡社會孤獨問題。",
            "t-proj2-title": "【CC字幕】數位防腐劑",
            "t-proj2-desc": "AI Junior Award 2025 競賽專案。以「輕推」方式改善碎片化內容導致的成癮問題，重塑健康數位生活。",
            "t-proj3-title": "IEYI 世界青少年創客發明展",
            "t-proj3-desc": "臺灣區銅牌獎。展現團隊合作、創新思維與實作能力，專案具備技術性與創意兼具的特質。"
        },
        "en": {
            "t-name": "Chieh-Lun Yang",
            "t-title": "Dept. of CSIE, National Changhua University of Education",
            "t-tagline": "Enthusiastic learner, embracing challenges, stepping out of comfort zone, and loving knowledge sharing.",
            "t-location": "Yangmei Dist., Taoyuan City",
            "t-about-title": "About Me",
            "t-about-desc": "I am a creative and enthusiastic learner who enjoys sharing knowledge and embracing new challenges. With strong curiosity and a growth-centered mindset, I actively seek opportunities to step out of my comfort zone. Equipped with solid communication and teamwork abilities, I look forward to gaining practical experience through internships and contributing value to the teams I join.",
            
            "t-exp-title": "Work Experience",
            "t-exp1-role": "Campus Ambassador - Career Program Div.",
            "t-exp1-time": "Jul 2025 - Present",
            "t-exp1-comp": "104 Corporation",
            "t-exp1-list": "<li>Assisted in organizing nationwide internship competition; served as a reviewer.</li><li>Promoted campus branding campaigns through content creation and social media.</li><li>Participated in product co-creation and cross-campus collaboration.</li>",
            
            "t-exp2-role": "Summer Software Testing Intern",
            "t-exp2-time": "Jul 2025 - Aug 2025",
            "t-exp2-comp": "TPV Technology",
            "t-exp2-list": "<li>Participated in automated testing project for multilingual monitor translation.</li><li>Assisted in program implementation, functionality validation, and report compilation.</li><li>Collaborated with R&D teams to optimize workflow efficiency.</li>",
            
            "t-exp3-role": "Technical Student Ambassador",
            "t-exp3-time": "Dec 2024 - Jul 2025",
            "t-exp3-comp": "KonstTech - Glows.ai",
            "t-exp3-list": "<li>Conducted system workflow and stability testing.</li><li>Provided on-site technical demonstrations at 2025 AI Expo.</li>",

            "t-edu-title": "Education",
            "t-edu1-dept": "Dept. of CSIE",
            "t-edu1-time": "Sep 2023 - Jun 2027 (Expected)",
            "t-edu1-school": "National Changhua University of Education",
            "t-edu1-desc": "Academic Performance: Rank 2. Actively participated in community and technical activities.",

            "t-lead-title": "Activities & Leadership",
            "t-lead1-role": "Vice President & Public Relations",
            "t-lead1-time": "Jun 2025 - Present",
            "t-lead1-comp": "NCUE Transfer Students Union",
            "t-lead1-list": "<li>Served as a key leader of the university's transfer student community.</li><li>Handled external communication, event promotion, and social media management.</li>",

            "t-lead2-role": "Equipment Manager",
            "t-lead2-time": "Feb 2025 - Present",
            "t-lead2-comp": "NCUE IT Club (NCUEITC)",
            "t-lead2-list": "<li>Managed internal IT equipment and provided technical support.</li><li>Assisted in organizing programming workshops and technical exchange activities.</li>",

            "t-lead3-role": "Member",
            "t-lead3-time": "Sep 2023 - Feb 2025",
            "t-lead3-comp": "GDSC / GDG / Open Source Club",
            "t-lead3-list": "<li>Actively participated in GDSC Joint Tech Exchange, DevFest Taipei 2024, SITCON 2025.</li><li>Focused on open-source projects, frontend development, and innovative applications.</li>",

            "t-skill-title": "Skills & Expertise",
            "t-skill-prog": "Programming Languages",
            "t-skill-tool": "Tools & Platforms",
            "t-skill-soft": "Soft Skills",
            "t-skill-s1": "Team Communication",
            "t-skill-s2": "Event Coordination",
            "t-skill-s3": "Self-directed Learning",
            "t-skill-s4": "Community Management",

            "t-proj-title": "Featured Projects & Awards",
            "t-proj1-title": "Merlance Smart Memory Necklace",
            "t-proj1-desc": "Corning Innovation Competition Excellence Award. Wearable device combining AI voice, 3D projection, and sensing to solve loneliness in elderly.",
            "t-proj2-title": "CC Subtitles - Digital Preservative",
            "t-proj2-desc": "AI Junior Award 2025. Improving fragmentation addiction with 'nudge' methods to reshape healthy digital lives.",
            "t-proj3-title": "IEYI World Youth Invention Exhibition",
            "t-proj3-desc": "Taiwan Regional Bronze Medal. Demonstrated teamwork, innovation, and practical implementation skills."
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
