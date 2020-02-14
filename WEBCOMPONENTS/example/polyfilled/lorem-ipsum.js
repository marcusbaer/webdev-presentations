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
  <p id="name">your name here</p>
`;

window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);

class LoremIpsum extends HTMLElement {

    constructor() {
        super();
        this.name = 'Default Name';
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
        return this.getAttribute('name').toUpperCase();
    }

    render() {
        this.nameNode.textContent = this.name;
    }
}

const register = () => customElements.define(tagName, LoremIpsum);
window.WebComponents ? window.WebComponents.waitFor(register) : register();