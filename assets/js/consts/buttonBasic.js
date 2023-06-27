export const buttonBasic = [
  {
    category: "HTML",
    code: `<button type="button" class="basicButton">テキスト</button>`,
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
}`,
  },
  {
    category: "SCSS",
    code: `.buttonBasic {
}`,
  }
]
