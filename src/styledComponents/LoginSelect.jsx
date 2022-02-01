import styled from "styled-components";

const LoginSelect = styled.select`
  height: 45px;
  background: ${({ theme }) => theme.NavColor};
  color: #797979;
  padding-left: 5px;
  border: none;
  margin-left: 10px;
  padding: 0;
  font-weight: 300;
  font-size: 16px;
  option {
    color: #ffffff;
    background: #000000;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export { LoginSelect };
