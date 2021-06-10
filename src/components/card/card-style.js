import styled from 'styled-components';

export default styled.div`
  justify-self: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    transition: transform 0.3s ease;
  }

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .info {
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
