import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
import { buttons } from './assets/js/buttons.js';

document.querySelectorAll("[data-code]").forEach(el => {

  const name = el.dataset.code;

  buttons[name].forEach((item) => {
    const wrapperElement = document.createElement("div");
    wrapperElement.classList.add("code");
    el.appendChild(wrapperElement)

    const categoryElement = document.createElement("p");
    categoryElement.classList.add("code_label");
    categoryElement.textContent = item.category;

    const codeElement = document.createElement("div");
    codeElement.classList.add("code_main");
    codeElement.classList.add(item.category.toLowerCase());
    codeElement.textContent = item.code;

    wrapperElement.appendChild(categoryElement);
    wrapperElement.appendChild(codeElement);

    hljs.highlightElement(codeElement);
  })
});

// const buttons = document.querySelectorAll(".copy");
// buttons.forEach((button) => {
//   const clipboard = new ClipBoard(button, {
//     target: (trigger) => {
//       return trigger.nextElementSibling;
//     },
//   });
//   clipboard.on("success", (e) => {
//     e.clearSelection();
//     button.textContent = '✅'; // ボタンの文字変更
//     setTimeout(() => (button.textContent = '📋'), 1000); // ボタンの文字を戻す
//   })
// });
