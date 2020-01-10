export const style = `<style>
    :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 2rem;
        background-color: var(--demo-background-color, #EEE);
        font-size: 5vmin;
        color: #222;
        overflow-y: scroll;
    }

    button { background: gray; color: white; padding: 1rem; }
    slot { display: none; }
    .controls { background: yellow; position: absolute; top: 0; left: 0; padding: 1rem 2rem; display: none; }
    .logo { height: 7vmin; position: fixed; right: 2rem; bottom: 2rem; }
    .demo { background-color: var(--demo-background-color, unset); }
    .demo:hover .controls {
        display: block;
    }

    h1 { display: block; text-align: center; padding-top: 6vmin; }
    img { max-height: 90vmin; max-width: 90vmin; }
</style>`

export const html = `<div class="demo praizee">
    <div class="controls">
        <button class="prev">«</button>
        <button class="next">»</button>
    </div>
    <div class="presentation">
        <h2>Ein kurzer Titel</h2>
        <p>Inhalt inhalt inhalt</p>
        <ul>
        <li>cdscds</li>
        </ul>
    </div>
    <img class="logo" src="">
    <slot></slot>
</div>`

export default template => `${style}${html}`;