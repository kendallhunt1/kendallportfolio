// ----- Projects -----
const projects = [
  {
    title: "GoBackz",
    description: "GoBackz UI built using: </br><strong>React, JavaScript, SCSS/CSS.</strong> </br>Functionality of site built using: </br><strong>Node.js, MongoDB, Mongoose, Express, Axios.</strong>",
    link: "/work/GoBackz",
    githubLink: "https://github.com/kendallhunt1/GoBackz",
    liveLink: "https://gobackzdriverapplication.herokuapp.com/",
    anchor: "gobackz",
    backgroundImage: "./images/working.png",
    longDescription: "GoBackz website meant to inform about GoBackz, and accept driver applications. GoBackz is an app that allows users to schedule drivers to come pick up their return packages, and return them for them.",
    projectImage1: "./images/gobackzmacbook.png",
    projectImage2: "./images/gobackzgroup.png"
  },
  {
    title: "Focus Tracks",
    description: "FocusTracks UI built using: </br><strong>React, JavaScript, SCSS/CSS.</strong>",
    link: "/work/FocusTracks",
    githubLink: "https://github.com/kendallhunt1/focus-tracks",
    liveLink: "https://kendallhunt1.github.io/focustracks-/",
    anchor: "focustracks",
    backgroundImage: "./images/focustracks.png",
    longDescription: "An online media player. Similar interface to nearly every music player built using React.",
    projectImage1: "./images/focustracksmacbook.png",
    projectImage2: "./images/focustracksgroup.png"
  },
  {
    title: "Golf-Sidekick",
    description: "Golf-Sidekick UI built using: </br><strong>HTML, EJS, JavaScript, SCSS/CSS.</strong> </br>Functionality of site built using: </br><strong>Node.js, MongoDB, Mongoose, Express, OAuth.</strong>",
    link: "/work/Golf-Sidekick",
    githubLink: "https://github.com/kendallhunt1/golfsidekick-",
    liveLink: "https://stormy-ridge-94774.herokuapp.com/",
    anchor: "golfsidekick",
    backgroundImage: "./images/golfsidekick.png",
    longDescription: "Golf Sidekick is an application built to make golf simpler, and make players lower their scores. Golf can be endlessly complex, or so it seems, but I like simplicity so this application takes in user data, and gives back advice in a simple way. No need to get fancy.",
    projectImage1: "./images/golfsidekickmacbook.png",
    projectImage2: "./images/golfsidekickgroup.png"
  },
  {
    title: "Next Level Bets",
    description: "Back-End private application built width: </br><strong>Node.js, JavaScript, MongoDB, Mongoose, Express, Puppeteer.</strong>",
    link: "https://github.com/kendallhunt1/nextlevelbets",
    githubLink: "https://github.com/kendallhunt1/NFLDataScraper",
    anchor: "nextlevelbets",
    backgroundImage: "./images/nflgithub.png",
    longDescription: "Next Level Bets is a private project between myself, and another person. It scrapes nearly every recorded/recordable stat from every NFL team from 1990-2023 (Modern Era Football) from Pro Football Reference. That data is then plugged into equations that give us more accurate probabilities  of outcomes than what sportsbooks have.",
    projectImage1: "./images/nflgithub.png",
    projectImage2: "./images/nextlevelbetsgroup.png"
  },
  {
    title: "NASA API",
    description: "NASA Api UI built using: </br><strong>React, JavaScript, SCSS/CSS.</strong> </br>Functionality of site built using: </br><strong>JavaScript, FetchAPI, NASA API.</strong>",
    link: "/work/NASAapi",
    githubLink: "https://github.com/kendallhunt1/nasa-api",
    liveLink: "https://kendallhunt1.github.io/nasa-api/",
    anchor: "nasa",
    backgroundImage: "./images/working.png",
    longDescription: "NASA API is as simple as it reads. It's a webpage that uses NASA's public API, the fetchAPI, and React to render a responsive website that displays NASA's Image of the Day, it's title, and it's description.",
    projectImage1: "./images/nasamacbook.png",
    projectImage2: "./images/nasagroup.png"
  }
];

