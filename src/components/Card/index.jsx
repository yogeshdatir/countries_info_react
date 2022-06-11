import React from "react";
import { useSelector } from "react-redux";
import {
  CardContainer,
  CountryDetails,
  CountryInfo,
  CountryName,
  FlagImage,
  FlexContainer,
} from "./Card.styled";

const Card = ({ country, handleClick }) => {
  const { currentTheme } = useSelector((state) => {
    return state.theme;
  });
  return (
    <FlexContainer
      data-testid={`countryCard-${country.name.common}`}
      onClick={() => handleClick(country.name.official, country.cca3)}
    >
      <CardContainer currentTheme={currentTheme}>
        <FlagImage
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
        />
        <CountryDetails>
          <CountryName>{country.name.common}</CountryName>
          <CountryInfo>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </CountryInfo>
        </CountryDetails>
      </CardContainer>
    </FlexContainer>
  );
};

export default Card;
