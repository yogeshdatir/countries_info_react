import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { getCountries } from "../../redux/actions/countriesActions";
import { CountriesListContainer } from "./CountriesList.styled";

const CountriesList = () => {
  const countries = useSelector((state) => {
    return state.countriesList.countries;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <CountriesListContainer>
      {countries &&
        countries.length > 0 &&
        countries.map((country) => {
          return <Card />;
        })}
    </CountriesListContainer>
  );
};

export default CountriesList;
