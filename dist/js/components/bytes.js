const currentBytes = [
  {
    type: "demo",
    img: 'bytes/pen-1.png',
    title: "Cloudy Landing Page",
    link: "https://codepen.io/zemposPen/pen/bGNQmgX",
    info: `This is the landing animation from my <a href="https://zempo.github.io/Aeropolis/" target="_blank" re="noopener noreferrer">Aeropolis</a> project. This animation is JavaScript-free! I've added borders for sizing and comments to help you repurpose this animation. It works in most major web and mobile browsers.`
  },
  { 
    type: "demo",
    img: 'bytes/pen-2.png',
    title: "Interactive Greeting Cards",
    link: "https://codepen.io/zemposPen/pen/PowLbBd",
    info: `This is a demo of the greeting cards in my project, <a href="https://just-the-occasion.com/" target="_blank" re="noopener noreferrer">Just the Occasion</a>. It makes use of checkboxes and labels and uses no JavaScript. When hovering over the cards, they open slightly and cast a realistic shadow. It works in most major web and mobile browsers.`
  },
  {
    type: "demo",
    img: 'bytes/pen-3.png',
    title: "Above the Line Concept",
    link: "https://stackblitz.com/edit/above-the-line-concept",
    info: `Before making my project, <a href="https://above-the-line.now.sh/" target="_blank" re="noopener noreferrer">Above the Line</a>, I tested a prototype of the editor here. In this Byte, I wanted to see if I could update a textbox with dynamic and outside content through the React lifecycle. I also used this sample as a reference for the actual project layout.`
  },
  {
    type: "article",
    img: 'svgs/article.svg',
    title: "Expedite your Eurekas",
    link:
      "https://medium.com/@solomonzelenko/expedite-your-eurekas-704d35c7892a",
    info: `I believe creativity can be fostered in everyone, so I wanted to share some of things that have made my creative process more efficient. This is the first in a series of articles I plan on releasing this year.`
    },
  {
    type: "component",
    img: 'svgs/component.svg',
    title: "React Quotes Loader",
    link: "https://stackblitz.com/edit/quote-loader",
    info: `In my project,  <a href="https://just-the-occasion.com/" target="_blank" re="noopener noreferrer">Just the Occasion</a>, I used a quotes loader. This byte taught me about react hooks and preventing memory leaks. I'm confident it will prove useful in future projects as a utility component.`
  },
  {
    type: "algo",
    img: 'svgs/algo.svg',
    title: "Maze Matrices",
    link: "https://repl.it/@zempo1/Mad-Mazes",
    info: `I occasionally review this pathfinding algorithm to stay sharp. It is an excellent application of recursion and might prove useful in a future project. It is one of the many coding challenges I revisit.`
  },
  {
    type: "algo",
    img: 'svgs/algo.svg',
    title: "Memo-ize Fibonacci",
    link: "https://repl.it/@zempo1/memo",
    info: `This algorithm expands upon the original Fibonacci recursive solution. I review this solution from time to time when trying to understanding memoization. I think this will be useful if I need to perform taxing calculations in future projects.`
  },
  {
    type: "boilerplate",
    img: 'svgs/ghub.svg',
    title: "React Boilerplate",
    link: "https://github.com/zempo/react-boilerplate",
    info: `This is my quick-start react boilerplate. It comes with fontawesome, react router, context, and my favorite utility components. However, it might need to be updated soon for the new hooks and react router 6.`
  },
  {
    type: "boilerplate",
    img: 'svgs/ghub.svg',
    title: "Node Boilerplate (PERN)",
    link: "https://github.com/zempo/node-boiler-postgres",
    info: `This is my Node boilerplate for a PostgreSQL project. It handles logging, security middleware, and a starter route. It has saved me a lot of time starting projects.`
  },
  {
    type: "boilerplate",
    img: 'svgs/ghub.svg',
    title: "Node Boilerplate (MERN)",
    link: "https://github.com/zempo/node-boiler-mongo",
    info: `This is my other Node boilerplate for a MongoDB project. I made sure to include a sample schema, key middleware, and the relevant packages. I plan on adding to the README for slightly different use cases (pdfs, fileshare, emails, authentication, etc)`
  },
  {
    type: "boilerplate",
    img: 'svgs/ghub.svg',
    title: "Svelte with Router",
    link: "https://github.com/zempo/svelte-boiler",
    info: `This is my personal Svelte boilerplate. I found Svelte.js incredible straightforward to use. And, given the size of most major frameworks, I would like to have a smaller frontend framework in my toolkit. For this boilerplate, I included routing, animations, and state management in the project. I plan on adding utility components over time.`
  } 
];

