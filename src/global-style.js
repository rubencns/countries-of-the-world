import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    font-family: ${({ theme: { fonts } }) => fonts.family};
    color: ${({ theme: { colors } }) => colors.text};
    background: ${({ theme: { colors } }) => colors.background};
  }
`;
