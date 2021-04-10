import React, { useState, useContext, useEffect } from 'react';
import { Form, FormField, TextInput, Box, Button, FileInput } from 'grommet';
import { useSnackbar } from 'notistack';
import { AppContext } from '../../context';
import './styles.scss';

export default function ModifyCar() {
    const context = useContext(AppContext);

    const [value, setValue] = useState({});
    const [image, setImage] = useState({/* CAR IMAGE */ });
    const { enqueueSnackbar } = useSnackbar();

    const carId = '60720cf19bd354001591f622';
    const modify = true;

    useEffect(() => {
        // GET CAR WITH ID

        // SET CAR VALUE WITH CAR INFO
        const carValue = {
            brand: 'car brand',
            model: 'car model',
            engineNumber: '0',
            entryKM: '0',
            buyValue: '0',
            plate: 'car plate',
        }
        setValue(carValue);

    }, [])

    useEffect(() => {
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            setImage(reader.result)
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImage('https://cdn4.iconfinder.com/data/icons/interface-79/24/add_small_interface_plus-512.png');
        }

    }, [value.image])

    const submitHandler = async (e) => {
        e.preventDefault();
        await context.modifyCar(value.brand, value.model, value.engineNumber, value.entryKM, value.buyValue, value.plate, carId);
        enqueueSnackbar('Cambios guardados.');

    }

    return (
        <div className="car-form-container">
            <Form
                className="form"
                value={value}
                onChange={nextValue => setValue(nextValue)}
                onSubmit={(e) => submitHandler(e)}
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
                    </div>
                    <div className="form-column">
                        <FormField className="input" label="Matrícula">
                            <TextInput name="plate" />
                        </FormField>
                        <FormField className="input" label="Kilómetros de Entrada">
                            <TextInput type="number" name="entryKM" />
                        </FormField>
                        <FormField className="input" label="Valor de Compra (USD)">
                            <TextInput type="number" name="buyValue" />
                        </FormField>
                    </div>
                    <div className="form-column last-form">
                        <div className="picture-form">
                            <Box className="input" direction="row" gap="small">
                                <img className="image" src={image} />
                            </Box>
                            <div className="file-input">
                                <FileInput className="file-input" type="file" name="image" />
                            </div>
                        </div>
                    </div>
                </div>
                <Box className="button" direction="row" gap="medium">
                    <Button type="submit" label="Guardar" primary />
                </Box>
            </Form>
        </div>
    )
}