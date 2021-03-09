import React, { useEffect } from 'react';
import './styles.scss';
import { Form, FormField, TextInput, Box, Button, Avatar } from 'grommet';

export default function CarForm() {
    const [value, setValue] = React.useState({});

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
                value={value}
                onChange={nextValue => setValue(nextValue)}
                className="car-form"
            >
                <div className="form-column picture-form">
                    <Box className="input" direction="row" gap="small">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Circle-icons-car.svg/1200px-Circle-icons-car.svg.png" className="image" />
                    </Box>
                    <input className="file-input" type="file" onChange={previewFile} />
                </div>
                <div className="form-column">
                    <FormField className="input" label="Marca">
                        <TextInput placeholder="Volkswagen" />
                    </FormField>
                    <FormField className="input" label="Modelo">
                        <TextInput placeholder="up!" />
                    </FormField>
                    <FormField className="input" label="Número de Motor">
                        <TextInput type="number" placeholder="12345" />
                    </FormField>
                    <FormField className="input" label="Número de Chasis">
                        <TextInput type="number" placeholder="12345" />
                    </FormField>
                    <FormField className="input" label="Kilómetros de Entrada">
                        <TextInput type="number" placeholder="0" />
                    </FormField>
                    <FormField className="input" label="Valor de Compra (USD)">
                        <TextInput type="number" placeholder="14890" />
                    </FormField>
                </div>
            </Form>
            <Box className="button" direction="row" gap="medium">
                <Button type="submit" primary label="Enviar" />
            </Box>
        </div>
    )
}