import { readBlockConfig } from '../../scripts/aem.js';


export default function decorate(block) {
  const [quoteWrapper] = block.children;
//   const blockquote = document.createElement('blockquote');
//   blockquote.textContent = quoteWrapper.textContent.trim();
//   quoteWrapper.replaceChildren(blockquote);
const cfg = readBlockConfig(block) || {};
cfg.classes = cfg.classes || 'bg-red';
  if (cfg.classes) {
    quoteWrapper.classList.add(cfg.classes);
  }
}