import React, { useEffect, useState } from "react";
import {
  SearchIcon,
  SearchInput,
  SearchInputContainer,
} from "./Searchbar.styled";
import SearchSVG from "../../assets/icons8-search.svg";
import SearchSVGNight from "../../assets/icons8-search light.svg";
import useDebounce from "../../hooks/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  getSearchCountries,
} from "../../redux/actions/countriesActions";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState(undefined);
  const debouncedSearchTerm = useDebounce(searchTerm, 750);

  const { currentTheme } = useSelector((state) => {
    return state.theme;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!debouncedSearchTerm) return;
    if (debouncedSearchTerm !== "")
      dispatch(getSearchCountries(debouncedSearchTerm));
    else dispatch(getCountries());
  }, [dispatch, debouncedSearchTerm]);

  // TODO: bypass debouncing when pressed enter key
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SearchInputContainer data-testid="searchbar" currentTheme={currentTheme}>
      <label htmlFor="searchInput">
        <SearchIcon
          src={currentTheme === "light" ? SearchSVG : SearchSVGNight}
        />
      </label>
      <SearchInput
        id="searchInput"
        placeholder="Search for a country…"
        onChange={handleChange}
      />
    </SearchInputContainer>
  );
};

export default Searchbar;
