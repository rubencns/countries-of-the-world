import styled from "styled-components";

export default styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: 100px;

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 150px;

    .link {
      color: ${({ theme: { colors } }) => colors.text};
    }
  }
`;
