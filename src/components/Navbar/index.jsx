import React from "react";
import { useSelector } from "react-redux";
import DarkModeButton from "./DarkModeButton";
import { NavbarContainer, Nav } from "./Navbar.styled";

const Navbar = () => {
  const { currentTheme } = useSelector((state) => {
    return state.theme;
  });
  return (
    <NavbarContainer currentTheme={currentTheme}>
      <Nav>
        <span>Where in the world?</span>
        <DarkModeButton />
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;
