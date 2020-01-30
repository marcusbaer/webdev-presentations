class Kitchen extends HTMLElement {

    constructor() {
        const template = document.createElement("template");
        template.innerHTML = `<style>:host {
            display: block;
            font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
        }
        slot { display: none; }
        .kitchen { border: 1px solid var(--primary-color, orange); }
        h1 { color: var(--primary-color, orange); font-size: 16px; margin: 0; padding: 4px; font-family: dax_otcond_black, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }
        a { display: block; margin: 4px; }
        img { display: block; width: calc(100%); }
        .kitchen__price {font-size: 150%; background-color: var(--primary-color, orange); padding: 4px;text-align: center; }
        .kitchen__price:hover {transform:scale(1.3);}
        </style><div class="kitchen">
            <h1></h1>
            <a href="#"><img src="" /></a>
            <div class="kitchen__price"></div>
        </div><slot></slot>`;

        super();
        if (!this.shadowRoot) {
            this.attachShadow({ mode: "open" });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

        this.headline = this.$("h1");
        this.image = this.$("img");
        this.link = this.$("a");
        this.price = this.$(".kitchen__price");
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

    connectedCallback() {

        // this.image.addEventListener('error', (event) => {
        //     this.image.style.display = "none";
        // })

        this.headline.textContent = this.$slot("h1").textContent || "name";
        this.image.setAttribute("alt", this.$slot("img").getAttribute("alt")? this.$slot("img").getAttribute("alt") + " - öffnet die Produktdetailseite": "alternative image description");
        this.image.setAttribute("src", this.$slot("img").getAttribute("src") || "");
        this.image.setAttribute("title", this.$slot("img").getAttribute("title") || "zur Produktdetailseite");
        this.link.setAttribute("href", this.$slot("a").getAttribute("href") || "#");
        this.price.textContent = this.renderPrice(this.$slot("div").textContent, "€");
    }

    renderPrice(priceValue, priceUnit = "€") {
        return priceValue + " " + priceUnit; 
    }
}

customElements.define("roller-kitchen", Kitchen);