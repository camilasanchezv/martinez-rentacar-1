import React from 'react';
import './styles.css';
import { Form, FormField, TextInput, Box, Button, MaskedInput } from 'grommet';

export default function CustomerForm() {
    const [value, setValue] = React.useState({});
    return (
        <div>
            <Form
                value={value}
                onChange={nextValue => setValue(nextValue)}
                onReset={() => setValue({})}
                onSubmit={({ value }) => { }}
                className="customer-form"
            >
                <div className="form-column">
                    <FormField className="input" label="Nombre">
                        <TextInput placeholder="Agustín" />
                    </FormField>
                    <FormField className="input" label="Apellido">
                        <TextInput placeholder="Fernández" />
                    </FormField>
                    <FormField className="input" label="Cédula de Identidad">
                        <MaskedInput
                            mask={[
                                {
                                    length: 7,
                                    regexp: /^([0-9]|[0-9][0-9]|[0-9][0-9][0-9]|[0-9][0-9][0-9][0-9]|[0-9][0-9][0-9][0-9][0-9]|[0-9][0-9][0-9][0-9][0-9][0-9]|[0-9][0-9][0-9][0-9][0-9][0-9][0-9])$/,
                                    placeholder: '1234567',
                                },
                                { fixed: ' - ' },
                                {
                                    length: 1,
                                    regexp: /^([0-9])$/,
                                    placeholder: '8',
                                },
                            ]}
                        />
                    </FormField>
                </div>
                <div className="form-column">
                    <FormField className="input" label="Fecha de Nacimiento">
                        <MaskedInput
                            mask={[
                                {
                                    length: 2,
                                    regexp: /^[0-2][0-9]$|^3[0-1]$|^[0-9]$/,
                                    placeholder: '29',
                                },
                                { fixed: ' / ' },
                                {
                                    length: 2,
                                    regexp: /^0[1-9]$|^1[0-2]$|^[0-9]$/,
                                    placeholder: '04',
                                },
                                { fixed: ' / ' },
                                {
                                    length: 4,
                                    regexp: /^([1-2]|19|20|19[0-9]|20[0-9]|19[0-9][0-9]|20[0-9][0-9])$/,
                                    placeholder: '1992',
                                },
                            ]}
                        />
                    </FormField>
                    <FormField className="input" label="Dirección">
                        <TextInput placeholder="Alfredo Arocena 0123" />
                    </FormField>
                    <FormField className="input" label="Teléfono">
                        <TextInput type="number" placeholder="26045555" />
                    </FormField>
                </div>
            </Form>
            <Box className="button" direction="row" gap="medium">
                <Button type="submit" primary label="Enviar" />
            </Box>
        </div>)
}