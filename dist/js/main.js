// GLOBAL REFS
const App = document.getElementById("container");
const loader = document.getElementById("loading");
const backBtn = document.querySelector(".btn-back");
const frontBtn = document.querySelector(".btn-fwd");
const navImgs = document.querySelectorAll("a img");

// MAIN EVENT LISTENERS
// home pg
const handleResume = (e) => {
  e.preventDefault(e);
  window.open("img/Resume.pdf");
};

// About pg
const toggleTab = (e) => {
  let sign = e.target.classList;
  let panel = e.target.nextElementSibling;

  sign[1] === "open" ? sign.remove("open") : sign.add("open");

  if (panel.classList[2] === "open-content") {
    panel.classList.remove("open-content");
    panel.classList.add("close-content");
    setTimeout(() => {
      panel.style.display = "none";
    }, 300);
  } else {
    panel.classList.remove("close-content");
    panel.classList.add("open-content");
    panel.style.display = "block";
  }
};

// Hero Animation
const TextCarousel = function (el, toRotate, duration) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.duration = parseInt(duration, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TextCarousel.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.duration;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

const runCarousel = () => {
  var elements = document.getElementsByClassName("txt-carousel");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var duration = elements[i].getAttribute("data-duration");
    if (toRotate) {
      new TextCarousel(elements[i], JSON.parse(toRotate), duration);
    }
  }
  // INJECT CSS
  if (document.getElementsByTagName("style").length === 0) {
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-carousel > .wrap { border-right: 0.08em solid #000 }";
    document.body.appendChild(css);
  }
};

class Router {
  constructor() {
    window.addEventListener("load", (e) => {
      navImgs[0].setAttribute("src", `img/svgs/n-home-on.svg`);
      navImgs[0].nextElementSibling.style.color = "#000000";
      if (!window.location.hash) {
        window.scrollTo(0, 0);
        this.handleNoHash(e);
      } else {
        this.onRouteChange(e);
        this.navBtns(e);
      }
    });
    window.addEventListener("hashchange", (e) => {
      this.navBtns(e);
      window.scrollTo(0, 0);
      this.onRouteChange(e);
    });
    this.routeRefs = {
      aboutTabs: [],
    };
  }

  getRefs(pg) {
    switch (pg) {
      case "home":
        const cBtn = document.querySelector(".contact-btn");
        const rBtn = document.querySelector(".resume-btn");
        cBtn.addEventListener(
          "click",
          (e) => (window.location.hash = "#contact")
        );
        rBtn.addEventListener("click", (e) => handleResume(e));
        return;
      case "about":
        const aboutTabs = document.querySelectorAll(".btn-a");
        aboutTabs.forEach((el) => {
          el.addEventListener("click", (e) => toggleTab(e));
        });
        return;
      case "works":
        const worksTarget = document.querySelector(".works-list");
        // loadWorks(worksTarget);
        return;
      default:
        return;
    }
  }

  navBtns(e) {
    const svgSrc = "img/svgs/n-";
    navImgs.forEach((img) => {
      img.nextElementSibling.style.color = "#828282";
      img.setAttribute("src", `${svgSrc}${img.getAttribute("alt")}.svg`);
    });
    switch (window.location.hash.substr(1)) {
      case "":
      case "home":
        navImgs[0].setAttribute("src", `${svgSrc}home-on.svg`);
        navImgs[0].nextElementSibling.style.color = "#000000";
        return;
      case "about":
        navImgs[1].setAttribute("src", `${svgSrc}about-on.svg`);
        navImgs[1].nextElementSibling.style.color = "#000000";
        return;
      case "works":
        navImgs[2].setAttribute("src", `${svgSrc}works-on.svg`);
        navImgs[2].nextElementSibling.style.color = "#000000";
        return;
      case "bytes":
        navImgs[3].setAttribute("src", `${svgSrc}bytes-on.svg`);
        navImgs[3].nextElementSibling.style.color = "#000000";
        return;
      case "contact":
        navImgs[4].setAttribute("src", `${svgSrc}contact-on.svg`);
        navImgs[4].nextElementSibling.style.color = "#000000";
        return;
      default:
        return;
    }
  }

  async handleNoHash(e) {
    const slot = document.getElementById("container");
    try {
      const res = await fetch("routes/home.html");
      const text = await res.text();
      const content = await text;
      if (content !== "") {
        setTimeout(() => {
          loader.style.display = "none";
        }, 800);
        slot.innerHTML = content;
        this.getRefs("home");
      }
      runCarousel();
    } catch (err) {
      console.log(err);
    }
  }

  onRouteChange(e) {
    const hashLocation = window.location.hash.substr(1);
    this.loadContent(hashLocation);
  }

  loadContent(uri) {
    const contentURI = `routes/${uri}.html`;

    if (contentURI === "routes/.html") {
      fetch("routes/home.html")
        // to-do: event is also firing as a hashchange, make sure to account for this
        .then((r) => r.text())
        .then((content) => {
          const slot = document.getElementById("container");
          slot.innerHTML = content;
        })
        .then(() => this.getRefs("home"));
    } else {
      fetch(contentURI)
        .then((r) => r.text())
        .then((content) => this.updateSlot(content))
        .then(() => this.getRefs(uri));
    }
  }

  updateSlot(content) {
    const slot = document.getElementById("container");
    slot.innerHTML = content;
    setTimeout(() => {
      loader.style.display = "none";
    }, 700);
    runCarousel();
  }
}

class ArrowNav {
  goBack(e) {
    const hashIdx = ["home", "about", "works", "bytes", "contact"];
    switch (window.location.hash.substr(1)) {
      case "":
      case "home":
        window.location.hash = hashIdx[4];
        return true;
      case "about":
        window.location.hash = hashIdx[0];
        return true;
      case "works":
      case "bytes":
      case "contact":
        window.location.hash =
          hashIdx[
            hashIdx.findIndex((el) => el === window.location.hash.substr(1)) - 1
          ];
        return true;
      default:
        return true;
    }
  }

  goFwd(e) {
    const hashIdx = ["home", "about", "works", "bytes", "contact"];
    switch (window.location.hash.substr(1)) {
      case "":
        window.location.hash = hashIdx[1];
        return true;
      case "home":
      case "about":
      case "works":
      case "bytes":
        window.location.hash =
          hashIdx[
            hashIdx.findIndex((el) => el === window.location.hash.substr(1)) + 1
          ];
        return true;
      case "contact":
        window.location.hash = hashIdx[0];
        return true;
      default:
        return true;
    }
  }
  refRoute(direction) {
    let routePg = document.querySelector(".route");
    routePg.classList.add(direction);
  }

  hasUpdated(hash, direction) {
    const updateCheck = () => {
      fetch(`routes/${hash}.html`)
        .then((r) => {
          App.style.visibility = "visible";
          r.text();
        })
        .then((content) => {
          setTimeout(() => {
            loader.style.display = "none";
          }, 0.4);
          return true;
        })
        .then(() => this.refRoute(direction));
    };
    setTimeout(() => {
      updateCheck(hash);
    }, 30);
  }
}

let router = new Router();
let arrowNav = new ArrowNav();
const handleSwipe = async (e, navFxn, direction) => {
  try {
    const ready = await navFxn(e);
    if (ready && navigator.connection.downlink >= 1.5) {
      App.style.visibility = "hidden";
      arrowNav.hasUpdated(window.location.hash.substr(1), direction);
    } else if (ready && navigator.connection.downlink < 1.5) {
      App.style.visibility = "hidden";
      loader.style.display = "block";
      arrowNav.hasUpdated(window.location.hash.substr(1), direction);
    }
  } catch (err) {
    console.log(err);
  }
};

backBtn.addEventListener("click", (e) => handleSwipe(e, arrowNav.goBack, "l"));

frontBtn.addEventListener("click", (e) => handleSwipe(e, arrowNav.goFwd, "r"));

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);
var xDown = null;
var yDown = null;
function handleTouchStart(e) {
  xDown = e.touches[0].clientX;
  yDown = e.touches[0].clientY;
}
function handleTouchMove(e) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = e.touches[0].clientX;
  var yUp = e.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;
  if (Math.abs(xDiff) + Math.abs(yDiff) > 130) {
    //to deal with to short swipes

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        handleSwipe(e, arrowNav.goFwd, "r");
      } else {
        handleSwipe(e, arrowNav.goBack, "l");
      }
    } else {
      // if (yDiff > 0) {
      //   /* up swipe */
      // } else {
      //   /* down swipe */
      // }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }
}
