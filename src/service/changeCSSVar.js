const changeCssVar = (mode) => {
  const root = document.querySelector(':root');

  const cssVariables = ['switcher', 'card'];
  cssVariables.forEach((elem) => {
    root.style.setProperty(`--theme-default-${elem}`, `var(--theme-${mode}-${elem}`);
  });
};

export default changeCssVar;
