import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }


  body {
    font-family: ${({ theme: { fonts } }) => fonts.family};
    font-size: ${({ theme: { fonts } }) => fonts.size.small};
    color: ${({ theme: { colors } }) => colors.text};
    background: ${({ theme: { colors } }) => colors.background};
    padding: 0 20px;

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      padding: 0 70px;
    }
  }

  h3 {
    font-size: ${({ theme: { fonts } }) => fonts.size.large};
    font-weight: 800;
  }

  .element {
    color: ${({ theme: { colors } }) => colors.input};
    background: ${({ theme: { colors } }) => colors.elements};
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 10px ${({ theme: { colors } }) => colors.shadow};

    &::placeholder {
      color: ${({ theme: { colors } }) => colors.input};
    }
  }

  button {
    cursor: pointer;
  }
`;
