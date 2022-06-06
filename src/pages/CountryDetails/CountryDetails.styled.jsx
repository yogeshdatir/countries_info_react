import styled from "@emotion/styled";
import { Container } from "../../components/common/Container";

export const DetailsContainer = styled(Container)`
  padding-top: 80px;
`;

export const BackButton = styled.button`
  background: transparent;
  padding: 10px 22px;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BackIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10px;
`;
