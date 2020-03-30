class IndexView {
  constructor() {
    window.addEventListener("load", e => this.onRouteChange(e));
    window.addEventListener("hashchange", e => this.onRouteChange(e));
  }

  onRouteChange(e) {
    const hashLocation = window.location.hash.substring(1);
    const currentComponent = `components/${hashLocation}.js`;
    this.loadContent(hashLocation, currentComponent);
  }

  loadContent(hash) {
    this.updateSlot(hash);
  }

  updateSlot(content) {
    const slot = document.getElementById("container");
    slot.innerHTML = `<${content}-route></${content}-route>`;
  }
}

new IndexView();
