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

  .container {
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

      @media (min-width: ${({ theme: { breakpoints } }) =>
          breakpoints.tablet}) {
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

      @media (min-width: ${({ theme: { breakpoints } }) =>
          breakpoints.tablet}) {
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
  }
`;
