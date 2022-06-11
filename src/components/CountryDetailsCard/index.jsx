import React from "react";
import { useSelector } from "react-redux";
import {
  AttributeTitle,
  AttributeRow,
  AttributesSectionLeft,
  AttributesSectionRight,
  AttributeValue,
  CountryAttributes,
  Details,
  DetailsCardContainer,
  FlagLarge,
  BorderCountry,
  BorderCountriesContainer,
} from "./CountryDetailsCard.styled";

function CountryDetailsCard() {
  const {
    countriesList: { countryForDetails, countries },
    theme: { currentTheme },
  } = useSelector((state) => {
    return state;
  });

  const getBorderCountries = () => {
    if (!countryForDetails.borders) return <span>None</span>;
    const borderCountriesCCA3 = [...countryForDetails.borders];
    let borderCountriesOfficialNames = [];
    countries.forEach((country) => {
      if (borderCountriesCCA3.includes(country.cca3))
        borderCountriesOfficialNames.push(country.name.common);
    });

    return borderCountriesOfficialNames.map((name) => (
      <BorderCountry currentTheme={currentTheme}>{name}</BorderCountry>
    ));
  };

  const renderCurrencies = () => {
    if (!countryForDetails.currencies) return <span>None</span>;
    const keys = Object.keys(countryForDetails.currencies);
    return keys
      .map((key) => {
        return countryForDetails.currencies[key].name;
      })
      .join(", ");
  };
  const renderLanguages = () => {
    if (!countryForDetails.languages) return <span>None</span>;
    const keys = Object.keys(countryForDetails.languages);
    return keys
      .map((key) => {
        return countryForDetails.languages[key];
      })
      .join(", ");
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
          <AttributesSectionLeft>
            <AttributeRow>
              <AttributeTitle>Native Name: </AttributeTitle>
              <AttributeValue>
                {
                  countryForDetails.name.nativeName[
                    Object.keys(countryForDetails.languages)[0]
                  ].official
                }
              </AttributeValue>
            </AttributeRow>
            <AttributeRow>
              <AttributeTitle>Population:</AttributeTitle>
              <AttributeValue>{countryForDetails.population}</AttributeValue>
            </AttributeRow>
            <AttributeRow>
              <AttributeTitle>Region:</AttributeTitle>
              <AttributeValue> {countryForDetails.region}</AttributeValue>
            </AttributeRow>
            <AttributeRow>
              <AttributeTitle>Sub Region: </AttributeTitle>
              <AttributeValue>{countryForDetails.subregion}</AttributeValue>
            </AttributeRow>
            <AttributeRow>
              <AttributeTitle>Capital: </AttributeTitle>
              <AttributeValue>{countryForDetails.capital}</AttributeValue>
            </AttributeRow>
          </AttributesSectionLeft>
          <AttributesSectionRight>
            <AttributeRow>
              <AttributeTitle>Top Level Domain: </AttributeTitle>
              <AttributeValue>
                {countryForDetails.tld.map((tld) => (
                  <span>{tld}</span>
                ))}
              </AttributeValue>
            </AttributeRow>
            <AttributeRow>
              <AttributeTitle>Currencies: </AttributeTitle>
              <AttributeValue>{renderCurrencies()}</AttributeValue>
            </AttributeRow>
            <AttributeRow>
              <AttributeTitle>Languages: </AttributeTitle>
              <AttributeValue>{renderLanguages()}</AttributeValue>
            </AttributeRow>
          </AttributesSectionRight>
        </CountryAttributes>
        <AttributeRow>
          <AttributeTitle>Border Countries: </AttributeTitle>
          <BorderCountriesContainer>
            {getBorderCountries()}
          </BorderCountriesContainer>
        </AttributeRow>
      </Details>
    </DetailsCardContainer>
  );
}

export default CountryDetailsCard;
