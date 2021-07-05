import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { project } from "../ProjectProperties";

const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext();
  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? (
          children
        ) : (
          <Redirect to={project.nav.homepage}></Redirect>
        );
      }}
    ></Route>
  );
};
export default PrivateRoute;
