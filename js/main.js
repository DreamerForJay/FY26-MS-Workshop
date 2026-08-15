document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.querySelector("#theme-toggle");
  const langToggle = document.querySelector("#lang-toggle");
  const qrDialog = document.querySelector("#qr-dialog");
  const qrOpeners = document.querySelectorAll("#qr-toggle, [data-open-qr]");
  const qrClose = qrDialog.querySelector(".dialog-close");

  const translations = {
    zh: {
      available:"OPEN TO COLLABORATION · 2026",surname:"楊杰倫",
      headline:"把 AI、軟體與跨域想法，做成真正能被使用的產品。",
      intro:"國立彰化師範大學資訊工程學系學生，目前於 TMYTEK 擔任研發實習生。專注 AI 應用、軟體測試、產品開發與技術社群。",
      viewExperience:"查看經歷 ↓",contactMe:"聯絡我 ↗",
      aboutTitle:"持續學習，也持續把知識變成影響力。",
      aboutBody:"我喜歡把模糊的問題拆解成可以執行、測試與迭代的方案。從企業實習、校園大使到社群與競賽，我累積了跨團隊溝通、內容策劃、測試自動化與產品實作經驗。",
      exp1Role:"Research & Development Intern",exp1Time:"2026 / 07 — 現在",exp1Meta:"實習 · 新竹／板橋 · 現場",
      exp1a:"參與毫米波與通訊技術相關產品研發，協助跨據點的工程協作。",exp1b:"將研究需求轉換為可驗證的技術任務，持續紀錄測試與迭代結果。",
      foxconn:"鴻海精密工業",hybrid:"實習 · 混合型",exp2a:"撰寫產業趨勢、AI 與自動化技術內容，讓複雜議題更容易被理解。",exp2b:"協助技術研討會、企業說明會與校園講座，促進學生與企業交流。",exp2c:"蒐集學生對技術議題與職涯發展的回饋，提供活動與人才策略參考。",
      corp104:"104 人力銀行",careerTeam:"職涯課程組",exp3a:"推廣校園職涯資源、實習與打工機會，負責內容創作與社群經營。",exp3b:"協助全國競賽並審閱超過 600 件作品，參與建立評分標準。",exp3c:"協調企業講師、課程資訊與活動時程，強化產學連結。",
      exp4Meta:"實習 · 中國福建 · 現場",exp4a:"加入多語系顯示器翻譯自動化測試專案。",exp4b:"協助 Python 測試腳本、測試報告、UI／功能／回歸測試與 Bug Tracking。",
      exp5a:"執行系統流程與穩定性測試，整理問題並協助技術展示。",exp5b:"參與 AI Expo Taiwan 2025 與 COMPUTEX 現場推廣。",
      educationTitle:"國立彰化師範大學",educationMajor:"資訊工程學系 · 2023 — 2027（預計）",educationBody:"以軟體工程、AI 應用與實作為核心，持續透過企業實習和專案驗證所學。",
      project1:"智慧記憶吊墜，整合 AI 語音互動、微型投影、光線引導與 GPS 安全功能；獲 2025 康寧創星家競賽優等獎。",
      project2:"運用資料分析、溫和提醒與內容轉向改善數位使用習慣，入選 AI Junior Award 2025。",
      project3:"世界青少年發明展臺灣選拔銅牌，展現團隊協作、創意與動手實作能力。",
      avatarTitle:"和我的 AI 分身聊聊",avatarBody:"透過 Perxona 互動式 AI Avatar，快速了解我的經歷與作品。",
      qrTitle:"掃描查看所有聯絡方式",qrBody:"用手機相機掃描，或直接點下方連結。"
    },
    en: {
      available:"OPEN TO COLLABORATION · 2026",surname:"CHIEH-LUN",
      headline:"Turning ideas in AI, software, and cross-domain collaboration into products people can use.",
      intro:"Computer Science student at NCUE and Research & Development Intern at TMYTEK, focused on AI applications, software testing, product development, and technical communities.",
      viewExperience:"View experience ↓",contactMe:"Contact me ↗",
      aboutTitle:"Always learning — and turning knowledge into impact.",
      aboutBody:"I enjoy breaking ambiguous problems into solutions that can be built, tested, and improved. Through industry internships, campus programs, communities, and competitions, I have developed experience in cross-team communication, content strategy, test automation, and product implementation.",
      exp1Role:"Research & Development Intern",exp1Time:"2026 / 07 — PRESENT",exp1Meta:"Internship · Hsinchu / Banqiao · On-site",
      exp1a:"Contribute to product R&D involving millimeter-wave and communications technologies across engineering sites.",exp1b:"Translate research needs into verifiable technical tasks and document testing and iteration results.",
      foxconn:"Hon Hai Precision Industry",hybrid:"Internship · Hybrid",exp2a:"Create accessible content on industry trends, AI, and automation.",exp2b:"Support technical seminars, employer events, and campus talks that connect students with industry.",exp2c:"Gather student feedback on technology and career development to inform event and talent strategy.",
      corp104:"104 Corporation",careerTeam:"Career Program",exp3a:"Promoted campus career resources, internships, and part-time opportunities through content and community operations.",exp3b:"Reviewed more than 600 submissions for a nationwide competition and helped establish scoring criteria.",exp3c:"Coordinated speakers, course information, and event schedules to strengthen industry–academia connections.",
      exp4Meta:"Internship · Fujian, China · On-site",exp4a:"Joined an automated testing project for multilingual monitor translation.",exp4b:"Assisted with Python test scripts, reports, UI, functional, regression testing, and bug tracking.",
      exp5a:"Tested system workflows and stability, documented issues, and supported technical demonstrations.",exp5b:"Supported on-site promotion at AI Expo Taiwan 2025 and COMPUTEX.",
      educationTitle:"National Changhua University of Education",educationMajor:"B.S. in Computer Science · 2023 — 2027 (Expected)",educationBody:"Focused on software engineering, applied AI, and hands-on implementation, with industry internships and projects used to validate learning.",
      project1:"A smart memory pendant combining AI voice interaction, micro-projection, light guidance, and GPS safety features; Excellence Award at the 2025 Corning Innovation Competition.",
      project2:"A project using data analysis, gentle reminders, and content redirection to improve digital habits; selected for AI Junior Award 2025.",
      project3:"Bronze Medal at the Taiwan selection of the International Exhibition for Young Inventors, demonstrating teamwork, creativity, and hands-on innovation.",
      avatarTitle:"Talk with my AI avatar",avatarBody:"Use the interactive Perxona AI avatar to explore my experience and selected work.",
      qrTitle:"Scan to see every contact",qrBody:"Scan with your phone camera, or open the link below."
    }
  };

  const savedTheme = localStorage.getItem("portfolio-theme-v2") || "dark";
  root.dataset.theme = savedTheme;
  const updateThemeLabel = () => {
    const dark = root.dataset.theme === "dark";
    themeToggle.setAttribute("aria-label", dark ? "切換至淺色主題" : "切換至深色主題");
    document.querySelector('meta[name="theme-color"]').content = dark ? "#090614" : "#f4f2fb";
  };
  updateThemeLabel();
  themeToggle.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme-v2", root.dataset.theme);
    updateThemeLabel();
  });

  let currentLang = localStorage.getItem("portfolio-lang-v2") || "zh";
  const setLanguage = (lang) => {
    currentLang = lang;
    root.lang = lang === "zh" ? "zh-Hant" : "en";
    langToggle.textContent = lang === "zh" ? "EN" : "中";
    langToggle.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切換至中文");
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = translations[lang][node.dataset.i18n];
      if (value) node.textContent = value;
    });
    localStorage.setItem("portfolio-lang-v2", lang);
  };
  setLanguage(currentLang);
  langToggle.addEventListener("click", () => setLanguage(currentLang === "zh" ? "en" : "zh"));

  qrOpeners.forEach((opener) => opener.addEventListener("click", () => qrDialog.showModal()));
  qrClose.addEventListener("click", () => qrDialog.close());
  qrDialog.addEventListener("click", (event) => {
    const rect = qrDialog.getBoundingClientRect();
    const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!inside) qrDialog.close();
  });

  const observer = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
      }), { threshold: 0.12 })
    : null;
  document.querySelectorAll(".reveal").forEach((element) => observer ? observer.observe(element) : element.classList.add("visible"));
});
