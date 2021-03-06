const contactTemplate = document.createElement("template");
contactTemplate.innerHTML = `
<style>
@import url("css/global.css");
</style>
<h1>Contact</h1>
`;

// make email form tab components and manage state
class ContactPage extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(contactTemplate.content.cloneNode(true));
  }
}

window.customElements.define("contact-route", ContactPage);
