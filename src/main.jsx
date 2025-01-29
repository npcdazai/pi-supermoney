import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider.jsx";
import GlobalStateProvider from "./contexts/GlobalStateProvider.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalStateProvider>
    <Provider>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </GlobalStateProvider>
);
