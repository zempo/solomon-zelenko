workModalTemplate = document.createElement("template");
workModalTemplate.innerHTML = `
<style>
h1 {
  color: #f7f7f7;
  margin-top: 0;
  margin-bottom: 10vh;
  font-size: calc(20px + 2.3vw);
}
h2 {
  margin: 15px auto 35px;
}
h2 a {
  color: #f7f7f7;
  font-weight: normal;
  text-decoration: none; 
  font-size: calc(10px + 1.8vw);
  border: 2px solid rgba(247, 247, 247, .7);
  padding: 10px 20px;
  border-radius: 5px;
  -moz-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -o-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -webkit-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
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
a:hover {
  color: #3d3a3a;
  background: rgba(247, 247, 247, .95); 
  -moz-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -o-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  -webkit-transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
  transition: all 0.4s cubic-bezier(0.75, 0, 0.125, 1);
}
a .icon {
  font-size: calc(18px + 1.8vw);
  font-weight: normal;
  top: calc(2px + .25vw);
}
br {
  display: block;
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
  -webkit-animation: modalIn 0s linear both;
  animation: modalIn 0s linear both; 
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
  bottom: calc(50vh - .5vw - 74px);
  width: calc(60px + 1vw);
  height: calc(60px + 1vw);
  z-index: 6;
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
  width: calc(60px + 1vw);
  height: calc(60px + 1vw); }
  .modal-back {
    left: calc(5px + 1vw); } 
  .modal-fwd {
    right: calc(10px + 1vw); }
.opened {
  -webkit-animation: modalIn 0.4s linear both;
  animation: modalIn 0.4s linear both; 
} 
.modal-r {
  overflow-y:scroll;
  position: absolute;
  height: 100%;
  width: 100%; 
  -webkit-animation: fromRight .4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fromRight .4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.modal-l {
  overflow-y:scroll;
  position: absolute;
  height: 100%;
  width: 100%; 
  -webkit-animation: fromLeft .4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fromLeft .4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.img-container {
  background: #3d3a3a;
  width: 100%;
}
.item-img {
  max-width: 100%; 
  max-height: 70vh;
}
.img-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  }
.pic-control {
  display: block;
  position: relative;  
  cursor: pointer;
  font-size: 0px;
  width: 40px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.pic-control input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.checkmark {
  position: absolute;
  top: -12px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #ccc;
  border-radius: 50%;
}
.pic-control:hover input ~ .checkmark {
  background-color: #eee;
}
.pic-control input:checked ~ .checkmark {
  background-color: #f7f7f7;
  top: -16px;
  width: 28px;
  height: 28px;
}
.timeline {
  position: relative;
  max-width: 100%;
  margin: calc(5vh + 20px) auto 5vh;
  padding: 0 auto 5vh;
  border-top: 5px solid #3d3a3a;
  border-bottom: 5px solid #3d3a3a;
}
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #3d3a3a;
  top: 0;
  bottom: 0;
  left: 10px;
}
.node {
  padding: 15px 1vw 3vh 30px;
  position: relative;
  left: 0px;
  background-color: none;
  width: 90%;
}
.node::after {
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: white;
  border: 5px solid #eb6637;
  top: 15px;
  left: 1px;
  border-radius: 50%;
  z-index: 4;
}
.node:before {
  content: " ";
  height: 0;
  position: absolute;
  top: 18px;
  width: 0;
  z-index: 3;
  left: 27px;
  border: medium solid #3d3a3a;
  border-width: 10px 10px 10px 0;
  border-color: transparent #3d3a3a transparent transparent;
}
.node-content {
  padding: 10px 15px;
  background-color: white;
  position: relative;
  width: calc(90% - 40px);
  left: 5px;
  border: 2px solid #3d3a3a;
  border-radius: 6px;
  text-align: justify;
  z-index: 4;
}
.node-content h4 {
  text-align: center;
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

@media only screen and (min-width: 800px) {
  h1 {
    color: #f7f7f7;
    margin-top: 0;
    font-size: calc(16px + 2vw);
    margin-bottom: 15vh;
  }
  h2 a {
    font-size: calc(10px + .8vw);
  }
  h2 a .icon {
    font-size: calc(18px + .8vw);
    position: relative;
    top: 0;
  }
  h2 a:first-child {
    margin-right: 40px;
  }
  br {
    display: none;
  }
  .info {
    width: 70%;
    margin-left: 15%;
    text-align: center;
  }
  h3 {
    font-size: calc(10px + 1.8vw);
  }
  p {
    font-size: calc(17px + .25vw);
    width: 90%;
    margin-left: 5%;
    text-indent: 0%;
  }
  .node-content {
    padding: 20px 10%;
    background-color: white;
    position: relative;
    width: calc(70% - 40px);
    border: 3px solid #3d3a3a;
    border-radius: 6px;
    text-align: justify;
    z-index: 4;
    left: 28px;
    top: -10px;
  }
  .node::after {
    width: 20px;
    height: 20px;
    left: 13px;
  } 
  .node:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 18px;
    width: 0;
    z-index: 3;
    left: 44px;
    border: medium solid #3d3a3a;
    border-width: 15px 15px 15px 0;
    border-color: transparent #3d3a3a transparent transparent;
  }
  .timeline::after {
    left: 25px;
  }
  .node-content h4 {
    font-size: calc(10px + 1vw);
  }
  .node-content p {
    text-indent: 40px;
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
@media only screen and (min-width: 1000px) { 
  .timeline {
    position: relative;
    margin: calc(6.5vh + 40px) auto 5vh;
    max-width: 1500px;
    padding: 0 0 5vh;
    border-top: 5px solid #3d3a3a;
    border-bottom: 5px solid #3d3a3a;
  }
  .timeline::after {
    content: '';
    position: absolute;
    width: 8px;
    background-color: #3d3a3a;
    top: 0;
    bottom: 0;
    left: calc(50% - 4px);
  }
  .timeline h3 {
    margin: 0;
    position: relative; 
    top: calc(-5vw - 30px);
    width: 90%;
    margin-left: 5%;
  }
  .node {
    padding: 5px 0 5vh;
    width: 50%;
  }
  .node-content {
    padding: 0 5% 10px;
    background-color: white;
    position: relative;
    width: calc(90% - 50px);
    border: 3px solid #3d3a3a;
    border-radius: 6px;
    text-align: justify;
    z-index: 4;
    left: 5px;
  }
  .node-left {
    left: 10px;
  }
  .node-right {
    left: calc(50% + 24px);
  }
  .node-left::after {
    width: 20px;
    height: 20px;
    top: 15px;
    left: calc(100% - 25px);
  }
  .node-right::after {
    width: 20px;
    height: 20px;
    top: 15px;
    left: -39px;
  }
  .node-right:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 15px;
    width: 0;
    z-index: 3;
    left: -8px;
    border: medium solid #3d3a3a;
    border-width: 15px 15px 15px 0;
    border-color: transparent #3d3a3a transparent transparent;
  }

  .node-left:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 15px;
    width: 0;
    z-index: 3;
    left: calc(100% - 41px);
    border: medium solid #3d3a3a;
    border-width: 15px 0 15px 15px;
    border-color: transparent transparent transparent #3d3a3a;
  }

}
</style>
`;

