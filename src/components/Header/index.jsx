import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterCountries } from "../../redux/actions/countriesActions";
import Select from "../common/Select/Select";
import Searchbar from "../Searchbar";
import { HeaderContainer } from "./Header.styled";

export const regionOptions = [
  { value: "Africa", displayValue: "Africa" },
  { value: "America", displayValue: "America" },
  { value: "Asia", displayValue: "Asia" },
  { value: "Europe", displayValue: "Europe" },
  { value: "Oceania", displayValue: "Oceania" },
];

const Header = () => {
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedRegion !== "Filter by Region")
      dispatch(filterCountries(selectedRegion));
  }, [dispatch, selectedRegion]);

  return (
    <HeaderContainer>
      <Searchbar />
      <Select
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        options={regionOptions}
      />
    </HeaderContainer>
  );
};

export default Header;
