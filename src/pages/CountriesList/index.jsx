import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Header from "../../components/Header";
import {
  getCountries,
  selectCountryForDetails,
} from "../../redux/actions/countriesActions";
import { CountriesListContainer } from "./CountriesList.styled";

const CountriesList = () => {
  const { countries, loading, error } = useSelector((state) => {
    return state.countriesList;
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleClick = (cca3) => {
    navigate(`/${cca3}`);
  };

  return (
    <>
      <Header />
      <CountriesListContainer data-testid="countriesList">
        {countries && !loading && countries.length > 0 ? (
          countries.map((country) => {
            return (
              <Card
                key={country.name.common}
                country={country}
                handleClick={handleClick}
              />
            );
          })
        ) : (
          <div style={{ padding: "2.5%" }}>
            {loading ? (
              <div>add Loader here...</div>
            ) : (
              <p>{error || "No countries available, my friend"}!</p>
            )}
          </div>
        )}
      </CountriesListContainer>
    </>
  );
};

export default CountriesList;
