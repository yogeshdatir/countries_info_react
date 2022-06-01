import styled from "@emotion/styled";
import { Themes } from "../../constants/themes";

export const FlexContainer = styled.div`
  padding: 2.5%;
  flex-basis: 25%;
  box-sizing: border-box;

  @media (max-width: 480px) {
    flex-basis: 100%;
  }

  @media (min-width: 481px) and (max-width: 900px) {
    flex-basis: 50%;
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    flex-basis: 33.33%;
  }
`;

export const CardContainer = styled.div`
  background: ${(props) => Themes[props.currentTheme].elementsBackgroundColor};
  width: 100%;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;
  overflow: hidden;
`;

export const FlagImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const CountryDetails = styled.div`
  padding: 24px;
`;

export const CountryName = styled.p``;

export const CountryInfo = styled.div`
  padding-top: 16px;
`;
