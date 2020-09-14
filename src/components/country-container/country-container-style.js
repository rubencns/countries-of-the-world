import styled from "styled-components";

export default styled.div`
  grid-area: container;
  display: grid;
  grid-template-areas: "flag" "info";
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    grid-template-areas: "flag info";
    grid-template-rows: auto;
    grid-template-columns: 50% 50%;
    grid-gap: 50px;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    grid-gap: 70px;
  }

  .flag {
    grid-area: flag;
    width: 90%;
    box-shadow: 1px 1px 10px ${({ theme: { colors } }) => colors.shadow};
    justify-self: center;
    position: relative;

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      justify-self: normal;
    }
  }

  .info {
    grid-area: info;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 50px;

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      margin-top: 0;
      padding-right: 70px;
    }

    p {
      margin-top: 15px;
    }

    span {
      font-weight: ${({ theme: { fonts } }) => fonts.weight.semiBold};
    }

    .data {
      display: grid;
      grid-template-areas: "first" "second";
      width: 100%;
      margin-top: 10px;

      @media (min-width: ${({ theme: { breakpoints } }) =>
          breakpoints.desktop}) {
        grid-template-areas: "first second";
        grid-template-columns: 1fr 1fr;
        margin-top: 0;
      }

      &-first {
        grid-area: first;
        margin-bottom: 40px;

        @media (min-width: ${({ theme: { breakpoints } }) =>
            breakpoints.tablet}) {
          margin-bottom: 0;
        }
      }

      &-second {
        grid-area: second;
      }
    }

    .border-countries {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 50px;

      @media (min-width: ${({ theme: { breakpoints } }) =>
          breakpoints.tablet}) {
        margin-top: 40px;
        position: absolute;
        bottom: -55%;
        left: 0;
        height: 50%;
        width: 50%;
      }

      @media (min-width: ${({ theme: { breakpoints } }) =>
          breakpoints.desktop}) {
        position: static;
        width: 100%;
      }

      button {
        margin: 7px;
        padding: 10px;
        height: 35px;
        width: auto;
      }

      p {
        margin: 0;
        margin-left: 5px;
      }
    }
  }
`;
