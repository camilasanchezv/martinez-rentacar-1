import { unauthAxiosCall } from '../axiosCall';

export const createUser = async (firstName, lastName, phone, email, password) => {
    return unauthAxiosCall('auth/sign-up', {
        method: "POST",
        body: {
            firstName, lastName, phone, email, password
        }
    })
}