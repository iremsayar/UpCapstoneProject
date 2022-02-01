import styled from "styled-components";

const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.SelectBg};
  border-radius: 30px;
  width: 12rem;
  height: 2rem;
  padding: 1.5rem 2rem;
  color: white;
  font-size: 18px;
  font-weight: 900;
  @media (min-width: 600px) and (max-width: 1023px) {
    width: 30rem;
    height: 3rem;
    padding: 1rem 4rem;
  }
  @media (min-width: 1024px) {
    width: 35rem;
    height: 4rem;
    padding: 1rem 4rem;
  }
`;

export { SearchInput };
