import { unauthAxiosCall, authAxiosCall } from '../axiosCall';


export const createCar = async (brand, model, engineNumber, entryKM, buyValue, plate) => {
    return unauthAxiosCall('car/create', {
        method: "POST",
        body: {
            brand, model, engineNumber, entryKM, buyValue, plate
        }
    })
}

export const listCars = async () => {
    return authAxiosCall('car/list', {
        method: "GET",
    })
}
