import React, { createContext, useState } from 'react';
import { listCustomers, createCustomer } from '../services/api/customerService';

export const AppContext = createContext(null);


const AppContextContainer = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [customers, setCustomers] = useState()


    const getCustomersList = async () => {
        setLoading(true)
        const response = await listCustomers();
        const { data } = response;

        setCustomers(data);

        setLoading(false)
    }

    const context = {
        customers,
        getCustomersList,
        loading
    }

    return <AppContext.Provider value={context}>
        {children}
    </AppContext.Provider>
}

export default AppContextContainer