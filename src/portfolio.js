// src/portfolio.js

export const contactLinks = {
  linkedin: "http://www.linkedin.com/in/iamyuhan",
  github: "https://github.com/isyuhann",
  gmail: "mailto:isyuhann@gmail.com"
};

export const workExperienceData = [
  {
    duration: "2026/01 - 至今",
    title: "教育部計畫專任助理",
    org: "國立臺北大學 資訊管理研究所",
    icon: "ntpu_logo.png"
  },
  {
    duration: "2025/09 - 至今",
    title: "兼任研究助理",
    org: "國立臺北大學 資訊管理研究所",
    icon: "ntpu_logo.png"
  },
  {
    duration: "2024/02 - 2026/03",
    title: "行政工讀生",
    org: "國立臺北大學 學生事務處",
    icon: "ntpu_logo.png"
  },
  {
    duration: "2023/07 - 2023/09",
    title: "行政工讀生",
    org: "中華民國金門縣政府 社會處",
    icon: "kinmen_goverment_logo.png"
  },
  {
    duration: "2020/06 - 2020/09",
    title: "內外場服務生",
    org: "鍋癮火鍋超市",
    icon: "hotpot.png"
  }
];

export const organizationsData = [
  {
    id: 1,
    role: "Lead",
    org: "Google Developer Groups on Campus NTPU",
    location: "台灣 新北市 三峽區 · 混合型",
    duration: "2025年6月 - 現在",
    description: [
      "領導 22 人核心幹部團隊，負責整體專案管理與營運規劃，確保各項任務準時推進與落地執行。",
      "制定組織發展策略，規劃並執行大型科技活動與品牌專案，累積辦理 15+ 技術工作坊、課程與其他活動，以及 10+ 場技術講座。",
      "主導跨校合作專案，規劃並執行黑客松與大型交流活動，推動多校資源整合與共享，亦成功爭取超過新臺幣 60,000 元贊助資源。",
      "擔任對外窗口，推動產學合作與跨組織專案，強化跨部門協作與組織對外影響力。",
      "規劃並執行社群與品牌行銷策略，提升品牌曝光與活動參與度，累積活動參與人次接近 10,000。",
      "審核並管理行銷內容（社群貼文、海報、文宣），確保品牌形象一致性與溝通品質。",
      "建立文件與流程管理機制，優化內部協作流程，提升專案執行效率與團隊運作品質。",
      "社團表現榮獲「校內評鑑特優」（最高等級），並連續兩年獲此殊榮。"
    ],
    tags: ["#領導團隊", "#專案溝通 / 整合管理", "#行銷宣傳預算編製與控管", "#活動規劃與執行", "#合作洽談", "#檔案管理之電腦化策略"],
    color: "var(--block-blue)",
    rotation: "-1deg"
  },
  {
    id: 2,
    role: "志工",
    org: "Google Developer Groups Taipei",
    location: "台灣 台北市",
    duration: "2024年11月 - 現在",
    description: [
      "於 GDG Taipei 擔任志工期間，主要負責社群行銷、活動宣傳推廣、社群圖文設計與活動籌備等任務，累計服務時數超過 150 小時，協助推動多場大型科技活動，總報名人次達 8,500+。",
      "DevFest Taipei 2024｜文宣組 PM：負責行銷策略規劃與執行，包含貼文排程、文案撰寫、品牌視覺設計與跨部門協作；活動當日支援攝影並完成後製。",
      "DevFest Taipei 2025｜文宣組 PM：協助統籌文宣策略與執行流程，撰寫全臺 DevFest 文宣工作框架手冊，建立標準化流程。",
      "Google I/O Extended Taipei 2025：負責活動前期社群宣傳素材製作，並於活動當日支援攝影紀錄。",
      "APAC Google Solution Challenge 2024：製作競賽與周邊活動宣傳素材，並撰寫宣傳指引手冊。",
      "Google Cloud Hong Kong Developer Night 2025、Google I/O Extended HK 2025：負責講者宣傳視覺設計，支援國際活動行銷素材產製。"
    ],
    tags: ["#Marketing Strategy", "#Project Management", "#Cross-functional Collaboration"],
    color: "var(--accent-pink)",
    rotation: "1.5deg"
  },
  {
    id: 3,
    role: "志工",
    org: "Google Developer Groups Taoyuan",
    location: "台灣 桃園市",
    duration: "2024年11月",
    description: [
      "協助 DevFest Taoyuan 2024 活動籌備事務（攝影組、場務組），共計服務 8 小時。"
    ],
    tags: ["#活動籌備", "#攝影紀錄"],
    color: "var(--highlight-yellow)",
    rotation: "-2deg"
  },
  {
    id: 4,
    role: "Core Team (Marketing)",
    org: "Google Developer Groups on Campus NTPU",
    location: "台灣 新北市 三峽區 · 混合型",
    duration: "2024年9月 - 2025年6月",
    description: [
      "執行多平臺社群行銷策略（Instagram、Facebook、Threads、LinkedIn、Dcard、LINE...）。",
      "規劃並製作行銷內容（貼文、視覺設計、活動宣傳素材），提升品牌曝光。",
      "管理發文時程與行銷專案進度，支援整體專案管理。",
      "任內使主要社群粉絲數成長超過 100%。",
      "協助推廣全臺黑客松競賽，於短時間內累積 460+ 粉絲並吸引 100+ 參賽者。"
    ],
    tags: ["#行銷策略擬定", "#專案管理", "#圖文設計", "#社群媒體經營管理", "#品牌知名度推廣"],
    color: "var(--block-blue)",
    rotation: "1deg"
  },
  {
    id: 5,
    role: "副學務長",
    org: "國立臺北大學會計學系系學會",
    location: "台灣 新北市 三峽區 · 混合型",
    duration: "2024年7月 - 2025年6月",
    description: [
      "統籌問卷調查與訪談資料分析，製作「選課懶人包」等資訊整合文件。",
      "擔任對外窗口，與補教機構進行合作洽談，規劃產學合作方案。",
      "規劃與執行學長姐分享會、企業講座與參訪活動，促進學生與產業連結。",
      "支援活動行銷推廣，提升活動參與度與觸及率。"
    ],
    tags: ["#資訊整合", "#產學合作", "#活動企劃", "#溝通協調"],
    color: "var(--highlight-yellow)",
    rotation: "2deg"
  },
  {
    id: 6,
    role: "活動長",
    org: "金門高中攝影社",
    location: "台灣 金門縣",
    duration: "2021年9月 - 2022年2月",
    description: [
      "（內容預留區）規劃社團活動與攝影外拍專案，提升社員參與度與攝影技巧。"
    ],
    tags: ["#社團營運", "#活動規劃"],
    color: "var(--bg-beige)",
    rotation: "-1.5deg"
  }
];

