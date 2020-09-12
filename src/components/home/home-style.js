import styled from "styled-components";

export default styled.div`
  .search {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    height: 150px;

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      flex-direction: row;
      align-items: center;
    }

    &-input {
      width: 100%;
      display: flex;

      .icon {
        width: 15px;
        margin-left: 25px;
        cursor: pointer;
      }

      input {
        padding: 18px 25px;
        background: ${({ theme: { colors } }) => colors.elements};
        color: ${({ theme: { colors } }) => colors.input};
        border: none;
        border-radius: 5px;
        width: 100%;
      }

      @media (min-width: ${({ theme: { breakpoints } }) =>
          breakpoints.tablet}) {
        width: 40%;
      }
    }

    &-filter {
      padding: 18px;
      width: 55%;
      display: flex;
      justify-content: space-between;
      position: relative;
      cursor: pointer;

      .icon {
        width: 10px;
        margin-left: 25px;
        cursor: pointer;
      }

      @media (min-width: ${({ theme: { breakpoints } }) =>
          breakpoints.tablet}) {
        width: 17%;
      }

      .dropdown {
        visibility: ${({ isHidden }) => isHidden && "hidden"};
        position: absolute;
        top: 57px;
        left: 0;
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 15px 0;

        &-item {
          height: 100%;
          width: 100%;
          padding: 7px 23px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          cursor: pointer;

          &:hover {
            background: ${({ theme: { colors } }) => colors.hover};
          }
        }
      }
    }
  }
`;
