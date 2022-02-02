import styled from "styled-components";

const MovieSelect = styled.select`
  height: 40px;
  background: ${({ theme }) => theme.SelectBg};
  color: #ffffff;
  padding: 10px 10px;
  font-size: 20px;
  border: none;
  border-radius: 20px;
  padding: 0 1rem;
  font-weight: 300;
  option {
    color: #ffffff;
    background: #000000;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export { MovieSelect };
