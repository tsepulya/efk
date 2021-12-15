const changeCssVar = (mode) => {
  const root = document.querySelector(':root');

  const cssVariables = ['switcher', 'card', 'btn', 'tableHeadBg', 'tableHeadBorder'];
  cssVariables.forEach((elem) => {
    root.style.setProperty(`--theme-default-${elem}`, `var(--theme-${mode}-${elem}`);
  });
};

export default changeCssVar;
