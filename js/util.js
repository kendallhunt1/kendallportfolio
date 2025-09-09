const projects = [
  {
      title: "<span style='color: #43bbf3ff;'>Radiant</span>",
      description: "Radiant is built using the following technologies: </br><strong>Flutter, Dart, Google Firebase, NoSQL Firebase DB, and Python/TensorFlow lite for ML Model. NLP for voice logging features.</br> Figma, and UIzard for App UI/UX design. </strong>",
      link: "work.html#gobackz",
      backgroundImage: "./images/radiantscreenshot.png"
    },
    {
      title: "GoBackz",
      description: "GoBackz UI built using: </br><strong>React, JavaScript, SCSS/CSS.</strong> </br>Functionality of site built using: </br><strong>Node.js, MongoDB, Mongoose, Express, Axios.</strong>",
      link: "work.html#gobackz",
      backgroundImage: "./images/gobackzscreen.png"
    },
    {
      title: "Focus Tracks",
      description: "FocusTracks UI built using: </br><strong>React, JavaScript, SCSS/CSS.</strong>",
      link: "work.html#focustracks",
      backgroundImage: "./images/focustracks.png"
    },
    {
      title: "Golf-Sidekick",
      description: "Golf-Sidekick UI built using: </br><strong>HTML, EJS, JavaScript, SCSS/CSS.</strong> </br>Functionality of site built using: </br><strong>Node.js, MongoDB, Mongoose, Express.</strong>",
      link: "work.html$golfsidekick",
      backgroundImage: "./images/golfsidekick.png"
    },
    {
      title: "Next Level Bets",
      description: "Back-End private application built width: </br><strong>Node.js, JavaScript, MongoDB, Mongoose, Express, Puppeteer.</strong>",
      link: "work.html#nextlevelbets",
      backgroundImage: "./images/nflgithub.png"
    },
    {
      title: "NASA API",
      description: "NASA Api UI built using: </br><strong>React, JavaScript, SCSS/CSS.</strong> </br>Functionality of site built using: </br><strong>JavaScript, FetchAPI, NASA API.</strong>",
      link: "work.html#nasa",
      backgroundImage: "./images/nasa.png"
    },
  ];
  
  // Generate the dynamic content
  const dynamicContent = projects.map(project => `
    <div class="wrapper w-dyn-item">
      <div class="column background-image" style="background-image: url(${project.backgroundImage})">
        <div class="column _100vh">
          <div class="project-info">
            <div class="number">
              <h2 class="number zero"></h2>
            </div>
            <h2 class="project-title">${project.title}</h2>
            <p class="project-description">${project.description}</p>
            <a href="${project.link}" class="project-link">Go to Work</a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  
  // Insert the dynamic content into the placeholder
  window.addEventListener('DOMContentLoaded', () => {
        const dynamicContentPlaceholder = document.getElementById('projectList');
        console.log(dynamicContent);
        dynamicContentPlaceholder.innerHTML = dynamicContent;
      });