export const challengesData = [
  {
    title: "【2025 Vibe Coding 青年放輕松】全國亞軍",
    description: "在全國性黑客松競賽當中，以「環境保育」為題與數十組團隊競爭，最終摘得第二名佳績。"
  },
  {
    title: "【2024 NTPU USR × 生成式 AI 永續共創行銷企劃競賽】佳作",
    description: "與主打環境友善、有機小農的在地品牌「桃植物精油工坊」合作，藉由 AI 技術重新設計商品外包裝，並進行產業研究，協助推廣品牌與產品。"
  },
  {
    title: "2024 創新創業提案競賽",
    description: "透過廢棄輪胎生產格鬥訓練沙包，賦予廢棄物再生價值，也降低格鬥訓練興趣的進入門檻。"
  }
];

export const bigProjectsData = [
  {
    title: "AI 聊天機器人實作暨開源化專案",
    logo: null,
    link: null,
    media: "gdg_opentpi_ai_chatbot.png",
    mediaType: "image",
    tags: ["產學合作", "AI ChatBot", "開源", "授權條款", "Dify", "DigiRunner"],
    description: [
      "擔任「法規授權研究小組」的一員，研究不同授權條款優劣，並基於自身產品選擇開源條款、協助撰寫說明文件。"
    ]
  },
  {
    title: "PlantMe — 虛擬植栽養成",
    logo: "plantme_logo.png",
    link: "https://plantme-seven.vercel.app/",
    media: "plantme_demo.mp4",
    mediaType: "video",
    tags: ["Full-Stack", "Eco-Friendly", "Gamification"],
    description: [
      "互動式網頁遊戲，讓你「把環保變可愛，把習慣變簡單」。",
      "從體驗多段植物養成過程、真實枯萎機制，到解鎖植物圖鑑、分享綠生活週報...... 轉化你的每次環保行動、擴散綠色影響力。",
      "擔任主要開發者兼 PM。"
    ]
  },
  {
    title: "北大法規問答小幫手",
    logo: "ntpulawhelper_logo.png",
    link: null,
    media: "ntpulawhelper_demo.mp4",
    mediaType: "video",
    tags: ["Full-Stack", "Gemini API", "Django", "React"],
    description: [
      "由北大學生需求出發，建置的一站式法規查詢網站。",
      "串接 Gemini API，可藉自然語言調取資料庫、獲取即時統整。",
      "擔任全端工程師，並協助規劃、實裝新功能。",
      "目前專案由第二代社團成員承接，繼續開發與優化。"
    ]
  },
  {
    title: "股往今 LINE",
    logo: "linebot_logo.png",
    link: "http://line.me/R/ti/p/@890wezph",
    media: "linebot_demo.mp4",
    mediaType: "video",
    tags: ["股市資訊", "LINE Bot", "Gemini API"],
    description: [
      "只須通過 LINE 介面，便可一鍵獲取指定商品之股價、走勢圖，輸入欲了解的關鍵字句，更可掌握最新時事懶人包。",
      "擔任 PM 兼開發者，開發走勢圖繪製、時事統整等功能。"
    ]
  }
];