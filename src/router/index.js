import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import { Car, Customer } from "../screens";

export default function MainRouter() {
    return (
            <Switch>
                <Route path="/customer">
                    <Customer />
                </Route>
                <Route path="/car">
                    <Car />
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
