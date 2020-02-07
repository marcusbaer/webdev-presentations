class SeoProduct extends HTMLElement {

    constructor() {
        const template = document.createElement("template");
        template.innerHTML = `<style>:host {
            display: block;
            font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
        }
        h1 { color: var(--primary-color, orange); font-size: 16px; margin: 0; padding: 4px; font-family: dax_otcond_black, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }
        a { display: block; margin: 4px; }
        button { background-color: #006ab3; color: white; padding: 8px; margin: 4px; width: calc(100% - 8px); }
        img { display: block; width: calc(100%); }
        </style><div class="product" itemscope itemtype="http://schema.org/Product">
            <h1 itemprop="name">Gemüse-Keks</h1>
            <a href="/products/gemuese-keks" itemprop="url"><img src="https://lh3.googleusercontent.com/proxy/5XkBosiiKNnP7e34A13QE1EFBljD6-Wybe-OSaXv17zGOftrj_ZIb-FVQG-XeH9G7X3RVpGl1yUzJ6xBmvnGQ6VAe4gaWouJ_G47lI70mPUzs7b2wQubL5rQqyyV4HC0xKD6Pn8l7iE4b5UAbko" alt="Gemüse-Keks" itemprop="image" /></a>
            <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                <span itemprop="price">1,85 €</span>
            </div>
            <div class="kitchen__price"></div>
            <button>In den Warenkorb legen</button>
        </div><slot></slot>`;

        super();
        if (!this.shadowRoot) {
            this.attachShadow({ mode: "open" });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }

    $(selector) {
        return this.shadowRoot && this.shadowRoot.querySelector(selector);
    }

    $slot(selector) {
        const slot = this.$("slot");
        selector = selector.toUpperCase();
        const [matchingNode] = slot.assignedNodes().filter(node => {
          return node.nodeName == selector;
        });

        return matchingNode || null;
    }
}

customElements.define("seo-product", SeoProduct);