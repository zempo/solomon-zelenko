byteModalTemplate = document.createElement("template");
byteModalTemplate.innerHTML = `
<style>
section p, li {
  font-family: Lato, Helvetica, Arial, sans-serif;
}
h1 {
  color: #f7f7f7;
  margin-top: 0;
  font-weight: normal;
  margin-bottom: 80px;
  font-size: calc(20px + 2.3vw);
}
h2 {
  margin: 35px auto 35px;
}
h2 a {
  color: #f7f7f7;
  font-weight: normal;
  text-decoration: none;
  background: #3d3a3a;
  padding: 10px 20px;
  font-size: calc(10px + 1.8vw);
  border: 2px solid rgba(247, 247, 247, .7);
  padding: 10px 20px;
  border-radius: 5px;
  -moz-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -o-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -webkit-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
} 
a {
  color: black;
  font-weight: bold;
}
h3 {
  text-align: center;
  font-weight: bold;
  font-size: calc(13px + 1.8vw);
  margin: 5vh auto;
}
.info {
  text-align: justify;
  width: 100%;
  padding-bottom: 10vh;
}
p {
  text-indent: 5%;
  font-size: calc(15px + .25vw);
  padding: auto 10px;
  width: 90%;
  margin-left: 5%;
}
h2 a:hover {
  color: #3d3a3a;
  background: rgba(247, 247, 247, .95); 
  -moz-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -o-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -webkit-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
}
a path {
  -moz-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -o-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -webkit-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
}
a:hover path {
  fill: #3d3a3a;
  -moz-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -o-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -webkit-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
}
h2 a svg  { 
  height: calc(14px + 1.8vw);
  width: calc(14px + 1.8vw);
  position: relative;
  top: calc(2px + .25vw);
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
  height: calc(100vh - 142px); 
  -webkit-animation: modalIn 0s linear both;
  animation: modalIn 0s linear both; 
}
.modal-content > div {
  overflow-y:scroll;
  position: absolute;
  height: 100%;
  width: 100%;
  background: #f7f7f7;
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
  font-weight:normal;
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
  bottom: calc(50vh - .5vw - 74px); 
  width: calc(60px + 0.25vw);
  height: calc(60px + 0.25vw);
  z-index: 4;
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
  width: calc(55px + 0.25vw);
  height: calc(55px + 0.25vw); }
.modal-back {
  left: calc(5px + 1vw); } 
.modal-fwd {
  right: calc(10px + 1vw); }
.opened {
  -webkit-animation: modalIn 0.4s linear both;
  animation: modalIn 0.4s linear both; 
} 
.modal-r {
  -webkit-animation: fromRight 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fromRight 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.modal-l {
  -webkit-animation: fromLeft 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fromLeft 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
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
  background: none;
}
.light-bg h2 a {
  border: 1px solid #3d3a3a;
  border-radius: 5px;
}
.light-bg h2 a path {
  fill: black;
}
.light-bg h2 a:hover {
  color: #f7f7f7;
  background: #3d3a3a;
  -moz-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -o-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -webkit-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
} 
.light-bg a path {
  -moz-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -o-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -webkit-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
}
.light-bg a:hover path {
  fill: #f7f7f7;
  -moz-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -o-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -webkit-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
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
    opacity: 0;
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
    opacity: 0;
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
    opacity: 0.9;
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
    opacity: 0.9;
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
    opacity: 0.9;
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
    opacity: 0.9;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px; }

::-webkit-scrollbar-button {
  width: 0px;
  height: 0px; }

::-webkit-scrollbar-thumb {
  background: #8b8585;
  border: 2px none #000000; }

::-webkit-scrollbar-thumb:hover {
  background: #716c6c; }

::-webkit-scrollbar-thumb:active {
  background: #3d3a3a; }

::-webkit-scrollbar-track {
  background: none;
  border: 1px none #000000; }

::-webkit-scrollbar-track:hover {
  background: none; }

::-webkit-scrollbar-track:active {
  background: none; }

::-webkit-scrollbar-corner {
  background: transparent; }
@media only screen and (min-width: 800px) {
     .close-modal {
      font-weight: bold;
      }
      h1 {
        font-size: calc(16px + 2vw);
      }
      h2 a {
        font-size: calc(10px + 1vw);
      }
      h2 a svg { 
        height: calc(15px + 1vw);
        width: calc(15px + 1vw);
        position: relative;
        top: calc(1px + .2vw);
      }
      .info {
        width: 70%;
        margin-left: 15%;
        text-align: center;
      }
      h3 {
        font-weight: bold;
        font-size: calc(24px + .25vw);
      }
      p {
        font-size: calc(17px + .25vw);
        width: 90%;
        margin-left: 5%;
        text-indent: 0%;
      }
      .modal-r {
        -webkit-animation: fromRight 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        animation: fromRight 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      }
      .modal-l {
        -webkit-animation: fromLeft 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        animation: fromLeft 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      }
      @-webkit-keyframes fromRight {
        0% {
          -webkit-transform: translateX(12vw);
          transform: translateX(12vw);
          opacity: 0.9;
        }
        100% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes fromRight {
        0% {
          -webkit-transform: translateX(12vw);
          transform: translateX(12vw);
          opacity: 0.9;
        }
        100% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
          opacity: 1;
        }
      }
        
      @-webkit-keyframes fromLeft {
        0% {
          -webkit-transform: translateX(-12vw);
          transform: translateX(-12vw);
          opacity: 0.9;
        }
        100% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes fromLeft {
        0% {
          -webkit-transform: translateX(-12vw);
          transform: translateX(-12vw);
          opacity: 0.9;
        }
        100% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
          opacity: 1;
        }
      }
      .item-img {
        max-width: 100%; 
        max-height: 65vh;
      }
    }
    @media only screen and (min-width: 1440px) {
      .modal-content {
        height: calc(100vh - 157px); 
      }
      .item-img {
        max-width: 90%; 
        max-height: 60vh;
      }
    } 
    @media only screen and (min-width: 2000px) {
      h1 {
        font-size: calc(44px + .5vw);
      }
      h2 {
        font-size: 28px;
      }
      h3, li {
        font-size: 26px;
      }
      p {
        font-size: 21px;
      }
      h4 {
        font-size: 24px;
      }
      .item-img {
        max-width: 85%; 
        max-height: 60vh;
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
    let pgClass = direction;
    let updatedTemplate = `
    <div class="byte-modal" id="modal">
    <div class="modal-content opened">
    <button class="close-modal">X</button>
    <button class="resize-modal small">Resize</button>
    <button class="hide-modal">Hide</button>
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
    <div class="modal-pg ${pgClass}"> 
    <div class="img-container ${
      currentItem.type === "demo" ? "dark-bg" : "light-bg"
    }">
    <h1>${currentItem.title}</h1>
    <h2>
    <a href="${currentItem.link}" target="_blank" rel="noopener noreferrer">
    <svg class="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" data-icon="facebook,"><path d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z" fill="#ffffff"></path></svg>
    View this Byte
    </a>
    </h2>
    <img class="item-img" src="img/${currentItem.img}" alt="${
      currentItem.title
    } image"/>
    </div>
    <section class="info">
    <h3>About this Byte</h3>
    <p>${currentItem.info}</p>
    </section>
    </div>
    </div>
    </div> 
    `;
    return updatedTemplate;
  }

  displayByteModal(opened, direction) {
    const fetchByte = async (byte) => {
      window.byteShadow.innerHTML = "";
      try {
        const getbyte = await window.updateByteModal(byte, direction);

        window.byteShadow.innerHTML = window.byteStatic;
        window.byteShadow.innerHTML += getbyte;
        return byteShadow;
      } catch (err) {
        console.log(err);
      }
    };

    fetchByte(window.currentByte).then((res) => {
      let modal = res.querySelector("#modal");
      let modalContent = res.querySelector(".modal-content");
      if (opened) {
        modalContent.classList.remove("opened");
      }
      let toggleSize = res.querySelector(".resize-modal");
      let closeBtn = res.querySelector(".close-modal");
      let hideBtn = res.querySelector(".hide-modal");
      let currentByteId = window.bytes
        .map((el) => el.title)
        .indexOf(window.currentByte.title);
      let fwd = res.querySelector(".modal-fwd");
      let back = res.querySelector(".modal-back");
      toggleSize.addEventListener("click", (e) => {
        if (toggleSize.classList[1] === "small") {
          toggleSize.classList.remove("small");
          toggleSize.classList.add("big");
          toggleSize.style.background = "#3d3a3a";
          toggleSize.style.border = "2px solid #f7f7f7";
          modalContent.style.height = "80vh";
          modalContent.style.width = "calc(80% - 10vw)";
          modalContent.style.margin = "calc(10vh - 79px) calc(10% + 5vw)";
          modalContent.focus();
        } else {
          toggleSize.classList.remove("big");
          toggleSize.classList.add("small");
          toggleSize.style.background = "none";
          toggleSize.style.border = "none";
          modalContent.style.height = "calc(100vh - 142px)";
          modalContent.style.width = "calc(100% - 20px)";
          modalContent.style.margin = "0";
          modalContent.focus();
          if (window.innerWidth >= 1440) {
            modalContent.style.height = "calc(100vh - 157px)";
          }
        }
      });
      hideBtn.addEventListener(
        "click",
        (e) =>
          (document.getElementsByTagName("byte-modal")[0].style.display =
            "none")
      );
      closeBtn.addEventListener(
        "click",
        (e) =>
          (document.getElementsByTagName("byte-modal")[0].style.display =
            "none")
      );
      modal.addEventListener("click", (e) => {
        if (e.target == modal) {
          document.getElementsByTagName("byte-modal")[0].style.display = "none";
        }
      });
      fwd.addEventListener("click", (e) => {
        if (window.bytes.length === currentByteId + 1) {
          window.updateByteItem(e, 0, "modal-r");
        } else {
          window.updateByteItem(e, currentByteId + 1, "modal-r");
        }
      });
      back.addEventListener("click", (e) => {
        if (currentByteId === 0) {
          window.updateByteItem(e, window.bytes.length - 1, "modal-l");
        } else {
          window.updateByteItem(e, currentByteId - 1, "modal-l");
        }
      });
    });
  }

  connectedCallback() {
    window.displayByteModal = this.displayByteModal;
    window.updateByteModal = this.updateByteModal;
    window.byteShadow = this.shadowRoot;
    window.byteStatic = byteModalTemplate.innerHTML;
    window.openByteModal = function (e, id) {
      document.getElementsByTagName("byte-modal")[0].style.display = "block";
      window.currentByte = window.bytes[id];
      document.getElementsByTagName("byte-modal")[0].focus();
      window.displayByteModal(false);
    };
    window.updateByteItem = function (e, id, direction) {
      window.currentByte = window.bytes[id];
      window.displayByteModal(true, direction);
    };
  }
}

window.customElements.define("byte-modal", ByteModal);
