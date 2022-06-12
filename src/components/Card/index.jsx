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
    <FlexContainer data-testid={`countryCard-${country.name.common}`}>
      <CardContainer
        currentTheme={currentTheme}
        onClick={() => handleClick(country.cca3)}
      >
        <FlagImage
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
        />
        <CountryDetails>
          <CountryName>{country.name.common}</CountryName>
          <CountryInfo>
            <p>
              <span>Population:</span> {country.population.toLocaleString()}
            </p>
            <p>
              <span>Region:</span> {country.region}
            </p>
            <p>
              <span>Capital:</span> {country.capital}
            </p>
          </CountryInfo>
        </CountryDetails>
      </CardContainer>
    </FlexContainer>
  );
};

export default Card;
