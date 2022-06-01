import styled from "@emotion/styled";
import { Themes } from "./constants/themes";

export const AppContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  background: ${(props) => Themes[props.currentTheme].backgroundColor};
  color: ${(props) => Themes[props.currentTheme].textColor};
  input,
  input::placeholder,
  button {
    background-color: transparent;
    color: ${(props) => Themes[props.currentTheme].textColor};
  }
`;
