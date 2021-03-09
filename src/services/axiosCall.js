import axios from 'axios';

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
        header: requestOptions.header
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
            authorization: 'bearer 12693gf1wydvb981g6eg12gw078g',
            ...requestOptions.headers
        }
    })
}

export const unauthAxiosCall = async (path, requestOptions) => {
    return await axiosCall(path, requestOptions)
}
