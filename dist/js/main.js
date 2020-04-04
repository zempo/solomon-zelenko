"use strict";

// GLOBAL REFS
const navImgs = document.querySelectorAll("a img");
const backBtn = document.querySelector(".btn-back");
const frontBtn = document.querySelector(".btn-fwd");

// ROUTE EVENT LISTENERS
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
        backBtn.disabled = true;
        this.handleNoHash(e);
      } else {
        this.onRouteChange(e);
        this.navBtns(e);
      }
    });
    window.addEventListener("hashchange", (e) => {
      this.navBtns(e);
      this.onRouteChange(e);
    });
    this.routeRefs = {
      aboutTabs: [],
    };
  }

  getRefs(pg) {
    switch (pg) {
      case "about":
        const aboutTabs = document.querySelectorAll(".btn-a");
        aboutTabs.forEach((el) => {
          el.addEventListener("click", (e) => toggleTab(e));
        });
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
        backBtn.disabled = true;
        frontBtn.disabled = false;
        return;
      case "about":
        navImgs[1].setAttribute("src", `${svgSrc}about-on.svg`);
        navImgs[1].nextElementSibling.style.color = "#000000";

        backBtn.disabled = false;
        frontBtn.disabled = false;
        return;
      case "works":
        navImgs[2].setAttribute("src", `${svgSrc}works-on.svg`);
        navImgs[2].nextElementSibling.style.color = "#000000";

        backBtn.disabled = false;
        frontBtn.disabled = false;
        return;
      case "bytes":
        navImgs[3].setAttribute("src", `${svgSrc}bytes-on.svg`);
        navImgs[3].nextElementSibling.style.color = "#000000";

        backBtn.disabled = false;
        frontBtn.disabled = false;
        return;
      case "contact":
        navImgs[4].setAttribute("src", `${svgSrc}contact-on.svg`);
        navImgs[4].nextElementSibling.style.color = "#000000";
        backBtn.disabled = false;
        frontBtn.disabled = true;
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
        slot.innerHTML = content;
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
    runCarousel();
  }
}

class ArrowNav {
  constructor() {
    this.hashIdx = ["home", "about", "works", "bytes", "contact"];
  }
  goBack(e) {
    switch (window.location.hash.substr(1)) {
      case "":
      case "home":
        return true;
      case "about":
        window.location.hash = this.hashIdx[0];
        return true;
      case "works":
      case "bytes":
      case "contact":
        window.location.hash = this.hashIdx[
          this.hashIdx.findIndex(
            (el) => el === window.location.hash.substr(1)
          ) - 1
        ];
        return true;
      default:
        return true;
    }
  }

  goFwd(e) {
    switch (window.location.hash.substr(1)) {
      case "":
        window.location.hash = "about";
        return true;
      case "home":
      case "about":
      case "works":
      case "bytes":
        window.location.hash = this.hashIdx[
          this.hashIdx.findIndex(
            (el) => el === window.location.hash.substr(1)
          ) + 1
        ];
        return true;
      case "contact":
        return true;
      default:
        return true;
    }
  }
}

let router = new Router();
let arrowNav = new ArrowNav();

backBtn.addEventListener("click", async (e) => {
  const slot = document.getElementById("container");
  slot.firstChild.classList.remove("l");
  try {
    const ready = arrowNav.goBack(e);

    if (ready) {
      setTimeout(() => {
        slot.firstChild.classList.add("l");
      }, 50);
    }
  } catch (err) {
    console.log(err);
  }
});

frontBtn.addEventListener("click", async (e) => {
  const slot = document.getElementById("container");
  slot.firstChild.classList.remove("r");
  try {
    const ready = arrowNav.goFwd(e);

    if (ready) {
      setTimeout(() => {
        slot.firstChild.classList.add("r");
      }, 50);
    }
  } catch (err) {
    console.log(err);
  }
});
