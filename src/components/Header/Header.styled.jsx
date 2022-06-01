import styled from "@emotion/styled";
import { Container } from "../common/Container";

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-top: 48px;
  padding-bottom: 12px;
  @media (max-width: 480px) {
    flex-direction: column;
    padding-bottom: 40px;
  }
`;

export { HeaderContainer };
