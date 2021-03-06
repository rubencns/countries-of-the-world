import styled from "styled-components";

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme: { colors } }) => colors.elements};
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 5px ${({ theme: { colors } }) => colors.shadow};
  z-index: 2;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    padding: 20px 70px;
  }

  .switch {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;

    span {
      color: ${({ theme: { colors } }) => colors.text};
      font-size: ${({ theme: { fonts } }) => fonts.size.small};
      font-weight: ${({ theme: { fonts } }) => fonts.weight.semiBold};

      @media (min-width: ${({ theme: { breakpoints } }) =>
          breakpoints.mobile}) {
        font-size: ${({ theme: { fonts } }) => fonts.size.medium};
      }
    }

    .icon {
      margin-right: 8px;

      @media (max-width: ${({ theme: { breakpoints } }) =>
          breakpoints.mobile}) {
        width: 12px;
      }

      .moon {
        fill: ${({ theme: { colors } }) => colors.text};
        stroke: ${({ theme: { colors } }) => colors.moon};
      }
    }
  }
`;
