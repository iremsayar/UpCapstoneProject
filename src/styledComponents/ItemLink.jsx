import styled from "styled-components";
import { Link } from "react-router-dom";
const ItemLink = styled(Link)`
  padding: 1.5rem 1rem;
  color: ${({ theme }) => theme.LinkColor};
  &:hover {
    color: ${({ theme }) => theme.LinkColorH};
  }
`;

export { ItemLink };
