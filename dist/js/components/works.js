const portfolioProjects = [
  { 
    title: "Above the Line",
    code: 'atl',
    pics: ["atl-1.png", "atl-2.png", "atl-3.png", "atl-4.png", "atl-5.png", "atl-6.png"],
    description:
      "Above the Line is your scriptwriting environment. You can create and download preformatted movie scripts.",
    timeline: [
      {stage: 'Concept',
       desc: `Originally, I wanted to build an app that parsed tags into a string - a Mad Libs&trade; generator. However, a slight change came to mind. A friend told to me about the cost of his screenwriting software. Like Mad Libs&trade;, scripts also used specific formatting guidelines. I also knew my friend would enjoy a free screenplay editor.`},
      {stage: 'Research', desc: `First, I sketched the wireframes, wrote user stories, and prototyped some pages in Repl.it. Next, I made a MVP of the <a href="https://stackblitz.com/edit/above-the-line-concept" target="_blank" rel="noopener noreferrer">editor component</a> on Stackblitz. Thankfully, I was able to manage <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">external JSON</a>, editor state, & context in the MVP. Finally, I wrote a function that would organize the 'script tags' and text into an object React PDF could parse and style.`},
      {stage: 'MVP: Client', desc: `I wrote a dummy script and set of theme colors for testing. Then, with <a href="https://github.com/zempo/react-boiler" target="_blank" rel="noopener noreferrer">React Boilerplate</a>, I wrote my main routes, components, and utilities. However, I struggled to integrate React Resizeable and Hotkeys with my state management system. Fortunately, I was able to get client working and deployed the MVP to Zeit for feedback.`},
      {stage: 'MVP: Server', desc: `I kept revising my data sketches until I was ready to write my SQL migrations. Because I would store my theme data in a user table, I asked a friend for some feedback on the theme colors. I ended up having to refactor my client MVP to make all themes accessible. Fortunately, with my <a href="https://github.com/zempo/node-boiler-postgres" target="_blank" rel="noopener noreferrer">Node/PostgreSQL Boilerplate</a>, the backend didn't take long to write and test. I deployed my server and database to Heroku.`},
      {stage: 'Feedback', desc: `During this time, I was enrolled with <a href="https://www.thinkful.com/" target="_blank" re="noopener noreferrer">Thinkful</a> and had access to great feedback. There were a couple of authentication bugs, memory leaks, and style bugs - nothing too problematic. At this point, I had a better understanding of react hooks and was able to debug.`},
      {stage: 'Production', desc: `After applying my feedback, Above the Line was complete. As a tribute to the "editor component", I used Inkscape to create a vectorized impression of it for the landing page.`},
      {stage: 'New Insights', desc: `First and foremost, I learned how to format screenplays. These projects can teach you so much about the world. However, I felt as though my understanding of state management and the DOM was incomplete.`}],
      tech: [ 
      "React.js (Hooks & Context)",
      "JWT Auth",
      "Node.js (Express)",
      "PostgreSQL (With Knex)",
      "Jest (Frontend Tests)",
      "Mocha (Backend Tests)",
      "Zeit & Heroku (Deployment)",
    ],
    libs: ["Axois", "ReactPDF ", "React Resizeable", "React Hotkeys", "JWT + Bcrypt.js"],
    repo: "https://github.com/zempo/jto-client",
    live: "https://above-the-line.now.sh/",
    tags: ['pern']
  },
  {
    title: "Just the Occasion",
    code: 'jto',
    pics: ["jto-1.png", "jto-2.png", , "jto-3.png", "jto-4.png", "jto-5.png", "jto-6.png", "jto-7.png"],
    description:
      "The new social network is here. You can customize, react to, and download greeting cards in seconds.",
    timeline: [{stage: 'Concept', desc: `When you need to get greeting card for someone, it can be a difficult process - as most options are rather limited. The goal was as follows: users should be able to customize, read, update, share, and download greeting cards. I wanted to make a social network and solve a common problem.`},
    {stage: 'Research', desc: 'I wireframed the major routes with user stories. Next, I prototyped the routes on Repl.it. I also built a <a href="https://stackblitz.com/edit/above-the-line-concept" target="_blank" rel="noopener noreferrer">proof of concept</a> for the cards. Next, I looked for ways to moderate card content and store images. To that end, I reached out to a fellow <a href="https://www.claytonweller.com/" target="_blank" rel="noopener noreferrer">Thinkful Alumn</a> about his use of Cloudinary. Finally, I experimented with many libraries in order to download the customized cards (fonts and all).'},
    {stage: 'MVP: Client', desc: `I created a dummy card store and finalized the semantics of the cards. I had recently finished a <a href="https://github.com/zempo/react-boiler" target="_blank" rel="noopener noreferrer">React Boilerplate</a>, so I made use of it. However, I ended up refactoring much of the code to manage authentication and context. As I built the MVP, I learned about modals, the window object, and the basics of hooks and context. Finally, I deployed the client to Netlify`},
    {stage: 'MVP: Server', desc: `Creating the data sketches and writing the unit tests were the most challenging parts of this process. Authentication was also new to me, so I had some difficulty understanding exactly what was taking place. Creating the server took longer than I intended, but I learned quite a bit about javascript during the process. Eventually, I was able to deploy my server and database to Heroku.`},
    {stage: 'Feedback', desc: `From <a href="https://www.thinkful.com/" target="_blank" re="noopener noreferrer">Thinkful</a>, most of my feedback related to my JSX semantics. I asked scores of friends to give me honest feedback about features and the appearance. I ended up learning more about UI/UX while touching up the project's appearance. Using Inkscape, I created the remaining vector assets.`},
    {stage: 'Production', desc: `After working out a few bugs, my project was portfolio-ready. I update the UI once in a while - as I learn new UI principles.`},
    {stage: 'New Insights', desc: `My first fullstack web application was a rite of passage in my coding journey. I emerged with a revised boilerplate, an understanding of ES6, a new approach to project design, and a way to create a card for any occasion.`}],
      tech: [  
      "React.js (Hooks & Context)",
      "JWT Auth",
      "Node.js (Express)",
      "PostgreSQL (Knex)",
      "Jest",
      "Mocha",
      "Netlify & Heroku (Deployment)",
    ],
    libs: [
      "Axois",
      "Cloudinary",
      "AWS Image Moderation",
      "React to Print",
      "JWT + Bcrypt.js" 
    ],
    repo: "https://github.com/zempo/jto-client",
    live: "https://just-the-occasion.com/",
    tags: ['pern']
  },
  {
    title: "My Portfolio",
    code: "sol",
    pics: ["sol-1.png"],
    description: "Built with just HTML, SCSS, & Vanilla JS. A portfolio to showcase my content, projects, and more.",
    timeline: [{state: 'Concept', desc: "sds"}, {state: 'Research', desc: 'This'}],
    tech: ["HTML", "CSS/SCSS", "Vanilla JS", "Node.js", "Netlify (Deployment)"],
    libs: ["Axios", "Nodemailer", "Handlebars"],
    repo: "https://github.com/zempo/solomon-zelenko",
    live: "https://solomonzelenko.dev",
    tags: ["vanilla"]
  }, 
  {
    title: "Aeropolis",
    code: 'aero',
    pics: ["aero-1.png", "aero-2.png", "aero-3.png", "aero-4.png"],
    description:
      "Aeropolis has all of the info - all in one place. See the air quality, location, health news, and wikipedia for major cities.",
    timeline: [{stage: 'Concept', desc: `I set out to build a static site that used multiple APIs and jQuery. With my recent move to California, I had been thinking about Air Quality and how it affected me. You can look up Air Quality values, but they don't make much sense to most people. There had to be a better way to present this information!`},
    {stage: 'Research', desc: `I made a list of the APIs I wanted to include in the project. Next, I wireframed the app on paper and referenced some previous exercises that used the fetch API (which was new to me, at the time). During this stage, my ability to read and comprehend documentation was tested (particularly with the Wikipedia API).`},
    {stage: 'Implementation: Functionality', desc: `I started out with the output containers and input forms. The goal was to first fetch the countries, then the states/provinces, then the cities, and get the city data from the other APIs. During this process, I practiced writing callback functions, turning spaghetti code into ravioli, regex, and chaining promises.`},
    {stage: 'Implementation: Styling', desc: `Above all else, I wanted my landing image to be high quality and responsive. Regular images wouldn't cut it. Using Vectr, I made the cityscape from my sketch. During this stage, I learned about viewport units, jquery tabs, and image centering. I also took my knowledge of responsive CSS and positioning to the next level. Finally, I animated the <a href="https://codepen.io/zemposPen/pen/bGNQmgX" target="_blank" re="noopener noreferrer">landing page</a>.`},
    {stage: 'Feedback', desc: `Unfortunately, my app was not accessible. After taking a free course on accessibility, I ended up refactoring much of my code. As for the UI/UX, my mentor, reviewers, and friends liked Aeropolis.`},
    {stage: 'Deployment', desc: `With Aeropolis styled and functional, I made a favicon and deployed the project to GitHub pages.`},
    {stage: 'New Insights', desc: `In this project, I learned about the importance of user stories (as I nearly got lost in my own work) and accessibility. I also took my javascript and jQuery knowledge to the next level - with API integrations and callbacks.`}],
      tech: ["HTML / CSS", "jQuery", "GitHub Pages"],
    libs: ["AirVisual", "Leaflet.js", "News API", "Wikipedia API"],
    repo: "https://github.com/zempo/aeropolis",
    live: "https://zempo.github.io/Aeropolis/",
    tags: ['jquery']
  }
];
 
