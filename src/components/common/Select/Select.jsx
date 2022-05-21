import React, { useRef, useState } from "react";
import {
  ArrowIcon,
  Dropdown,
  OptionItem,
  OptionsBox,
  SelectBox,
} from "./Select.styled";
import ArrowPng from "../../../assets/arrow-down.png";
import useClickOutside from "../../../hooks/useClickOutside";

const Select = ({ selectedRegion, setSelectedRegion, options }) => {
  const [isActive, setIsActive] = useState(false);

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => {
    if (isActive) setIsActive(!isActive);
  });

  const handleDropdownClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Dropdown ref={wrapperRef} onClick={handleDropdownClick}>
      <SelectBox>
        {selectedRegion}
        <ArrowIcon isActive={isActive} src={ArrowPng} alt="expand" />
      </SelectBox>
      <OptionsBox isActive={isActive}>
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
