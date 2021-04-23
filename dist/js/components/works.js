const portfolioProjects = [
  {
    title: "Above the Line",
    code: "atl",
    pics: [
      "atl-1.png",
      "atl-2.png",
      "atl-3.png",
      "atl-4.png",
      "atl-5.png",
      "atl-6.png",
    ],
    description:
      "Above the Line is your scriptwriting environment. You can create and download preformatted movie scripts.",
    timeline: [
      {
        stage: "Concept",
        desc: `A friend told to me about the cost of his screenwriting software. Something had to be done. Thankfully, scripts use specific formatting guidelines. Perhaps writers could add "tags" to their screenplay (HTML for screenplays).`,
      },
      {
        stage: "Research",
        desc: `First, I wireframed the app in Repl.it and StackBlitz. I used this <a href="https://stackblitz.com/edit/above-the-line-concept" target="_blank" rel="noopener noreferrer">editor component</a> to get a sense of my state managemenet. Finally, I tested helper functions to organize the 'script tags' into an object React PDF could parse.`,
      },
      {
        stage: "MVP: Client",
        desc: `With my <a href="https://github.com/zempo/react-boiler" target="_blank" rel="noopener noreferrer">React Boilerplate</a>, I wrote my routes, components, and utilities in no time. However, it took me a while to integrate React Resizeable and Hotkeys.`,
      },
      {
        stage: "MVP: Server",
        desc: `In this stage, I had to rewrite my data sketches a few times. I ended up changing the data structure of the formatting engine. Fortunately, my <a href="https://github.com/zempo/node-boiler-postgres" target="_blank" rel="noopener noreferrer">Node Boilerplate</a> streamlined the process.`,
      },
      {
        stage: "Feedback",
        desc: `During this time, I was enrolled with <a href="https://www.thinkful.com/" target="_blank" re="noopener noreferrer">Thinkful</a> and was given great feedback. My QA was quite thorough. There were some login bugs, memory leaks, and style bugs - nothing too problematic.`,
      },
      {
        stage: "Production",
        desc: `After I applied the feedback, everything was looking green. I uploaded the production branches to my deployed client and server MVPs.`,
      },
      {
        stage: "New Insights",
        desc: `First and foremost, I learned how to format screenplays. Good projects can teach you so much about the world. And, of course, I learned even more about the DOM, hooks, and state management.`,
      },
    ],
    tech: [
      "React.js (Hooks & Context)",
      "JWT Auth",
      "Node.js (Express)",
      "PostgreSQL (With Knex)",
      "Jest (Frontend Tests)",
      "Mocha (Backend Tests)",
      "Heroku (Deployment)",
      "Zeit (Deployment)",
    ],
    libs: [
      "Axois",
      "ReactPDF ",
      "React Resizeable",
      "React Hotkeys",
      "JWT + Bcrypt.js",
    ],
    repo: "https://github.com/zempo/jto-client",
    live: "https://atl-client.vercel.app/",
    tags: ["pern", "solo"],
  },
  {
    title: "Just the Occasion",
    code: "jto",
    pics: [
      "jto-1.png",
      "jto-2.png",
      ,
      "jto-3.png",
      "jto-4.png",
      "jto-5.png",
      "jto-6.png",
      "jto-7.png",
    ],
    description:
      "The new social network is here. You can customize, react to, and download greeting cards in seconds.",
    timeline: [
      {
        stage: "Concept",
        desc: `When you need to get greeting card for someone, it can be a challenge to find the right card. There had to be a way to easily customize greeting cards and share them with friends and/or strangers.`,
      },
      {
        stage: "Research",
        desc:
          'I set about wireframing the app on Repl.it and paper. I also <a href="https://stackblitz.com/edit/above-the-line-concept" target="_blank" rel="noopener noreferrer">tested</a> the card animations, early on. Next, I looked for ways to moderate card content and store images. To that end, I reached out to a fellow Thinkful <a href="https://www.claytonweller.com/" target="_blank" rel="noopener noreferrer">alumn</a> about his use of Cloudinary.',
      },
      {
        stage: "MVP: Client",
        desc: `During this stage, I made use of my <a href="https://github.com/zempo/react-boiler" target="_blank" rel="noopener noreferrer">React Boilerplate</a>. However, I had to refactor it to manage authentication. As I built the MVP, I learned about modals, the window object, and advanced hooks.`,
      },
      {
        stage: "MVP: Server",
        desc: `Writing the data sketches and tests took some time. Authentication was also new to me. This stage was longer than exptected, but I learned quite a bit about server-side development during the process.`,
      },
      {
        stage: "Feedback",
        desc: `Around this time, I was coding with <a href="https://www.thinkful.com/" target="_blank" re="noopener noreferrer">Thinkful</a>. The feedback I was given was quite helpful. I also improved my sense of UI/UX as I asked my friends for honest feedback.`,
      },
      {
        stage: "Production",
        desc: `After applying this feedback, my project was portfolio-ready.  I uploaded the production branches to my deployed client and server MVPs.`,
      },
      {
        stage: "New Insights",
        desc: `My first fullstack web application was a rite of passage. I emerged with a revised boilerplate, an understanding of the shadow DOM, UI/UX knowledge, and a way to create a card for any occasion.`,
      },
    ],
    tech: [
      "React.js (Hooks & Context)",
      "JWT Auth",
      "Node.js (Express)",
      "PostgreSQL (Knex)",
      "Jest",
      "Mocha",
      "Heroku (Deployment)",
      "Netlify (Deployment)",
    ],
    libs: [
      "Axois",
      "Cloudinary",
      "AWS Image Moderation",
      "React to Print",
      "JWT + Bcrypt.js",
    ],
    repo: "https://github.com/zempo/jto-client",
    live: "https://just-the-occasion.com/",
    tags: ["pern", "solo"],
  },
  {
    title: "My Portfolio",
    code: "sol",
    pics: [
      "sol-1.png",
      "sol-2.png",
      "sol-3.png",
      "sol-4.png",
      "sol-5.png",
      "sol-6.png",
      "sol-7.png",
    ],
    description:
      "Built with just Html, Scss, & JavaScript. A place to showcase my projects, content, and more.",
    timeline: [
      {
        stage: "Concept",
        desc: `I wanted to showcase my skills with a framework-free portfolio. As a developer, it was time for me to get back to my roots. With routing and components, this app could prove useful in future vanilla projects.`,
      },
      {
        stage: "Research",
        desc: `I set about wireframing the routes. Using my previous <a href="https://zempo.github.io/solomon-codes/" target="_blank" re="noopener noreferrer">portfolio</a>, it did not take long to come up with the aesthetic. I then spent a few days playing with web components and the hash router.`,
      },
      {
        stage: "Client: Functionality",
        desc: `I first built a "router" class to update content and call a route's functions. Next, I made an "arrow nav" class to manage navigation. The final challenge came with managing state in & between the custom components. After 3 long weeks, my components were working.`,
      },
      {
        stage: "Client: Style",
        desc: `During this stage, I learned about SASS mixins, maps, and more. Styling the main app was a fun experience. However, since components encapsulate styles, I had to write regular css inside the templates. Importing the compiled css led to a noticeable lag.`,
      },
      {
        stage: "Server",
        desc: `In this stage, I built a server to generate emails from Html templates and form data. It took a while to get handlebars and nodemailer to work together. I also spent some time setting up the support email for my domain.`,
      },
      {
        stage: "Production",
        desc: `After fixing some UI/UX bugs, my portfolio was ready for deployment. After finding the best providers for my budget, I deployed my client and server.`,
      },
      {
        stage: "Insights",
        desc: `I'm happy with how this project turned out. Now, I can create a Vanilla JS client with routing and web components. Although, I'll might try a small library like Require.js or Svelte.js for future projects like this one.`,
      },
    ],
    tech: [
      "HTML",
      "CSS/SCSS",
      "Vanilla JS",
      "Node.js (Express)",
      "Netlify (Deployment)",
      "Clever Cloud (Deployment)",
    ],
    libs: ["Axios", "Nodemailer", "Handlebars"],
    repo: "https://github.com/zempo/solomon-zelenko",
    live: "https://solomonzelenko.dev",
    tags: ["vanilla", "solo"],
  },
  {
    title: "Aeropolis",
    code: "aero",
    pics: ["aero-1.png", "aero-2.png", "aero-3.png", "aero-4.png"],
    description:
      "Aeropolis has all of the info - all in one place. See the air quality, location, health news, and wikipedia for major cities.",
    timeline: [
      {
        stage: "Concept",
        desc: `With my recent move to California, I had been thinking about Air Quality and how it affected me. You can look up Air Quality, but the values are unclear for most people. There had to be a nice way to present this information!`,
      },
      {
        stage: "Research",
        desc: `First, I wireframed the app on paper and listed the APIs I needed. During this stage, my ability to comprehend documentation was tested (particularly with the Wikipedia API).`,
      },
      {
        stage: "Functionality",
        desc: `I made data output containers and input forms. The plan was to fetch the countries, then the states/provinces, then the cities, and output data about the target city from other APIs. In this stage, I wrote callback functions (turing my spaghetti code into ravioli), regex, and chaining promises.`,
      },
      {
        stage: "Styling",
        desc: `In this project, I wanted a high quality and responsive landing page animation. Using Vectr, I made the cityscape from one of my wireframe sketches. While styling the app, I learned about viewports, jquery tabs, and image centering.`,
      },
      {
        stage: "Feedback",
        desc: `Unfortunately, my MVP was not accessible. After taking Google's accessibility course, I refactored my app. As for the overall UI/UX, my mentor, reviewers, and friends liked Aeropolis.`,
      },
      {
        stage: "Deployment",
        desc: `With Aeropolis styled and functional, I made a favicon and deployed the project to GitHub pages.`,
      },
      {
        stage: "New Insights",
        desc: `In this project, I learned about the importance of user stories and accessibility. I also took my javascript and jQuery knowledge to the next level - with API integrations and callbacks. Finally, I decided to share my <a href="https://codepen.io/zemposPen/pen/bGNQmgX" target="_blank" re="noopener noreferrer">landing animation</a> with others.`,
      },
    ],
    tech: ["HTML / CSS", "jQuery", "GitHub Pages"],
    libs: ["AirVisual", "Leaflet.js", "News API", "Wikipedia API"],
    repo: "https://github.com/zempo/aeropolis",
    live: "https://zempo.github.io/Aeropolis/",
    tags: ["jquery", "solo"],
  },
];

