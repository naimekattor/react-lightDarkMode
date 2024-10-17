import { useEffect, useState } from "react";
import "./LightDark.css";
//get local Storage
const getLocalStorage = () => {
  let data = localStorage.getItem("theme");
  if (data) {
    return JSON.parse(localStorage.getItem("theme"));
  }
};
const LightDarkMode = () => {
  const [dark, setDark] = useState(getLocalStorage());
  //Add Local Storage
  useEffect(() => {
    localStorage.setItem("theme", dark);
  }, [dark]);
  return (
    <div className={`light-dark-mode ${dark ? "dark-mode" : ""}`}>
      <h2>Hello World!</h2>
      <button onClick={() => setDark(!dark)}>Dark Mode</button>
    </div>
  );
};

export default LightDarkMode;
