import styled from "styled-components";

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme: { colors } }) => colors.elements};
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 5px ${({ theme: { colors } }) => colors.shadow};

  .switch {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;

    span {
      color: ${({ theme: { colors } }) => colors.text};
      font-size: ${({ theme: { fonts } }) => fonts.size.medium};
      font-weight: ${({ theme: { fonts } }) => fonts.weight.semiBold};
    }

    .icon {
      margin-right: 8px;

      .moon {
        fill: ${({ theme: { colors } }) => colors.text};
        stroke: ${({ theme: { colors } }) => colors.moon};
      }
    }
  }
`;
