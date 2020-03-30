const worksTemplate = document.createElement("template");
worksTemplate.innerHTML = `
<style>
@import url("css/global.css");
</style>
<h1>Works</h1>
`;

class WorksPage extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(worksTemplate.content.cloneNode(true));
  }
}

window.customElements.define("works-route", WorksPage);
