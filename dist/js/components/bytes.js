const bytesTemplate = document.createElement("template");
bytesTemplate.innerHTML = `
<style>
</style>
<h1>Bytes</h1>
`;

class BytesPage extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(bytesTemplate.content.cloneNode(true));
  }
}

window.customElements.define("bytes-route", BytesPage);
