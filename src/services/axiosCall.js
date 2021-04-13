import axios from 'axios';
import { getToken } from '../utils/Auth'
const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

const axiosCall = async (path, { query, ...requestOptions }) => {
    const response = await axiosInstance({
        method: requestOptions.method,
        url: `https://martinez-rentacar.herokuapp.com/api/v1/${path}`,
        data: requestOptions.body,
        headers: requestOptions.headers
    })

    if (response.status >= 200 && response.status < 400) return response

    if (response.status < 500) {
        return {
            error: "Error"
        }
    }
}

export const authAxiosCall = async (path, requestOptions) => {
    return await axiosCall(path, {
        ...requestOptions,
        headers: {
            authorization: getToken(),
            ...requestOptions.headers
        }
    })
}

export const unauthAxiosCall = async (path, requestOptions) => {
    return await axiosCall(path, requestOptions)
}
