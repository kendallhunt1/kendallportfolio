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
    projectImage1: "./images/gobackzmacbook.png",
    projectImage2: "./images/gobackzgroup.png"
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
    projectImage1: "./images/focustracksmacbook.png",
    projectImage2: "./images/focustracksgroup.png"
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
    projectImage1: "./images/golfsidekickmacbook.png",
    projectImage2: "./images/golfsidekickgroup.png"
  },
  {
    title: "Next Level Bets",
    link: "https://github.com/kendallhunt1/nextlevelbets",
    githubLink: "https://github.com/kendallhunt1/nextlevelbets",
    anchor: "nextlevelbets",
    tools: [javascript, nodejs, express, axios, mongodb],
    backgroundImage: "./images/nflgithub.png",
    longDescription: "Next Level Bets is a private project between myself, and another person. It scrapes nearly every recorded/recordable stat from every NFL team from 1990-2023 (Modern Era Football) from Pro Football Reference. That data is then plugged into equations that give us more accurate probabilities  of outcomes than what sportsbooks have.",
    projectImage1: "./images/nflgithub.png",
    projectImage2: "./images/nextlevelbetsgroup.png"
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
    projectImage1: "./images/nasamacbook.png",
    projectImage2: "./images/nasagroup.png"
  }
];

const radiant = {
  title: "Radiant",
  link: "/work/Radiant",
  githubLink: "https://github.com/kendallhunt1",
  liveLink: "",
  anchor: "radiant",
  backgroundImage: "./images/radiantscreenshot.png",
  longDescription: "Radiant is a privacy-first health tracking ecosystem with on-device ML for insights.",
  tools: [python, flutter, dart, firebase, firestore, tflite],
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

const projectList = [radiant, ...projects, extra1, extra2].slice(0, 7);

// ----- Helpers -----
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

// ----- Details template (kept) -----
function detailsTemplate(p){
  const tech = extractTech(p.description || "");
  const imgs = uniqueImages(p);

  const wrap = el('section', { className:'pdetails', attrs:{ id:'projectDetails' }});
  wrap.innerHTML = `
    <div class="pdetails-inner">
      <!-- Media -->
      <div class="pdetails-media">
        <div class="pdetails-hero">
          <img class="pdetails-hero-img" src="${imgs[0] || ''}" alt="${p.title} screenshot" loading="lazy">
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
        </div>`:``}
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
  

  // Thumbs -> swap hero + selected state
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
      if (src) {
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

  // ⬇️ Create the details element (the project card)
  let details = el('section', { className:'pdetails', attrs:{ id:'projectDetails' }});

  // ⬇️ Create the overlay nav container + buttons INSIDE it
  const navOverlay = el('div', { className: 'compact-nav' });
  const prev = el('button', { className: 'nav-btn prev', text: '‹', attrs:{ 'aria-label':'Previous project' }});
  const next = el('button', { className: 'nav-btn next', text: '›', attrs:{ 'aria-label':'Next project' }});
  navOverlay.append(prev, next);

  // ⬇️ Add the details and the overlay to the wrapper
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

  // swipe
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


// Run
if (document.readyState !== 'loading') mountProjects();
else window.addEventListener('DOMContentLoaded', mountProjects);
