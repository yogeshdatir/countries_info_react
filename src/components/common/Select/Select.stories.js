import React, { useState } from "react";
import Select from "./Select";

export default {
  title: "Select Dropdown",
  component: Select,
};

export const Primary = () => {
  // Sets the hooks for both the label and primary props
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  return (
    <Select
      selectedRegion={selectedRegion}
      setSelectedRegion={setSelectedRegion}
      options={[
        { value: "Africa", displayValue: "Africa" },
        { value: "America", displayValue: "America" },
        { value: "Asia", displayValue: "Asia" },
        { value: "Europe", displayValue: "Europe" },
        { value: "Oceania", displayValue: "Oceania" },
      ]}
    />
  );
};
