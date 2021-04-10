import { unauthAxiosCall, authAxiosCall } from '../axiosCall';


export const createCar = async (brand, model, engineNumber, entryKM, buyValue, plate, image) => {
    return unauthAxiosCall('car/create', {
        method: "POST",
        body: {
            brand, model, engineNumber, entryKM, buyValue, plate, image
        }
    })
}

export const listCars = async () => {
    return authAxiosCall('car/list', {
        method: "GET",
    })
}

export const editCar = async (brand, model, engineNumber, entryKM, buyValue, plate, _id) => {
    return authAxiosCall('car/update', {
        method: "PUT",
        body: {
            brand, model, engineNumber, entryKM, buyValue, plate, _id
        }
    })
}
