export const style = `<style>
    :host {
        /* display: block; */
    }
    slot { display: none; }
    .demo { background-color: var(--demo-background-color, unset); }
    h1 { display: block; text-align: center; }
</style>`

export const html = `<div class="demo praizee">
    <button class="prev">prev</button>
    <button class="next">next</button>
    <div class="presentation"></div>
    <slot></slot>
</div>`

export default template => `${style}${html}`;