import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global-style";
import { darkMode, lightMode } from "./themes";
import AppStyle from "./app-style";

export default () => {
  const [mode, setMode] = useState(lightMode);

  const handleMode = () => {
    if (mode === lightMode) setMode(darkMode);
    else setMode(lightMode);
  };

  return (
    <ThemeProvider theme={mode}>
      <GlobalStyle />
      <AppStyle>
        <h1>App</h1>
        <button onClick={handleMode}>Switch</button>
      </AppStyle>
    </ThemeProvider>
  );
};
