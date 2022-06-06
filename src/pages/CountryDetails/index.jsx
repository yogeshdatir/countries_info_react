import React from "react";
import {
  BackButton,
  BackIcon,
  DetailsContainer,
} from "./CountryDetails.styled";
import BackArrow from "../../assets/icons8-left-50.png";
import { useNavigate } from "react-router-dom";
import CountryDetailsCard from "../../components/CountryDetailsCard";

const CountryDetails = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <DetailsContainer>
      <BackButton onClick={handleBack}>
        <BackIcon src={BackArrow} alt="Go back icon" />
        <span>Back</span>
      </BackButton>
      <CountryDetailsCard />
    </DetailsContainer>
  );
};

export default CountryDetails;
