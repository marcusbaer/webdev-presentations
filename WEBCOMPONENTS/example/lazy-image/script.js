/* global Prism, WebComponents  */

const lazyImage = document.querySelector('lazy-image');
const btn = document.querySelector('button');
const output = document.querySelector('#output');

const random = () => Math.floor(Math.random() * 90 + 10)

const scrollIntoView = () =>
  lazyImage.style.transform = 'translateY(0)';

const updateMarkdown = (e) => 
  output.innerHTML = Prism.highlight(
    lazyImage.shadowRoot.innerHTML,
    Prism.languages.html,
    'html'
  );

const observer = new MutationObserver(updateMarkdown);

observer.observe(lazyImage, { attributes: true, childList: true, subtree: true })

WebComponents.waitFor(() => setTimeout(updateMarkdown));

btn.addEventListener('click', scrollIntoView)
