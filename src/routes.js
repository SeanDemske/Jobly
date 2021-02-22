import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignupForm from "./Components/SignupForm/SignupForm";
import Companies from "./Components/Companies/Companies";
import Jobs from "./Components/Jobs/Jobs";
import Profile from "./Components/ProfileForm/ProfileForm";
import ProfileForm from "./Components/ProfileForm/ProfileForm";

function Routes() {
  return (
    <Switch>
      <Route exact path="/profile"><ProfileForm /></Route>
      <Route exact path="/signup"><SignupForm /></Route>
      <Route exact path="/login"><LoginForm /></Route>
      <Route exact path="/jobs"><Jobs /></Route>
      <Route exact path="/companies/:id"><div>Company Detail</div></Route>
      <Route exact path="/companies"><Companies /></Route>
      <Route exact path="/"><Home/></Route>
      <Route><div>Not Found</div></Route>
    </Switch>
  );
}

export default Routes;
