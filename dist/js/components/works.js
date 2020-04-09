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
@import url("css/routes.css");
</style><form>
<button class="work-btn all">Show All</button>
<button class="work-btn new">New</button>
</form>`

class WorksList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(worksTemplate.content.cloneNode(true));
  this.refs = {
    all: this.shadowRoot.querySelector('.all'),
    new: this.shadowRoot.querySelector('.new')
  }
  this.state = {
    static: '',
    projects: []
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
    e.preventDefault()
    const query = e.target.classList[1]
    console.log('s')
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
      } catch (err) {
        console.log(err)
      }
    }

    fetchWorks(portfolioProjects)

    for (let [_, el] of Object.entries(this.refs)) {
      // el.addEventListener('click',)
    } 
  }
}

window.customElements.define("works-list", WorksList);
