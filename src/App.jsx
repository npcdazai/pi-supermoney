import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStateContext from "./contexts/GlobalStateContext";
import Login from "./pages/OnBoarding/Login";
import SignUp from "./pages/OnBoarding/SignUp";
import DashBoard from "./pages/DashBoard";

const App = () => {
  const context = useContext(GlobalStateContext);
  if (!context)
    throw new Error("App must be used within a GlobalStateProvider");
  const { isAuthenticate } = context;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/"
            element={isAuthenticate === true ? <DashBoard /> : <Login />}
          />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
