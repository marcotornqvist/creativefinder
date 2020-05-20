import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import CreativeContext from "../context/creative/creativeContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const creativeContext = useContext(CreativeContext);
  const { isAuthenticated } = creativeContext;
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
