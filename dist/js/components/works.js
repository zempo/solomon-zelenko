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
    live: "https://just-the-occasion.com/",
  },
  {
    title: "Aeropolis",
    pics: ["air-1.png", "air-2.png"],
    description:
      "provides live air quality values for thousands of cities around the globe. Discover a city's air quality, read local health news, and browse the wikipedia.",
    tech: ["HTML / CSS, ", "jQuery, ", "and github pages"],
    libs: ["AirVisual, ", "Leaflet.js, ", "News API, and ", "Wikipedia API"],
    repo: "https://github.com/zempo/aeropolis",
    live: "https://zempo.github.io/Aeropolis/",
  },
];

// class WorksPage extends HTMLElement {
//   constructor() {
//     super();

//     this.attachShadow({ mode: "open" });
//     this.shadowRoot.appendChild(worksTemplate.content.cloneNode(true));
//   }
// }

// window.customElements.define("works-route", WorksPage);

window.loadWorks = (target) => {
  portfolioProjects.forEach((proj) => {
    const workEl = document.createElement("work-item");
    workEl.proj = proj;
    target.appendChild(workEl);
  });
};
