import React from "react";
import { useSelector } from "react-redux";
import {
  CountryAttributes,
  Details,
  DetailsCardContainer,
  FlagLarge,
} from "./CountryDetailsCard.styled";

function CountryDetailsCard() {
  const { countryForDetails, countries } = useSelector((state) => {
    return state.countriesList;
  });

  const getBorderCountries = () => {
    const borderCountriesCCA3 = [...countryForDetails.borders];
    let borderCountriesOfficialNames = [];
    countries.forEach((country) => {
      if (borderCountriesCCA3.includes(country.cca3))
        borderCountriesOfficialNames.push(country.name.official);
    });

    return borderCountriesOfficialNames.map((name) => <span>{name}</span>);
  };

  const renderCurrencies = () => {
    const keys = Object.keys(countryForDetails.currencies);
    return keys.map((key) => {
      return <span>{countryForDetails.currencies[key].name}</span>;
    });
  };
  const renderLanguages = () => {
    const keys = Object.keys(countryForDetails.languages);
    return keys.map((key) => {
      return <span>{countryForDetails.languages[key]}</span>;
    });
  };

  return (
    <DetailsCardContainer>
      <FlagLarge
        src={countryForDetails.flags.svg}
        alt={`${countryForDetails.name.official} Flag`}
      />
      <Details>
        <h1>{countryForDetails.name.official}</h1>
        <CountryAttributes>
          <div>
            {/* <p>Native Name: {countryForDetails.name.nativeName.spa.official}</p> */}
            <p>Population: {countryForDetails.population}</p>
            <p>Region: {countryForDetails.region}</p>
            <p>Sub Region: {countryForDetails.subregion}</p>
            <p>Capital: {countryForDetails.capital}</p>
          </div>
          <div>
            <p>
              Top Level Domain:{" "}
              {countryForDetails.tld.map((tld) => (
                <span>{tld}</span>
              ))}
            </p>
            <p>Currencies: {renderCurrencies()}</p>
            <p>Languages: {renderLanguages()}</p>
          </div>
        </CountryAttributes>
        <div>
          <span>Border Countries: </span> {getBorderCountries()}
        </div>
      </Details>
    </DetailsCardContainer>
  );
}

export default CountryDetailsCard;
