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
const buttons = "";
const common = "";
const vs2015 = "";
const buttonCodes = {
  buttonBasic: [
    {
      category: "HTML",
      code: `<button type="button" class="basicButton">テキスト</button>`
    },
    {
      category: "SCSS",
      code: `.button {
  &_item {
    display: block
  }
}
`
    }
  ]
};
document.querySelectorAll("[data-code]").forEach((el) => {
  const name = el.dataset.code;
  buttonCodes[name].forEach((item) => {
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
