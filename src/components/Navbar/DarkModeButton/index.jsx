import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../../../redux/actions/themeActions";

const DarkModeButton = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const dispatch = useDispatch();
  const handleClick = () => {
    setSelectedTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    dispatch(setTheme(selectedTheme));
  }, [dispatch, selectedTheme]);

  return (
    <div>
      <button onClick={handleClick}>Dark mode</button>{" "}
    </div>
  );
};

export default DarkModeButton;
