import Select from "../components/common/Select/Select";

export default {
  title: "Select Dropdown",
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const SelectDropdown = Template.bind({});

SelectDropdown.args = {};