class WorkModal extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(workModalTemplate.content.cloneNode(true));
  }

  updateWorkModal(currentItem, direction) {
    let pgClass = direction
    const timeline = (nodes) => {
      let output = ''
      for (let i = 0; i < nodes.length; i++) {
        if (i === nodes.length - 1) {
          output += `<div class="node node-left">
          <div class="node-content">
          <h4>${nodes[i].stage}</h4>
          <p>${nodes[i].desc}</p>
          </div>
          </div>`
        } else {
          output += `<div class="node node-left">
          <div class="node-content">
          <h4>${nodes[i].stage}</h4>
          <p>${nodes[i].desc}</p>
          </div>
          </div>
          <div class="node node-right">
          <div class="node-content">
          <h4>${nodes[i + 1].stage}</h4>
          <p>${nodes[i + 1].desc}</p>
          </div>
          </div>`
          i++
        }
      }
      return output
    }
    let updatedTemplate = `
    <div class="work-modal" id="modal">
    <div class="modal-content opened">
    <button class="close-modal">X</button>
    <button class="resize-modal small">Resize</button>
    <button class="hide-modal">Hide</button>
    <button class="modal-back" title="last work">
    previous work<svg viewBox="-15 -15 130 130">
    <path
    d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
    class="arrow"
    transform="translate(15,0)"
    ></path>
    </svg>
    </button>
    <button class="modal-fwd" title="next work">next work<svg viewBox="-15 -15 130 130">
    <path
    d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
    class="arrow"
    transform="translate(85,100) rotate(180)"
    ></path>
    </svg></button>
    <div class="modal-pg ${pgClass}">
    <div class="img-container">
    <h1>${currentItem.title}</h1>  
    <h2>
    <a href="${currentItem.live}" target="_blank" rel="noopener noreferrer"><span class="icon">&#9921; </span> Visit the Website</a>
    <br> 
    <br> 
    <a href="${currentItem.repo}" target="_blank" rel="noopener noreferrer"><span class="icon">&#10000;</span> Read the Code</a>
    </h2>
    <a href="${currentItem.live}" target="_blank" rel="noopener noreferrer">
    <img src="img/works/${currentItem.code + '/' + currentItem.code}-1.png" class="item-img" alt="${currentItem.title} image"/>
    </a>    
    <div class="img-controls">
    ${currentItem.pics.map((pic, i) => {
      if (i === 0) {
        return `
        <label class="pic-control" data-pos=${currentItem.code + '/' + pic}>
        <input type="radio" id="${pic}" name="${currentItem.code}" checked value="${pic}">
        <span class="checkmark"></span>
        </label>`
      } else {
        return `
        <label class="pic-control" data-pos=${currentItem.code + '/' + pic}>
        <input type="radio" id="${pic}" name="${currentItem.code}" value="${pic}">
        <span class="checkmark"></span>
        </label>`
      }
    })} 
    </div>
    </div>
    <h2>
    </h2>
    <section class="info-pg">
    <section class="info">
    <h3>Mission Statement</h3>
    <p>${currentItem.title} ${currentItem.description}</p>
    </section>
    <section class="technologies">
    </section>
    <section class="timeline">
    <h3>Product Timeline</h3>
    ${timeline(currentItem.timeline)}
    </section>
    </section>
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
      let toggleSize = res.querySelector('.resize-modal')
      let closeBtn = res.querySelector('.close-modal')
      let hideBtn = res.querySelector('.hide-modal')
      let currentWorkId = window.projects.map(el => el.title).indexOf(window.currentWork.title)
      let fwd = res.querySelector('.modal-fwd');
      let back = res.querySelector('.modal-back');
      let image = res.querySelector('.img-container img');
      let imgBtns = res.querySelectorAll('.pic-control input');
      let runSlideShow = setInterval(() => {
        for (let i = 0; i < imgBtns.length; i++) {
          if(imgBtns[i].checked == true) {
            if(i < imgBtns.length - 1) {
              imgBtns[i].checked = false
              imgBtns[i + 1].checked = true
              let newPic = imgBtns[i + 1].parentElement.getAttribute('data-pos')
              image.setAttribute('src', `img/works/${newPic}`)
              image.style.animation = 'fadeIn 1s'
              setTimeout(() => {
                image.style.animation = 'none'
              }, 500)
              return
            } else {
              imgBtns[i].checked = false
              imgBtns[0].checked = true
              let newPic = imgBtns[0].parentElement.getAttribute('data-pos')
              image.setAttribute('src', `img/works/${newPic}`)              
              image.style.animation = 'fadeIn 1s'
              setTimeout(() => {
                image.style.animation = 'none'
              }, 500) 
              return
            }
          }
        }
      }, 3000)
      document.querySelector('header').addEventListener('click', e => clearInterval(runSlideShow))
      window.onhashchange = e => {
        clearInterval(runSlideShow)
      }
      imgBtns.forEach(el=> {
        el.addEventListener('click', e => {
        clearInterval(runSlideShow) 
          runSlideShow = setInterval(() => {
            for (let i = 0; i < imgBtns.length; i++) {
              if(imgBtns[i].checked == true) {
                if(i < imgBtns.length - 1) {
                  imgBtns[i].checked = false
                  imgBtns[i + 1].checked = true
                  let newPic = imgBtns[i + 1].parentElement.getAttribute('data-pos')
                  image.setAttribute('src', `img/works/${newPic}`)
                  image.style.animation = 'fadeIn 1s'
                  setTimeout(() => {
                    image.style.animation = 'none'
                  }, 500)
                  return;
                } else {
                  imgBtns[i].checked = false
                  imgBtns[0].checked = true
                  let newPic = imgBtns[0].parentElement.getAttribute('data-pos')
                  image.setAttribute('src', `img/works/${newPic}`)              
                  image.style.animation = 'fadeIn 1s'
                  setTimeout(() => {
                    image.style.animation = 'none'
                  }, 500) 
                  return;
                }
              }
            }
          }, 3100)
          let dir = e.target.name 
          let pic = e.target.value
          image.setAttribute('src', `img/works/${dir + '/' + pic}`)
        })
      })
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
      hideBtn.addEventListener('click', e => {
        clearInterval(runSlideShow)
        document.getElementsByTagName('work-modal')[0].style.display = 'none'
      })
      closeBtn.addEventListener('click', e => {
        clearInterval(runSlideShow)
        document.getElementsByTagName('work-modal')[0].style.display = 'none'
    })
      modal.addEventListener('click', e => {
        if(e.target == modal) {
        clearInterval(runSlideShow)
          document.getElementsByTagName('work-modal')[0].style.display = 'none'
        }
      })
      fwd.addEventListener('click', e => {
        clearInterval(runSlideShow)
        if(window.projects.length === currentWorkId + 1) {
          window.updateWorkItem(e, 0, 'modal-r')
        } else {
          window.updateWorkItem(e, currentWorkId + 1, 'modal-r')
        }
      })
      back.addEventListener('click', e => {
        clearInterval(runSlideShow)
        if(currentWorkId === 0) {
          window.updateWorkItem(e, window.projects.length - 1, 'modal-l')
        } else {
          window.updateWorkItem(e, currentWorkId - 1, 'modal-l')
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