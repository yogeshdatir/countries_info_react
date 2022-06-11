import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppContainer } from "./App.styled";
import Navbar from "./components/Navbar";
import CountriesList from "./pages/CountriesList";
import CountryDetails from "./pages/CountryDetails";
import { setTheme } from "./redux/actions/themeActions";

function App() {
  const { currentTheme } = useSelector((state) => {
    return state.theme;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme("light"));
  }, [dispatch]);

  return (
    <AppContainer currentTheme={currentTheme} data-testid="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/:id" element={<CountryDetails />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
