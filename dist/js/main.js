// GLOBAL REFS
const App = document.getElementById("container");
const loader = document.getElementById("loading");
let loading = false;
const backBtn = document.querySelector(".btn-back");
const frontBtn = document.querySelector(".btn-fwd");
const navImgs = document.querySelectorAll("nav a img");
const footer = document.querySelector("footer");
const deployedURI = "https://solomonzelenko.cleverapps.io/api";
const localURI = "http://localhost:5000/api";
const API = deployedURI;
// MAIN EVENT LISTENERS
// home pg
const handleResume = (e) => {
  e.preventDefault(e);
  window.open("img/Resume.pdf");
};

// About pg
const updateHue = (hue, hueV, pic1, pic2, pic3) => {
  let newVal = Number(((hue.value - hue.min) * 100) / (hue.max - hue.min));
  let newPos = 10 - newVal * 0.2;
  hueV.innerHTML = `<div><span>${Math.abs(hue.value)}&deg;</span></div>`;
  hueV.style.left = `calc(${newVal}% + ${newPos}px)`;
  pic1.style.filter = `hue-rotate(${hue.value}deg)`;
  pic2.style.filter = `hue-rotate(${hue.value}deg)`;
  pic3.style.filter = `hue-rotate(${hue.value}deg)`;
};

// Contact pg
const getContactType = (tabs, output) => {
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", (e) => {
      if (window.innerWidth > 700) {
        output.classList.remove("on");
        setTimeout(() => {
          output.classList.add("on");
        }, 60);
      }
      switch (tab.id) {
        case "tutor-form":
          output.innerHTML = "to mentor you";
          return;
        case "hire-form":
          output.innerHTML = "to work with you";
          return;
        case "gen-form":
          output.innerHTML = "to chat with you";
          return;
      }
    });
  });
};
const getHours = (str) => {
  let timeStr = str;
  let timeStart = timeStr.indexOf(",") + 2;
  let timeEnd = timeStr.substr(timeStart).indexOf("M");

  if (timeStr.substr(timeStart)[0] === "0") {
    timeStart += 1;
  }

  timeStr = timeStr
    .substr(timeStart, timeEnd)
    .replace(":00 ", " ")
    .toLowerCase();
  return timeStr;
};

const processTime = (clientTime) => {
  const options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: clientTime,
    timeZoneName: "short",
  };
  const formater = new Intl.DateTimeFormat("en-US", options);
  const startingDate = new Date("2020/04/10 15:30:00 +0000");
  const endingDate = new Date("2020/04/10 00:30:00 +0000");

  let pacificStart = formater.format(startingDate);
  pacificStart = getHours(pacificStart);
  let pacificEnd = formater.format(endingDate);
  pacificEnd = getHours(pacificEnd);
  return [pacificStart, pacificEnd];
};

