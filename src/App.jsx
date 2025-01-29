import React, { useContext } from "react";
import GlobalStateContext from "./contexts/GlobalStateContext";
import Login from "./pages/OnBoarding/Login";

const App = () => {
  const context = useContext(GlobalStateContext);

  return (
    <div>
      <Login />
    </div>
  );
};

export default App;
