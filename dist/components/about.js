const aboutTemplate = document.createElement("template");
aboutTemplate.innerHTML = `
<style>
@import url("css/global.css");
</style>
<h1>About</h1>
`;

class AboutPage extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(aboutTemplate.content.cloneNode(true));
  }
}

window.customElements.define("about-route", AboutPage);
