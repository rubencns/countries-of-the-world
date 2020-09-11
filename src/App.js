import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global-style";
import { darkMode, lightMode } from "./themes";
import AppStyle from "./app-style";
import Header from "./components/header/Header";

export default () => {
  const [themeColor, setThemeColor] = useState(lightMode);

  const handleTheme = () => {
    if (themeColor === lightMode) setThemeColor(darkMode);
    else setThemeColor(lightMode);
  };

  return (
    <ThemeProvider theme={themeColor}>
      <GlobalStyle />
      <AppStyle>
        <Header handleTheme={handleTheme} themeColor={themeColor} />
        <div className="main">Main</div>
      </AppStyle>
    </ThemeProvider>
  );
};
