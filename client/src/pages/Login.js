import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";

const Login = () => {
  const authContext = useContext(AuthContext);
  const { login } = authContext;
  return <div className="login">{login}</div>;
};

export default Login;
