import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

/** "Higher-Order Component" for private routes.
 *
 * In routing component, use these instead of <Route ...>. This component
 * will check if there is a valid current user and only continues to the
 * route if so. If no user is present, redirects to login form.
 */

function PrivateRoute({ exact, path, children }) {

  const { currentUser } = useContext(UserContext);

	//write a debug statement
    console.debug("PrivateRoute - currentUser:", currentUser);

//write a conditional that will redirect a user to login if they are not logged in and attempt to view a protected route
   if (!currentUser) {
    return <Navigate to="/login" />;
  }
//return a route using the parameters passed in the function
return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}



export default PrivateRoute;