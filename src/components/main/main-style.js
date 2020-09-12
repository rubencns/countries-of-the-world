import styled from "styled-components";

export default styled.div`
  margin-top: 90px;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    margin-top: 60px;
  }
`;
