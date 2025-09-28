const python = { name: "Python", img: "./images/pythonlogonobackground.png" };
const flutter = { name: "Flutter", img: "./images/flutterlogonobackground.png" };
const dart = { name: "Dart", img: "./images/dartlogonobackground.png" };
const firebase = { name: "Firebase", img: "./images/firebaselogo.png" };
const firestore = { name: "Firestore", img: "./images/firestorelogo.png" };
const tflite = { name: "TensorFlow Lite", img: "./images/tensorflowlitelogo.png" };
const html = {name: "HTML", img: "./images/htmllogo.png"};
const css = {name: "CSS", img: "./images/csslogo.png"};
const scss = {name: "SCSS", img: "./images/scsslogo.png"};
const javascript = {name: "JavaScript", img: "./images/javascriptlogo.png"};
const nodejs = {name: "Node.js", img: "./images/nodejslogo.png"};
const java = {name: "Java", img: "./images/javalogonobackground.png"};
const mongodb = {name: "MongoDB", img: "./images/mongodblogo.png"};
const sql = {name: "SQL", img: "./images/sqllogonobackground.png"};
const express = {name: "Express", img: "./images/expresslogonobackground.png"};
const axios = {name: "Axios", img: "./images/axioslogonobackground.png"};
const oauth = {name: "OAuth", img: "./images/oauthlogo.png"};
const ejs = {name: "EJS", img: "./images/ejslogonobackground.png"};
const react ={name: "React", img: "./images/reactlogo.png"};

const projects = [
  {
    title: "GoBackz",
    link: "/work/GoBackz",
    githubLink: "https://github.com/kendallhunt1/GoBackz",
    liveLink: "https://gobackzdriverapplication.herokuapp.com/",
    anchor: "gobackz",
    tools: [html, css, scss, javascript, express, axios, mongodb],
    backgroundImage: "./images/working.png",
    longDescription: "GoBackz website meant to inform about GoBackz, and accept driver applications. GoBackz is an app that allows users to schedule drivers to come pick up their return packages, and return them for them.",
    images: [
      "./images/gobackzmacbook.png",
      "./images/gobackzgroup.png"
    ]
  },
  {
    title: "Focus Tracks",
    link: "/work/FocusTracks",
    githubLink: "https://github.com/kendallhunt1/focus-tracks",
    liveLink: "https://kendallhunt1.github.io/focustracks-/",
    anchor: "focustracks",
    tools: [html, css, scss, javascript],
    backgroundImage: "./images/focustracks.png",
    longDescription: "An online media player. Similar interface to nearly every music player built using React.",
    images: [
      "./images/focustracksmacbook.png",
      "./images/focustracksgroup.png"
    ]
  },
  {
    title: "Golf-Sidekick",
    link: "/work/Golf-Sidekick",
    githubLink: "https://github.com/kendallhunt1/golfsidekick-",
    liveLink: "https://stormy-ridge-94774.herokuapp.com/",
    anchor: "golfsidekick",
    tools: [html, css, scss, ejs, javascript, nodejs, express, oauth, mongodb],
    backgroundImage: "./images/golfsidekick.png",
    longDescription: "Golf Sidekick is an application built to make golf simpler, and make players lower their scores. Golf can be endlessly complex, or so it seems, but I like simplicity so this application takes in user data, and gives back advice in a simple way. No need to get fancy.",
    images: [
      "./images/golfsidekickmacbook.png",
      "./images/golfsidekickgroup.png"
    ]
  },
  {
    title: "Next Level Bets",
    link: "https://github.com/kendallhunt1/nextlevelbets",
    githubLink: "https://github.com/kendallhunt1/nextlevelbets",
    anchor: "nextlevelbets",
    tools: [javascript, nodejs, express, axios, mongodb],
    backgroundImage: "./images/nflgithub.png",
    longDescription: "Next Level Bets is a private project between myself, and another person. It scrapes nearly every recorded/recordable stat from every NFL team from 1990-2023 (Modern Era Football) from Pro Football Reference. That data is then plugged into equations that give us more accurate probabilities  of outcomes than what sportsbooks have.",
    images: [
      "./images/nflgithub.png",
      "./images/nextlevelbetsgroup.png"
    ]
  },
  {
    title: "NASA API",
    link: "/work/NASAapi",
    githubLink: "https://github.com/kendallhunt1/nasa-api",
    liveLink: "https://kendallhunt1.github.io/nasa-api/",
    anchor: "nasa",
    tools: [react, javascript, html, css, scss],
    backgroundImage: "./images/working.png",
    longDescription: "NASA API is as simple as it reads. It's a webpage that uses NASA's public API, the fetchAPI, and React to render a responsive website that displays NASA's Image of the Day, it's title, and it's description.",
    images: [
      "./images/nasamacbook.png",
      "./images/nasagroup.png"
    ]
  }
];

