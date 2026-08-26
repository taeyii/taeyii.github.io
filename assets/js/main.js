/* ═══════════════════════════════════════════════════════════════
   Taeyi Kim — Portfolio  ·  main.js
   Renders every section from assets/js/data.js, handles the
   EN/KO toggle, light/dark theme, typewriter, filters, reveal.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const D = window.SITE_DATA;
  if (!D) { console.error('SITE_DATA not found — is assets/js/data.js loaded?'); return; }

  /* ── helpers ── */
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } },
  };

  /* Korean is the primary language; English is available via the toggle */
  let LANG = store.get('lang') || 'ko';
  if (LANG !== 'en' && LANG !== 'ko') LANG = 'ko';

  /* localized string: "text" | {en, ko} */
  const L = (v) => {
    if (v == null) return '';
    if (typeof v === 'object' && !Array.isArray(v)) return v[LANG] != null ? v[LANG] : (v.en != null ? v.en : '');
    return v;
  };
  /* localized array: [..] | {en:[..], ko:[..]} */
  const LA = (v) => {
    if (Array.isArray(v)) return v;
    if (v && typeof v === 'object') return v[LANG] || v.en || [];
    return [];
  };
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const ui = (group, key) => L((D.ui[group] || {})[key]);

  /* ── inline icons ── */
  const ICON = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 10v6"/></svg>',
    orcid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.5 16V9.5"/><circle cx="8.5" cy="7" r=".6" fill="currentColor"/><path d="M11.5 9.5h2.8a3.25 3.25 0 0 1 0 6.5h-2.8z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>',
  };

  /* ═════════════════════ THEME ═════════════════════ */
  function initTheme() {
    const btn = $('#themeToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      store.set('theme', next);
    });
  }

  /* ═════════════════════ LANGUAGE ═════════════════════ */
  function initLang() {
    const btn = $('#langToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      LANG = LANG === 'en' ? 'ko' : 'en';
      store.set('lang', LANG);
      renderAll();
    });
  }
  function renderLangToggle() {
    const cur = $('#langToggle .lang-current');
    const tgt = $('#langToggle .lang-target');
    if (cur) cur.textContent = LANG.toUpperCase();
    if (tgt) tgt.textContent = LANG === 'en' ? 'KO' : 'EN';
    $('#langToggle').setAttribute('aria-label', LANG === 'en' ? '한국어로 전환' : 'Switch to English');
    document.documentElement.lang = LANG;
  }

  /* ═════════════════════ NAVBAR ═════════════════════ */
  function initNav() {
    const nav = $('#navbar');
    const links = $('#navLinks');
    const toggle = $('#navToggle');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (toggle) {
      toggle.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
      });
      links.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') { links.classList.remove('open'); toggle.classList.remove('open'); }
      });
    }
    /* active link on scroll */
    const sections = $$('main > section[id]');
    const map = {};
    $$('#navLinks a').forEach((a) => { map[a.getAttribute('href').slice(1)] = a; });
    const targetFor = { impact: 'about', research: 'about', news: 'about', patents: 'awards', activities: 'awards', skills: 'awards' };
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const id = targetFor[en.target.id] || en.target.id;
          $$('#navLinks a').forEach((a) => a.classList.remove('active'));
          if (map[id]) map[id].classList.add('active');
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
      sections.forEach((s) => io.observe(s));
    }
  }
  function renderNav() {
    $$('#navLinks a').forEach((a) => {
      const key = a.getAttribute('href').slice(1);
      a.textContent = ui('nav', key) || a.textContent;
    });
  }

  /* ═════════════════════ HERO ═════════════════════ */
  let typeTimer = null;
  function typewriter(words) {
    clearTimeout(typeTimer);
    const el = $('#heroTitleText');
    if (!el || !words.length) return;
    let wi = 0, ci = 0, deleting = false;
    const tick = () => {
      const w = words[wi];
      if (!deleting) {
        ci++;
        el.textContent = w.slice(0, ci);
        if (ci === w.length) { deleting = true; typeTimer = setTimeout(tick, 2200); return; }
        typeTimer = setTimeout(tick, 42);
      } else {
        ci--;
        el.textContent = w.slice(0, ci);
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; typeTimer = setTimeout(tick, 350); return; }
        typeTimer = setTimeout(tick, 22);
      }
    };
    el.textContent = '';
    typeTimer = setTimeout(tick, 300);
  }

  function renderHero() {
    const p = D.profile;
    /* Korean mode: 김태이 large, Taeyi Kim small — and vice versa */
    $('#heroName').textContent = LANG === 'ko' ? p.nameKr : p.name;
    $('#heroNameKr').textContent = LANG === 'ko' ? p.name : p.nameKr;
    $('#heroLocationText').textContent = L(p.location);
    $('#heroSummary').innerHTML = LA(p.summary).map((line, i) =>
      `<span class="hero-summary-line" style="--i:${i}"><span class="hero-summary-bullet"></span><span>${line}</span></span>`).join('');
    $('#heroTags').innerHTML = LA(p.tags).map((t) => `<span class="hero-tag">${esc(t)}</span>`).join('');
    $('#heroActions').innerHTML = [
      `<a href="#contact" class="btn btn-primary">${ICON.send}<span>${esc(ui('btn', 'contact'))}</span></a>`,
      p.portfolioPdf ? `<a href="${esc(p.portfolioPdf)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-white">${ICON.download}<span>${esc(ui('btn', 'portfolio'))}</span></a>` : '',
      `<a href="${esc(p.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-white">${ICON.github}<span>${esc(ui('btn', 'github'))}</span></a>`,
      `<a href="${esc(p.scholar)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-white">${ICON.scholar}<span>${esc(ui('btn', 'scholar'))}</span></a>`,
      `<a href="${esc(p.orcid)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-white">${ICON.orcid}<span>${esc(ui('btn', 'orcid'))}</span></a>`,
    ].join('');
    const img = $('#profileImg');
    if (img && !img.dataset.bound) {
      img.dataset.bound = '1';
      img.src = p.photo;
      img.alt = p.name;
      img.addEventListener('error', () => img.closest('.photo-circle').classList.add('no-img'));
    }
    $('#photoFallback').textContent = p.initials;
    typewriter(LA(p.titles));
  }

  /* ═════════════════════ IMPACT ═════════════════════ */
  function renderImpact() {
    $('#impactStrip').innerHTML = D.impact.map((it) =>
      `<div class="impact-item reveal"><span class="impact-num" data-target="${esc(it.num)}">${esc(it.num)}</span><span class="impact-label">${esc(L(it.label))}</span></div>`).join('');
  }
  function animateCounters() {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        const raw = String(en.target.dataset.target);
        const m = raw.match(/^([\d.]+)(.*)$/);
        if (!m) return;
        const target = parseFloat(m[1]), suffix = m[2], decimals = (m[1].split('.')[1] || '').length;
        const dur = 1100, t0 = performance.now();
        const step = (now) => {
          const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
          en.target.textContent = (target * e).toFixed(decimals) + suffix;
          if (k < 1) requestAnimationFrame(step); else en.target.textContent = raw;
        };
        requestAnimationFrame(step);
      });
    }, { threshold: .5 });
    $$('.impact-num').forEach((n) => io.observe(n));
  }

  /* ═════════════════════ ABOUT ═════════════════════ */
  function renderAbout() {
    const a = D.about, p = D.profile, edu = D.education[0] || {};
    /* headline: first half of the words in blue, second half in white */
    const parts = L(a.headline).split(' ');
    const cut = Math.ceil(parts.length / 2);
    $('#aboutHeadline').innerHTML = parts.length > 1
      ? `${esc(parts.slice(0, cut).join(' '))} <span>${esc(parts.slice(cut).join(' '))}</span>`
      : esc(parts.join(' '));
    $('#aboutLead').textContent = L(a.lead);
    $('#aboutBody').innerHTML = LA(a.body).map((t) => `<p>${t}</p>`).join('');
    $('#aboutSide').innerHTML = [
      `<div class="about-card reveal">
         <div class="about-card-label">${esc(ui('misc', 'degree'))}</div>
         <div class="about-card-value">${esc(L(edu.degree))}</div>
         <div class="about-card-sub">${esc(L(edu.org))} · ${esc(L(edu.period))}</div>
       </div>`,
      `<div class="about-card reveal">
         <div class="about-card-label">${esc(ui('misc', 'lab'))}</div>
         <div class="about-card-value"><a href="${esc(edu.labUrl || p.labUrl)}" target="_blank" rel="noopener noreferrer">${esc(edu.lab || '')}</a></div>
         <div class="about-card-sub">${esc(L(edu.advisor))}</div>
       </div>`,
      `<div class="about-card reveal">
         <div class="about-card-label">${esc(ui('misc', 'handsOn'))}</div>
         <ol class="about-steps">${(a.steps || []).map((s, i) =>
           `<li><span class="step-no">${i + 1}</span><div><div class="step-title">${esc(L(s.title))}</div><div class="step-desc">${esc(L(s.desc))}</div></div></li>`).join('')}</ol>
       </div>`,
    ].join('');
  }

  /* ═════════════════════ RESEARCH ═════════════════════ */
  function renderResearch() {
    $('#researchGrid').innerHTML = D.research.map((r) =>
      `<div class="research-card reveal">
         <div class="rc-head"><div class="rc-icon">${esc(r.icon)}</div><h3 class="rc-title">${esc(L(r.title))}</h3></div>
         <p class="rc-desc">${esc(L(r.desc))}</p>
       </div>`).join('');
  }

  /* ═════════════════════ NEWS ═════════════════════ */
  function renderNews() {
    $('#newsList').innerHTML = D.news.map((n) =>
      `<div class="news-item reveal"><span class="news-date">${esc(n.date)}</span><span class="news-icon">${esc(n.icon || '')}</span><span class="news-text">${L(n.text)}</span></div>`).join('');
  }

  /* ═════════════════════ EDUCATION ═════════════════════ */
  function renderEducation() {
    $('#educationTimeline').innerHTML = D.education.map((e) => {
      const lab = e.lab ? `<div class="tl-meta">${esc(e.lab)}${e.labUrl ? ` — <a href="${esc(e.labUrl)}" target="_blank" rel="noopener noreferrer">${esc(ui('misc', 'labHomepage'))}${ICON.external}</a>` : ''}</div>` : '';
      const adv = e.advisor ? `<div class="tl-meta">${esc(L(e.advisor))}</div>` : '';
      const focus = e.focus ? `<div class="tl-note">${esc(L(e.focus))}</div>` : '';
      return `<div class="timeline-item reveal">
        <div class="tl-header">
          <div class="tl-left"><div class="tl-title">${esc(L(e.degree))}</div><div class="tl-org">${esc(L(e.org))}</div></div>
          <div class="tl-right"><span class="tl-period">${esc(L(e.period))}</span>${e.location ? `<span class="tl-location">${esc(L(e.location))}</span>` : ''}</div>
        </div>${lab}${adv}${focus}</div>`;
    }).join('');
  }

  /* ═════════════════════ EXPERIENCE ═════════════════════ */
  function renderExperience() {
    $('#experienceTimeline').innerHTML = D.experience.map((x) => {
      const bullets = LA(x.bullets);
      const ul = bullets.length ? `<ul class="tl-bullets">${bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : '';
      const stack = x.stack && x.stack.length ? `<div class="tl-stack"><span class="tl-stack-label">${esc(ui('misc', 'tech'))}</span>${x.stack.map((s) => `<span class="chip soft">${esc(s)}</span>`).join('')}</div>` : '';
      return `<div class="timeline-item reveal">
        <div class="tl-header">
          <div class="tl-left"><div class="tl-title">${esc(L(x.role))}</div><div class="tl-org">${esc(L(x.org))}</div></div>
          <div class="tl-right"><span class="tl-period">${esc(L(x.period))}</span>${x.location ? `<span class="tl-location">${esc(L(x.location))}</span>` : ''}</div>
        </div>${ul}${stack}</div>`;
    }).join('');
  }

  /* ═════════════════════ PROJECTS ═════════════════════ */
  function renderProjects() {
    const n = D.projects.length;
    $('#projectsGrid').innerHTML = D.projects.map((p, i) => {
      const tags = LA(p.tags).map((t) => `<span class="tag">${esc(t)}</span>`).join('');
      const stack = (p.stack || []).map((s) => `<span class="tag stack">${esc(s)}</span>`).join('');
      const badge = p.badge ? `<span class="project-badge">${esc(L(p.badge))}</span>` : '';
      const period = `<span class="project-period">${p.ongoing ? '<span class="live"></span>' : ''}${esc(L(p.period))}</span>`;
      return `<div class="project-card reveal">
        <div class="project-meta"><span class="project-index">#${String(n - i).padStart(2, '0')}</span>${period}</div>
        ${badge}
        <h3 class="project-title">${esc(L(p.title))}</h3>
        ${p.org ? `<div class="project-org">${esc(L(p.org))}</div>` : ''}
        <p class="project-desc">${esc(L(p.desc))}</p>
        <div class="project-footer">${tags}${stack}</div>
      </div>`;
    }).join('');
    $('#projectsCount').textContent = LANG === 'ko' ? `${n}개 프로젝트` : `${n} projects`;
  }

  /* ═════════════════════ PUBLICATIONS ═════════════════════ */
  let pubFilter = 'all';
  function highlightAuthors(s) {
    return esc(s).replace(/T\. Kim/g, '<strong>T. Kim</strong>');
  }
  function renderPublications() {
    const pubs = D.publications;
    const n = pubs.length;
    const counts = { all: n };
    pubs.forEach((p) => { counts[p.type] = (counts[p.type] || 0) + 1; });
    const order = ['all', 'journal-intl', 'conf-intl', 'conf-dom', 'poster'];
    $('#pubFilterBar').innerHTML = order.filter((k) => counts[k]).map((k) =>
      `<button class="filter-btn${k === pubFilter ? ' active' : ''}" data-filter="${k}">${esc(ui('filter', k))}<span class="cnt">${counts[k]}</span></button>`).join('');
    $$('#pubFilterBar .filter-btn').forEach((b) => b.addEventListener('click', () => {
      pubFilter = b.dataset.filter;
      $$('#pubFilterBar .filter-btn').forEach((x) => x.classList.toggle('active', x === b));
      applyPubFilter();
    }));
    $('#pubList').innerHTML = pubs.map((p, i) => {
      const venueBits = [esc(L(p.venue))];
      if (p.date) venueBits.push(esc(p.date));
      if (p.location) venueBits.push(esc(L(p.location)));
      const side = [
        p.url ? `<a class="pub-link" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${esc(ui('misc', 'viewPaper'))}${ICON.external}</a>` : '',
        p.role ? `<span class="badge badge-${esc(p.role)}">${esc(ui('badge', p.role))}</span>` : '',
        `<span class="badge badge-${esc(p.type)}">${esc(ui('badge', p.type))}</span>`,
      ].join('');
      return `<div class="pub-item reveal" data-type="${esc(p.type)}">
        <span class="pub-num">[${n - i}]</span>
        <div class="pub-body">
          <div class="pub-main">
            ${p.authors ? `<div class="pub-authors">${highlightAuthors(p.authors)}</div>` : ''}
            <div class="pub-title">${esc(p.title)}</div>
            <div class="pub-venue">${venueBits.join('<span class="sep">·</span>')}</div>
            ${p.note ? `<div class="pub-note">${esc(L(p.note))}</div>` : ''}
            ${p.award ? `<span class="pub-award">${esc(L(p.award))}</span>` : ''}
          </div>
          <div class="pub-side">${side}</div>
        </div>
      </div>`;
    }).join('');
    $('#pubCount').textContent = LANG === 'ko' ? `총 ${n}편` : `${n} works`;
    applyPubFilter();
  }
  function applyPubFilter() {
    $$('#pubList .pub-item').forEach((el) => {
      el.classList.toggle('hidden', !(pubFilter === 'all' || el.dataset.type === pubFilter));
    });
  }

  /* ═════════════════════ AWARDS ═════════════════════ */
  function renderAwards() {
    $('#awardsGrid').innerHTML = D.awards.map((a) =>
      `<div class="award-card reveal">
         <span class="award-date">${esc(a.date)}</span>
         <h3 class="award-title">${esc(L(a.title))}</h3>
         ${a.desc ? `<p class="award-desc">${esc(L(a.desc))}</p>` : ''}
         <div class="award-org">${esc(L(a.org))}</div>
       </div>`).join('');
  }

  /* ═════════════════════ PATENTS ═════════════════════ */
  function renderPatents() {
    $('#patentsList').innerHTML = D.patents.map((p) =>
      `<div class="patent-card reveal">
         <div class="patent-icon">📜</div>
         <div>
           <h3 class="patent-title">${esc(L(p.title))}</h3>
           ${p.desc ? `<p class="patent-desc">${esc(L(p.desc))}</p>` : ''}
           <div class="patent-meta">
             ${p.inventors ? `<span><strong>${esc(ui('misc', 'inventors'))}</strong>${highlightAuthors(p.inventors)}</span>` : ''}
             ${p.number ? `<span><strong>${esc(ui('misc', 'appNo'))}</strong>${esc(p.number)}</span>` : ''}
             ${p.filed ? `<span><strong>${esc(ui('misc', 'filed'))}</strong>${esc(p.filed)}</span>` : ''}
             ${p.authority ? `<span><strong>${esc(ui('misc', 'authority'))}</strong>${esc(L(p.authority))}</span>` : ''}
             ${p.status ? `<span><strong>${esc(ui('misc', 'status'))}</strong>${esc(L(p.status))}</span>` : ''}
           </div>
         </div>
       </div>`).join('');
  }

  /* ═════════════════════ ACTIVITIES ═════════════════════ */
  function renderActivities() {
    $('#activitiesGrid').innerHTML = D.activities.map((a) =>
      `<div class="activity-card reveal">
         <div class="activity-head"><span class="activity-icon">${esc(a.icon || '')}</span><span class="activity-role">${esc(L(a.role))}</span></div>
         <div class="activity-org">${esc(L(a.org))}</div>
         ${a.inst ? `<div class="activity-inst">${esc(L(a.inst))}</div>` : ''}
         ${a.desc ? `<div class="activity-desc">${esc(L(a.desc))}</div>` : ''}
         <span class="activity-period">${esc(L(a.period))}</span>
       </div>`).join('');
  }

  /* ═════════════════════ SKILLS ═════════════════════ */
  function renderSkills() {
    $('#skillsGrid').innerHTML = D.skills.map((s) =>
      `<div class="skill-card reveal">
         <div class="skill-category">${esc(L(s.category))}</div>
         <div class="skill-tags">${s.items.map((it) => `<span class="skill-tag">${esc(L(it))}</span>`).join('')}</div>
       </div>`).join('');
  }

  /* ═════════════════════ CONTACT ═════════════════════ */
  function renderContact() {
    $('#contactIntro').textContent = L(D.contact.intro);
    $('#contactCards').innerHTML = D.contact.cards.map((c) => {
      const inner = `<div class="contact-icon">${ICON[c.icon] || ICON.pin}</div>
         <div class="contact-info"><span class="contact-label">${esc(L(c.label))}</span><span class="contact-value">${esc(L(c.value))}</span></div>`;
      return c.href
        ? `<a class="contact-card reveal" href="${esc(c.href)}"${/^https?:/.test(c.href) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${inner}</a>`
        : `<div class="contact-card reveal">${inner}</div>`;
    }).join('');
  }

  /* ═════════════════════ STATIC LABELS ═════════════════════ */
  function renderLabels() {
    $$('[data-i18n]').forEach((el) => {
      const [group, key] = el.dataset.i18n.split('.');
      const v = ui(group, key);
      if (v) el.textContent = v;
    });
    const p = D.profile;
    $('#footerName').textContent = LANG === 'ko' ? `${p.nameKr} · ${p.name}` : `${p.name} · ${p.nameKr}`;
    $('#footerYear').textContent = new Date().getFullYear();
    $('#lastUpdated').textContent = D.meta.updated || '';
    document.title = ui('misc', 'pageTitle') || document.title;
  }

  /* ═════════════════════ REVEAL ═════════════════════ */
  let revealIO = null;
  function initReveal() {
    if (!('IntersectionObserver' in window)) { $$('.reveal').forEach((el) => el.classList.add('visible')); return; }
    revealIO = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('visible'); revealIO.unobserve(en.target); } });
    }, { threshold: .08, rootMargin: '0px 0px -30px 0px' });
  }
  function observeReveal() {
    if (!revealIO) { $$('.reveal').forEach((el) => el.classList.add('visible')); return; }
    $$('.reveal:not(.visible)').forEach((el) => revealIO.observe(el));
  }

  /* ═════════════════════ RENDER ALL ═════════════════════ */
  let firstRender = true;
  function renderAll() {
    renderLangToggle();
    renderNav();
    renderLabels();
    renderHero();
    renderImpact();
    renderAbout();
    renderResearch();
    renderNews();
    renderEducation();
    renderExperience();
    renderProjects();
    renderPublications();
    renderAwards();
    renderPatents();
    renderActivities();
    renderSkills();
    renderContact();
    if (firstRender) {
      observeReveal();
      animateCounters();
      firstRender = false;
    } else {
      /* language switch: content is already on screen — no re-animation */
      $$('.reveal').forEach((el) => el.classList.add('visible'));
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLang();
    initReveal();
    renderAll();
    initNav();
  });
})();
