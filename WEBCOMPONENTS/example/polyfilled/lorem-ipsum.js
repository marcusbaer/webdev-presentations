const tagName = 'lorem-ipsum';
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
        background-color: var(--bg-color, #eee);
        display: block;
        padding: var(--padding, 1rem);
    }
    :host([name]) {
        background-color: var(--bg-color, #dcc);
    }
    ::slotted(*) {
        border-left: 3px dashed var(--light-tree, red);
        padding-left: 0.5rem;
    }
    h1 {
        color: var(--shadow-tree, orange);
    }
    p {
        font-style: italic;
    }
    ::slotted(h1), ::slotted(p) {
        color: var(--shadow-tree-override, blue);
    }
  </style>
  <h1>[shadow tree h1]</h1>
  <slot name="headline">[headline slot]</slot>
  <div>
    <slot>[unnamed slot]</slot>
  </div>
  <button>OK</button>
  <p id="name">your name here</p>
`;

window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);

class LoremIpsum extends HTMLElement {

    constructor() {
        super();
        this.name = null;
        this.confirmWithButton = this.confirmWithButton.bind(this);
    }

    $(selector) {
        return this.shadowRoot && this.shadowRoot.querySelector(selector);
    }

    connectedCallback() {
        if (window.ShadyCSS) window.ShadyCSS.styleElement(this);

        if (!this.shadowRoot) {
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this.nameNode = this.$("#name");
            this.buttonNode = this.$("button");

            this.buttonNode.addEventListener('click', this.confirmWithButton);

            this.name = this.getAttribute('name');
        }

        this.render();
    }

    static get observedAttributes() {
        return ["name"];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log(
            `%cLoremIpsum - attribute changed: ${name} ${newVal}`,
            "color: lightgray;"
        );
        this[name] = newVal;
    }
    
    set name(value = '') {
        if (this.getAttribute('name') !== value) this.setAttribute('name', value);        
    }
    
    get name() {
        const name = this.getAttribute('name') || '';
        return name.toUpperCase();
    }

    confirmWithButton(event) {
        let custom = new CustomEvent('button-confirmed', {
            detail: {
              event
            }
        });
        this.dispatchEvent(custom);
    }

    render() {
        this.nameNode.textContent = this.name;
    }
}

const register = () => customElements.define(tagName, LoremIpsum);
window.WebComponents ? window.WebComponents.waitFor(register) : register();