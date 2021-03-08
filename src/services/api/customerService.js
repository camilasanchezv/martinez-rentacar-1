import { unauthAxiosCall } from '../axiosCall';

export const listCustomers = async () => {
    return unauthAxiosCall('customer/list', {
        method: "GET"
    })
}

export const createCustomer = async (first_name, last_name, ci, phone, email, birthDate) => {
    return unauthAxiosCall('customer/create', {
        method: "POST",
        body: {
            first_name, last_name, ci, phone, email, birthDate
        }
    })
}