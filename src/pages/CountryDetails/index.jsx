import React from "react";
import {
  BackButton,
  BackIcon,
  DetailsContainer,
} from "./CountryDetails.styled";
import BackArrow from "../../assets/icons8-left-50.png";
import BackArrowDarkThemed from "../../assets/icons8-left-50 dark mode.png";
import { useNavigate } from "react-router-dom";
import CountryDetailsCard from "../../components/CountryDetailsCard";
import { useSelector } from "react-redux";

const CountryDetails = () => {
  const { currentTheme } = useSelector((state) => {
    return state.theme;
  });

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <DetailsContainer>
      <BackButton onClick={handleBack} currentTheme={currentTheme}>
        <BackIcon
          src={currentTheme === "light" ? BackArrow : BackArrowDarkThemed}
          alt="Go back icon"
        />
        <span>Back</span>
      </BackButton>
      <CountryDetailsCard />
    </DetailsContainer>
  );
};

export default CountryDetails;
