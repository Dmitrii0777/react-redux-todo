export const changeCssVariables = (theme) => {
  const root = document.querySelector(":root");

  const cssVariables = [
    "body",
    "bgimage-desktop",
    "bgimage-mobile",
    "bgitem",
    "shadow",
    "tx-input",
    "border",
    "tx-placeholder",
    "tx-item",
    "tx-link-descr",
    "hover",
    "tx-decoration",
  ];

  cssVariables.forEach((element) => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    );
  });
};
