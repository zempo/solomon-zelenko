const currentBytes = [
  {
    type: "concept",
    title: "Cloudy Landing Page",
    link: "https://codepen.io/zemposPen/pen/bGNQmgX",
    info: ''
  },
  {
    type: "article",
    title: "Expedite your Eurekas",
    link:
      "https://medium.com/@solomonzelenko/expedite-your-eurekas-704d35c7892a",
    info: ''
    },
  {
    type: "concept",
    title: "Just the Occasion Concept",
    link: "https://codepen.io/zemposPen/pen/PowLbBd",
    info: ''
  },
  {
    type: "component",
    title: "Above the Line Concept",
    link: "https://stackblitz.com/edit/above-the-line-concept",
    info: ''
  },
  {
    type: "component",
    title: "React Quotes Loader",
    link: "https://stackblitz.com/edit/quote-loader",
    info: ''
  },
  {
    type: "algo",
    title: "Maze Matrices",
    link: "https://repl.it/@zempo1/Mad-Mazes",
    info: ''
  },
  {
    type: "boilerplate",
    title: "React Boilerplate",
    link: "https://github.com/zempo/react-boilerplate",
    info: ''
  },
  {
    type: "algo",
    title: "Memo-ize Fibonacci",
    link: "https://repl.it/@zempo1/memo",
    info: ''
  },
  {
    type: "boilerplate",
    title: "Node Boilerplate (PERN)",
    link: "https://github.com/zempo/node-boiler-postgres",
    info: ''
  },
  {
    type: "boilerplate",
    title: "Node Boilerplate (MERN)",
    link: "https://github.com/zempo/node-boiler-mongo",
    info: ''
  },
  {
    type: "boilerplate",
    title: "Svelte with Router",
    link: "https://github.com/zempo/svelte-boiler",
    info: ''
  }
];

const bytesTemplate = document.createElement("template");
bytesTemplate.innerHTML = `
<style>
@import url("css/global.css"); 
@import url("css/routes.css"); 
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
  font-weight: 700;
  font-size: .9em;
  line-height: 1.5em;
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
  .byte-info {
    list-style-type: none;
    padding-left: 0; }
</style><div class="filter-bytes">
<button class="filter-btn all selected">Show All</button>
<button class="filter-btn article">Articles</button>
<button class="filter-btn algo">Algorithms</button>
<button class="filter-btn boilerplate">Boilerplates</button>
<button class="filter-btn component">Components</button>
<button class="filter-btn concept">Concepts</button>
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
       concept: null
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
        <b>${byte.title}</b>
        <div class="bytes-preview-1">
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
      searchButtons.forEach(el => {
        this.refs[el.classList[1]] = el
        el.setAttribute('title', `See ${el.classList[1] !== 'all' ? el.innerHTML : 'all'} bytes`)
        el.addEventListener('click', e => this.filterBytes(e))
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
      this.state.bytes = [bytes]
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
      searchButtons.forEach(el => {
        this.refs[el.classList[1]] = el
        el.setAttribute('title', `See ${el.classList[1] !== 'all' ? el.innerHTML + 's' : 'bytes'}`)
        el.addEventListener('click', e => this.filterBytes(e))
      })
    })
  }
}

window.customElements.define("bytes-list", BytesList);
