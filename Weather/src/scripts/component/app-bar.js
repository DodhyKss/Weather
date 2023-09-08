class appBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h1>Check Weather</h1>`;
    }
}

customElements.define('head-bar', appBar);