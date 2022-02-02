import styled from "styled-components";

const FooterDiv = styled.div`
  background-color: ${({ theme }) => theme.NavColor};
  display: flex;
  width: 100%;
  height: 12vh;
  border-top: 1px solid;
  border-top-color: #b1aeaec6;
  left: 0;
  bottom: 0;
`;
export { FooterDiv };
