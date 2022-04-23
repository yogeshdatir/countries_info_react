import styled from "@emotion/styled";
import { Container } from "../common/Container";

const NavbarContainer = styled(Container)`
  height: 80px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export { NavbarContainer, Nav };
