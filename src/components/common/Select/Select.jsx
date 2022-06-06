import React, { useRef, useState } from "react";
import {
  ArrowIcon,
  Dropdown,
  OptionItem,
  OptionsBox,
  SelectBox,
} from "./Select.styled";
import ArrowPng from "../../../assets/icons8-expand-arrow-50 dark.png";
import ArrowPngLight from "../../../assets/icons8-expand-arrow-50.png";
import useClickOutside from "../../../hooks/useClickOutside";
import { useSelector } from "react-redux";

const Select = ({ selectedRegion, setSelectedRegion, options }) => {
  const [isActive, setIsActive] = useState(false);
  const { currentTheme } = useSelector((state) => {
    return state.theme;
  });

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => {
    if (isActive) setIsActive(!isActive);
  });

  const handleDropdownClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Dropdown
      data-testid="select-container"
      ref={wrapperRef}
      onClick={handleDropdownClick}
      currentTheme={currentTheme}
    >
      <SelectBox currentTheme={currentTheme} data-testid="select-field">
        <span>{selectedRegion}</span>
        <ArrowIcon
          isActive={isActive}
          src={currentTheme === "light" ? ArrowPng : ArrowPngLight}
          alt="expand"
        />
      </SelectBox>
      <OptionsBox
        data-testid="options-box"
        isActive={isActive}
        currentTheme={currentTheme}
      >
        {options?.map(({ value, displayValue }) => {
          return (
            <OptionItem
              key={value}
              onClick={() => setSelectedRegion(value)}
              value={value}
              selectedOption={value === selectedRegion}
            >
              {displayValue}
            </OptionItem>
          );
        })}
      </OptionsBox>
    </Dropdown>
  );
};

export default Select;
