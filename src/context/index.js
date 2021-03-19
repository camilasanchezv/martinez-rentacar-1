import React, { createContext, useEffect, useState } from 'react';
import { listCustomers, createCustomer } from '../services/api/customerService';
import {createCar, listCars} from '../services/api/carService';

import { useHistory } from 'react-router-dom'
export const AppContext = createContext(null);

const PageTitles = {
    customer: "Nuevo Cliente",
    car: "Nuevo Auto",
    customerslist: "Lista de Clientes",
    carsList: "Lista de Autos"
}

const getTitleByPathname = path => {
    switch (true) {
        case path.startsWith("/customers-list"):
            return PageTitles['customerslist'];

        case path.startsWith("/customer"):
            return PageTitles['customer'];

        case path.startsWith("/cars-list"):
            return PageTitles['carsList'];

        case path.startsWith("/car"):
            return PageTitles['car'];


        default:
            return "Martinez Rent a car"

    }
}

const AppContextContainer = ({ children }) => {
    const [title, setTitle] = useState("")

    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [customers, setCustomers] = useState([]);
    const [cars, setCars] = useState([])

    useEffect(() => {
        generateNewTitle(history.location.pathname);
        history.listen(({ pathname }) => {
            generateNewTitle(pathname)
        })
    }, [history])

    const generateNewTitle = pathname => setTitle(getTitleByPathname(pathname))

    // GET CUSTOMERS
    const getCustomersList = async () => {
        setLoading(true)
        const response = await listCustomers();
        const { data } = response;

        setCustomers(data);

        setLoading(false)
    }

    // NEW CUSTOMER
    const newCustomer = async (firstName, lastName, ci, phone, email, birthDate) => {
        setLoading(true);
        await createCustomer(firstName, lastName, ci, phone, email, birthDate);
        setLoading(false)
    }
    // GET CARS
    const getCarsList = async () => {
        setLoading(true)
        const response = await listCars();
        const { data } = response;

        setCars(data);

        setLoading(false)
    }

    // NEW CAR
    const newCar = async (brand, model, engineNumber, entryKM, buyValue, plate) => {
        setLoading(true);
        await createCar(brand, model, engineNumber, entryKM, buyValue, plate);
        setLoading(false)
    }

    

    const context = {
        setCustomers,
        getCustomersList,
        loading,
        newCustomer,
        customers,
        newCar,
        getCarsList,
        cars,
        title,
    }

    return <AppContext.Provider value={context}>
        {children}
    </AppContext.Provider>
}

export default AppContextContainer
