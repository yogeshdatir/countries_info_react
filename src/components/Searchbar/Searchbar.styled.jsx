import styled from "@emotion/styled";
import { Themes } from "../../constants/themes";

export const SearchInputContainer = styled.div`
  width: 37.5%;
  height: 56px;
  transition: all 0.2s ease-in;
  background: ${(props) => Themes[props.currentTheme].elementsBackgroundColor};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 32px;

  @media (max-width: 480px) {
    width: auto;
  }
`;

export const SearchIcon = styled.img`
  width: 18px;
`;

export const SearchInput = styled.input`
  height: 20px;
  width: 100%;
  border: none;
  padding: 0 24px;
  outline: none;
`;
