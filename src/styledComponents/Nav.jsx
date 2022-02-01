import styled from "styled-components";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.NavColor};
  display: flex;
  width: 100%;
  height: 10vh;
  border-bottom: 3px solid;
  border-bottom-color: #b1aeaec6;
  font-size: 30px;
  font-weight: 300;
`;
export { Nav };
