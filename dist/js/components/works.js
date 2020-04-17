const portfolioProjects = [
  { 
    title: "Above the Line",
    code: 'atl',
    pics: ["atl-1.png", "atl-2.png", "atl-3.png", "atl-4.png", "atl-5.png", "atl-6.png"],
    description:
      "helps users create and download their own scripts and screenplays - and handles the formatting. You can even customize your homepage and organize your scripts. Discover your personalized scriptwriting environment.",
    timeline: [
      {stage: 'Concept',
       desc: `At first, I had decided to build an app that inserted tags into a string and parsed the result - a Mad Libs&trade; generator. However, I made a slight change to the concept while wireframing. A friend had told to me about the cost of his screenwriting software. Like Mad Libs&trade;, scripts used very specific guidelines for formatting. And I figured my friend would enjoy a free version of his editor.`},
      {stage: 'Research', desc: `I began by sketching the wireframes and user stories - before prototyping the main pages in Repl.it. Next, I made a MVP of the <a href="https://stackblitz.com/edit/above-the-line-concept" target="_blank" rel="noopener noreferrer">editor component</a> on Stackblitz. Thankfully, I was able to manage json data from <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">JSON placeholder</a>, state, & context in the demo component. I also looked into React Hotkeys, Resizeable, and PDF. Finally, I wrote a function that would organize the 'script tags' and text for React PDF.`},
      {stage: 'MVP: Client', desc: `I wrote a dummy script and set of theme colors for testing. Then, using my <a href="https://github.com/zempo/react-boiler" target="_blank" rel="noopener noreferrer">React Boilerplate</a>, I quickly finished the editor and scripts page. However, I really struggled to integrate React Resizeable and Hotkeys with the dynamic script and theme data. Fortunately, I was able to get client working and deployed the MVP to Zeit for feedback.`},
      {stage: 'MVP: Server', desc: `I kept revising my data sketches until I was ready to write my SQL migrations. Because I would store my theme data in a user table, I asked a designer friend for some feedback on the theme colors. I ended up having to refactor my client MVP to make all themes easy on the eyes. Fortunately, with my <a href="https://github.com/zempo/node-boiler-postgres" target="_blank" rel="noopener noreferrer">Node/PostgreSQL Boilerplate</a>, it wasn't too difficult to make the backend and write the unit tests. I deployed my server and database to Heroku.`},
      {stage: 'Feedback', desc: `During this time, I was enrolled with <a href="https://www.thinkful.com/" target="_blank" re="noopener noreferrer">Thinkful</a> and had access to really good feedback. There were a couple of authentication, memory leaks, and style bugs - nothing too problematic. At this point, I had a better understanding of react hooks and was able to debug.`},
      {stage: 'Production', desc: `As with my other works, Above the Line was essentially complete. As a tribute to the "editor component", I used Inkscape to create a vectorized representation of it for the landing page. Apart from anticipated maintenance, Above the Line was ready for the world.`},
      {stage: 'New Insights', desc: `First and foremost, I learned how to format screenplays. These projects can teach you so much about the world. However, I know my grasp of React hooks and context still isn't complete. At the time of this writing, I have also become curious about a framework-free workflow and SCSS.`}],
      tech: [ 
      "React.js (Hooks & Context)",
      "JWT Auth",
      "Node.js (Express)",
      "PostgreSQL (With Knex)",
      "Jest (Frontend Tests)",
      "Mocha (Backend Tests)",
      "Zeit (Deployment)",
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
      " transforms greeting cards into a personal and social experience. You can create, copy, download, react to, and customize greeting cards within minutes. Get the right card, right now.",
    timeline: [{stage: 'Concept', desc: `Everytime I wanted to get a greeting card for someone, I ended up having to make my own. Most options are rather limited - and I had a hunch that this was the case for many people. The goal was as follows: users should be able to create, read, update, share, and download greeting cards. I also wanted to make a new kind of social network (to take my PostgreSQL skills to the next level).`},
    {stage: 'Research', desc: 'I began by wireframing the major routes with user stories. Next, I prototyped the routes on Repl.it. I decided to post the results of this research to <a href="https://stackblitz.com/edit/above-the-line-concept" target="_blank" rel="noopener noreferrer">this codepen</a>. Next, I needed to find a way to moderate card content and download the cards. I consulted with a fellow <a href="https://www.claytonweller.com/" target="_blank" rel="noopener noreferrer">Thinkful Alumn</a> about his use of Cloudinary in a previous project. I also found a number of libraries for downloading the card components as pdfs.'},
    {stage: 'MVP: Client', desc: `I created a basic card store and used this time to finalize the structure of each card. I had recently finished a <a href="https://github.com/zempo/react-boiler" target="_blank" rel="noopener noreferrer">React Boilerplate</a>, so I used it. However, I ended up refactoring much of the code to manage authentication and the Cloudinary moderation. During this stage, I learned about modals, the window object, and the basics of hooks and context. I then deployed what I had to Netlify.`},
    {stage: 'MVP: Server', desc: `Creating the data sketches and writing the unit tests were the most challenging parts of this process. Authentication was also new to me, so I had some difficulty understanding exactly what was taking place. Creating the server took longer than I intended, but I learned quite a bit about javascript during the process. Eventually, I was able to deploy my server and database to Heroku.`},
    {stage: 'Feedback', desc: `From <a href="https://www.thinkful.com/" target="_blank" re="noopener noreferrer">Thinkful</a>, most of my feedback related to my JSX semantics. I asked scores of friends to give me honest feedback about features and the appearance. I ended up learning more about UI/UX while touching up the project's appearance. Using Inkscape, I created the remaining vector assets.`},
    {stage: 'Production', desc: `After working out a few bugs, my project was ready for the portfolio. Occasionally, a bug or new feature might pop up. However, just-the-occasion.com always does exactly what I need it to - from front to back.`},
    {stage: 'New Insights', desc: `So much went into this project. My first fullstack web application was a rite of passage in my coding journey. I emerged with a revised boilerplate, an understanding of ES6, a new approach to project design, and a way to create a card for any occasion.`}],
      tech: [  
      "React.js (Hooks & Context)",
      "JWT Auth",
      "Node.js (Express)",
      "PostgreSQL (Knex)",
      "Jest",
      "Mocha",
      "Netlify (Deployment)",
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
    title: "Aeropolis",
    code: 'aero',
    pics: ["aero-1.png", "aero-2.png", "aero-3.png", "aero-4.png"],
    description:
      "provides live air quality values for thousands of cities around the globe. Discover a city's air quality, read local health news, and browse the wikipedia.",
    timeline: [{stage: 'Concept', desc: `I set out to build a static site that used multiple APIs and jQuery. With my recent move to California from Denver, I had been thinking about Air Quality and how it had begun to affect me. You can look up Air Quality values, but they don't make much sense to the average Jen or Joe. There had to be a better way to present information about the relative "health" of a city.`},
    {stage: 'Research', desc: `I made a list of the APIs I wanted to include in the project. Next, I wireframed the app on paper and referenced some previous exercises that used the fetch API (which I had only recently learned). Overall, this app really tested my ability to read and comprehend documentation (especially from the Wikipedia API).`},
    {stage: 'Implementation: Functionality', desc: `I started out with the output divs and input forms. The goal was to fetch the countries, then the states/provinces, then the cities, and then fetch the city data from the other APIs. During this process, I practiced writing callback functions, turning spaghetti into ravioli code, regex, and chaining promises. Within a few days, the functionality was present.`},
    {stage: 'Implementation: Styling', desc: `Above all else, I wanted my landing image to be high quality and responsive. Regular images wouldn't cut it. Using Vectr, I made the cityscape from my sketch. During this stage, I learned about viewport units, jquery tabs, and image centering. I also took my knowledge of CSS grid and positioning to the next level. Animating the Aeropolis cityscape, however, posed a challenge. I made a <a href="https://codepen.io/zemposPen/pen/bGNQmgX" target="_blank" re="noopener noreferrer">codepen</a> of the animation.`},
    {stage: 'Feedback', desc: `I learned that my app was not up to ARIA standards. After completing a free course on accessibility, I ended up refactoring much of my code. As far as the overall style, Aeropolis was considered a good-looking app by my mentor, reviewers, and friends.`},
    {stage: 'Deployment', desc: `With my app styled and functional, I made a favicon and deployed the project to GitHub pages.`},
    {stage: 'New Insights', desc: `In this project, I learned about the importance of user stories (as I ended up getting lost in my own work). I also took my javascript and jQuery knowledge to the next level with the API integrations and callbacks. Finally, my sense of accessible style grew leaps and bounds. I was excited to take on new projects.`}],
      tech: ["HTML / CSS", "jQuery", "GitHub Pages"],
    libs: ["AirVisual", "Leaflet.js", "News API", "Wikipedia API"],
    repo: "https://github.com/zempo/aeropolis",
    live: "https://zempo.github.io/Aeropolis/",
    tags: ['frontend']
  },  
];
 
const worksTemplate = document.createElement('template')
worksTemplate.innerHTML = `<style>
@import url("css/global.css"); 
@import url("css/routes.css"); 
h2 {
  font-size: calc(17px + 1vw);
  font-weight: normal;
}
.filter-bytes, .filter-works {
  margin-bottom: 50px; }
.filter-btn {
  -webkit-tap-highlight-color: rgba(201, 224, 253, 0);
  visibility: visible;
  user-select: none;
  list-style: none;
  box-sizing: border-box;
  display: inline-block;
  color: #fafafa;
  background-color: #787878;
  border: 1px solid #646464;
  border-width: 1px 1px 2px 1px;
  border-radius: 3px;
  font-family: MontSerrat,Tahoma,Arial,sans-serif;
  font-weight: 400;
  font-size: calc(16px + .25vw); 
  line-height: 1.5em;
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);
  margin: 3px;
  opacity: 1;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding: 5px 10px; }
.selected {
  background-color: #414141;
  border-color: #222222; }
  .works-list-item {
    -o-animation: fadeIn 1s;
    -moz-animation: fadeIn 1s;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
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
    font-size: calc(17px + 1vw);
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
    font-size: calc(22px + 1vw);
  }
  .filter-btn {
    font-size: calc(17px + .5vw); 
  }
  .open-item span {
    font-size: calc(22px + 1vw); 
  }
}    
</style><div class="filter-works">
<button class="filter-btn all selected">Show All</button>
<button class="filter-btn frontend">Front-End</button>
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
    frontend: null,
    pern: null,
    mern: null,
    net: null
  }
  this.state = {
    static: '',
    projects: []
  }
  }

  updateWorks(updatedWorks, query) {
    let updatedTemplate = ''
    if(updatedWorks.length === 0) {
      updatedTemplate += `<h2>No ${this.refs[query].innerHTML} Projects...</h2><h2>Yet...</h2>`
    } else {
      updatedWorks.forEach((work, i) => {
        updatedTemplate += `<li class="works-list-item">
        <h2>${work.title}</h2>
        <div class="work-preview-1">
        <div class="work-preview-2">
        <img src="img/works/${work.code + '/' + work.code}-1.png" alt="Work hero image"/>
        <button class="open-item" data-item="${i}"><span>See More</span></button>
        </div>
        </div>
        </li>`
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
        el.setAttribute('title', `See ${el.classList[1] !== 'all' ? el.innerHTML : 'all'} works`)
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
       el.setAttribute('title', `See ${el.classList[1] !== 'all' ? el.innerHTML : 'all'} works`)
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
