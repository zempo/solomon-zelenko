const contactTemplate = document.createElement("template");
contactTemplate.innerHTML = `
<style>
@import url("css/global.css");
</style>
<h1>Contact</h1>
`;

class ContactPage extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(contactTemplate.content.cloneNode(true));
  }
}

window.customElements.define("contact-route", ContactPage);
