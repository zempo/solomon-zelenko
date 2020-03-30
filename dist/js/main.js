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
  console.log(elements);
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-carousel > .wrap { border-right: 0.08em solid #000 }";
  document.body.appendChild(css);
};

window.addEventListener("load", e => {
  const hashLocation = window.location.hash.substr(1);
  const slot = document.getElementById("container");
  if (!window.location.hash) {
    fetch("routes/home.html")
      // to-do: event is also firing as a hashchange, make sure to account for this
      .then(r => r.text())
      .then(content => {
        slot.innerHTML = content;
      });
  }
  if (hashLocation.includes("home")) {
    runCarousel();
  }
});

window.addEventListener("hashchange", e => {
  const hashLocation = window.location.hash.substr(1);
  if (hashLocation.includes("home")) {
    runCarousel();
  }
});

class IndexView {
  constructor() {
    window.addEventListener("load", e => this.onRouteChange(e));
    window.addEventListener("hashchange", e => this.onRouteChange(e));
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
  }
}

new IndexView();
