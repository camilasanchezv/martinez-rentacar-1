import React, { useState, useContext, useEffect } from "react";
import {
  Form,
  FormField,
  TextInput,
  Text,
  Box,
  Button,
  FileInput,
  Carousel,
  Image,
} from "grommet";
import { useSnackbar } from "notistack";
import { AppContext } from "../../context";
import "./styles.scss";

const defaultValue = {
  brand: "",
  model: "",
  engineNumber: "",
  entryKM: "",
  buyValue: "",
  plate: "",
};

export default function ModifyCar({ modify = false, car = 'null', handleSubmit = null }) {
  const context = useContext(AppContext);

  const [value, setValue] = useState({});
  const [image, setImage] = useState({
    /* CAR IMAGE */
  });

  const [images, setImages] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const modifyInitialization = () => {
    // SET CAR VALUE WITH CAR INFO
    const carValue = {
      brand: car.brand,
      model: car.model,
      engineNumber: car.engineNumber,
      entryKM: car.entryKM,
      buyValue: car.buyValue,
      plate: car.plate,
    };

    setImages(car.images);

    setValue(carValue);
  };

  const submitHandler = () => handleSubmit(value)

  useEffect(() => {
    if (modify) {
      modifyInitialization();
    }
  }, [car]);

  useEffect(() => {
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        setImage(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImage(
        "https://cdn4.iconfinder.com/data/icons/interface-79/24/add_small_interface_plus-512.png"
      );
    }
  }, [value.image]);

  const submitHandlerCreate = async (e) => {
    e.preventDefault();

    const documents = [];
    if (value.images) {
      for (let i of value.images) {
        const document = await context.uploadFileHandler(i);
        documents.push(document._id);
      }
    }

    await context.newCar(
      value.brand,
      value.model,
      value.engineNumber,
      value.entryKM,
      value.buyValue,
      value.plate,
      documents
    );
    enqueueSnackbar("Nuevo auto registrado.");

    setImage(
      "https://cdn4.iconfinder.com/data/icons/interface-79/24/add_small_interface_plus-512.png"
    );
    const dataTransfer = new DataTransfer();
    document.querySelector("input[type=file]").files = dataTransfer.files;
    setValue(defaultValue);
  };

  return (
    <div className="car-form-container">
      <Form
        className="form"
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onSubmit={modify ? submitHandler : submitHandlerCreate}
      >
        <div className="car-form">
          <div className="form-column">
            <FormField className="input" label="Marca">
              <TextInput name="brand" />
            </FormField>
            <FormField className="input" label="Modelo">
              <TextInput name="model" />
            </FormField>
            <FormField className="input" label="Número de Motor">
              <TextInput type="number" name="engineNumber" />
            </FormField>
            <FormField className="input" label="Matrícula">
              <TextInput name="plate" />
            </FormField>
            <FormField className="input" label="Kilómetros de Entrada">
              <TextInput type="number" name="entryKM" />
            </FormField>
            <FormField className="input" label="Valor de Compra (USD)">
              <TextInput type="number" name="buyValue" />
            </FormField>

            <Box className="button" direction="row" gap="medium">
              {modify ? (
                <Button type="submit" label="Guardar" primary />
              ) : (
                <>
                  <Button type="submit" label="Enviar" primary />
                  <Button className="reset" type="reset" label="Borrar" />
                </>
              )}
            </Box>
          </div>
          <div className="form-column">
            {modify && (
              <Box height="medium" width="100%" overflow="hidden">
                <Carousel fill>
                  {images && images.map((i) => (
                    <Image fit="cover" src={i} width="100%" />
                  ))}
                </Carousel>
              </Box>
            )}
            <div className="image-uploader-container">
              <FileInput
                name="images"
                className="image-uploader"
                multiple
                renderFile={(file) => {
                  return (
                    <Box
                      direction="row"
                      gap="small"
                      className="image-uploader-preview-container"
                    >
                      <img
                        src={
                          typeof file === "string"
                            ? file
                            : URL.createObjectURL(file)
                        }
                        alt={file.name}
                        className="image-uploader-preview"
                      />
                      <Text weight="bold">{file.name}</Text>
                      <Text color="text-weak">{file.size} bytes</Text>
                    </Box>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
