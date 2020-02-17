/* global Prism, WebComponents  */

const loremIpsum = document.querySelector('lorem-ipsum');
const output = document.querySelector('#output');

const updateMarkdown = (e) => 
  output.innerHTML = Prism.highlight(
    loremIpsum.shadowRoot.innerHTML,
    Prism.languages.html,
    'html'
  );

const observer = new MutationObserver(updateMarkdown);

loremIpsum.addEventListener('button-confirmed', (event) => {
    console.log(event);
})

observer.observe(loremIpsum, { attributes: true, childList: true, subtree: true });
WebComponents.waitFor(() => setTimeout(updateMarkdown));
