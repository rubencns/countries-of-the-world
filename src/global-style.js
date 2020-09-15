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
    font-weight: ${({ theme: { fonts } }) => fonts.weight.light};
    color: ${({ theme: { colors } }) => colors.text};
    background: ${({ theme: { colors } }) => colors.background};
    padding: 0 40px;

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      padding: 0 70px;
    }
  }

  h1 {
    font-size: ${({ theme: { fonts } }) => fonts.size.xLarge};
    font-weight: 800;
    margin: 0;
  }

  h2 {
    font-size: ${({ theme: { fonts } }) => fonts.size.medium};
    font-weight: 800;
  }

  h3 {
    font-size: ${({ theme: { fonts } }) => fonts.size.large};
    font-weight: 800;
  }

  .element {
    color: ${({ theme: { colors } }) => colors.text};
    background: ${({ theme: { colors } }) => colors.elements};
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 5px ${({ theme: { colors } }) => colors.shadow};
  }

  input {
    background: ${({ theme: { colors } }) => colors.elements};
    color: ${({ theme: { colors } }) => colors.text};
    border: none;
    border-radius: 5px;
    
    &::placeholder {
      color: ${({ theme: { colors } }) => colors.input};   
    }
    &:focus {
      outline: none;
    }
      
  }

  .button {
    &:hover {
      background: ${({ theme: { colors } }) => colors.text};
      color: ${({ theme: { colors } }) => colors.elements};
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;

    &:focus {
      outline: none;
    }
  }
`;