const handleMailForms = (hire, tutor, gen) => {
  const nextBtns = document.querySelectorAll(`.form-next`);
  const prevBtns = document.querySelectorAll(`.form-prev`);
  // helper functions
  const addToBody = (inputs, selects, textareas, formBody) => {
    inputs.forEach((el) => {
      if (el.name !== "") {
        formBody[el.name] = el.value;
      }
    });
    selects.forEach((el) => {
      if (el.name !== "") {
        formBody[el.name] = el.value;
      }
    });
    textareas.forEach((el) => {
      if (el.name !== "") {
        formBody[el.name] = el.value;
      }
    });
    return formBody;
  };
  const clearForm = (inputs, selects, textareas, step_form = "") => {
    inputs.forEach((el) => (el.value = ""));
    selects.forEach((el) => (el.value = ""));
    textareas.forEach((el) => (el.value = ""));
    if (step_form !== "") {
      const prevBtn = document.querySelector(
        `.${step_form.classList[0]} .form-prev`
      );
      const progressIndicators = document.querySelectorAll(
        `.${step_form.classList[0]} .form-progress .step`
      );
      progressIndicators.forEach((el, i) => {
        el.innerHTML = `${i + 1}`;
      });
      prevBtn.click();
      prevBtn.click();
    }
  };
  const formNotification = (formStatus, msgTop, msgBottom, resOk = true) => {
    const clearNotification = setTimeout(() => {
      formStatus.innerHTML = "";
      formStatus.classList.remove("err-status");
      formStatus.classList.remove("success-status");
    }, 5000);
    document.querySelectorAll(".form-submit").forEach((el) => {
      el.addEventListener("click", (e) => {
        formStatus.innerHTML = "";
        formStatus.classList.remove("err-status");
        formStatus.classList.remove("success-status");
        clearTimeout(clearNotification);
      });
    });
    formStatus.addEventListener("click", (e) => {
      formStatus.innerHTML = "";
      formStatus.classList.remove("err-status");
      formStatus.classList.remove("success-status");
      clearTimeout(clearNotification);
    });
    if (resOk) {
      formStatus.classList.add("success-status");
      formStatus.innerHTML = `
      <span class="success">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
      </svg>
      </span>
      <div class="msg">
      <p>${msgTop}</p>
      <p>${msgBottom}</p>
      </div>
      `;
    } else {
      formStatus.classList.add("err-status");
      formStatus.innerHTML = `
      <span class="err">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24">
       <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
       </svg>
      </span>
      <div class="msg">
      <p>${msgTop}</p>
      <p>${msgBottom}</p>
      </div>
      `;
    }
  };
  const validateStep = (e, form, direction) => {
    e.preventDefault();
    const acc = direction === "next" ? 1 : -1;
    const prevBtn = document.querySelector(`.${form.classList[0]} .form-prev`);
    const nextBtn = document.querySelector(`.${form.classList[0]} .form-next`);
    const submitBtn = document.querySelector(
      `.${form.classList[0]} .form-submit`
    );
    const steps = document.querySelectorAll(`.${form.classList[0]} fieldset`);
    const currentStep = document.querySelector(
      `.${form.classList[0]} .active-form-step`
    );
    const currentProgress = document.querySelector(
      `.${form.classList[0]} .form-progress #step-${
        parseInt(currentStep.id.substr(currentStep.id.length - 1)) + 1
      }`
    );
    const lastProgress = document.querySelector(
      `.${form.classList[0]} .form-progress #step-${parseInt(
        currentStep.id.substr(currentStep.id.length - 1)
      )}`
    );

    if (acc === 1) {
      if (currentStep.id.includes("1")) {
        prevBtn.style.display = "inline-block";
        currentProgress.classList.add("step-active");
        lastProgress.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
        </svg>`;
        currentProgress.parentElement.classList.add("form-progress-mid");
      }
      if (currentStep.id.includes("2")) {
        submitBtn.style.display = "inline-block";
        nextBtn.style.display = "none";
        currentProgress.classList.add("step-active");
        lastProgress.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
        </svg>`;
        currentProgress.parentElement.classList.add("form-progress-end");
      }
    }

    if (acc === -1) {
      if (currentStep.id.includes("3")) {
        submitBtn.style.display = "none";
        nextBtn.style.display = "inline-block";
        lastProgress.classList.remove("step-active");
        lastProgress.parentElement.classList.remove("form-progress-end");
      }
      if (currentStep.id.includes("2")) {
        nextBtn.style.display = "inline-block";
        prevBtn.style.display = "none";
        lastProgress.classList.remove("step-active");
        lastProgress.parentElement.classList.remove("form-progress-mid");
      }
    }

    steps.forEach((el, i) => {
      let a = parseInt(el.id.substr(el.id.length - 1));
      let b = parseInt(currentStep.id.substr(currentStep.id.length - 1));
      if (a === b + acc) {
        currentStep.classList.remove("active-form-step");
        el.classList.add("active-form-step");
      }
    });
  };
  const validateForm = (form, targetEl) => {
    const prev = document.querySelector(`.${form.classList[0]} .form-prev`);
    const targetStep = targetEl.parentElement;
    const stepIdx = targetStep.id.substr(targetStep.id.length - 1);
    if (stepIdx === "2") {
      prev.click();
    }
    if (stepIdx === "1") {
      prev.click();
      prev.click();
    }

    targetEl.classList.add("err_target");
    targetEl.addEventListener("focus", (e) => {
      targetEl.classList.remove("err_target");
    });
  };

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const query = "." + btn.parentElement.classList[0] + " .active-form-step";
      const allInputs = document.querySelectorAll(
        `${query} textarea, ${query} select, ${query} input`
      );
      let valid = true;
      allInputs.forEach((el) => {
        if (el.value === "" && el.classList[0] !== "optional-item") {
          valid = false;
        }
        if (el.type === "email" || el.type === "url") {
          el.checkValidity() === false ? (valid = false) : (valid = true);
        }
      });
      valid
        ? validateStep(e, btn.parentElement, "next")
        : alert("Please fill out all required fields.");
    });
  });

  prevBtns.forEach((btn) => {
    btn.addEventListener("click", (e) =>
      validateStep(e, btn.parentElement, "prev")
    );
  });

  // submit handlers
  hire.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.querySelector(".hire-status");
    const newHire = {};
    const inputs = document.querySelectorAll(`.${e.target.classList} input`);
    const selects = document.querySelectorAll(`.${e.target.classList} select`);
    const textareas = document.querySelectorAll(
      `.${e.target.classList} textarea`
    );

    addToBody(inputs, selects, textareas, newHire);

    axios
      .post(`${API}/mail/hire`, newHire)
      .then((res) => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        setTimeout(() => {
          formNotification(
            status,
            "Project Proposal Sent",
            "Expect a reply within 24 hours!"
          );
        }, 500);
        clearForm(inputs, selects, textareas, hire);
      })
      .catch((err) => {
        if (err.response) {
          const feedback = err.response.data.error.details[0].message;
          const targetInput = feedback.substr(1, feedback.indexOf("_hire") + 4);
          const underlineInput = document.getElementById(`${targetInput}`);
          validateForm(hire, underlineInput);
          formNotification(
            status,
            "Oops!",
            feedback.replace(`_hire`, "") + ".",
            false
          );
        } else {
          formNotification(
            status,
            "Sorry &#9785;",
            "Looks like my server is down.",
            false
          );
        }
      });
  });
  tutor.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.querySelector(".tutor-status");
    const newTutor = {};
    const inputs = document.querySelectorAll(`.${e.target.classList} input`);
    const selects = document.querySelectorAll(`.${e.target.classList} select`);
    const textareas = document.querySelectorAll(
      `.${e.target.classList} textarea`
    );

    addToBody(inputs, selects, textareas, newTutor);
    axios
      .post(`${API}/mail/tutor`, newTutor)
      .then((res) => {
        window.scrollTo({
          top: 100,
          left: 100,
          behavior: "smooth",
        });
        setTimeout(() => {
          formNotification(
            status,
            "Tutor Request Sent",
            `Expect a reply within 24 hours!`
          ),
            500;
        });
        clearForm(inputs, selects, textareas, tutor);
      })
      .catch((err) => {
        if (err.response) {
          const feedback = err.response.data.error.details[0].message;
          const targetInput = feedback.substr(
            1,
            feedback.indexOf("_tutor") + 5
          );
          const underlineInput = document.getElementById(`${targetInput}`);
          validateForm(tutor, underlineInput);
          formNotification(
            status,
            "Oops!",
            feedback.replace(`_tutor`, "") + ".",
            false
          );
        } else {
          formNotification(
            status,
            "Sorry &#9785;",
            "Looks like my server is down.",
            false
          );
        }
      });
  });
  gen.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.querySelector(".gen-status");
    const newGen = {};
    const inputs = document.querySelectorAll(`.${e.target.classList} input`);
    const selects = document.querySelectorAll(`.${e.target.classList} select`);
    const textareas = document.querySelectorAll(
      `.${e.target.classList} textarea`
    );

    addToBody(inputs, selects, textareas, newGen);

    axios
      .post(`${API}/mail/gen`, newGen)
      .then((res) => {
        window.scrollTo({
          top: 100,
          left: 100,
          behavior: "smooth",
        });
        setTimeout(() => {
          formNotification(status, "Message Sent", "Expect a reply soon!");
        }, 500);
        clearForm(inputs, selects, textareas);
      })
      .catch((err) => {
        if (err.response) {
          const feedback = err.response.data.error.details[0].message;
          const targetInput = feedback.substr(1, feedback.indexOf("_gen") + 3);
          const underlineInput = document.getElementById(`${targetInput}`);
          underlineInput.classList.add("err_target");
          underlineInput.addEventListener("focus", (e) => {
            underlineInput.classList.remove("err_target");
          });
          formNotification(
            status,
            "Oops!",
            feedback.replace(`_gen`, "") + ".",
            false
          );
        } else {
          formNotification(
            status,
            "Sorry &#9785;",
            "Looks like my server is down.",
            false
          );
        }
      });
  });
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
    setTimeout(() => {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    }, 300);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 1.3;
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
        this.handleNoHash(e);
      } else {
        this.onRouteChange(e);
        this.navBtns(e);
      }
    });
    window.addEventListener("hashchange", (e) => {
      window.scrollTo(0, 0);
      this.navBtns(e);
      this.onRouteChange(e);
    });
    this.routeRefs = {
      aboutTabs: [],
    };
  }

  getRefs(pg) {
    switch (pg) {
      case "home":
        const cBtn = document.querySelector(".btn-contact");
        const rBtn = document.querySelector(".btn-resume");
        cBtn.addEventListener(
          "click",
          (e) => (window.location.hash = "#contact")
        );
        rBtn.addEventListener("click", (e) => handleResume(e));
        return;
      case "about":
        const hue = document.getElementById("hue");
        const hueV = document.getElementById("hueV");
        const pic1 = document.querySelector(".about-pic-1");
        const pic2 = document.querySelector(".about-pic-2");
        const pic3 = document.querySelector(".about-pic-3");
        updateHue(hue, hueV, pic1, pic2, pic3);
        hue.addEventListener("input", (e) => {
          updateHue(hue, hueV, pic1, pic2, pic3);
        });
        return;
      case "works":
        let workM = document.getElementsByTagName("work-modal")[0];
        workM.style.display = "none";
        return;
      case "bytes":
        let byteM = document.getElementsByTagName("byte-modal")[0];
        byteM.style.display = "none";
        return;
      case "contact":
        const contactTabs = document.querySelectorAll('input[type="radio"]');
        const contactType = document.querySelector(".contact-type");
        const hireForm = document.querySelector(".hire-form");
        const tutorForm = document.querySelector(".tutor-form");
        const genForm = document.querySelector(".gen-form");
        const timeOutput = document.querySelector(".work-hours");
        timeOutput.innerHTML =
          "<strong>8:30 am</strong> to <strong>5:30 pm</strong> PST";
        const clientTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        timeOutput.innerHTML = `<strong>${
          processTime(clientTimezone)[0]
        }</strong> to <strong>${
          processTime(clientTimezone)[1]
        }</strong>, your time`;
        handleMailForms(hireForm, tutorForm, genForm);
        getContactType(contactTabs, contactType);
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
        footer.style.display = "none";
        document.title = "Home";
        return;
      case "about":
        navImgs[1].setAttribute("src", `${svgSrc}about-on.svg`);
        navImgs[1].nextElementSibling.style.color = "#000000";
        footer.style.display = "block";
        document.title = "About";
        return;
      case "works":
        navImgs[2].setAttribute("src", `${svgSrc}works-on.svg`);
        navImgs[2].nextElementSibling.style.color = "#000000";
        footer.style.display = "block";
        document.title = "Works";
        return;
      case "bytes":
        navImgs[3].setAttribute("src", `${svgSrc}bytes-on.svg`);
        navImgs[3].nextElementSibling.style.color = "#000000";
        footer.style.display = "block";
        document.title = "Bytes";
        return;
      case "contact":
        navImgs[4].setAttribute("src", `${svgSrc}contact-on.svg`);
        navImgs[4].nextElementSibling.style.color = "#000000";
        footer.style.display = "block";
        document.title = "Contact";
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
        footer.style.display = "none";
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
          r.text();
        })
        .then((content) => {
          App.style.visibility = "visible";
          loader.style.display = "none";
          this.refRoute(direction);
        });
    };
    setTimeout(() => {
      updateCheck(hash);
    }, 30);
  }
}

let router = new Router();
let arrowNav = new ArrowNav();
const handleSwipe = async (e, navFxn, direction) => {
  // navFxn(e)
  try {
    const ready = await navFxn(e);
    if (ready && navigator.connection.downlink >= 0.9) {
      App.style.visibility = "hidden";
      arrowNav.hasUpdated(window.location.hash.substr(1), direction);
    } else if (ready && navigator.connection.downlink < 0.9) {
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
  if (e.target.name === "hue") {
    return;
  }
  if (!xDown || !yDown) {
    return;
  }

  var xUp = e.touches[0].clientX;
  var yUp = e.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;
  if (Math.abs(xDiff) + Math.abs(yDiff) > 120) {
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
