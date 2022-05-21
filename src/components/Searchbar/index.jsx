import React, { useEffect, useState } from "react";
import {
  SearchIcon,
  SearchInput,
  SearchInputContainer,
} from "./Searchbar.styled";
import SearchSVG from "../../assets/icons8-search.svg";
import useDebounce from "../../hooks/useDebounce";
import { useDispatch } from "react-redux";
import {
  getCountries,
  getSearchCountries,
} from "../../redux/actions/countriesActions";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState(undefined);
  const debouncedSearchTerm = useDebounce(searchTerm, 750);

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
    <SearchInputContainer>
      <label htmlFor="searchInput">
        <SearchIcon src={SearchSVG} />
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
