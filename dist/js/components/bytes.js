const currentBytes = [
  {
    type: "demo",
    img: 'bytes/pen-1.png',
    title: "Cloudy Landing",
    link: "https://codepen.io/zemposPen/pen/bGNQmgX",
    info: `This is the landing animation from my <a href="https://zempo.github.io/Aeropolis/" target="_blank" re="noopener noreferrer">Aeropolis</a> project. This animation is JavaScript-free! I've added borders for sizing and comments for reverse-engineering. It works in most major web and mobile browsers.`
  }, 
  { 
    type: "demo",
    img: 'bytes/pen-2.png',
    title: "Great Greeting Cards",
    link: "https://codepen.io/zemposPen/pen/PowLbBd",
    info: `This is a demo of the greeting cards in my project, <a href="https://just-the-occasion.com/" target="_blank" re="noopener noreferrer">Just the Occasion</a>. It makes use of checkboxes and labels and uses no JavaScript. When hovering over the cards, they open slightly and cast a realistic shadow. It works in most major web and mobile browsers.`
  },
  {
    type: "demo",
    img: 'bytes/pen-3.png',
    title: "ATL Concept",
    link: "https://stackblitz.com/edit/above-the-line-concept",
    info: `Before making my project, <a href="https://above-the-line.now.sh/" target="_blank" re="noopener noreferrer">Above the Line</a>, I tested a prototype of the editor. In this Byte, I needed a textbox to work with the React Lifecycle.`
  },
  {
    type: "article",
    img: 'svgs/article.svg',
    title: "Expedite Eurekas",
    link:
      "https://medium.com/@zelenkosolomon/expedite-your-eurekas-850a2073f5de",
    info: `I believe we can all foster creativity. Here, I've written my approach to coming up with great ideas.`
    },
  {
    type: "component",
    img: 'svgs/component.svg',
    title: "React Quotes Loader",
    link: "https://stackblitz.com/edit/quote-loader",
    info: `In my project,  <a href="https://just-the-occasion.com/" target="_blank" re="noopener noreferrer">Just the Occasion</a>, I used a quotes loader. This byte would make a great utility component.`
  },
  {
    type: "algo",
    img: 'svgs/algo.svg',
    title: "Maze Matrices",
    link: "https://repl.it/@zempo1/Mad-Mazes",
    info: `I review this pathfinding algorithm to stay sharp. It might prove useful in a future project.`
  },
  {
    type: "algo",
    img: 'svgs/algo.svg',
    title: "Memo-ize Fibonacci",
    link: "https://repl.it/@zempo1/memo",
    info: `This algo expands upon the original Fibonacci recursive solution. I review this solution to understand memoization.`
  },
  {
    type: "boilerplate",
    img: 'svgs/ghub.svg',
    title: "React Boiler",
    link: "https://github.com/zempo/react-boilerplate",
    info: `This is my React.js boilerplate. It comes with fontawesome, react router, context, and my favorite utility components. It might require an update, soon.`
  },
  {
    type: "boilerplate",
    img: 'svgs/ghub.svg',
    title: "Node Boiler (PERN)",
    link: "https://github.com/zempo/node-boiler-postgres",
    info: `This is my Node boilerplate for a PostgreSQL project. It handles logging, security, and a starter route.`
  }, 
  {
    type: "boilerplate",
    img: 'svgs/ghub.svg',
    title: "Node Boiler (MERN)",
    link: "https://github.com/zempo/node-boiler-mongo",
    info: `This is my other Node boilerplate for a MongoDB project. I included a sample schema and middleware.`
  },
  {
    type: "boilerplate",
    img: 'svgs/ghub.svg',
    title: "Svelte Boiler",
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
  margin: 10px;
}
.byte-items {
  list-style-type: none;
  padding-left: 0;
 }
.bytes-list-item {
  max-width: 650px;
  margin: 0 auto 7vh;
}
.filter-bytes, .filter-works {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 500px;
  margin: 0 auto 50px;
 }
.filter-btn {
  box-sizing: border-box;
  display: inline-block;
  color: #fafafa;
  background-color: #787878;
  border: 2px solid #646464;
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
      -moz-transition: all 0.4s ease-out;
      -o-transition: all 0.4s ease-out;
      -webkit-transition: all 0.4s ease-out;
      transition: all 0.4s ease-out;
      cursor: pointer;
      position: absolute;
      top: 0px;
      left: 0px;   }
    .open-byte:hover,
    .open-byte:focus,
    .open-byte:active {
      background: rgba(0, 0, 0, 0.3);
     }
    .open-byte span {
      color: rgba(0, 0, 0, 0);
      cursor: pointer;
      font-size: calc(15px + 1vw);
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
  }
  .filter-btn {
    font-size: calc(17px + .5vw); 
  }
  .open-byte span {
    font-size: calc(18px + 1vw); 
  }
  .bytes-list-item {
    width: 100%;
    max-width: 700px;
    margin: 0 auto 10vh;
  }
  .filter-bytes {
    max-width: 700px;
  }
  .filter-btn {
    margin: 6px;
  }
}  
@media only screen and (min-width: 1000px) {
  .byte-items {
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
  .bytes-list-item {
   width: 100%;
   margin: 0;
 }
}
@media only screen and (min-width: 1200px) {
  .byte-items {
    grid-gap: 30px;
    gap: 30px;
  }  
h2 {
font-size: calc(23px + .5vw);
}
.filter-bytes {
  max-width: 750px;
  margin: auto auto 80px;
}
.open-byte span {
font-size: calc(20px + .5vw); 
}
.bytes-list-item {
  max-width: 800px;
  margin: 0 auto 7vh;
}
} 
@media only screen and (min-width: 2000px) {
h2 {
  font-size: 28px;
}
.open-byte span {
  font-size: 25px; 
}
}    
</style><div class="filter-bytes">
<button class="filter-btn all selected">Show All</button>
<button class="filter-btn article">Articles</button>
<button class="filter-btn demo">Snippets</button>
<button class="filter-btn npm">NPMs</button>
<button class="filter-btn algo">Algorithms</button>
<button class="filter-btn component">Components</button>
<button class="filter-btn boilerplate">Boilerplates</button>
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
      npm: null,
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
      updatedTemplate += `<h2>No ${this.refs[query].innerHTML}-Type Bytes...</h2><h2>Yet...</h2>`
    } else {
      updatedBytes.forEach((byte, i, allBytes) => {
        if(i === 0) {
          updatedTemplate += `<ul class="byte-items"><li class="bytes-list-item">
          <h2>${byte.title}</h2>
          <div class="byte-preview-1">
          <div class="byte-preview-2">
          <img src="img/${byte.img}" alt="${byte.type} link"/>
          <button class="open-byte" data-item="${i}"><span>See More</span></button>
          </div>
          </div>
          </li>`          
        } else if (i === allBytes.length - 1) {
          updatedTemplate += `<li class="bytes-list-item">
          <h2>${byte.title}</h2>
          <div class="byte-preview-1">
          <div class="byte-preview-2">
          <img src="img/${byte.img}" alt="${byte.type} link"/>
          <button class="open-byte" data-item="${i}"><span>See More</span></button>
          </div>
          </div>
          </li></ul>`  
        } else {
          updatedTemplate += `<li class="bytes-list-item">
          <h2>${byte.title}</h2>
          <div class="byte-preview-1">
          <div class="byte-preview-2">
          <img src="img/${byte.img}" alt="${byte.type} link"/>
          <button class="open-byte" data-item="${i}"><span>See More</span></button>
          </div>
          </div>
          </li>`
        }
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
