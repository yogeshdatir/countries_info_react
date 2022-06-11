import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
  BorderAttributeRow,
} from "./CountryDetailsCard.styled";

function CountryDetailsCard() {
  const {
    countriesList: { countries },
    theme: { currentTheme },
  } = useSelector((state) => {
    return state;
  });

  const { id } = useParams();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    if (id) {
      (async () => {
        const res = await getCountriesWithCCA3(countries, id);
        setSelectedCountry(res[0]);
        if (!countries.length) {
          const borderCountriesRes = await getCountriesWithCCA3(
            [],
            "",
            res[0].borders
          );
          setBorderCountries([...borderCountriesRes]);
        }
      })();
    }
  }, [countries, id]);

  const getCountriesWithCCA3 = async (list, cca3, listOfBordersCCA3) => {
    if (list.length) {
      return list.filter((country) => country.cca3 === cca3);
    }
    let apiString = ``;
    if (cca3)
      apiString = `https://restcountries.com/v3.1/alpha?codes=${cca3}, ${
        listOfBordersCCA3 && listOfBordersCCA3.toString()
      }`;
    else
      apiString = `https://restcountries.com/v3.1/alpha?codes=${
        listOfBordersCCA3 && listOfBordersCCA3.toString()
      }`;
    try {
      const countryResult = await axios.get(apiString);
      return countryResult.data;
    } catch (error) {
      console.error("error while getting the country...", error);
      return null;
    }
  };

  const getBorderCountries = () => {
    if (!selectedCountry.borders) return <span>None</span>;
    if (!countries.length) {
      return borderCountries.map(({ name: { common } }) => (
        <BorderCountry currentTheme={currentTheme}>{common}</BorderCountry>
      ));
    }
    const borderCountriesCCA3 = [...selectedCountry.borders];
    let borderCountriesOfficialNames = [];
    countries.forEach((country) => {
      if (borderCountriesCCA3.includes(country.cca3))
        borderCountriesOfficialNames.push(country.name.common);
    });

    return borderCountriesOfficialNames.map((name) => (
      <BorderCountry key={name} currentTheme={currentTheme}>
        {name}
      </BorderCountry>
    ));
  };

  const renderCurrencies = () => {
    if (!selectedCountry.currencies) return <span>None</span>;
    const keys = Object.keys(selectedCountry.currencies);
    return keys
      .map((key) => {
        return selectedCountry.currencies[key].name;
      })
      .join(", ");
  };
  const renderLanguages = () => {
    if (!selectedCountry.languages) return <span>None</span>;
    const keys = Object.keys(selectedCountry.languages);
    return keys
      .map((key) => {
        return selectedCountry.languages[key];
      })
      .join(", ");
  };

  return selectedCountry?.name ? (
    <DetailsCardContainer>
      <FlagLarge
        src={selectedCountry.flags.svg}
        alt={`${selectedCountry.name.official} Flag`}
      />
      <Details>
        <h1>{selectedCountry.name.official}</h1>
        <CountryAttributes>
          <AttributesSectionLeft>
            <AttributeRow>
              <AttributeTitle>Native Name: </AttributeTitle>
              <AttributeValue>
                {
                  selectedCountry.name.nativeName[
                    Object.keys(selectedCountry.languages)[0]
                  ].official
                }
              </AttributeValue>
            </AttributeRow>
            <AttributeRow>
              <AttributeTitle>Population:</AttributeTitle>
              <AttributeValue>{selectedCountry.population}</AttributeValue>
            </AttributeRow>
            <AttributeRow>
              <AttributeTitle>Region:</AttributeTitle>
              <AttributeValue> {selectedCountry.region}</AttributeValue>
            </AttributeRow>
            <AttributeRow>
              <AttributeTitle>Sub Region: </AttributeTitle>
              <AttributeValue>{selectedCountry.subregion}</AttributeValue>
            </AttributeRow>
            <AttributeRow>
              <AttributeTitle>Capital: </AttributeTitle>
              <AttributeValue>{selectedCountry.capital}</AttributeValue>
            </AttributeRow>
          </AttributesSectionLeft>
          <AttributesSectionRight>
            <AttributeRow>
              <AttributeTitle>Top Level Domain: </AttributeTitle>
              <AttributeValue>
                {countryForDetails.tld.map((tld) => (
                  <span key={tld}>{tld}</span>
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
        <BorderAttributeRow>
          <AttributeTitle>Border Countries: </AttributeTitle>
          <BorderCountriesContainer>
            {getBorderCountries()}
          </BorderCountriesContainer>
        </BorderAttributeRow>
      </Details>
    </DetailsCardContainer>
  ) : (
    <div>loading</div>
  );
}

export default CountryDetailsCard;
