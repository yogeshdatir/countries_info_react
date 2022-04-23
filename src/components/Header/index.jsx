import React from "react";
import RegionSelect from "../RegionSelect";
import Searchbar from "../Searchbar";
import { HeaderContainer } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Searchbar />
      <RegionSelect />
    </HeaderContainer>
  );
};

export default Header;
