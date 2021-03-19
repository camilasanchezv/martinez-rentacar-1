import React, { createContext, useEffect, useState } from 'react';
import { listCustomers, createCustomer, createCar } from '../services/api/customerService';

import { useHistory } from 'react-router-dom'
export const AppContext = createContext(null);

const PageTitles = {
    customer: "Nuevo Cliente",
    car: "Nuevo Auto",
    customerslist: "Lista de Clientes"
}

const getTitleByPathname = path => {
    switch (true) {
        case path.startsWith("/customers-list"):
            return PageTitles['customerslist'];

        case path.startsWith("/customer"):
            return PageTitles['customer'];

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
    const [customers, setCustomers] = useState();

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

    // NEW CAR
    const newCar = async (model, engineNumber, entryKM, buyValue, plate) => {
        setLoading(true);
        await createCar(model, engineNumber, entryKM, buyValue, plate);
        setLoading(false)
    }

    const context = {
        customers,
        setCustomers,
        getCustomersList,
        loading,
        newCustomer,
        newCar,
        title
    }

    return <AppContext.Provider value={context}>
        {children}
    </AppContext.Provider>
}

export default AppContextContainer
