workModalTemplate = document.createElement("template");
workModalTemplate.innerHTML = `
<style>
#modal {
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  border: 10px solid #3d3a3a;
  border-top: 44px solid #3d3a3a;
  background-color: #fefefe;
  width: calc(100% - 20px);
  height: 100%;
}
.close-modal {
  background: #eb6637;
  color: #f7f7f7;
  display: inline-block;
  vertical-align: center;
  position: absolute;
  top: -37px;
  right: -5px;
  height: 30px;
  width: 30px;
  font-size: 25px;
  text-align: center;
  border: 0px solid rgba(0, 0, 0, 0);
  border-radius: 50%;
}
.btn-fwd, .btn-back {
  position: fixed;
  border: none;
  font-size: 0;
  padding: 0;
  top: calc(50vh - 44px);
  width: 60px;
  height: 60px;
  z-index: 1;
  outline: none;
  background: none;
 }
  .btn-fwd svg, .btn-back svg {
    width: 60px;
    height: 60px; }
    .btn-back {
      left: 20px; }
      .btn-fwd {
        right: 20px; }
.opened {
  -webkit-animation: modalIn 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: modalIn 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes modalIn {
  0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
}
@keyframes modalIn {
  0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
}
</style>
`;

// make email form tab components and manage state
class WorkModal extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(workModalTemplate.content.cloneNode(true));
    this.state = {
      static: '',
      currentProject: {}
    }
  }

  updateWorkModal(currentItem) {
    let updatedTemplate = `
    <div class="work-modal" id="modal">
    <div class="modal-content opened">
    <button class="close-modal">X</button>
    <h1>${currentItem.title}</h1>
    <button class="btn-back" title="last work">
    previous work<svg viewBox="-15 -15 130 130">
      <path
        d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
        class="arrow"
        transform="translate(15,0)"
      ></path>
    </svg>
  </button>
    <button class="btn-fwd" title="next work">next work<svg viewBox="-15 -15 130 130">
    <path
      d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
      class="arrow"
      transform="translate(85,100) rotate(180)"
    ></path>
  </svg></button>
    </div>
    </div> 
    `
    return updatedTemplate
  }

  displayWorkModal() {
    const fetchWork = async (work) => {
      window.workShadow.innerHTML = ''
      try {
        const getWork = await window.updateWorkModal(work)

        window.workShadow.innerHTML = window.static
        window.workShadow.innerHTML += getWork 
        return workShadow
      } catch (err) {
        console.log(err)
      }
    } 
    
    fetchWork(window.currentWork).then(res => {
      let closeBtn = res.querySelector('.close-modal')
      closeBtn.addEventListener('click', e => {
        document.getElementsByTagName('work-modal')[0].style.display = 'none'
      })
    })
  }
  
  connectedCallback() {
    window.displayWorkModal = this.displayWorkModal
    window.updateWorkModal = this.updateWorkModal
    window.workShadow = this.shadowRoot
    window.static = workModalTemplate.innerHTML
    window.openModal = function(e, id) {
      document.getElementsByTagName('work-modal')[0].style.display = 'block'
      window.currentWork = window.projects[id]
      window.displayWorkModal()
    } 
  }
}

window.customElements.define("work-modal", WorkModal);