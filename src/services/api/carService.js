import {unauthAxiosCall} from '../axiosCall';


export const createCar = async (brand, model, engineNumber, entryKM, buyValue, plate) => {
    return unauthAxiosCall('car/create', {
        method: "POST",
        body: {
            brand, model, engineNumber, entryKM, buyValue, plate
        }
    })
}

export const listCars = async () => {
    return unauthAxiosCall('car/list', {
        method: "GET",
    })
}
