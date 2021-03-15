import { unauthAxiosCall } from '../axiosCall';

export const listCustomers = async () => {
    return unauthAxiosCall('customer/list', {
        method: "GET",
    })
}

export const createCustomer = async (firstName, lastName, ci, phone, email, birthDate) => {
    return unauthAxiosCall('customer/create', {
        method: "POST",
        body: {
            firstName, lastName, ci, phone, email, birthDate
        }
    })
}