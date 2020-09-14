import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-areas:
    "button button"
    "container container";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10% 1fr;
  margin: 110px 0;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    grid-template-rows: 25% 1fr;
    margin-top: 130px;
  }

  .status {
    grid-area: container;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }

  button {
    grid-area: button;
    width: 100px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      width: 155px;
      height: 45px;
    }

    .icon {
      width: 15px;
      margin-right: 15px;

      @media (min-width: ${({ theme: { breakpoints } }) =>
          breakpoints.tablet}) {
        width: 20px;
      }
    }
  }
`;
