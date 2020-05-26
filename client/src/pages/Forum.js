import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";

const Forum = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, login, logout } = authContext;
  return (
    <div className="login">
      {!isAuthenticated ? (
        <button onClick={() => login()}>Login</button>
      ) : (
        <button onClick={() => logout()}>logout</button>
      )}
    </div>
  );
};

export default Forum;
