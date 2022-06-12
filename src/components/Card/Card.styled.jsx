import styled from "@emotion/styled";
import { Themes } from "../../constants/themes";

export const FlexContainer = styled.div`
  padding: 2.5%;
  flex-basis: 25%;
  box-sizing: border-box;

  @media (max-width: 480px) {
    flex-basis: 100%;
    padding: 1.25rem 2.5%;
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
  height: 100%;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  :hover {
    transform: scale(1.03);
  }
`;

export const FlagImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const CountryDetails = styled.div`
  padding: 1.5rem;
  padding-bottom: 2.5rem;
`;

export const CountryName = styled.h2`
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;
`;

export const CountryInfo = styled.div`
  padding-top: 16px;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  p {
    margin-bottom: 0.5rem;
  }
  span {
    font-weight: 600;
  }
`;
