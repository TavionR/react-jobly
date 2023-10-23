import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import Jobs from "./Jobs";
import Profile from "./Profile";
import SignUp from "./SignUp";
import Company from "./Company";
import Logout from "./Logout";
import PrivateRoute from './PrivateRoutes';

class Routes extends Component {
  render() {
    const { updateUserDetails, loginUser, logOutUser } = this.props;
    return (
      <Link>
        <Route exact path="/" render={() => <Home/>} />
        <PrivateRoute exact path="/companies" render={() => <Companies />} />
        <PrivateRoute exact path="/companies/:handle" render={(rtProps)=> <Company {...rtProps} updateCurrUser={updateUserDetails}/>} />
        <PrivateRoute exact path="/jobs" render={() => <Jobs updateCurrUser={updateUserDetails}/>} />
        <Route exact path="/profile" render={() => <Profile updateCurrUser={updateUserDetails} />} />
        <Route exact path="/SignUp" render={(rtProps) => <SignUp {...rtProps} SignUp={SignUp}/>} />
        <Route exact path="/logout" render={() => <Logout logOutUser={logOutUser}/>} />
        <Route exact path="/login" render={() => <Login logInUser={logInUser}/>} />
        <Route render={() => <NotFound />}/>
      </Link>
    );
  }
}

export default Routes;