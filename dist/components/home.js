const homeTemplate = document.createElement("template");
homeTemplate.innerHTML = `
<style>
@import url("css/global.css");
</style>
<h1>Home</h1>
`;

class HomePage extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(homeTemplate.content.cloneNode(true));
  }
}

window.customElements.define("home-route", HomePage);
