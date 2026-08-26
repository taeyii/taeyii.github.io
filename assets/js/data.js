/* ═══════════════════════════════════════════════════════════════
   Taeyi Kim — Portfolio Content
   ─────────────────────────────────────────────────────────────
   모든 텍스트 콘텐츠는 이 파일 하나에서 관리합니다.
   - 문자열 필드는  "text"  또는  { en: "...", ko: "..." }  두 형태 모두 가능
   - 논문/수상/프로젝트 등은 배열에 항목을 추가하면 자동으로 렌더링됩니다
   - 날짜는 "YYYY.MM" 형식 권장 (정렬은 배열 순서를 그대로 따릅니다)
   ═══════════════════════════════════════════════════════════════ */

window.SITE_DATA = {
  meta: {
    siteUrl: "https://taeyii.github.io",
    updated: "2026-08-26",
  },

  /* ── UI 문구 (내비게이션 · 섹션 제목 · 버튼) ── */
  ui: {
    nav: {
      about:        { en: "About",        ko: "소개" },
      education:    { en: "Education",    ko: "학력" },
      experience:   { en: "Experience",   ko: "경력" },
      projects:     { en: "Projects",     ko: "프로젝트" },
      publications: { en: "Publications", ko: "논문" },
      awards:       { en: "Awards",       ko: "수상" },
      contact:      { en: "Contact",      ko: "연락처" },
    },
    label: {
      researchFocus: { en: "Research Focus",          ko: "연구 분야" },
      news:          { en: "News",                    ko: "최근 소식" },
      education:     { en: "Education",               ko: "학력" },
      experience:    { en: "Experience",              ko: "경력" },
      projects:      { en: "Projects",                ko: "프로젝트" },
      projectsSub:   { en: "Selected work across battery prognostics and manufacturing AI",
                       ko: "배터리 예지와 제조 AI에서 풀어 온 문제들" },
      publications:  { en: "Publications",            ko: "논문 및 학술 활동" },
      awards:        { en: "Honors & Awards",         ko: "수상" },
      patents:       { en: "Patents",                 ko: "특허" },
      activities:    { en: "Activities & Service",    ko: "활동" },
      skills:        { en: "Skills",                  ko: "기술 스택" },
      contact:       { en: "Get in Touch",            ko: "연락하기" },
    },
    btn: {
      contact:   { en: "Contact Me",       ko: "연락하기" },
      portfolio: { en: "Portfolio (PDF)",  ko: "포트폴리오 (PDF)" },
      github:    "GitHub",
      scholar:   "Scholar",
      orcid:     "ORCID",
    },
    filter: {
      "all":          { en: "All",              ko: "전체" },
      "journal-intl": { en: "Intl. Journal",    ko: "국제 저널" },
      "conf-intl":    { en: "Intl. Conference", ko: "국제 학회" },
      "conf-dom":     { en: "Dom. Conference",  ko: "국내 학회" },
      "poster":       { en: "Poster",           ko: "포스터" },
    },
    badge: {
      "journal-intl": { en: "Intl. Journal", ko: "국제 저널" },
      "conf-intl":    { en: "Intl. Conf.",   ko: "국제 학회" },
      "conf-dom":     { en: "Dom. Conf.",    ko: "국내 학회" },
      "poster":       { en: "Poster",        ko: "포스터" },
      first:          { en: "1st Author",    ko: "1저자" },
      co:             { en: "Co-author",     ko: "공저자" },
      presenter:      { en: "Presenter",     ko: "발표자" },
    },
    misc: {
      viewPaper:   { en: "View Paper",          ko: "논문 보기" },
      labHomepage: { en: "Lab Homepage",        ko: "연구실 홈페이지" },
      tech:        { en: "Tech",                ko: "기술" },
      ongoing:     { en: "Ongoing",             ko: "진행 중" },
      inventors:   { en: "Inventors",           ko: "발명자" },
      appNo:       { en: "Application No.",     ko: "출원번호" },
      filed:       { en: "Filed",               ko: "출원일" },
      authority:   { en: "Authority",           ko: "출원국" },
      status:      { en: "Status",              ko: "상태" },
      updated:     { en: "Updated:",            ko: "업데이트:" },
      rights:      { en: "All rights reserved", ko: "All rights reserved" },
      menu:        { en: "Menu",                ko: "메뉴" },
      photoBadge:  { en: "PHM researcher · IODA Lab", ko: "PHM 연구자 · IODA Lab" },
      logoName:    "Taeyi",
      eyebrow:     { en: "Time-Series Analysis · Physics-Informed Modeling · PHM", ko: "시계열 분석 · 물리 기반 모델링 · PHM" },
      degree:      { en: "Degree",              ko: "학위" },
      lab:         { en: "Lab",                 ko: "연구실" },
      keywords:    { en: "Keywords",            ko: "키워드" },
      handsOn:     { en: "Modeling principles", ko: "모델 설계 원칙" },
      pageTitle:   { en: "Taeyi Kim | PHM · Time-Series Analysis · Physics-Informed Modeling",
                     ko: "김태이 | PHM · 시계열 분석 · 물리 기반 모델링" },
    },
  },

  /* ── 프로필 / 히어로 ── */
  profile: {
    name: "Taeyi Kim",
    nameKr: "김태이",
    initials: "T",
    email: "taeyii3056@hanyang.ac.kr",
    github: "https://github.com/taeyii",
    scholar: "https://scholar.google.com/citations?user=SuhlHloAAAAJ",
    orcid: "https://orcid.org/0009-0003-9683-7015",
    orcidId: "0009-0003-9683-7015",
    labUrl: "https://ioda-lab.github.io/",
    portfolioPdf: "files/portfolio.pdf",
    photo: "assets/img/profile.jpg",
    titles: {
      en: [
        "Forecasting battery degradation from early-cycle data",
        "Designing models that respect degradation physics",
        "Quantifying uncertainty in long-horizon forecasts",
      ],
      ko: [
        "초기 데이터로 배터리의 남은 열화를 예측합니다",
        "열화의 물리적 정합성을 고려해 모델을 설계합니다",
        "장기 예측의 불확실성까지 함께 추정합니다",
      ],
    },
    location: {
      en: "Gyeonggi-do, South Korea · M.S., IODA Lab, Hanyang University ERICA",
      ko: "경기도 · 한양대학교 ERICA IODA Lab 석사 졸업",
    },
    summary: {
      en: [
        "M.S. in Industrial & Management Engineering, Hanyang University ERICA · <strong>IODA Lab</strong> (Advisor: Prof. Stephane Barde)",
        "<strong>Time series</strong> — model the SOH, RUL, and full degradation trajectory hidden in short early-cycle records",
        "<strong>Physical consistency</strong> — incorporate electrochemical equations, degradation shapes, and stochastic processes into model design",
        "<strong>Reliable forecasts</strong> — evaluate generalization across datasets and quantify uncertainty with calibrated prediction intervals",
        "SCI journals <strong>2</strong> (1st author <strong>1</strong>) · Intl. conferences <strong>2</strong> · Patent <strong>1</strong> · <strong>Grand Prize</strong> Factory Hack Korea 2025 · <strong>Best Paper</strong> IEEE PHM 2025",
      ],
      ko: [
        "한양대학교 ERICA 산업경영공학 석사 졸업 · <strong>IODA Lab</strong> (지도교수: Stephane Barde)",
        "<strong>시계열 분석</strong> — 짧은 초기 사이클에서 SOH·RUL과 전체 열화 궤적을 예측합니다",
        "<strong>물리적 정합성</strong> — 전기화학 방정식, 열화 형상, 확률 과정을 모델 설계에 반영합니다",
        "<strong>신뢰할 수 있는 예측</strong> — 데이터셋 간 일반화 성능을 검증하고 보정된 예측 구간으로 불확실성을 정량화합니다",
        "SCI 저널 <strong>2</strong>편 (1저자 <strong>1</strong>편) · 국제학회 <strong>2</strong>편 · 특허 출원 <strong>1</strong>건 · Factory Hack Korea 2025 <strong>대상</strong> · IEEE PHM 2025 <strong>Best Paper</strong>",
      ],
    },
    tags: {
      en: ["Battery PHM", "Time-Series Analysis", "Physics-Informed Modeling", "Uncertainty Quantification"],
      ko: ["배터리 PHM", "시계열 분석", "물리 기반 모델링", "불확실성 정량화"],
    },
  },

  /* ── 숫자 하이라이트 (히어로 아래 스트립) ── */
  impact: [
    { num: 2,      label: { en: "SCI Journal Papers",      ko: "SCI 저널 논문" } },
    { num: 2,      label: { en: "Intl. Conference Papers", ko: "국제학회 논문" } },
    { num: 3,      label: { en: "Honors & Awards",         ko: "수상" } },
    { num: 1,      label: { en: "Patent Filed",            ko: "특허 출원" } },
  ],

  /* ── 소개 ── */
  about: {
    headline: { en: "Model the process, not only the pattern", ko: "패턴 너머의 열화 과정을 모델링합니다" },
    lead: {
      en: "I design forecasts around how degradation evolves, what the physics allows, and how uncertain the prediction is.",
      ko: "열화가 진행되는 방식, 물리적으로 가능한 변화, 그리고 예측의 불확실성을 함께 고려합니다.",
    },
    body: {
      en: [
        "I received my M.S. in Industrial & Management Engineering from Hanyang University ERICA, where I worked with Prof. Stephane Barde at the IODA Lab (Industrial Operations & Data Analytics).",
        "My focus is PHM and time-series analysis for lithium-ion batteries. I study how to infer SOH, RUL, and the full future degradation trajectory from short early-cycle records, where the late-life knee has not yet appeared and only a small number of cells may be available for training.",
        "I treat degradation forecasting as more than curve fitting. My work has used the Butler–Volmer equation to guide neural models, a time-varying hazard rate in an HMM–Wiener framework, and a lifetime-scaled degradation shape with calibrated prediction intervals. The goal is a model whose output is accurate, physically interpretable, and honest about uncertainty.",
      ],
      ko: [
        "한양대학교 ERICA 산업경영공학과에서 석사 학위를 받았고, IODA Lab(Industrial Operations & Data Analytics)에서 Stephane Barde 교수님 지도로 연구했습니다.",
        "리튬이온 배터리 PHM과 시계열 분석을 연구합니다. 열화 후반의 knee가 아직 나타나지 않은 짧은 초기 사이클과 적은 수의 학습 셀만으로 SOH·RUL, 이후의 전체 열화 궤적을 예측하는 문제에 관심이 있습니다.",
        "열화 예측을 단순한 곡선 맞춤 문제로 보지 않습니다. Butler–Volmer 방정식을 신경망 설계에 반영하고, HMM–Wiener 과정에 시변 위험률 함수를 결합했으며, 수명에 따라 스케일되는 열화 형상과 보정된 예측 구간을 함께 연구했습니다. 정확하면서도 물리적으로 설명 가능하고, 불확실성을 숨기지 않는 모델을 만드는 것이 목표입니다.",
      ],
    },
    /* 소개 오른쪽 "모델 설계 원칙" 카드 */
    steps: [
      { title: { en: "Temporal structure", ko: "시계열 구조" },
        desc:  { en: "Learn long-term degradation from short early-cycle records",
                 ko: "짧은 초기 사이클에서 장기 열화 구조를 추론" } },
      { title: { en: "Physical consistency", ko: "물리적 정합성" },
        desc:  { en: "Use electrochemical equations and degradation mechanisms as design guidance",
                 ko: "전기화학 방정식과 열화 메커니즘을 모델 설계에 반영" } },
      { title: { en: "Predictive reliability", ko: "예측 신뢰성" },
        desc:  { en: "Test generalization and report calibrated uncertainty",
                 ko: "일반화 성능을 검증하고 보정된 불확실성을 제시" } },
    ],
  },

  /* ── 연구 분야 카드 ── */
  research: [
    { icon: "🩺", title: { en: "PHM — Prognostics & Health Management", ko: "PHM (고장 예지 및 건전성 관리)" },
      desc: { en: "Diagnose how far equipment or a battery has degraded, and predict its state of health (SOH), remaining useful life (RUL), and end of life (EOL).",
              ko: "설비나 배터리가 얼마나 열화됐는지 진단하고, 건전성 지표(SOH)와 잔여수명(RUL)·수명종료(EOL) 시점을 예측합니다." } },
    { icon: "📈", title: { en: "Time-Series Forecasting", ko: "시계열 예측" },
      desc: { en: "Forecast degradation curves with Transformer-family models (Informer), physics-informed neural networks (PINN), and stochastic models like HMM–Wiener processes.",
              ko: "Transformer 계열(Informer), 물리 정보 신경망(PINN), HMM·Wiener 과정 같은 확률 모델로 열화 곡선을 예측합니다." } },
    { icon: "⚛️", title: { en: "Physics-Informed Model Design", ko: "물리적 정합성을 고려한 모델 설계" },
      desc: { en: "Use electrochemical equations such as Butler–Volmer and known degradation behavior to guide model structure and learning.",
              ko: "Butler–Volmer 같은 전기화학 방정식과 알려진 열화 거동을 모델 구조와 학습에 반영합니다." } },
    { icon: "◫", title: { en: "Uncertainty Quantification", ko: "예측 불확실성 정량화" },
      desc: { en: "Build calibrated prediction intervals and evaluate whether uncertainty remains reliable across cells and datasets.",
              ko: "보정된 예측 구간을 만들고, 셀과 데이터셋이 달라져도 불확실성이 신뢰할 만한지 검증합니다." } },
    { icon: "⌁", title: { en: "Early-Life Forecasting", ko: "초기 수명 예측" },
      desc: { en: "Predict lifetime and the complete future degradation trajectory before the late-life knee is observed.",
              ko: "열화 후반의 knee가 관측되기 전에 수명과 이후의 전체 열화 궤적을 예측합니다." } },
    { icon: "🏭", title: { en: "Manufacturing Applications", ko: "제조 현장 적용" },
      desc: { en: "Tool wear prediction, equipment condition prediction, and ignition-coil defect classification.",
              ko: "공구 마모 예측, 설비 상태 예측, 점화 코일 불량 분류 같은 제조 현장 문제를 다뤘습니다." } },
  ],

  /* ── 최근 소식 ── */
  news: [
    { date: "2026.06", icon: "🎤",
      text: { en: "Oral presentation at the KORAS Spring Conference (Jeju) — early RUL prediction via HMM-NLWP with a time-varying hazard rate function",
              ko: "한국신뢰성학회 춘계학술대회(제주) 구두 발표 — 시변 위험률 함수를 결합한 HMM-NLWP 기반 조기 RUL 예측" } },
    { date: "2025.12", icon: "🏆",
      text: { en: "Grand Prize at Factory Hack Korea 2025 (Ministry of Trade, Industry and Resources)",
              ko: "Factory Hack Korea 2025 대상 수상 (산업통상부)" } },
    { date: "2025.11", icon: "📄",
      text: { en: "Paper published in <em>Journal of Energy Storage</em> (first author)",
              ko: "<em>Journal of Energy Storage</em> 논문 게재 (1저자)" } },
    { date: "2025.10", icon: "📄",
      text: { en: "Paper published in <em>Energy</em> (co-author)",
              ko: "<em>Energy</em> 논문 게재 (공저자)" } },
    { date: "2025.10", icon: "🏆",
      text: { en: "Best Paper Award at the IEEE Global Reliability & PHM Conference",
              ko: "IEEE Global Reliability & PHM Conference Best Paper Award 수상" } },
    { date: "2025.10", icon: "📝",
      text: { en: "Patent application filed — integrated compression pipeline for battery prognostics",
              ko: "배터리 예지용 통합 압축 파이프라인 특허 출원" } },
    { date: "2025.06", icon: "🏆",
      text: { en: "Excellence in Presentation Award at the KORAS Spring Conference",
              ko: "한국신뢰성학회 춘계학술대회 우수발표상 수상" } },
  ],

  /* ── 학력 ── */
  education: [
    {
      degree: { en: "M.S. — Industrial & Management Engineering", ko: "석사 — 산업경영공학과" },
      org:    { en: "Hanyang University ERICA", ko: "한양대학교 ERICA" },
      period: "2024 – 2026",
      location: { en: "Ansan, South Korea", ko: "안산, 대한민국" },
      lab: "Industrial Operations & Data Analytics (IODA) Lab",
      labUrl: "https://ioda-lab.github.io/",
      advisor: { en: "Advisor: Prof. Stephane Barde", ko: "지도교수: Stephane Barde 교수" },
      focus:  { en: "Research: PHM · Time-series analysis · Physics-informed modeling · Uncertainty quantification",
                ko: "연구: PHM · 시계열 분석 · 물리 기반 모델링 · 불확실성 정량화" },
    },
    {
      degree: { en: "B.S. — Industrial & Management Engineering", ko: "학사 — 산업경영공학과" },
      org:    { en: "Hanyang University ERICA", ko: "한양대학교 ERICA" },
      period: "2022 – 2024",
      location: { en: "Ansan, South Korea", ko: "안산, 대한민국" },
    },
  ],

  /* ── 경력 ── */
  experience: [
    {
      role: { en: "Research Intern", ko: "연구 인턴" },
      org:  { en: "Korea Institute of Industrial Technology (KITECH)", ko: "한국생산기술연구원 (KITECH)" },
      period: "2024.07 – 2024.08",
      bullets: {
        en: ["Developed tool wear prediction algorithms for CNC machining processes to optimize cutting conditions"],
        ko: ["CNC 가공 공정의 절삭 조건 최적화를 위한 공구 마모 예측 알고리즘 개발"],
      },
      stack: ["Python", "PyTorch"],
    },
    {
      role: { en: "Research Intern", ko: "연구 인턴" },
      org:  "Edge Cross AI",
      period: "2023.07 – 2023.08",
      bullets: {
        en: ["Developed OPC UA-based data acquisition firmware for edge computing environments",
             "Built real-time equipment condition prediction models for edge devices"],
        ko: ["엣지 컴퓨팅 환경을 위한 OPC UA 기반 데이터 수집 펌웨어 개발",
             "엣지 디바이스용 실시간 설비 상태 예측 모델 구축"],
      },
      stack: ["C++", "MODBUS"],
    },
    {
      role: { en: "Undergraduate Research Assistant", ko: "학부 연구생" },
      org:  { en: "Queueing and Stochastic Lab, Hanyang University ERICA", ko: "Queueing and Stochastic Lab, 한양대학교 ERICA" },
      period: "2023.01 – 2023.12",
      bullets: {
        en: ["Advisor: Prof. Sun Hur",
             "Developed a defect classification model for automotive ignition coils",
             "Teaching Assistant for Mathematical Statistics and Applied Statistics"],
        ko: ["지도교수: 허선 교수",
             "자동차 점화 코일 불량 분류 모델 개발",
             "수리통계학 · 응용통계학 조교"],
      },
    },
    {
      role: { en: "International Student Mentor", ko: "외국인 유학생 멘토" },
      org:  { en: "Hanmille, Hanyang University", ko: "Hanmille, 한양대학교" },
      period: "2022.09 – 2022.12",
      bullets: {
        en: ["Supported two international students with adapting to university life"],
        ko: ["외국인 유학생 2명의 대학 생활 적응 지원"],
      },
    },
    {
      role: { en: "Sergeant", ko: "병장" },
      org:  { en: "Republic of Korea Army", ko: "대한민국 육군" },
      period: "2018.06 – 2021.01",
      bullets: {
        en: ["GOP duty — surveillance and reconnaissance operations",
             "Received a commendation for exemplary service"],
        ko: ["GOP 경계 근무 — 감시 및 수색 작전 수행",
             "모범 복무 표창 수상"],
      },
    },
  ],

  /* ── 프로젝트 ── */
  projects: [
    {
      title: { en: "Industrial AI Manufacturing Innovation Program", ko: "Industrial AI 제조혁신 프로그램" },
      org:   { en: "IODA Lab, Hanyang University ERICA", ko: "IODA Lab, 한양대학교 ERICA" },
      period: "2024.09 – 2026",
      desc:  { en: "Research on knowledge distillation for on-device lithium-ion battery SOH estimation",
               ko: "온디바이스 리튬이온 배터리 SOH 추정을 위한 지식 증류 연구" },
      tags:  { en: ["PHM", "Knowledge Distillation", "Edge Deployment"], ko: ["PHM", "지식 증류", "엣지 배포"] },
      stack: ["Python", "MATLAB"],
    },
    {
      title: "Factory Hack Korea 2025",
      org:   { en: "Ministry of Trade, Industry and Resources", ko: "산업통상부" },
      period: "2025.12",
      badge: { en: "🏆 Grand Prize", ko: "🏆 대상" },
      desc:  { en: "Grand Prize at the national hackathon hosted by the Ministry of Trade, Industry and Resources",
               ko: "산업통상부 주최 해커톤 대상 수상" },
      tags:  { en: ["Hackathon", "Smart Manufacturing"], ko: ["해커톤", "스마트 제조"] },
    },
    {
      title: { en: "LG Display Sub-assembly Defect Classification", ko: "LG디스플레이 Sub-assembly 공정 불량 분류" },
      org:   { en: "LG Aimers 5th · LG AI Research / KAIST", ko: "LG Aimers 5기 · LG AI연구원 / KAIST" },
      period: "2024.07 – 2024.08",
      badge: { en: "Top 4% · 29th / ~700 teams", ko: "상위 4% · 약 700팀 중 29위" },
      desc:  { en: "Improved F1 by 0.14 on a defect rate below 1% using cluster-based undersampling, KL-divergence feature selection, and LightGBM.",
               ko: "불량률 1% 미만의 클래스 불균형에 군집 기반 언더샘플링과 KL Divergence 피처 선택을 적용해 LightGBM 기준 F1을 0.14 높였습니다." },
      tags:  { en: ["Manufacturing AI", "Imbalanced Data", "Quality"], ko: ["제조 AI", "불균형 데이터", "품질"] },
      stack: ["Python", "LightGBM"],
    },
    {
      title: { en: "TinyML-based Intelligent Manufacturing Equipment Management System", ko: "TinyML 기반 지능형 제조설비 관리 시스템" },
      period: "2023.01 – 2023.07",
       desc:  { en: "Validated an embedded data path from industrial sensors and PLCs through the AIoT device to analytics",
                ko: "산업용 센서·PLC에서 AIoT 디바이스와 분석 환경으로 이어지는 임베디드 데이터 경로를 검증" },
      tags:  { en: ["TinyML", "Firmware", "Edge AI"], ko: ["TinyML", "펌웨어", "Edge AI"] },
      stack: ["C++", "Python"],
    },
    {
      title: { en: "Tool Wear Prediction for CNC Machining", ko: "CNC 가공 공구 마모 예측" },
      org:   { en: "KITECH", ko: "한국생산기술연구원" },
      period: "2024.07 – 2024.08",
      desc:  { en: "Prediction algorithms for tool wear to optimize cutting conditions in CNC machining processes",
               ko: "절삭 조건 최적화를 위한 CNC 공구 마모 예측 알고리즘 개발" },
      tags:  { en: ["Industrial AI", "Time-Series"], ko: ["산업 AI", "시계열"] },
      stack: ["Python", "PyTorch"],
    },
    {
      title: { en: "OPC UA Edge Data Acquisition & Equipment Condition Prediction", ko: "OPC UA 엣지 데이터 수집 및 설비 상태 예측" },
      org:   "Edge Cross AI",
      period: "2023.07 – 2023.08",
       desc:  { en: "Collected equipment data at customer factories over OPC UA and serial links, adapted the embedded software to site requirements, and verified cloud transmission",
                ko: "고객사 공장에서 OPC UA·시리얼 통신으로 설비 데이터를 수집하고, 현장 요구에 맞춘 임베디드 소프트웨어 수정과 클라우드 전송을 검증" },
      tags:  { en: ["Edge AI", "Industrial IoT"], ko: ["Edge AI", "산업 IoT"] },
      stack: ["C++", "MODBUS"],
    },
    {
      title: { en: "Automotive Ignition Coil Defect Classification", ko: "자동차 점화 코일 불량 분류" },
      org:   { en: "Queueing and Stochastic Lab, Hanyang University ERICA", ko: "Queueing and Stochastic Lab, 한양대학교 ERICA" },
      period: "2023",
      desc:  { en: "Defect classification model for automotive ignition coils",
               ko: "자동차 점화 코일 불량 분류 모델 개발" },
      tags:  { en: ["Classification", "Quality"], ko: ["분류", "품질"] },
    },
  ],

  /* ── 논문 및 학술 활동 ──
     type : journal-intl | conf-intl | conf-dom | poster
     role : first | co | presenter                              */
  publications: [
    {
      authors: "T. Kim, S. Barde",
      title: "From a Predicted Lifetime to the Full Capacity Trajectory: Early Forecasting of Lithium-Ion Degradation with Calibrated Uncertainty",
      venue: { en: "Reliability Engineering & System Safety (submitted)", ko: "Reliability Engineering & System Safety (제출)" },
      date: "2026.08",
      type: "journal-intl", role: "first",
      note: { en: "LSS forecasts the full capacity-fade trajectory and calibrated uncertainty from a short early-cycle record",
              ko: "짧은 초기 사이클로 전체 용량 열화 궤적과 보정된 예측 불확실성을 함께 추정하는 LSS 방법론" },
    },
    {
      title: "Early Remaining Useful Life Prediction of Lithium-ion Batteries Based on HMM-NLWP with Time-Varying Hazard Rate Function",
      venue: { en: "Korean Reliability Society (KORAS) Spring Conference", ko: "한국신뢰성학회 춘계학술대회" },
      date: "2026.06",
      location: { en: "Jeju, South Korea", ko: "제주" },
      type: "conf-dom", role: "presenter",
      note: { en: "Oral presentation", ko: "구두 발표" },
    },
    {
      authors: "T. Kim, Y. Seo, S. Barde",
      title: "Edge-compatible SOH Estimation for Li-ion Batteries via Hybrid Knowledge Distillation and Model Compression",
      venue: "Journal of Energy Storage",
      date: "2025.11",
      type: "journal-intl", role: "first",
      url: "https://www.sciencedirect.com/science/article/pii/S2352152X25029883",
      note: { en: "83.5× compression (451 KB → 5.4 KB) · 18.7× throughput · real-time inference on Raspberry Pi 4B",
              ko: "83.5배 압축 (451KB → 5.4KB) · 처리량 18.7배 · Raspberry Pi 4B 실시간 추론" },
    },
    {
      authors: "Y. Seo, T. Kim, S. Barde",
      title: "Enhancing Battery SOH Prediction with Physics-Informed Neural Networks in Data-Scarce Environments",
      venue: "Energy",
      date: "2025.10",
      type: "journal-intl", role: "co",
      url: "https://www.sciencedirect.com/science/article/pii/S0360544225039581",
      note: { en: "Physics-informed learning for robust prediction in data-scarce environments",
              ko: "데이터 부족 환경에서의 강건한 예측을 위한 물리 정보 기반 학습" },
    },
    {
      authors: "T. Kim, Y. Seo, S. Barde",
      title: "Hybrid Compression for Accurate End of Life Prediction on Edge Battery Management System",
      venue: "IEEE Global Reliability & PHM Conference",
      date: "2025.10",
      type: "conf-intl", role: "first",
      note: { en: "Lightweight model enabling real-time battery EOL estimation on edge devices",
              ko: "엣지 디바이스에서의 실시간 배터리 EOL 추정을 위한 경량 모델" },
    },
    {
      authors: "Y. Seo, T. Kim, S. Barde",
      title: "Robust SOH Prediction for Lithium-Ion Batteries via ProbSparse Informer Architecture",
      venue: "IEEE Global Reliability & PHM Conference",
      date: "2025.10",
      type: "conf-intl", role: "co",
      award: "🏆 Best Paper Award",
      note: { en: "Informer-based SOH prediction framework", ko: "Informer 기반 SOH 예측 프레임워크" },
    },
    {
      title: "Response-based Knowledge Distillation, Pruning, and Quantization Approach for Lightweight Li-ion Battery SOH Prediction Model",
      venue: { en: "Korean Reliability Society (KORAS) Spring Conference", ko: "한국신뢰성학회 춘계학술대회" },
      date: "2025.06",
      location: { en: "South Korea", ko: "대한민국" },
      type: "poster", role: "presenter",
      award: { en: "🏆 Excellence in Presentation Award", ko: "🏆 우수발표상" },
    },
  ],

  /* ── 수상 ── */
  awards: [
    {
      date: "2025.12",
      title: { en: "Grand Prize", ko: "대상" },
      desc:  "Factory Hack Korea 2025",
      org:   { en: "Ministry of Trade, Industry and Resources (MOTIR)", ko: "산업통상부" },
    },
    {
      date: "2025.10",
      title: "Best Paper Award",
      desc:  "Robust SOH Prediction for Lithium-Ion Batteries via ProbSparse Informer Architecture",
      org:   "IEEE Global Reliability & PHM Conference 2025",
    },
    {
      date: "2025.06",
      title: { en: "Excellence in Presentation Award (Poster)", ko: "우수발표상 (포스터)" },
      desc:  "Response-based Knowledge Distillation, Pruning, and Quantization Approach for Lightweight Li-ion Battery SOH Prediction Model",
      org:   { en: "Korean Reliability Society (KORAS) Spring Conference", ko: "한국신뢰성학회 춘계학술대회" },
    },
  ],

  /* ── 특허 ── */
  patents: [
    {
      title: { en: "Integrated Compression Pipeline for Battery Prognostics and SOH·EOL·RUL Prediction Method",
               ko: "배터리 예지를 위한 통합 압축 파이프라인 및 SOH·EOL·RUL 예측 방법" },
      desc:  { en: "Integrated model-compression pipeline for on-device battery prognostics (SOH · EOL · RUL)",
               ko: "온디바이스 배터리 예지(SOH · EOL · RUL)를 위한 통합 모델 압축 파이프라인" },
      inventors: "S. Barde, T. Kim, Y. Seo",
      number: "10-2025-0145236",
      filed: "2025.10",
      authority: { en: "South Korea (KIPO)", ko: "대한민국 특허청" },
      status: { en: "Application filed", ko: "출원" },
    },
  ],

  /* ── 활동 ── */
  activities: [
    { icon: "⚽",
      role: { en: "Founding Member & Executive Committee", ko: "창립 멤버 & 운영진" },
      org:  "HY PASS",
      inst: { en: "University Football Club · Hanyang University ERICA", ko: "교내 축구 동아리 · 한양대학교 ERICA" },
      period: "2023.03 – 2023.12",
      desc: { en: "Established the club and its recruitment system (30+ members); organized the 1st Ansan University Festival and contributed to the championship",
              ko: "동아리 창립 및 모집 체계 구축(30명 이상 모집), 제1회 안산 대학 축제 기획 및 우승 기여" } },
    { icon: "🏅",
      role: { en: "Executive Committee", ko: "운영진" },
      org:  "Leaders",
      inst: { en: "Department Soccer Team · Hanyang University ERICA", ko: "학과 축구팀 · 한양대학교 ERICA" },
      period: "2022.03 – 2024.08",
      desc: { en: "3rd place among 10 teams at the Engineering College Sports Competition",
              ko: "공과대학 체육대회 10팀 중 3위" } },
    { icon: "🎓",
      role: { en: "Teaching Assistant", ko: "조교" },
      org:  { en: "Mathematical Statistics · Applied Statistics", ko: "수리통계학 · 응용통계학" },
      inst: { en: "Hanyang University ERICA", ko: "한양대학교 ERICA" },
      period: "2023" },
    { icon: "🤝",
      role: { en: "International Student Mentor", ko: "외국인 유학생 멘토" },
      org:  "Hanmille",
      inst: { en: "Hanyang University", ko: "한양대학교" },
      period: "2022.09 – 2022.12",
      desc: { en: "Supported two international students with adapting to university life",
              ko: "외국인 유학생 2명의 대학 생활 적응 지원" } },
    { icon: "🎖️",
      role: { en: "Military Service — Sergeant", ko: "병역 — 육군 병장" },
      org:  { en: "Republic of Korea Army", ko: "대한민국 육군" },
      inst: { en: "GOP surveillance & reconnaissance operations", ko: "GOP 경계 · 감시 및 수색 작전" },
      period: "2018.06 – 2021.01",
      desc: { en: "Commendation for exemplary service", ko: "모범 복무 표창" } },
  ],

  /* ── 기술 스택 ── */
  skills: [
    { category: { en: "PHM · Modeling", ko: "PHM · 모델링" },
      items: [{ en: "SOH / RUL / EOL estimation", ko: "SOH / RUL / EOL 추정" },
              { en: "Degradation modeling", ko: "열화 모델링" },
              { en: "HMM · Wiener process", ko: "HMM · Wiener 과정" },
              "PINN"] },
    { category: { en: "Deep Learning · Time-Series", ko: "딥러닝 · 시계열" },
      items: ["PyTorch", "ONNX", "Transformer / Informer",
              { en: "Time-Series Forecasting", ko: "시계열 예측" }] },
    { category: { en: "Compression · Edge Deployment", ko: "경량화 · 엣지 배포" },
      items: [{ en: "Knowledge Distillation", ko: "지식 증류" },
              { en: "Quantization", ko: "양자화" },
              { en: "Pruning", ko: "프루닝" },
              "Raspberry Pi", "TinyML", { en: "Firmware", ko: "펌웨어" }] },
    { category: { en: "Programming · Data", ko: "프로그래밍 · 데이터" },
      items: ["Python", "C++", "MATLAB", "Pandas", "NumPy"] },
    { category: { en: "Industrial Protocols", ko: "산업 프로토콜" },
      items: ["OPC UA", "MODBUS"] },
    { category: { en: "Languages", ko: "언어" },
      items: [{ en: "Korean (Native)", ko: "한국어 (모국어)" },
              { en: "English (Intermediate–Advanced)", ko: "영어 (중상급)" }] },
  ],

  /* ── 연락처 ── */
  contact: {
    intro: {
      en: "If you'd like to work together on PHM, time-series analysis, or physics-informed degradation modeling, feel free to reach out.",
      ko: "PHM·시계열 분석·물리적 정합성을 고려한 열화 모델링과 관련해 같이 할 일이 있으면 편하게 연락 주세요.",
    },
    cards: [
      { icon: "mail",     label: "Email",          value: "taeyii3056@hanyang.ac.kr", href: "mailto:taeyii3056@hanyang.ac.kr" },
      { icon: "github",   label: "GitHub",         value: "github.com/taeyii",        href: "https://github.com/taeyii" },
      { icon: "scholar",  label: "Google Scholar", value: "scholar.google.com",        href: "https://scholar.google.com/citations?user=SuhlHloAAAAJ" },
      { icon: "orcid",    label: "ORCID",          value: "0009-0003-9683-7015",       href: "https://orcid.org/0009-0003-9683-7015" },
      { icon: "pin",      label: { en: "Location", ko: "위치" },
        value: { en: "Gyeonggi-do, South Korea", ko: "경기도, 대한민국" } },
    ],
  },
};
