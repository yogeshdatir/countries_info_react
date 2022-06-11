import styled from "@emotion/styled";
import { Container } from "../../components/common/Container";
import { Themes } from "../../constants/themes";

export const DetailsContainer = styled(Container)`
  padding-top: 80px;

  @media (max-width: 900px) {
    padding-top: 2.5rem;
  }
`;

export const BackButton = styled.button`
  background: ${(props) => Themes[props.currentTheme].elementsBackgroundColor};
  padding: 10px 22px;
  margin-bottom: 10vh;
  width: 136px;
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
  border-radius: 6px;

  @media (max-width: 900px) {
    margin-bottom: 5vh;
  }
`;

export const BackIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10px;
`;
