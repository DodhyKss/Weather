class footerBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="footer-bar">
            <h4>Copyright 2023 | <span>Dodhy</span></h4>
            <h5>Powered by openweathermap.org API</h5>
        </div>
    `;
    }
}
customElements.define('footer-bar', footerBar);