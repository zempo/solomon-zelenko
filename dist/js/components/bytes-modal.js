byteModalTemplate = document.createElement("template");
byteModalTemplate.innerHTML = `
<style>
h1 {
  color: #f7f7f7;
  margin-top: 0;
  font-size: 9vw;
}
h2 a {
  color: #f7f7f7;
  font-weight: bold;
  text-decoration: none;
  font-size: 4.5vw;
}
h2 a svg  { 
  position: relative;
  top: 10px;
}
#modal {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100vh;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  border: 10px solid #3d3a3a;
  border-top: 44px solid #3d3a3a;
  background-color: #fefefe;
  margin: 0; 
  width: calc(100% - 20px);
  height: calc(100vh - 138px);
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
button {
  cursor: pointer;
}
.modal-fwd, .modal-back {
  border: none;
  font-size: 0;
  padding: 0;
  position: fixed; 
  bottom: 50vh;
  width: 60px;
  height: 60px;
  z-index: 1;
  outline: none;
  background: #f7f7f7;
  border: 0px solid #3d3a3a;
  border-radius: 50%;
  opacity: .8;
  -moz-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -o-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -webkit-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
 }
.modal-fwd:hover, .modal-fwd:active, .modal-back:hover, .modal-back:active {
opacity: 1;
-moz-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
-o-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
-webkit-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
}
.modal-fwd svg, .modal-back svg {
  width: 60px;
  height: 60px; }
.modal-back {
  left: 10px; } 
.modal-fwd {
  right: 20px; }
.opened {
  -webkit-animation: modalIn 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: modalIn 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
} 
.modal-r {
  -webkit-animation: fromRight 0.35s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fromRight 0.35s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.modal-l {
  -webkit-animation: fromLeft 0.35s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fromLeft 0.35s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.img-container {
  background: #3d3a3a;
  width: 100%;
}
.light-bg {
  background: none;
}
.light-bg h1, .light-bg h2 a {
  color: black;
}
.item-img {
  max-width: 100%; 
  max-height: 70vh;
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
  ::-webkit-scrollbar {
    width: 13px;
    height: 13px; }
  
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px; }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border: 2px none #000000; }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4); }
  
  ::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.5); }
  
  ::-webkit-scrollbar-track {
    background: none;
    border: 1px none #000000; }
  
  ::-webkit-scrollbar-track:hover {
    background: none; }
  
  ::-webkit-scrollbar-track:active {
    background: none; }
  
  ::-webkit-scrollbar-corner {
    background: transparent; }
@media only screen and (min-width: 768px) {
      h1 {
        font-size: 5.5vw;
      }
      h2 a {
        font-size: 3vw;
      }
    }
</style>
`;

class ByteModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(byteModalTemplate.content.cloneNode(true));
  }

  updateByteModal(currentItem, direction) {
    let pgClass = direction
    let updatedTemplate = `
    <div class="byte-modal" id="modal">
    <div class="modal-content opened">
    <button class="close-modal">X</button>
    <button class="resize-modal small">Resize</button>
    <button class="hide-modal">Hide</button>
    <div class="modal-pg ${pgClass}"> 
    <div class="img-container ${currentItem.type === 'demo' ? 'dark-bg': 'light-bg'}">
    <h1>${currentItem.title}</h1>
    <h2>
    <a href="${currentItem.link}" target="_blank" rel="noopener noreferrer">
    <svg class="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" data-icon="facebook,"><path d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z" fill="#ffffff"></path></svg>
    View this Byte
    </a>
    </h2>
    <img class="item-img" src="img/${currentItem.img}" alt="${currentItem.title} image"/>
    </div>
    <button class="modal-back" title="last byte">
    previous byte<svg viewBox="-15 -15 130 130">
    <path
    d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
    class="arrow"
    transform="translate(15,0)"
    ></path>
    </svg>
    </button>
    <button class="modal-fwd" title="next byte">next byte<svg viewBox="-15 -15 130 130">
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

  displayByteModal(opened, direction) {
    const fetchByte = async (byte) => {
      window.byteShadow.innerHTML = ''
      try {
        const getbyte = await window.updateByteModal(byte, direction)

        window.byteShadow.innerHTML = window.byteStatic 
        window.byteShadow.innerHTML += getbyte 
        return byteShadow
      } catch (err) {
        console.log(err)
      }
    } 
    
    fetchByte(window.currentByte).then(res => {
      let modal = res.querySelector('#modal')
      let modalContent = res.querySelector('.modal-content')
          if(opened) {
           modalContent.classList.remove('opened') 
          }
      let toggleSize = res.querySelector('.resize-modal')
      let closeBtn = res.querySelector('.close-modal')
      let hideBtn = res.querySelector('.hide-modal')
      let currentByteId = window.bytes.map(el => el.title).indexOf(window.currentByte.title)
      let fwd = res.querySelector('.modal-fwd')
      let back = res.querySelector('.modal-back')
      toggleSize.addEventListener('click', e => {
        if(toggleSize.classList[1] === 'small') {
          toggleSize.classList.remove('small')
          toggleSize.classList.add('big')
          toggleSize.style.background = '#3d3a3a'
          toggleSize.style.border = '2px solid #f7f7f7'
          modalContent.style.height = '80vh'
          modalContent.style.width = 'calc(80% - 10vw)'
          modalContent.style.margin = 'calc(10vh - 79px) calc(10% + 5vw)'
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
      hideBtn.addEventListener('click', e => document.getElementsByTagName('byte-modal')[0].style.display = 'none')
      closeBtn.addEventListener('click', e => document.getElementsByTagName('byte-modal')[0].style.display = 'none')
      modal.addEventListener('click', e => {
        if(e.target == modal) {
        document.getElementsByTagName('byte-modal')[0].style.display = 'none'
        }
      })
      fwd.addEventListener('click', e => {
        if(window.bytes.length === currentByteId + 1) {
          window.updateByteItem(e, 0, 'modal-r')
        } else {
          window.updateByteItem(e, currentByteId + 1, 'modal-r')
        }
      })
      back.addEventListener('click', e => {
        if(currentByteId === 0) {
          window.updateByteItem(e, window.bytes.length - 1, 'modal-l')
        } else {
          window.updateByteItem(e, currentByteId - 1, 'modal-l')
        }
      })
    })
  }
  
  connectedCallback() {
    window.displayByteModal = this.displayByteModal
    window.updateByteModal = this.updateByteModal
    window.byteShadow = this.shadowRoot
    window.byteStatic = byteModalTemplate.innerHTML
    window.openByteModal = function(e, id) {
        document.getElementsByTagName('byte-modal')[0].style.display = 'block'
        window.currentByte = window.bytes[id]
        window.displayByteModal(false)
    } 
    window.updateByteItem = function(e, id, direction) {
      window.currentByte = window.bytes[id]
      window.displayByteModal(true, direction)
    }
  }
}  

window.customElements.define("byte-modal", ByteModal);