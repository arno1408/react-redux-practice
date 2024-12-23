import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import RoleProvider from "./components/RoleProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RoleProvider>
      <App />
    </RoleProvider>
  </BrowserRouter>
);
