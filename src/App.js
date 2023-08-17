import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
// import About from "./components/About";
import React, { useState } from "react";
import CustomRoutes from "./Routes/CustomRoutes";

function App() {
  const [mode, setMode] = useState("light");
  const [modeNamechange, setModeNamechange] = useState("Enable Dark Mode");

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeNamechange("Enable Light Mode");
      // for enable dark backgraound color.
      document.body.style.backgroundColor = "#042743";
      showAlert(" Dark mode has been enabled", "Success: ");
    } else {
      setMode("light");
      setModeNamechange("Enable Dark Mode");
      document.body.style.backgroundColor = "#fff";
      showAlert(" Light mode has been enabled", "Success: ");
    }
  };
  // usestate for alert
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      massage: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return(
  <>
    <Navbar
      title="TextUtils"
      mode={mode}
      handleMode={handleMode}
      modeNamechange={modeNamechange}
      aboutText="About TextUtils"
    />
    <Alert alert={alert} />
    <CustomRoutes/>

  </>
  )
}
export default App;
