const tagName = 'lazy-image';
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      position: relative;
    }

    #image,
    #placeholder ::slotted(*) {
      position: absolute;
      top: 0;
      left: 0;
      transition: opacity 0.3s ease;
    }

    #placeholder ::slotted(*),
    :host([intersecting]) #image {
      opacity: 1;
    }

    #image,
    :host([intersecting]) #placeholder ::slotted(*) {
      opacity: 0;
    }
  </style>
  <div id="placeholder"><slot name="placeholder"></slot></div>
  <img id="image"/>
`;

window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);
 
const isIntersecting = ({isIntersecting}) => isIntersecting;

class LazyImage extends HTMLElement {
  /**
   * Safely sets attributes when properties are set.
   * @protected
   */
  safeSetAttribute(name, value) {
    if (this.getAttribute(name) !== value) this.setAttribute(name, value);   
  }

  static get observedAttributes() {
    return ['src', 'alt'];
  }

  set src(value) {
    this.safeSetAttribute('src', value);
    // Set image src
    if (this.shadowImage && this.intersecting) this.shadowImage.src = value;
  }

  get src() {
    return this.getAttribute('src');
  }

  set alt(value) {
    this.safeSetAttribute('alt', value);
    // Set image alt
    if (this.shadowImage) this.shadowImage.alt = value;
  }

  get alt() {
    return this.getAttribute('alt');
  }

  set intersecting(value) {
    if (value) {
      // Wait to apply the `intersecting` attr until the image
      // finishes loading, then update the styles for polyfill browsers
      this.shadowImage.onload = this.setIntersecting;
      this.shadowImage.src = this.src;
      this.disconnectObserver();
    } else {
      this.removeAttribute('intersecting');
    }
  }

  get intersecting() {
    return this.hasAttribute('intersecting');
  }

  constructor() {
    super();
    this.shadowImage = null;
    this.observerCallback = this.observerCallback.bind(this);
    this.setIntersecting = this.setIntersecting.bind(this);
  }

  connectedCallback() {
    // Initialize shady styles if needed
    this.updateShadyStyles();
    if (!this.shadowRoot) {
      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowImage = this.shadowRoot.getElementById('image');
      // initialize pre-upgrade attributes
      this.src = this.getAttribute('src');
      this.alt = this.getAttribute('alt');
      this.placeholder = this.getAttribute('placeholder');
    }
    // if IntersectionObserver is available, initialize it.
    if ('IntersectionObserver' in window) this.initIntersectionObserver();
    // if IntersectionObserver is unavailable, simply load the image.
    else this.intersecting = true;
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
  }
  
  updateShadyStyles() {
    window.ShadyCSS && window.ShadyCSS.styleElement(this);
  }

  setIntersecting() {
    this.setAttribute('intersecting', '');
    this.updateShadyStyles();
  }
  
  observerCallback(entries) {
    if (entries.some(isIntersecting)) this.intersecting = true;
  }

  initIntersectionObserver() {
    if (this.observer) return;
    // Start loading the image 10px before it appears on screen
    const rootMargin = '10px';
    this.observer = new IntersectionObserver(this.observerCallback, { rootMargin });
    this.observer.observe(this);
  }
  
  disconnectObserver() {
    this.observer.disconnect();
    this.observer = null;
    delete this.observer;
  }
}

const register = () => customElements.define(tagName, LazyImage);
window.WebComponents ? window.WebComponents.waitFor(register) : register();
