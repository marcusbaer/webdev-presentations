# Web Components

## Geschichte

- Ursprünglich eingeführt 2011
- in letzten Jahren eng mit Polymer verknüpft
- inzwischen aber in den meisten aktuellen Browsern angekommen
- auch ES Module werden mittlerweile gut unterstützt
- [ ] Polymer grundsätzlich nicht mehr notwendig: umbenannt zu TODO

## IE 11

Dieser veraltete Browser wird Dank Polyfills ebenfalls unterstützt.

Progressive Lösungsansätze als Alternative sind zu prüfen.

## Hilfsmittel

- neben Polymer sind weitere Frameworks entstanden
- LitElement, Slim.js, X-Tag
- Angular, React, Svelte, Vue

## Hilfsmittel?

- langfristiges Projekt?
- keine Bindung an Frameworks oder Bibliotheken erwünscht?

> **ggf. nativ implementierte Web Components in Erwägung ziehen**


## Vorteile von Web Components

- durch eigenen Scope unabhängiges und stabiles Layout
- definierte Komponenten können von allen beteiligten Systemen verwendet werden: 
  - server-seitiges Rendern,
  - Rendering im Frontend (JS, Vue, ...),
  - Google Tag Manager,
  - A/B-Testing-Frameworks
  - etc. 
- [ ] ...

## Technische Grundlagen

- Shadow DOM: innerhalb von HTML-Elementen ein eigenes, unabhängiges, DOM erzeugen und innerhalb von diesem neue Komponenten hinzufügen und stylen
- HTML Templates: Eine Möglichkeit mit Hilfe des <template> Elements HTML Vorlagen im Dokument zu hinterlegen. Diese können dann mit Hilfe von JavaScript manipuliert werden
- Custom Elements: API um eigene HTML Elemente zu schreiben

## Integration

```
<foo-component title="bar">
    <button>Click me</button>
</foo-component>
```

## Entwicklung

```
const fooTemplate = `
    <style>
        :host { }
        slot { }
        .foo { }
    </style>
    <div class="foo">
        Foo
    </div>
    <slot></slot>
`;

FooComponent extends HTMLElement {

    constructor() {
        super();

        const template = document.createElement("template");
        template.innerHTML = fooTemplate;

        if (!this.shadowRoot) {
            this.attachShadow({ mode: "open" });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

        this.wrapper = this.$(".foo");
    }

    $(selector) {
        return this.shadowRoot && this.shadowRoot.querySelector(selector);
    }

    connectedCallback() {
        // if element added to DOM
        this.render();
    }

    disconnectedCallback() {
        // if element removed from DOM
    }

    adoptedCallback() {
        // if element moved inside of DOM
    }

    static get observedAttributes() {
        // list of attributes to be watched
        return ["title"];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        // if some attribute has changed
    }

    render() {
        this.wrapper.textContent = this.getAttribute("title");
    }
}

window.customElements.define("foo-component", FooComponent);
```



## Design Systeme

Web Components sind mit Design Systemen gut vereinbar.
Können z.B. mit Storybook oder Fractal leicht entwickelt (Workbench) und dokumentiert (Shop) werden:

- Wie erfolgt Integration?
- Welche Attribute vorhanden?
- Welche Slots?
- Welche Event-Listener zur Kommunikation nach außen?

> Verwendung mit einem Design System daher ist empfehlenswert, insbesondere bei Projekten mit Microfrontend-Architektur.