const radiant = {
  title: "Radiant",
  description: "Track everything. For Free.</br><strong>Flutter, Dart, Firebase, Firestore (NoSQL), Python/TFLite (ML)</strong>",
  link: "/work/Radiant",
  githubLink: "https://github.com/kendallhunt1",
  liveLink: "",
  anchor: "radiant",
  backgroundImage: "./images/RadiantScreenshot.png",
  longDescription: "Radiant is a privacy-first health tracking ecosystem with on-device ML for insights.",
  projectImage1: "./images/radiantscreenshot.png",
  projectImage2: "./images/radiantscreenshot.png"
};

const extra1 = {
  title: "Project Six",
  description: "Short description here.",
  link: "/work/ProjectSix",
  githubLink: "",
  liveLink: "",
  anchor: "project-six",
  backgroundImage: "./images/working.png",
  longDescription: "Details about Project Six.",
  projectImage1: "./images/working.png",
  projectImage2: "./images/working.png"
};

const extra2 = {
  title: "Project Seven",
  description: "Short description here.",
  link: "/work/ProjectSeven",
  githubLink: "",
  liveLink: "",
  anchor: "project-seven",
  backgroundImage: "./images/working.png",
  longDescription: "Details about Project Seven.",
  projectImage1: "./images/working.png",
  projectImage2: "./images/working.png"
};

const deckData = [radiant, ...projects, extra1, extra2].slice(0, 7);

// ----- DOM helpers -----
function el(tag, opts = {}) {
  const n = document.createElement(tag);
  if (opts.className) n.className = opts.className;
  if (opts.html != null) n.innerHTML = opts.html;
  if (opts.text != null) n.textContent = opts.text;
  if (opts.attrs) Object.entries(opts.attrs).forEach(([k, v]) => v != null && n.setAttribute(k, v));
  return n;
}

function extractTech(html = "") {
  const m = /<strong>(.*?)<\/strong>/i.exec(html);
  if (!m) return [];
  return m[1]
    .split(/[,\u2013\/]| and /i)
    .map(s => s.replace(/<\/?br\s*\/?>/gi,'').trim())
    .filter(Boolean);
}
function uniqueImages(p) {
  const imgs = [p.projectImage1, p.projectImage2, p.backgroundImage].filter(Boolean);
  return [...new Set(imgs)];
}

function detailsTemplate(p){
  const tech = extractTech(p.description || "");
  const imgs = uniqueImages(p);

  const wrap = el('section', { className:'pdetails', attrs:{ id:'projectDetails' }});
  wrap.innerHTML = `
    <div class="pdetails-inner">
      <!-- Left: media / gallery -->
      <div class="pdetails-media">
        <div class="pdetails-hero">
          <img class="pdetails-hero-img" src="${imgs[0] || ''}" alt="${p.title} screenshot" loading="lazy">
        </div>
        ${imgs.length > 1 ? `
        <div class="pdetails-thumbs">
          ${imgs.map((src,i)=>`
            <button class="pdetails-thumb ${i===0?'is-active':''}" data-src="${src}" aria-label="View image ${i+1}">
              <img src="${src}" alt="${p.title} thumbnail ${i+1}" loading="lazy">
            </button>
          `).join('')}
        </div>`:``}
      </div>

      <!-- Right: text -->
      <div class="pdetails-body">
        <h3>${p.title}</h3>

        ${tech.length ? `
        <div class="pdetails-tech">
          ${tech.map(t=>`<span class="pbadge">${t}</span>`).join('')}
        </div>`:``}

        <div class="pdetails-section">
          <h4>Overview</h4>
          <div class="pdetails-desc">${p.description || ''}</div>
          <p class="pdetails-long">${p.longDescription || ''}</p>
        </div>

        <div class="pdetails-actions">
          ${p.githubLink ? `<a class="pbtn" href="${p.githubLink}" target="_blank" rel="noopener">GitHub</a>` : ``}
          ${p.liveLink   ? `<a class="pbtn pbtn-primary" href="${p.liveLink}" target="_blank" rel="noopener">Live</a>` : ``}
          ${p.link       ? `<a class="pbtn" href="${p.link}" target="_blank" rel="noopener">Details</a>` : ``}
        </div>
      </div>
    </div>
  `;

  // Wire up the thumbnail click -> swap hero image
  const hero = wrap.querySelector('.pdetails-hero-img');
  const thumbs = wrap.querySelectorAll('.pdetails-thumb');
  thumbs.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      thumbs.forEach(b=>b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const src = btn.getAttribute('data-src');
      if (src) hero.src = src;
    });
  });

  return wrap;
}