const worksTemplate = document.createElement("template");
worksTemplate.innerHTML = `<style>
@import url("css/global.css"); 
@import url("css/routes.css"); 
h2 {
  font-size: calc(17px + 1vw);
  font-weight: normal;
  margin: 10px;
}
h2::selection, p::selection {
  color: rgb(250, 250, 250);
  background: #000000;
}
p {
  font-size: calc(16px + .5vw);
  margin: 70px auto 0;
}
hr {
  max-width: 1080px;
  margin-bottom: 40px;
}
.projects-list {
 list-style-type: none;
 padding-left: 0;
}
.works-list-item {
  max-width: 650px;
  margin: 0 auto 7vh;
}
.filter-bytes, .filter-works {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  max-width: 500px;
  margin: 0 auto;
 }
.filter-btn {
  box-sizing: border-box;
  display: inline-block;
  color: #fafafa;
  background-color: #787878;
  border: 2px solid #646464;
  border-width: 1px 1px 2px 1px;
  border-radius: 3px;
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: calc(16px + .25vw); 
  line-height: 1.5em;
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);
  margin: 3px;
  opacity: 1;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding: 5px 8px; }
  .filter-btn:active {
    -o-transform: scale(.96);
    -webkit-transform: scale(.96);
    -moz-transform: scale(.96);
    transform: scale(.96);
  }
.selected {
  background-color: #414141;
  border-color: #222222; }
  .works-list-item, h2, p, hr {
    -o-animation: fadeIn .8s;
    -moz-animation: fadeIn .8s;
    -webkit-animation: fadeIn .8s;
    animation: fadeIn .8s;
  }
  .work-preview-1, .work-preview-2, img {
    position: relative;
    width: 100%; }
  .work-preview-1:after {
    content: "X";
    background: #eb6637;
    color: #f7f7f7;
    display: inline-block;
    vertical-align: center;
    text-align: center;
    position: absolute;
    top: 5px;
    right: 6px;
    height: 14px;
    width: 14px;
    font-size: 9.5px;
    text-align: center;
    border: 0px solid rgba(0, 0, 0, 0);
    border-radius: 50%;
  }
  .work-preview-1:before {
    content: "";
    background: rgba(255, 255, 255, 0);
    color: #f7f7f7;
    display: inline-block;
    vertical-align: center;
    position: absolute;
    top: 7px;
    right: 26px;
    height: 9px;
    width: 9px;
    text-align: center;
    z-index: 1;
    border: 1px solid #f7f7f7;
  }
  .work-preview-2:before {
    content: "";
    background: rgba(255, 255, 255, 0);
    color: #f7f7f7;
    display: inline-block;
    vertical-align: center;
    position: absolute;
    top: 7px;
    right: 46px;
    height: 9px;
    width: 9px;
    text-align: center;
    z-index: 1;
    border-bottom: 1px solid #f7f7f7;
  }
  img {
    border: 5px solid #3d3a3a;
    border-top: 24px solid #3d3a3a;
    -webkit-border-top-left-radius: 4px;
    -webkit-border-top-right-radius: 4px;
    -moz-border-radius-topleft: 4px;
    -moz-border-radius-topright: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .ribbon {
    width: 150px;
    height: 150px;
    overflow: hidden;
    position: absolute;
    z-index: 3;
  }
  .ribbon::before,
  .ribbon::after {
    position: absolute;
    z-index: -1;
    content: '';
    display: block;
    border: 5px solid #2980b9;
  }
  .team:before, .team:after {
    border: 5px solid #7033b5;
  }
  .solo:before, .solo:after {
    border: 5px solid #029c40;
  }
  .ribbon span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 10px 0;
    background-color: #3498db;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    color: #fff;
    font: 700 18px/1 'Lato', sans-serif;
    letter-spacing: 2px;
    text-shadow: 0 1px 1px rgba(0,0,0,.2);
    text-transform: uppercase;
    text-align: center;
  }
  .team span{
    background-color: #793bbf;
  }
  .solo span {
    background-color: #00B349;
  } 
  
  /* top left*/
  .ribbon {
    top: -4px;
    left: -4px;
  }
  .ribbon::before,
  .ribbon::after {
    border-top-color: transparent;
    border-left-color: transparent;
  }
  .ribbon::before {
    top: -6px;
    right: 12px;
    z-index: -1;
  }
  .ribbon::after {
    bottom: 12px;
    z-index: -1;
    left: -6px;
  }
  .ribbon span {
    right: -25px;
    top: 30px;
    -o-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .open-item {
    background: rgba(0, 0, 0, 0);
    width: 100%;
    height: calc(100% - 7px);
    border: none;
    border: 1px solid rgba(0, 0, 0, 0);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    -moz-transition: all 0.4s ease-out;
    -o-transition: all 0.4s ease-out;
    -webkit-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
    cursor: pointer;
    position: absolute;
    top: 0px;
    left: 0px;   }
  .open-item:hover,
  .open-item:focus,
  .open-item:active {
    background: rgba(0, 0, 0, 0.3); }
  .open-item span {
    color: rgba(0, 0, 0, 0);
    cursor: pointer;
    font-size: calc(15px + 1vw);
    font-weight: 400 !important; 
  }
.open-item:hover span,
.open-item:active span,
.open-item:focus span {
  background: #3d3a3a;
  padding: 10px;
  border: 1px solid #3d3a3a;
  font-weight: bold;
  border-radius: 7px;
  -moz-transition: all 0.4s ease-out;
  -o-transition: all 0.4s ease-out;
  -webkit-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
  color: #f7f7f7; }
@-webkit-keyframes fadeIn {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }

@-moz-keyframes fadeIn {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }

@-o-keyframes fadeIn {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }

@keyframes fadeIn {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }
@media only screen and (min-width: 850px) {
  h2 {
    font-size: calc(20px + 1vw);
    margin: 15px;
  }
  p {
    font-size: calc(18px + .25vw);
  }
  .filter-btn {
    font-size: calc(17px + .5vw); 
  }
  .open-item span {
    font-size: calc(18px + 1vw); 
  }
  .works-list-item {
    width: 100%;
    max-width: 700px;
    margin: 0 auto 10vh;
  }
  .filter-works {
    max-width: 600px;
  }
  .filter-btn {
    margin: 6px;
  }
}
@media only screen and (min-width: 1000px) { 
  .projects-list {
    display: -ms-grid;
    display: grid;
    width: 100%;
    list-style-type: none;
    padding-left: 0;
    margin: auto;
    -ms-grid-columns: 1fr 20px 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    gap: 20px;
    max-width: 1080px;
   }
   h2 {
     margin: 0 auto 5px; 
   }
   .works-list-item {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
  p {
    font-size: calc(21px + .5vw);
    margin: 100px auto 0;
  }
  hr {
    max-width: 1080px;
    margin-bottom: 50px;
  }
}
@media only screen and (min-width: 1200px) {
  .projects-list {
    grid-gap: 30px;
    gap: 30px;
  }
  .filter-works {
    max-width: 700px;
    margin: auto auto 80px;
  }
  h2 {
    font-size: calc(23px + .5vw);
  }
  p {
    font-size: calc(21px + .5vw);
    margin: 110px auto 0;
  }
  hr {
    max-width: 1080px;
    margin-bottom: 60px;
  }
  .open-item span {
    font-size: calc(20px + .5vw); 
  }
} 
@media only screen and (min-width: 2000px) {
  h2 {
    font-size: 28px;
  }
  p {
    font-size: 25px;
  }
  .open-item span {
    font-size: 25px; 
  }
}    
</style><div class="filter-works">
<button class="filter-btn all selected">Show All</button>
<button class="filter-btn jquery">jQuery</button>
<button class="filter-btn vanilla">Vanilla js</button>
<button class="filter-btn mobile">Mobile</button>
<button class="filter-btn svelte">Svelte.js</button>
<button class="filter-btn pern">PERN Stack</button>
<button class="filter-btn mern">MERN Stack</button>
<button class="filter-btn net">.NET Core</button>
</div>`;

