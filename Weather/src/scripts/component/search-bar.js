class searchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#search-element').value;
    }
    render() {
        this.innerHTML = `
        <div class="search-bar">
            <input type="text" class="input-search-bar" id="search-element" placeholder="input city or country name">
            <button class="btn-search-bar" type="submit" id="btn-input">Search</button>
        </div>
        `;

        this.querySelector('#btn-input').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', searchBar);