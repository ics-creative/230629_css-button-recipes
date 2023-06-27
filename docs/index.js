import { H as HighlightJS } from "./vendor.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const buttons$1 = "";
const common = "";
const vs2015 = "";
const buttonBasic = [
  {
    category: "HTML",
    code: `<button type="button" class="basicButton">テキスト</button>`
  },
  {
    category: "CSS",
    code: `.buttonBasic {
  text-decoration: none;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border: 0;
  -webkit-touch-callout: none;
  width: 100%;
  max-width: 320px;
  height: 64px;
  padding: 8px 24px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  background-color: var(--color-blue);
}
.buttonBasic:visited {
  color: inherit;
}
.buttonBasic:focus-visible {
  outline-color: var(--color-black);
  outline-offset: 3px;
}
@media (any-hover: hover) {
  .buttonBasic {
    transition: background-color 0.1s;
    transition-timing-function: linear;
  }
  .buttonBasic:hover, .buttonBasic:focus-visible {
    background-color: var(--color-blue-dark);
  }
}`
  },
  {
    category: "SCSS",
    code: `.buttonBasic {
}`
  }
];
const buttons = {
  buttonBasic
};
document.querySelectorAll("[data-code]").forEach((el) => {
  const name = el.dataset.code;
  buttons[name].forEach((item) => {
    const wrapperElement = document.createElement("div");
    wrapperElement.classList.add("code");
    el.appendChild(wrapperElement);
    const categoryElement = document.createElement("p");
    categoryElement.classList.add("code_label");
    categoryElement.textContent = item.category;
    const codeElement = document.createElement("div");
    codeElement.classList.add("code_main");
    codeElement.classList.add(item.category.toLowerCase());
    codeElement.textContent = item.code;
    wrapperElement.appendChild(categoryElement);
    wrapperElement.appendChild(codeElement);
    HighlightJS.highlightElement(codeElement);
  });
});
