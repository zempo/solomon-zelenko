const portfolioProjects = [
  { 
    title: "Above the Line",
    pics: ["atl-1.png", "atl-2.png"],
    description:
      "helps users create and download their own scripts/screenplays -- and handles the formatting. You can even customize your homepage and organize your scripts.",
    tech: [
      "React.js (Hooks & Context)",
      "JWT auth",
      "Node.js (Express)",
      "PostgreSQL (Knex)",
      "Jest (Frontend Tests)",
      "Mocha (Backend Tests)",
      "Zeit (Deployment)",
    ],
    libs: ["Axois", "ReactPDF ", "React Resizeable", "JWT"],
    repo: "https://github.com/zempo/jto-client",
    live: "https://above-the-line.now.sh/",
    tags: ['fullstack', 'PERN']
  },
  {
    title: "Just the Occasion",
    pics: ["jto-1.png", "jto-2.png"],
    description:
      " transforms greeting cards into a personal and social experience. You can create, react to, and customize greeting cards within minutes.",
    tech: [
      "React.js (Hooks & Context)",
      "JWT auth",
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
      "JWT",
    ],
    repo: "https://github.com/zempo/jto-client",
    live: "https://just-the-occasion.com/"
  },
  {
    title: "Aeropolis",
    pics: ["air-1.png", "air-2.png"],
    description:
      "provides live air quality values for thousands of cities around the globe. Discover a city's air quality, read local health news, and browse the wikipedia.",
    tech: ["HTML / CSS, ", "jQuery, ", "and github pages"],
    libs: ["AirVisual, ", "Leaflet.js, ", "News API, and ", "Wikipedia API"],
    repo: "https://github.com/zempo/aeropolis",
    live: "https://zempo.github.io/Aeropolis/"
  },
];

const worksTemplate = document.createElement('template')
worksTemplate.innerHTML = `<style>
@import url("css/global.css"); 
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
  text-transform: uppercase;
  font-family: MontSerrat,Tahoma,Arial,sans-serif;
  font-weight: 700;
  font-size: .75em;
  line-height: 1em;
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);
  margin: 3px;
  opacity: 1;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding: 6px 5px; }
 .selected {
  background-color: #414141;
  border-color: #222222; }
 .work-info {
  list-style-type: none;
  padding-left: 0; }
</style><form>
<button class="filter-btn all">Show All</button>
<button class="filter-btn front">Front-End</button>
<button class="filter-btn pern">PERN Stack</button>
<button class="filter-btn mern">MERN Stack</button>
<button class="filter-btn net">.NET Stack</button>
</form>`

class WorksList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(worksTemplate.content.cloneNode(true));
  this.refs = {
    all: null,
    front: null,
    pern: null,
    mern: null,
    net: null
  }
  this.state = {
    static: '',
    projects: [],
    selected: 'all'
  }
  }

  updateWorks(updatedWorks) {
    let updatedTemplate = ''
    updatedWorks.forEach((work, i) => {
      updatedTemplate += `<li class="works-list-item">
      <div class="work-preview-1">
      </div>
      <ul id="w-info-${i+1}" class="work-info">
      <li>
      ${work.title}
      </li>
      <li>Repo: <a href="${work.repo}">here</a></li>
      <li>Live: <a href="${work.live}">here</a></li>
      </ul>
      </li>`
    })
    return updatedTemplate
  }

  sortBy(e) {
    const query = e.target.classList[1]
    this.refs[query].classList.add('selected')
    for (const [_, ref] of Object.entries(this.refs)) {
      if(ref.classList[1] !== query) {
        ref.classList.remove('selected')
      }
    }
    switch (query) {
      case 'all':
        console.log('all')
        return;
      case 'new':
      default:
        return;
    }
  }

  connectedCallback() {
    const fetchWorks = async (works) => {
      let shadow = this.shadowRoot
      shadow.innerHTML = ''
      this.state.static = worksTemplate.innerHTML
      this.state.projects = [...this.state.projects, works]
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
     let searchButtons = res.querySelectorAll('form button')
     searchButtons.forEach(el => {
       this.refs[el.classList[1]] = el
       el.addEventListener('click', e => this.sortBy(e))
     })
    })
  }
}

window.customElements.define("works-list", WorksList);
