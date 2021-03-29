import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Car, Customer, ListOfCustomers, ListOfCars, SignUp } from "../screens";
import { isLoggedIn } from "../utils/Auth";

const PrivateRoute = ({ children: Component, ...rest }) => {
  return (
    <Route {...rest}>
      isLoggedIn() ?
      {Component}
      : <Redirect to="/login" />
    </Route>
  );
};

export default function MainRouter() {
  return (

    // change each Route to PrivateRoute when sign up finished
    <Switch>
      <Route path="/sign-up">
        <SignUp />
      </Route>
      <Route path="/customer">
        <Customer />
      </Route>
      <Route path="/customers-list">
        <ListOfCustomers />
      </Route>
      <Route path="/car">
        <Car />
      </Route>
      <Route path="/cars-list">
        <ListOfCars />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

function Home() {
  return <h2>Martinez Rent a car</h2>;
}



