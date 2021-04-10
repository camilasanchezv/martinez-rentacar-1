import { unauthAxiosCall } from '../axiosCall';

export const createUser = async (firstName, lastName, phone, email, password, role) => {
    return unauthAxiosCall('auth/sign-up', {
        method: "POST",
        body: {
            firstName, lastName, phone, email, password, role
        }
    })
}

export const signIn = async (email, password) => {
    return unauthAxiosCall('auth/sign-in', {
        method: "POST",
        body: {
            email, password
        }
    })
}