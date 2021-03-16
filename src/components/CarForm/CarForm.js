import React, { useState, useContext } from 'react';
import { Form, FormField, TextInput, Box, Button, FileInput } from 'grommet';
import { AppContext } from '../../context';
import './styles.scss';

const defaultValue = {
    brand: '',
    model: '',
    engineNumber: '',
    entryKM: '',
    buyValue: '',
    plate: '',
}

export default function CarForm() {
    const [value, setValue] = useState(defaultValue);
    const context = useContext(AppContext);

    const submitHandler = (e) => {
        e.preventDefault();
        context.newCar(value.model, value.engineNumber, value.entryKM, value.buyValue, value.plate)
        setValue(defaultValue)
    }

    function previewFile() {
        const preview = document.querySelector('img');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            // convert image file to base64 string
            preview.src = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
        else {
            preview.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Circle-icons-car.svg/1200px-Circle-icons-car.svg.png"
        }
    }

    return (
        <div className="car-form-container">
            <Form
                className="car-form"
                value={value}
                onChange={nextValue => setValue(nextValue)}
                onSubmit={(e) => submitHandler(e)}
                onReset={() => setValue(defaultValue)}
            >
                <div className="form-column picture-form">
                    <Box className="input" direction="row" gap="small">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Circle-icons-car.svg/1200px-Circle-icons-car.svg.png" className="image" />
                    </Box>
                    <FileInput className="file-input" type="file" onChange={previewFile} />


                    <Box className="button" direction="row" gap="medium">
                        <Button type="submit" label="Enviar" primary />
                        <Button className="reset" type="reset" label="Borrar" />
                    </Box>
                </div>
                <div className="form-column">
                    <FormField className="input" label="Marca">
                        <TextInput placeholder="Volkswagen" name="brand" />
                    </FormField>
                    <FormField className="input" label="Modelo">
                        <TextInput placeholder="up!" name="model" />
                    </FormField>
                    <FormField className="input" label="Número de Motor">
                        <TextInput type="number" placeholder="12345" name="engineNumber" />
                    </FormField>
                    <FormField className="input" label="Matrícula">
                        <TextInput placeholder="ABC1234" name="plate" />
                    </FormField>
                    <FormField className="input" label="Kilómetros de Entrada">
                        <TextInput type="number" placeholder="0" name="entryKM" />
                    </FormField>
                    <FormField className="input" label="Valor de Compra (USD)">
                        <TextInput type="number" placeholder="14890" name="buyValue" />
                    </FormField>
                </div>
            </Form>
        </div>
    )
}