const bytesTemplate = document.createElement("template");
bytesTemplate.innerHTML = `
<style>
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
    .bytes-list-item {
      -o-animation: fadeIn 1s;
      -moz-animation: fadeIn 1s;
      -webkit-animation: fadeIn 1s;
      animation: fadeIn 1s;
    }
    .byte-preview-1, .byte-preview-2, img {
      position: relative;
      width: 100%; }
    .byte-preview-1:after {
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
    .byte-preview-1:before {
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
    .byte-preview-2:before {
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
    .open-byte {
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
    .open-byte:hover,
    .open-byte:focus,
    .open-byte:active {
      background: rgba(0, 0, 0, 0.3); }
    .open-byte span {
      color: rgba(0, 0, 0, 0);
      cursor: pointer;
      font-size: calc(17px + 1vw); 
      font-weight: 400 !important; 
    }
  .open-byte:hover span,
  .open-byte:active span,
  .open-byte:focus span {
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
  .open-byte span {
    font-size: calc(22px + 1vw); 
  }
}    
</style><div class="filter-bytes">
<button class="filter-btn all selected">Show All</button>
<button class="filter-btn article">Articles</button>
<button class="filter-btn algo">Algorithms</button>
<button class="filter-btn boilerplate">Boilerplates</button>
<button class="filter-btn component">Components</button>
<button class="filter-btn demo">Demos</button>
</div>`;

class BytesList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(bytesTemplate.content.cloneNode(true));
    this.refs = {
      all: null,
      article: null,
      algo: null,
      boilerplate: null,
      component: null,
      demo: null
    }
    this.state = {
      static: '',
      bytes: []
    }
  }

  updateBytes(updatedBytes, query) {
    let updatedTemplate = ''
    if(updatedBytes.length === 0) {
      updatedTemplate += `<h2>No ${this.refs[query].innerHTML} Projects...</h2><h2>Yet...</h2>`
    } else {
      updatedBytes.forEach((byte, i) => {
        updatedTemplate += `<li class="bytes-list-item">
        <h2>${byte.title}</h2>
        <div class="byte-preview-1">
        <div class="byte-preview-2">
        <img src="img/${byte.img}" alt="${byte.type} link"/>
        <button class="open-byte" data-item="${i}"><span>See More</span></button>
        </div>
        </div>
        </li>`
      }) 
    }
    return updatedTemplate
  }
  filterBytes(e) {
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
        const sortedBytes = await this.sortBy(query)
        this.state.bytes = sortedBytes
        window.bytes = sortedBytes
        const newTemplate = await this.updateBytes(sortedBytes, query)
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
      let searchButtons = res.querySelectorAll('.filter-bytes button')
      let itemButtons = res.querySelectorAll('.open-byte')
      searchButtons.forEach(el => {
        this.refs[el.classList[1]] = el
        el.setAttribute('title', `See ${el.classList[1] !== 'all' ? el.innerHTML : 'all'} bytes`)
        el.addEventListener('click', e => this.filterBytes(e))
      }) 
      itemButtons.forEach(el => {
        let itemId = el.getAttribute('data-item')
        el.addEventListener('click', e => window.openByteModal(e, itemId))
      })
    })
  } 

  sortBy(query) {
    let toFilter = currentBytes
    if(query !== 'all') {
      toFilter = toFilter.filter(byte => byte.type === query)
      return toFilter
    } else {
      return toFilter
    }
  }

  connectedCallback() {
    const fetchBytes = async (bytes) => {
      let shadow = this.shadowRoot
      shadow.innerHTML = ''
      this.state.static = bytesTemplate.innerHTML
      this.state.bytes = bytes
      window.bytes = this.state.bytes
      try {
        const getBytes = await this.updateBytes(bytes)

        shadow.innerHTML = this.state.static
        shadow.innerHTML += getBytes 
        return shadow
      } catch (err) {
        console.log(err)
      }
    }

    fetchBytes(currentBytes).then(res => {
      let searchButtons = res.querySelectorAll('.filter-bytes button')
      let byteButtons = res.querySelectorAll('.open-byte')
      searchButtons.forEach(el => {
        this.refs[el.classList[1]] = el
        el.setAttribute('title', `See ${el.classList[1] !== 'all' ? el.innerHTML + 's' : 'bytes'}`)
        el.addEventListener('click', e => this.filterBytes(e))
      })
      byteButtons.forEach(el => {
        let itemId = el.getAttribute('data-item')
        el.addEventListener('click', e => window.openByteModal(e, itemId))
      }) 
    })
  }
}
window.customElements.define("bytes-list", BytesList);
