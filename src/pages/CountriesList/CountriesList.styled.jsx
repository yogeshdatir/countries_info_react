import styled from "@emotion/styled";
import { Container } from "../../components/common/Container";

export const CountriesListContainer = styled(Container)`
  padding: 0 2.5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding: 0 8%;
  }
`;

export const EmptyStateContainer = styled.div`
  padding: 2.5%;
`;