class WorksList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(worksTemplate.content.cloneNode(true));
    this.refs = {
      all: null,
      jquery: null,
      vanilla: null,
      svelte: null,
      pern: null,
      mern: null,
      net: null,
      mobile: null,
    };
    this.state = {
      static: "",
      projects: [],
    };
  }

  updateWorks(updatedWorks, query) {
    let updatedTemplate = "";
    let queryResults =
      !query || query === "all"
        ? `<strong>${portfolioProjects.length}</strong> Portfolio`
        : `<strong>${this.state.projects.length}</strong> ${this.refs[query].innerHTML}`;

    if (updatedWorks.length === 0) {
      updatedTemplate += `<p>No ${this.refs[query].innerHTML} Apps...</p>`;
    } else {
      updatedWorks.forEach((work, i, works) => {
        if (i === 0) {
          updatedTemplate += `<p>Showing ${queryResults} App${
            this.state.projects.length === 1 ? "" : "s"
          }</p><hr><ul class="projects-list"><li class="works-list-item">
          <h2>${work.title}</h2>
          <div class="work-preview-1">
          <div class="work-preview-2">
          <img src="img/works/${
            work.code + "/" + work.code
          }-1.png" alt="Work hero image"/>
          <div class="ribbon ${work.tags[1]}"><span>${work.tags[1]}</span></div>
          <button class="open-item" data-item="${i}"><span>See More</span></button>
          </div>
          </div>
          </li>`;
        } else if (i === works.length - 1) {
          updatedTemplate += `<li class="works-list-item">
          <h2>${work.title}</h2>
          <div class="work-preview-1">
          <div class="work-preview-2">
          <img src="img/works/${
            work.code + "/" + work.code
          }-1.png" alt="Work hero image"/>
          <div class="ribbon ${work.tags[1]}"><span>${work.tags[1]}</span></div>
          <button class="open-item" data-item="${i}"><span>See More</span></button>
          </div>
          </div>
          </li></ul>`;
        } else {
          updatedTemplate += `<li class="works-list-item">
          <h2>${work.title}</h2>
          <div class="work-preview-1">
          <div class="work-preview-2">
          <img src="img/works/${
            work.code + "/" + work.code
          }-1.png" alt="Work hero image"/>
          <div class="ribbon ${work.tags[1]}"><span>${work.tags[1]}</span></div>
          <button class="open-item" data-item="${i}"><span>See More</span></button>
          </div>
          </div>
          </li>`;
        }
      });
    }
    return updatedTemplate;
  }

  filterWorks(e) {
    const query = e.target.classList[1];
    this.refs[query].classList.add("selected");
    for (const [_, ref] of Object.entries(this.refs)) {
      if (ref.classList[1] !== query) {
        ref.classList.remove("selected");
      }
    }
    const runSort = async () => {
      let shadow = this.shadowRoot;
      try {
        const sorted = await this.sortBy(query);
        this.state.projects = sorted;
        window.projects = sorted;
        const newTemplate = await this.updateWorks(sorted, query);
        if (newTemplate) {
          shadow.innerHTML = this.state.static;
          shadow.innerHTML += newTemplate;
          return shadow;
        }
      } catch (err) {
        console.log(err);
      }
    };

    runSort().then((res) => {
      res.querySelector(".all").classList.remove("selected");
      res.querySelector(`.${query}`).classList.add("selected");
      let searchButtons = res.querySelectorAll(".filter-works button");
      let itemButtons = res.querySelectorAll(".open-item");
      searchButtons.forEach((el) => {
        this.refs[el.classList[1]] = el;
        el.setAttribute(
          "title",
          `${el.classList[1] !== "all" ? el.innerHTML : "all"} Apps`
        );
        el.addEventListener("click", (e) => this.filterWorks(e));
      });
      itemButtons.forEach((el) => {
        let itemId = el.getAttribute("data-item");
        el.addEventListener("click", (e) => window.openModal(e, itemId));
      });
    });
  }

  sortBy(query) {
    let toFilter = portfolioProjects;
    if (query !== "all") {
      toFilter = toFilter.filter((work) => work.tags.includes(query));
      return toFilter;
    } else {
      return toFilter;
    }
  }

  connectedCallback() {
    const fetchWorks = async (works) => {
      let shadow = this.shadowRoot;
      shadow.innerHTML = "";
      this.state.static = worksTemplate.innerHTML;
      this.state.projects = works;
      window.projects = this.state.projects;
      try {
        const getWorks = await this.updateWorks(works);

        shadow.innerHTML = this.state.static;
        shadow.innerHTML += getWorks;
        return shadow;
      } catch (err) {
        console.log(err);
      }
    };

    fetchWorks(portfolioProjects).then((res) => {
      let searchButtons = res.querySelectorAll(".filter-works button");
      let itemButtons = res.querySelectorAll(".open-item");
      searchButtons.forEach((el) => {
        this.refs[el.classList[1]] = el;
        el.setAttribute(
          "title",
          `${el.classList[1] !== "all" ? el.innerHTML : "all"} Apps`
        );
        el.addEventListener("click", (e) => this.filterWorks(e));
      });
      itemButtons.forEach((el) => {
        let itemId = el.getAttribute("data-item");
        el.addEventListener("click", (e) => window.openModal(e, itemId));
      });
    });
  }
}

window.customElements.define("works-list", WorksList);
