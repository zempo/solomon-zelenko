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
  height: calc(100% - 138px);
  -webkit-animation: modalIn 0s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: modalIn 0s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.modal-pg {
  overflow-y:scroll;
  position: absolute;
  height: 100%;
  width: 100%;
}
.modal-content:after {
  content: "";
  background: rgba(255, 255, 255, 0);
  color: #f7f7f7;
  display: inline-block;
  vertical-align: center;
  position: absolute;
  top: -36px;
  right: 40px;
  height: 19px;
  width: 19px;
  text-align: center;
  z-index: 3;
  border: 2px solid #f7f7f7;
}
.modal-content:before {
  content: "";
  background: none;
  color: #f7f7f7;
  display: inline-block;
  vertical-align: center;
  position: absolute;
  top: -36px;
  right: 40px;
  height: 25px;
  width: 25px;
  text-align: center;
  z-index: 3;
  border: 2px solid #f7f7f7;
  border-top:none;
  border-right: none;
}
.close-modal {
  background: #eb6637;
  color: #f7f7f7;
  display: inline-block;
  vertical-align: center;
  position: absolute;
  font-weight:bold;
  top: -37px;
  right: 0px;
  height: 30px;
  width: 30px;
  font-size: 25px;
  text-align: center;
  border: 0px solid rgba(0, 0, 0, 0);
  border-radius: 50%;
  overflow: visible;
}
.resize-modal {
  position: absolute;
  background: none;
  z-index: 4;
  border: none; 
  font-size: 0;
  top: -37px;
  right: 40px;
  height: 28px;
  width: 28px;
}
.hide-modal {
  background: none;
  color: #f7f7f7;
  position: absolute;
  font-size: 0;
  top: -34px;
  right: 80px;
  height: 25px;
  width: 25px;
  text-align: center;
  z-index: 3;
  border: 2px solid #f7f7f7;
  border-top:none;
  border-right: none;
  border-left:none;
}
.btn-fwd, .btn-back {
  position: fixed;
  border: none;
  font-size: 0;
  padding: 0;
  top: 50%;
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
.r {
  -webkit-animation: fromRight 0.35s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fromRight 0.35s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.l {
  -webkit-animation: fromLeft 0.35s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fromLeft 0.35s cubic-bezier(0.39, 0.575, 0.565, 1) both;
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
  @-webkit-keyframes fromRight {
    0% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px);
      opacity: 0.1;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes fromRight {
    0% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px);
      opacity: 0.1;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
    
  @-webkit-keyframes fromLeft {
    0% {
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
      opacity: 0.1;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes fromLeft {
    0% {
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
      opacity: 0.1;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
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

  updateWorkModal(currentItem, direction) {
    let pgClass = direction
    let updatedTemplate = `
    <div class="work-modal" id="modal">
    <div class="modal-content opened">
    <button class="close-modal">X</button>
    <button class="resize-modal small">Resize</button>
    <button class="hide-modal">Hide</button>
    <div class="modal-pg ${pgClass}">
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
    </div> 
    `
    return updatedTemplate
  }

  displayWorkModal(opened, direction) {
    const fetchWork = async (work) => {
      window.workShadow.innerHTML = ''
      try {
        const getWork = await window.updateWorkModal(work, direction)

        window.workShadow.innerHTML = window.static
        window.workShadow.innerHTML += getWork 
        return workShadow
      } catch (err) {
        console.log(err)
      }
    } 
    
    fetchWork(window.currentWork).then(res => {
      let modal = res.querySelector('#modal')
      let modalContent = res.querySelector('.modal-content')
          if(opened) {
           modalContent.classList.remove('opened') 
          }
      let pg = res.querySelector('.work-pg')
      let toggleSize = res.querySelector('.resize-modal')
      let closeBtn = res.querySelector('.close-modal')
      let hideBtn = res.querySelector('.hide-modal')
      let currentWorkId = window.projects.map(el => el.title).indexOf(window.currentWork.title)
      let fwd = res.querySelector('.btn-fwd')
      let back = res.querySelector('.btn-back')
      toggleSize.addEventListener('click', e => {
        if(toggleSize.classList[1] === 'small') {
          toggleSize.classList.remove('small')
          toggleSize.classList.add('big')
          toggleSize.style.background = '#3d3a3a'
          toggleSize.style.border = '2px solid #f7f7f7'
          modalContent.style.height = '60vh'
          modalContent.style.width = 'calc(80% - 10vw)'
          modalContent.style.margin = 'calc(20vh - 79px) calc(10% + 5vw)'
        } else {
          toggleSize.classList.remove('big')
          toggleSize.classList.add('small')
          toggleSize.style.background = 'none'
          toggleSize.style.border = 'none'
          modalContent.style.height = 'calc(100vh - 138px)'
          modalContent.style.width = 'calc(100% - 20px)'
          modalContent.style.margin = '0'          
        }
      })
      hideBtn.addEventListener('click', e => document.getElementsByTagName('work-modal')[0].style.display = 'none')
      closeBtn.addEventListener('click', e => document.getElementsByTagName('work-modal')[0].style.display = 'none')
      modal.addEventListener('click', e => {
        if(e.target == modal) {
        document.getElementsByTagName('work-modal')[0].style.display = 'none'
        }
      })
      fwd.addEventListener('click', e => {
        if(window.projects.length === currentWorkId + 1) {
          window.updateWorkItem(e, 0, 'r')
        } else {
          window.updateWorkItem(e, currentWorkId + 1, 'r')
        }
      })
      back.addEventListener('click', e => {
        if(currentWorkId === 0) {
          window.updateWorkItem(e, window.projects.length - 1, 'l')
        } else {
          window.updateWorkItem(e, currentWorkId - 1, 'l')
        }
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
      window.displayWorkModal(false)
    } 
    window.updateWorkItem = function(e, id, direction) {
      window.currentWork = window.projects[id]
      window.displayWorkModal(true, direction)
    }
  }
} 

window.customElements.define("work-modal", WorkModal);