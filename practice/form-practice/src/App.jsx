import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import AdminPage from "./components/AdminPage";
import UserPage from "./components/UserPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useContext } from "react";
import { RoleContext } from "./components/RoleProvider";

function App() {
  const { user } = useContext(RoleContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute element={AdminPage} allowedRoles={["admin"]} />
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute
              element={UserPage}
              allowedRoles={["admin", "user"]}
            />
          }
        />
        <Route
          path="/user/:id"
          element={
            <ProtectedRoute element={UserPage} allowedRoles={["admin"]} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
