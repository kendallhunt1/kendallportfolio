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
    },
  ];

const dynamicContent = projects.map(project => `
    <div class="_w-title" id=${project.anchor}>
        <div class="_w-h1">
            <h1 class="main-h1">${project.title}</h1>
            <p class="paragraph-2">${project.description}</p>
            <a target="_blank" href="${project.githubLink}" class="socialLink">GitHub</a>
            <a target="_blank" href="${project.liveLink}" class="socialLink">Live Version</a>
        </div>
    </div>
    <div class="proj_body-wrap">
      <div class="proj_body w-richtext">
        <figure data-rt-type="image" data-rt-align="center" class="w-richtext-align-center">
          <div>
            <img src="${project.projectImage1}">
          </div>
        </figure>
        <p>${project.longDescription}</p>
        <figure class="w-richtext-align-center" style="max-width: 70%;" data-rt-type="image" data-rt-align="center" data-rt-max-width="">
          <div style="max-width: 100%;">
            <img src="${project.projectImage2}" style="width: 100%; height: auto;">
          </div>
        </figure>
      </div>
    </div>
`).join('');

window.addEventListener('DOMContentLoaded', () => {
  const dynamicContentPlaceholder = document.getElementById('dynamicWork');
  console.log(dynamicContent);
  dynamicContentPlaceholder.innerHTML = dynamicContent;
});