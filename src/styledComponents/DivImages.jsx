import styled from "styled-components";

const DivImages = styled.div`
  width: 50vw;
  @media (min-width: 600px) and (max-width: 1023px) {
    width: 30vw;
  }
  @media (min-width: 1024px) {
    width: 20vw;
    &:hover {
      width: 22vw;
      transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
      transition-duration: 200ms;
    }
  }
  @media (min-width: 1440px) {
    width: 18vw;
    &:hover {
      width: 20vw;
      transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
      transition-duration: 200ms;
    }
  }
`;

export { DivImages };
