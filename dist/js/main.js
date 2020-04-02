"use strict";

// REFS
const backBtn = document.querySelector(".btn-back");
const frontBtn = document.querySelector(".btn-fwd");
// Hero Animation
const TextCarousel = function(el, toRotate, duration) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.duration = parseInt(duration, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TextCarousel.prototype.tick = function() {
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

  setTimeout(function() {
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
    window.addEventListener("load", e => {
      if (!window.location.hash) {
        backBtn.disabled = true;
        this.handleNoHash(e);
      }
      this.navBtns(e);
      this.onRouteChange(e);
    });
    window.addEventListener("hashchange", e => {
      this.navBtns(e);
      this.onRouteChange(e);
    });
  }

  navBtns(e) {
    switch (window.location.hash.substr(1)) {
      case "":
      case "home":
        backBtn.disabled = true;
        frontBtn.disabled = false;
        return;
      case "about":
      case "works":
      case "bytes":
        backBtn.disabled = false;
        frontBtn.disabled = false;
        return;
      case "contact":
        backBtn.disabled = false;
        frontBtn.disabled = true;
        return;
      default:
        return;
    }
  }

  handleNoHash(e) {
    fetch("routes/home.html")
      // to-do: event is also firing as a hashchange, make sure to account for this
      .then(r => r.text())
      .then(content => {
        const slot = document.getElementById("container");
        slot.innerHTML = content;
        setTimeout(() => {
          runCarousel();
        }, 200);
      });
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
        .then(r => r.text())
        .then(content => {
          const slot = document.getElementById("container");
          slot.innerHTML = content;
        });
    } else {
      fetch(contentURI)
        .then(r => r.text())
        .then(content => this.updateSlot(content));
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
        return;
      case "about":
        window.location.hash = this.hashIdx[0];
        return;
      case "works":
      case "bytes":
      case "contact":
        window.location.hash = this.hashIdx[
          this.hashIdx.findIndex(el => el === window.location.hash.substr(1)) -
            1
        ];
        return;
      default:
        return;
    }
  }

  goFwd(e) {
    switch (window.location.hash.substr(1)) {
      case "":
        window.location.hash = "about";
      case "home":
      case "about":
      case "works":
      case "bytes":
        window.location.hash = this.hashIdx[
          this.hashIdx.findIndex(el => el === window.location.hash.substr(1)) +
            1
        ];
        return;
      case "contact":
        return;
      default:
        return;
    }
  }
}

let router = new Router();
let arrowNav = new ArrowNav();

backBtn.addEventListener("click", e => {
  arrowNav.goBack(e);
});

frontBtn.addEventListener("click", e => {
  arrowNav.goFwd(e);
});
