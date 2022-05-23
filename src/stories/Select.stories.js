import Select from "../components/common/Select/Select";

export default {
  title: "Select Dropdown",
  component: Select,
};
// TODO: How to trigger function from props with argument/s in story
const Template = (args) => <Select {...args} />;

export const SelectDropdown = Template.bind({});

SelectDropdown.args = {
  selectedRegion: "Filter by Region",
  setSelectedRegion: () => {
    console.log("a");
  },
  options: [
    { value: "Africa", displayValue: "Africa" },
    { value: "America", displayValue: "America" },
    { value: "Asia", displayValue: "Asia" },
    { value: "Europe", displayValue: "Europe" },
    { value: "Oceania", displayValue: "Oceania" },
  ],
};
