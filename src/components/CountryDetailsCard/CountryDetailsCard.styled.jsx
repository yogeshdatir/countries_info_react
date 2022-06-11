import styled from "@emotion/styled";
import { Themes } from "../../constants/themes";

export const DetailsCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 100%;
`;

export const FlagLarge = styled.img`
  width: 45%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 45%;
`;

export const CountryAttributes = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AttributesSectionLeft = styled.div`
  padding-right: 5%;
`;

export const AttributesSectionRight = styled.div`
  padding-left: 4%;
`;

export const AttributeRow = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
`;
export const AttributeTitle = styled.span`
  display: flex;
  font-weight: 600;
  width: max-content;
  padding-right: 0.5rem;
`;
export const AttributeValue = styled.span`
  flex: 1;
`;

export const BorderCountriesContainer = styled(AttributeValue)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: max-content;
`;

export const BorderCountry = styled.span`
  background: ${(props) => Themes[props.currentTheme].elementsBackgroundColor};
  min-width: 6rem;
  padding: 5px 3px 6px 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  border-radius: 2px;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
`;
