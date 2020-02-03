class Cart extends HTMLElement {

    constructor() {
        const template = document.createElement("template");
        template.innerHTML = `<style>:host {
            display: block;
            font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
            position: fixed;
            bottom: 0;
            right: 0;
            z-index: 1;
        }
        slot { display: none; }
        .cart { border: 1px solid var(--primary-color, orange); background-color: rgba(71, 90, 107, 0.7);}
        h1 { color: var(--primary-color, orange); font-size: 16px; margin: 0; padding: 4px; font-family: dax_otcond_black, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }
        p {font-size: 1.2rem; padding: 0 4px; display: none; }
        button { background-color: #006ab3; color: white; display: none; padding: 8px; margin: 4px; width: calc(100% - 8px); }
        .cart.--has-items button, .cart.--has-items p { display: block; }
        </style><div class="cart">
            <h1>Warenkorb</h1>
            <p>Ihr Warenkorb enthält <span>keine</span> Einträge.</p>
            <button>Leeren</button>
        </div><slot></slot>`;

        super();
        if (!this.shadowRoot) {
            this.attachShadow({ mode: "open" });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

        this.button = this.$("button");
        this.number = this.$("span");
        this.wrapper = this.$(".cart");
    }

    $(selector) {
        return this.shadowRoot && this.shadowRoot.querySelector(selector);
    }

    // $slot(selector) {
    //     const slot = this.$("slot");
    //     selector = selector.toUpperCase();
    //     const [matchingNode] = slot.assignedNodes().filter(node => {
    //       return node.nodeName == selector;
    //     });

    //     return matchingNode || null;
    // }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log(
            `%Cart component - attribute changed: ${name} ${newVal}`,
            "color: lightgray;"
        );
        const changeableAttributes = ["total-number-of-items"];
        if (changeableAttributes.includes(name) && oldVal && oldVal !== newVal) {
            this.render();
        }
    }

    connectedCallback() {
        this.button.addEventListener('click', (event) => {
            this.setAttribute("total-number-of-items", 0);
        });
        this.render();
    }

    get renderedNumberOfItems () {
        return this.getAttribute("total-number-of-items")? Number(this.getAttribute("total-number-of-items")): "keine";
    }

    static get observedAttributes() {
        return ["total-number-of-items"];
    }

    render() {
        this.number.textContent = this.renderedNumberOfItems;

        const numberOfItems = this.getAttribute('total-number-of-items')? Number(this.getAttribute('total-number-of-items')): 0;
        if (numberOfItems > 0) {
            this.wrapper.classList.add('--has-items');
        } else {
            this.wrapper.classList.remove('--has-items');
        }
    }
}

customElements.define("roller-cart", Cart);