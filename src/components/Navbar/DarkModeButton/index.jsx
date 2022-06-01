import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../../../redux/actions/themeActions";
import NightIcon from "../../../assets/night-mode.png";
import LightIcon from "../../../assets/icons8-sun-48.png";

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
      <button
        onClick={handleClick}
        style={{
          background: "transparent",
          border: "none",
          display: "flex",
          fontSize: "16px",
          textTransform: "capitalize",
          alignItems: "center",
          lineHeight: "22px",
          cursor: "pointer",
        }}
      >
        <img
          src={selectedTheme === "light" ? NightIcon : LightIcon}
          alt="night mode icon"
          style={{ height: "20px", width: "20px", marginRight: "8px" }}
        />
        <span>{selectedTheme === "light" ? "dark" : "light"} Mode</span>
      </button>
    </div>
  );
};

export default DarkModeButton;
