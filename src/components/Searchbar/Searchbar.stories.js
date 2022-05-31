import { Provider } from "react-redux";
import Searchbar from "./";
import store from "../../redux/store";

export default {
  title: "Searchbar",
  component: Searchbar,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export const SearchbarStory = (args) => <Searchbar {...args} />;