const worksTemplate = document.createElement('template')
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
  display: flex;
  justify-content: center;
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
    max-width: 700px;
  }
  .filter-btn {
    margin: 6px;
  }
}
@media only screen and (min-width: 1000px) { 
  .projects-list {
    display: grid;
    width: 100%
    list-style-type: none;
    padding-left: 0;
    margin: auto;
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
    max-width: 750px;
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
<button class="filter-btn vanilla">Vanilla JS</button>
<button class="filter-btn mobile">Mobile</button>
<button class="filter-btn pern">PERN Stack</button>
<button class="filter-btn mern">MERN Stack</button>
<button class="filter-btn net">.NET Core</button>
</div>`

class WorksList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(worksTemplate.content.cloneNode(true));
  this.refs = {
    all: null,
    jquery: null,
    vanilla: null,
    pern: null,
    mern: null,
    net: null,
    mobile: null
  }
  this.state = {
    static: '',
    projects: []
  }
  }

  updateWorks(updatedWorks, query) {
    let updatedTemplate = ''
    let queryResults = (!query || query === 'all') ? `<strong>${portfolioProjects.length}</strong> Portfolio` : `<strong>${this.state.projects.length}</strong> ${this.refs[query].innerHTML}`
    
    if(updatedWorks.length === 0) {
      updatedTemplate += `<p>No ${this.refs[query].innerHTML} Apps...</p>`
    } else {
      updatedWorks.forEach((work, i, works) => {
        if (i === 0) {
          updatedTemplate += `<p>Showing ${queryResults} App${this.state.projects.length === 1 ? '': 's'}</p><hr><ul class="projects-list"><li class="works-list-item">
          <h2>${work.title}</h2>
          <div class="work-preview-1">
          <div class="work-preview-2">
          <img src="img/works/${work.code + '/' + work.code}-1.png" alt="Work hero image"/>
          <button class="open-item" data-item="${i}"><span>See More</span></button>
          </div>
          </div>
          </li>`          
        } else if(i === works.length - 1) {
          updatedTemplate += `<li class="works-list-item">
          <h2>${work.title}</h2>
          <div class="work-preview-1">
          <div class="work-preview-2">
          <img src="img/works/${work.code + '/' + work.code}-1.png" alt="Work hero image"/>
          <button class="open-item" data-item="${i}"><span>See More</span></button>
          </div>
          </div>
          </li></ul>`            
        } else {
          updatedTemplate += `<li class="works-list-item">
          <h2>${work.title}</h2>
          <div class="work-preview-1">
          <div class="work-preview-2">
          <img src="img/works/${work.code + '/' + work.code}-1.png" alt="Work hero image"/>
          <button class="open-item" data-item="${i}"><span>See More</span></button>
          </div>
          </div>
          </li>`
        }
        })
    }
    return updatedTemplate
  }

  filterWorks(e) {
    const query = e.target.classList[1]
    this.refs[query].classList.add('selected')
    for (const [_, ref] of Object.entries(this.refs)) {
      if(ref.classList[1] !== query) {
        ref.classList.remove('selected')
      }
    } 
    const runSort = async () => {
      let shadow = this.shadowRoot
      try {
        const sorted = await this.sortBy(query)
        this.state.projects = sorted
        window.projects = sorted
        const newTemplate = await this.updateWorks(sorted, query)
        if(newTemplate) { 
         shadow.innerHTML = this.state.static
         shadow.innerHTML += newTemplate
         return shadow
        }
      } catch (err) {
        console.log(err)
      }
    }

    runSort().then(res => {
      res.querySelector('.all').classList.remove('selected')
      res.querySelector(`.${query}`).classList.add('selected')
      let searchButtons = res.querySelectorAll('.filter-works button')
      let itemButtons = res.querySelectorAll('.open-item')
      searchButtons.forEach(el => {
        this.refs[el.classList[1]] = el
        el.setAttribute('title', `${el.classList[1] !== 'all' ? el.innerHTML : 'all'} Apps`) 
        el.addEventListener('click', e => this.filterWorks(e))
      }) 
      itemButtons.forEach(el => {
        let itemId = el.getAttribute('data-item')
        el.addEventListener('click', e => window.openModal(e, itemId))
      })
    })
  } 

  sortBy(query) {
    let toFilter = portfolioProjects
    if(query !== 'all') {
      toFilter = toFilter.filter(work => work.tags.includes(query))
      return toFilter
    } else {
      return toFilter
    }
  }

  connectedCallback() {
    const fetchWorks = async (works) => {
      let shadow = this.shadowRoot
      shadow.innerHTML = ''
      this.state.static = worksTemplate.innerHTML
      this.state.projects = works
      window.projects = this.state.projects
      try {
        const getWorks = await this.updateWorks(works)

        shadow.innerHTML = this.state.static
        shadow.innerHTML += getWorks 
        return shadow
      } catch (err) {
        console.log(err)
      }
    } 
    
    fetchWorks(portfolioProjects).then(res => {
     let searchButtons = res.querySelectorAll('.filter-works button')
     let itemButtons = res.querySelectorAll('.open-item')
     searchButtons.forEach(el => {
       this.refs[el.classList[1]] = el
       el.setAttribute('title', `${el.classList[1] !== 'all' ? el.innerHTML : 'all'} Apps`)
       el.addEventListener('click', e => this.filterWorks(e))
     })
     itemButtons.forEach(el => {
       let itemId = el.getAttribute('data-item')
       el.addEventListener('click', e => window.openModal(e, itemId))
     })
    })
  }
}

window.customElements.define("works-list", WorksList);
