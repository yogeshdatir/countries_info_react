import React from "react";
import DarkModeButton from "./DarkModeButton";
import { NavbarContainer, Nav } from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Nav>
        <span>Where in the world?</span>
        <DarkModeButton />
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;
