import styled from "@emotion/styled";
import { Themes } from "../../constants/themes";
import { Container } from "../common/Container";

const NavbarContainer = styled(Container)`
  height: 80px;
  transition: all 0.2s ease-in;
  background: ${(props) => Themes[props.currentTheme].elementsBackgroundColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export { NavbarContainer, Nav };