const radiant = {
  title: "Radiant",
  link: "/work/Radiant",
  githubLink: "https://github.com/kendallhunt1",
  liveLink: "",
  anchor: "radiant",
  backgroundImage: "./images/radiantscreenshotport.png",
  longDescription: "Radiant  is a health & fitness app that takes out all of the hurdles the rest of the industry has decided are now the norm. It removes all of the paywalls to features that should be standard for every user. All user information is encrypted, and protected. Users can track everything from every bite of food, to every second of sleep that they get, their energy levels and how their mood is. The ML model can help users draw understanding from their health metrics based off of their daily habits and inputs. Radiant is designed with users in mind, not pay walls.",
  tools: [python, flutter, dart, firebase, firestore, tflite],
  images: [
  "./images/radiantscreenshot.png",
  "./images/radiantscreenshotport1.png",
  "./images/radiantscreenshotport2.png",
  ]
};

const projectList = [radiant, ...projects].slice(0, 5);

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

function isStr(x){ return typeof x === 'string' && x.trim().length > 0; }

function uniqueImages(p) {
  const fromArray = Array.isArray(p.images) ? p.images.filter(isStr) : [];
  const legacy = [p.projectImage1, p.projectImage2, p.backgroundImage].filter(isStr);
  const out = [];
  const seen = new Set();
  [...fromArray, ...legacy].forEach(src => {
    if (!seen.has(src)) { seen.add(src); out.push(src); }
  });
  return out;
}

function detailsTemplate(p){
  const tech = extractTech(p.description || "");
  const imgs = uniqueImages(p);

  const wrap = el('section', { className:'pdetails', attrs:{ id:'projectDetails' }});
  wrap.innerHTML = `
    <div class="pdetails-inner">
      <!-- Media -->
      <div class="pdetails-media ${imgs.length ? '' : 'is-empty'}">
        <div class="pdetails-hero">
          ${imgs.length ? `
            <img class="pdetails-hero-img" src="${imgs[0]}" alt="${p.title} screenshot" loading="lazy">
          ` : `
            <div class="pdetails-hero-placeholder" aria-hidden="true">No image</div>
          `}
        </div>

        ${imgs.length > 1 ? `
          <div class="pdetails-thumbs" role="tablist" aria-label="${p.title} screenshots">
            ${imgs.map((src,i)=>`
              <button type="button" tabindex="0"
                      class="pdetails-thumb ${i===0?'is-active':''}"
                      data-src="${src}" aria-label="View image ${i+1}">
                <img src="${src}" alt="${p.title} thumbnail ${i+1}" loading="lazy">
              </button>
            `).join('')}
          </div>
        `:``}
      </div>

      <!-- Text -->
      <div class="pdetails-body">
        <h3>${p.title}</h3>

        ${tech.length ? `
        <div class="pdetails-tech">
          ${tech.map(t=>`<span class="pbadge">${t}</span>`).join('')}
        </div>`:``}

        ${p.tools?.length ? `
        <div class="pdetails-tools">
          ${p.tools.map(t=>`
            <div class="tool">
              <div class="tool-icon">
                <img src="${t.img}" alt="${t.name}" loading="lazy">
              </div>
              <span class="tool-name">${t.name}</span>
            </div>
          `).join('')}
        </div>`:``}

        <div class="pdetails-section">
          <h4>Overview</h4>
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

  const hero = wrap.querySelector('.pdetails-hero-img');
  const thumbs = wrap.querySelectorAll('.pdetails-thumb');

  thumbs.forEach((btn, i) => {
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');

    btn.addEventListener('click', () => {
      thumbs.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      const src = btn.getAttribute('data-src');
      if (src && hero) {
        hero.src = src;
        const t = (wrap.querySelector('.pdetails-body h3')?.textContent || 'project');
        hero.alt = `${t} screenshot`;
      }
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  return wrap;
}


function mountProjects() {
  const root = document.getElementById('dynamicWork');
  if (!root) return;

  const wrapper = el('section', { className: 'pdetails-wrapper' });

  let details = el('section', { className:'pdetails', attrs:{ id:'projectDetails' }});

  const navOverlay = el('div', { className: 'compact-nav' });
  const prev = el('button', { className: 'nav-btn prev', text: '‹', attrs:{ 'aria-label':'Previous project' }});
  const next = el('button', { className: 'nav-btn next', text: '›', attrs:{ 'aria-label':'Next project' }});
  navOverlay.append(prev, next);

  wrapper.append(details, navOverlay);
  root.replaceChildren(wrapper);

  let idx = 0;

  function render(){
    const fresh = detailsTemplate(projectList[idx]);
    details.replaceWith(fresh);
    details = fresh;
  }
  function go(n){
    idx = (n + projectList.length) % projectList.length;
    render();
  }

  prev.addEventListener('click', ()=>go(idx - 1));
  next.addEventListener('click', ()=>go(idx + 1));

  document.addEventListener('keydown', e=>{
    if(e.key==='ArrowLeft') go(idx-1);
    if(e.key==='ArrowRight') go(idx+1);
  });

  let startX = null;
  wrapper.addEventListener('touchstart', e=>{ startX = e.touches[0].clientX }, { passive:true });
  wrapper.addEventListener('touchmove', e=>{
    if(startX==null) return;
    const dx = e.touches[0].clientX - startX;
    if (Math.abs(dx) > 40){ go(idx + (dx<0?1:-1)); startX = null; }
  }, { passive:true });
  wrapper.addEventListener('touchend', ()=> startX=null);

  render();
}

if (document.readyState !== 'loading') mountProjects();
else window.addEventListener('DOMContentLoaded', mountProjects);
