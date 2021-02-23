import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignupForm from "./Components/SignupForm/SignupForm";
import Companies from "./Components/Companies/Companies";
import Jobs from "./Components/Jobs/Jobs";
import CompaniesJobs from "./Components/CompaniesJobs/CompaniesJobs";
import ProfileForm from "./Components/ProfileForm/ProfileForm";

function Routes({ signup, login }) {
  return (
    <Switch>
      <Route exact path="/profile"><ProfileForm /></Route>
      <Route exact path="/signup"><SignupForm signup={signup} /></Route>
      <Route exact path="/login"><LoginForm login={login} /></Route>
      <Route exact path="/jobs"><Jobs /></Route>
      <Route exact path="/companies/:companyId"><CompaniesJobs /></Route>
      <Route exact path="/companies"><Companies /></Route>
      <Route exact path="/"><Home/></Route>
      <Route><div className="list-container">Not Found</div></Route>
    </Switch>
  );
}

export default Routes;
