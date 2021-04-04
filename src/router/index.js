import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Car, Customer, ListOfCustomers, ListOfCars, SignUp } from "../screens";
import { isLoggedIn } from "../utils/Auth";

const PrivateRoute = ({ children: Component, ...rest }) => {
  return (
    <Route {...rest}>
      {isLoggedIn() ?
        Component
        : <Redirect to="/login" />}
    </Route>
  );
};

export default function MainRouter() {
  return (

    <Switch>
      <PrivateRoute path="/sign-up">
        <SignUp />
      </PrivateRoute>
      <PrivateRoute path="/customer">
        <Customer />
      </PrivateRoute>
      <PrivateRoute path="/customers-list">
        <ListOfCustomers />
      </PrivateRoute>
      <PrivateRoute path="/car">
        <Car />
      </PrivateRoute>
      <PrivateRoute path="/cars-list">
        <ListOfCars />
      </PrivateRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

function Home() {
  return <h2>Martinez Rent a car</h2>;
}



