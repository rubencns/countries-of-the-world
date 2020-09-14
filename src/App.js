import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global-style";
import { darkMode, lightMode } from "./themes";
import AppStyle from "./app-style";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

export default () => {
  const [themeColor, setThemeColor] = useState(darkMode);

  const handleTheme = () => {
    if (themeColor === lightMode) setThemeColor(darkMode);
    else setThemeColor(lightMode);
  };

  return (
    <ThemeProvider theme={themeColor}>
      <GlobalStyle />
      <AppStyle>
        <Header handleTheme={handleTheme} themeColor={themeColor} />
        <Main />
      </AppStyle>
    </ThemeProvider>
  );
};
