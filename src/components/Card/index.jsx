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

const Card = ({ country }) => {
  const { currentTheme } = useSelector((state) => {
    return state.theme;
  });
  return (
    <FlexContainer
      data-testid={`countryCard-${
        typeof country.name === "string" ? country.name : country.name.common
      }`}
    >
      <CardContainer currentTheme={currentTheme}>
        <FlagImage
          src={country.flags.svg}
          alt={`${
            typeof country.name === "string"
              ? country.name
              : country.name.common
          } flag`}
        />
        <CountryDetails>
          <CountryName>
            {typeof country.name === "string"
              ? country.name
              : country.name.common}
          </CountryName>
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
