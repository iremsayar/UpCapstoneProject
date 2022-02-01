import styled from "styled-components";

const OutlineButton = styled.button`
  border-radius: 8px;
  font-weight: 200;
  border: 3px solid;
  border-color: ${({ theme }) => theme.OutlineBtnColor};
  @media screen and (max-width: 800px) {
    padding: 0.5rem 3rem;
    font-size: 20px;
  }
  font-size: 30px;
  padding: 1rem 6rem;
  padding: 0.5rem 3rem;
  color: ${({ theme }) => theme.TextColor};
  &:hover {
    background-color: ${({ theme }) => theme.OutlineBtnColorH};
    color: ${({ theme }) => theme.TextColor};
  }
`;

export { OutlineButton };