function cardTemplate(p) {
  const card = el('article', { className:'card' });
  const h = el('h2', { text:p.title });

  const imgWrap = el('div', { className:'card-img' });
  const img = el('img', { attrs:{ src:p.projectImage1 || p.backgroundImage, alt:`${p.title} image`, loading:'lazy' }});
  imgWrap.appendChild(img);

  const bottom = el('div', { className:'card-bottom' });
  const desc = el('div', { className:'card-desc', html:p.description || p.longDescription });
  const ctaWrap = el('div', { className:'card-cta' });
  const linkHref = p.link || p.liveLink || p.githubLink || '#';
  const btn = el('a', { className:'view-btn', text:'Go to Work', attrs:{ href:linkHref, target:'_blank', rel:'noopener noreferrer' }});
  ctaWrap.appendChild(btn);

  bottom.append(desc, ctaWrap);
  card.append(h, imgWrap, bottom);
  return card;
}

// ----- Deck mount -----
function mountDeck() {
  const root = document.getElementById('dynamicWork');
  const deck = el('div', { attrs:{ id:'projectDeck' }});
  const stage = el('div', { className:'deck-stage' });
  const nav   = el('div', { className:'deck-nav' });
  const prev  = el('button', { className:'prev', text:'‹', attrs:{ 'aria-label':'Previous project' }});
  const next  = el('button', { className:'next', text:'›', attrs:{ 'aria-label':'Next project' }});

  nav.append(prev, next);
  deck.append(stage, nav);

  // + details container
  let details = el('section', { className:'pdetails', attrs:{ id:'projectDetails' }}); // NOTE: let (we reassign)

  // Mount order
  root.replaceChildren(deck);
  root.appendChild(details);

  const cards = deckData.map(cardTemplate);
  cards.forEach(c => {
    stage.appendChild(c);
    const img = c.querySelector('img');
    if (img) img.addEventListener('load', () => { if (c.classList.contains('is-active')) render(); });
  });

  let idx = 0;

  function updateDetails(){
    const p = deckData[idx];
    const fresh = detailsTemplate(p);
    details.replaceWith(fresh);
    details = fresh; // keep reference updated
  }

  function render() {
    // state classes for fan (use your own names if you didn't switch)
    cards.forEach(c => c.classList.remove('is-active','is-prev','is-next','is-prev2','is-next2','active','prev','next','prev2','next2'));

    const prevIndex  = (idx - 1 + cards.length) % cards.length;
    const nextIndex  = (idx + 1) % cards.length;
    const prev2Index = (idx - 2 + cards.length) % cards.length;
    const next2Index = (idx + 2) % cards.length;

    // support either namespaced (is-*) or your earlier plain classes
    cards[idx].classList.add('is-active','active');
    cards[prevIndex].classList.add('is-prev','prev');
    cards[nextIndex].classList.add('is-next','next');
    cards[prev2Index].classList.add('is-prev2','prev2');
    cards[next2Index].classList.add('is-next2','next2');

    // requestAnimationFrame(() => {
    //   const h = cards[idx].offsetHeight;
    //   stage.style.height = (h || 620) + 'px';
    // });

    updateDetails();
  }

  function go(n){
    idx = (n + cards.length) % cards.length;
    render();
  }

  // Controls
  prev.addEventListener('click', ()=>go(idx-1));
  next.addEventListener('click', ()=>go(idx+1));
  document.addEventListener('keydown', e=>{
    if(e.key==='ArrowLeft') go(idx-1);
    if(e.key==='ArrowRight') go(idx+1);
  });

  // Swipe
  let startX = null;
  stage.addEventListener('touchstart', e=>{ startX = e.touches[0].clientX }, { passive:true });
  stage.addEventListener('touchmove', e=>{
    if(startX==null) return;
    const dx = e.touches[0].clientX - startX;
    if (Math.abs(dx) > 40){ go(idx + (dx<0?1:-1)); startX = null; }
  }, { passive:true });
  stage.addEventListener('touchend', ()=> startX=null);

  render();
}

// Run
if (document.readyState !== 'loading') mountDeck();
else window.addEventListener('DOMContentLoaded', mountDeck);
