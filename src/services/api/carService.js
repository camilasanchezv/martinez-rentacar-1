import { unauthAxiosCall, authAxiosCall } from '../axiosCall';


export const createCar = async (brand, model, engineNumber, entryKM, buyValue, plate, images) => {
    return unauthAxiosCall('car/create', {
        method: "POST",
        body: {
            brand, model, engineNumber, entryKM, buyValue, plate, images
        }
    })
}

export const listCars = async () => {
    return authAxiosCall('car/list', {
        method: "GET",
    })
}

export const editCar = async (brand, model, engineNumber, entryKM, buyValue, plate, images, _id) => {
    return authAxiosCall('car/update', {
        method: "PUT",
        body: {
            brand, model, engineNumber, entryKM, buyValue, plate, images, _id
        }
    })
}


export const getCar = async (id) => {
    return authAxiosCall(`car/${id}`, {
        method: "GET",
    })
}