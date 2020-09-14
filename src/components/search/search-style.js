import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  height: 230px;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 150px;
  }

  .search-input {
    width: 100%;
    display: flex;
    position: relative;

    .dropdown {
      visibility: ${({ isHidden }) => isHidden.search && "hidden"};
      max-height: 300px;
      overflow: scroll;
    }

    .icon {
      width: 15px;
      margin-left: 25px;
      color: ${({ theme: { colors } }) => colors.input};
      cursor: pointer;
    }

    input {
      padding: 18px 25px;
      background: ${({ theme: { colors } }) => colors.elements};
      color: ${({ theme: { colors } }) => colors.text};
      border: none;
      border-radius: 5px;
      width: 100%;
    }

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      width: 40%;
    }
  }

  .search-filter {
    padding: 18px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    position: relative;
    cursor: pointer;

    .dropdown {
      visibility: ${({ isHidden }) => isHidden.filter && "hidden"};
    }

    .icon {
      width: 10px;
      margin-left: 25px;
      cursor: pointer;
    }

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      width: 200px;
    }
  }

  .dropdown {
    position: absolute;
    top: 57px;
    left: 0;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;

    &-item {
      display: flex;
      align-items: center;
      min-height: 50px;
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
`;
