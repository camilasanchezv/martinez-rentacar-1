import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Car, Customer, ListOfCustomers, ListOfCars, SignUp, CarEdit, CustomerInfo, CarInfo } from "../screens";
import { isLoggedIn } from "../utils/Auth";
import logo from '../assets/logo.jpg'
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

      <PrivateRoute path="/car/edit/:id">
        <CarEdit />
      </PrivateRoute>

      <PrivateRoute path="/car/list">
        <ListOfCars />
      </PrivateRoute>

      <PrivateRoute path="/car/:id">
        <CarInfo />
      </PrivateRoute>

      <PrivateRoute path="/car">
        <Car />
      </PrivateRoute>

      <PrivateRoute path="/customer-info/:id">
        <CustomerInfo />
      </PrivateRoute>

      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

function Home() {
  return <img src={logo} style={{ width: "100%", marginTop: 12 }} />;
}



