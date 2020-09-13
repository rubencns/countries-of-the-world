import styled from "styled-components";

export default styled.div`
  height: 300px;
  width: 225px;
  justify-self: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    transition: transform 0.3s ease;
  }

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 155px;
    width: 100%;
  }

  .info {
    height: 135px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px;

    h2 {
      margin-bottom: 10px;
    }

    span {
      font-weight: ${({ theme: { fonts } }) => fonts.weight.semiBold};
    }
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
  }
`;
