## Module compilation

```
let exports;

fetch('sample.wasm').then(response =>
  response.arrayBuffer();
).then(bytes =>
  WebAssembly.instantiate(bytes);
).then(results => {
  exports = results.instance.exports;
});
```

## Quellen
https://rustwasm.github.io/book/reference/deploying-to-production.html
- https://blog.bitsrc.io/a-complete-introduction-to-webassembly-and-its-javascript-api-3474a9845206
- https://webassembly.studio/
- https://github.com/AssemblyScript/assemblyscript