import styled from "@emotion/styled";
import { Themes } from "./constants/themes";

export const AppContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  transition: all 0.2s ease-in;
  background: ${(props) => Themes[props.currentTheme].backgroundColor};
`;
