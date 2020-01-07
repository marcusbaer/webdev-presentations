export const style = `<style>
    :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 2rem;
        background-color: var(--demo-background-color, #220);
    }

    button { visibility: hidden; }
    slot { display: none; }
    .demo { background-color: var(--demo-background-color, unset); }

    .demo:hover button {
        visibility: visible;
    }

    h1 { display: block; text-align: center; }
    img { max-height: 100%; max-width: 100%; }
</style>`

export const html = `<div class="demo praizee">
    <button class="prev">prev</button>
    <button class="next">next</button>
    <div class="presentation"></div>
    <slot></slot>
</div>`

export default template => `${style}${html}`;