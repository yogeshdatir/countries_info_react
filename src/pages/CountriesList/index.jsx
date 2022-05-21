import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { getCountries } from "../../redux/actions/countriesActions";
import { CountriesListContainer } from "./CountriesList.styled";

const CountriesList = () => {
  const { countries, loading, error } = useSelector((state) => {
    return state.countriesList;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <CountriesListContainer>
      {countries && !loading && countries.length > 0 ? (
        countries.map((country) => {
          return (
            <Card
              key={
                typeof country.name === "string"
                  ? country.name
                  : country.name.common
              }
              country={country}
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
  );
};

export default CountriesList;
