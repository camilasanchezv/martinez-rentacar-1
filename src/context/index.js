import React, { createContext, useEffect, useState } from "react";
import { listCustomers, createCustomer } from "../services/api/customerService";
import {
  createCar,
  listCars,
  editCar,
  getCar as getCarService,
} from "../services/api/carService";
import { createUser, signIn } from "../services/api/userService";

import { useHistory } from "react-router-dom";
import { setCurrentUser, setToken } from "../utils/Auth";
import { uploadFile } from "../services/api/fileService";
import { useSnackbar } from "notistack";
export const AppContext = createContext(null);

// TITLES
const PageTitles = {
  customer: "Nuevo Cliente",
  car: "Nuevo Auto",
  customerslist: "Lista de Clientes",
  carslist: "Lista de Autos",
  signup: "Nuevo Usuario",
};

const getTitleByPathname = (path) => {
  switch (true) {
    case path.startsWith("/sign-up"):
      return PageTitles["signup"];

    case path.startsWith("/customers-list"):
      return PageTitles["customerslist"];

    case path.startsWith("/customer"):
      return PageTitles["customer"];

    case path.startsWith("/cars-list"):
      return PageTitles["carsList"];

    case path.startsWith("/car"):
      return PageTitles["car"];

    default:
      return "Martinez Rent a car";
  }
};

// CONTEXT
const AppContextContainer = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  
  const [title, setTitle] = useState("");


  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    generateNewTitle(history.location.pathname);
    history.listen(({ pathname }) => {
      generateNewTitle(pathname);
    });
  }, [history]);

  const generateNewTitle = (pathname) => setTitle(getTitleByPathname(pathname));

  // GET CUSTOMERS
  const getCustomersList = async () => {
    setLoading(true);
    const response = await listCustomers();
    const { data } = response;

    setCustomers(data);

    setLoading(false);
  };
  // NEW CUSTOMER
  const newCustomer = async (
    firstName,
    lastName,
    ci,
    phone,
    email,
    birthDate
  ) => {
    setLoading(true);
    await createCustomer(firstName, lastName, ci, phone, email, birthDate);
    setLoading(false);
  };

  // GET CARS
  const getCarsList = async () => {
    setLoading(true);
    const response = await listCars();
    const { data } = response;

    setCars(data);

    setLoading(false);
  };
  // NEW CAR
  const newCar = async (
    brand,
    model,
    engineNumber,
    entryKM,
    buyValue,
    plate,
    images
  ) => {
    setLoading(true);
    await createCar(brand, model, engineNumber, entryKM, buyValue, plate, images);
    setLoading(false);
  };

  // GET CAR
  const getCar = async (id) => {
    setLoading("Obteniendo informacion del auto...");
    try {
      const car = await getCarService(id);
      setLoading(false);
      return car.data;
    } catch (error) {
      setLoading(false);
      return { error: 'Este auto no existe.' };
    }
  };
  // MODIFY CAR
  const modifyCar = async (
    brand,
    model,
    engineNumber,
    entryKM,
    buyValue,
    plate,
    images,
    _id
  ) => {
    setLoading(true);
    await editCar(brand, model, engineNumber, entryKM, buyValue, plate, images, _id);
    enqueueSnackbar("El auto ha sido modificado con exito!")
    setLoading(false);
  };

  // NEW USER
  const newUser = async (firstName, lastName, phone, email, password, role) => {
    setLoading(true);
    await createUser(firstName, lastName, phone, email, password, role);
    setLoading(false);
  };

  // SIGN IN
  const logIn = async (email, password) => {
    setLoading(true);
    try {
      const response = await signIn(email, password);
      const { accessToken, ...user } = response.data;

      setToken(accessToken);
      setCurrentUser(user);
      history.push("/home");
    } catch (error) {
      setLoading(false);
      if (error.response.status == 404) {
        return { error: "Usuario inválido" };
      } else if (error.response.status == 401) {
        return { error: "Contraseña inválida" };
      } else {
        return { error: "Ha ocurrido un error" };
      }
    }
    setLoading(false);
  };


  const uploadFileHandler = async file => {
    setLoading(`Subiendo... ${file.name}`)
    const fileResponse = await uploadFile(file);
    setLoading(false)
    return fileResponse.data.data.url;
  }

  const context = {
    setCustomers,
    getCustomersList,
    loading,
    newCustomer,
    customers,
    newCar,
    getCarsList,
    cars,
    title,
    newUser,
    logIn,
    modifyCar,
    getCar,
    uploadFileHandler
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContextContainer;
