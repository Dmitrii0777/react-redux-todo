const CSS_VARIABLES = [
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

export const changeCssVariables = (theme) => {
  const root = document.querySelector(":root");

  CSS_VARIABLES.forEach((element) => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    );
  });
};
