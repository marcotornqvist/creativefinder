import React, { useReducer } from "react";
// import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { LOGIN, LOGOUT } from "../types";

const AuthState = props => {
  const initialState = {
    isAuthenticated: false
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Login User
  const login = () => dispatch({ type: LOGIN });

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        login,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
