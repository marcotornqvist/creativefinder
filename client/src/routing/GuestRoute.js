import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import CreativeContext from "../context/creative/creativeContext";

const GuestRoute = ({ component: Component, ...rest }) => {
  const creativeContext = useContext(CreativeContext);
  const { isAuthenticated } = creativeContext;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Redirect to="/creatives" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default GuestRoute;
