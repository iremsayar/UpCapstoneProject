import styled from "styled-components";

const TextDiv = styled.div`
  color: ${({ theme }) => theme.ThemeTextColor};
  &:hover {
    color: ${({ theme }) => theme.TextColor};
  }
`;

export { TextDiv };
