import React, { useState, useContext } from 'react';
import { Form, FormField, TextInput, Box, Button, Select } from 'grommet';
import { AppContext } from '../../context';
import { Hide, View } from 'grommet-icons';
import './styles.scss';

const defaultValue = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
}

export default function UserForm() {
    const [value, setValue] = useState(defaultValue);

    const [reveal, setReveal] = React.useState(false);

    const context = useContext(AppContext);

    const submitHandler = (e) => {
        e.preventDefault();
        context.newUser(value.firstName, value.lastName, value.phone, value.email, value.password, value.role);
        setValue(defaultValue);
    }

    return (
        <div className="user-form-container">
            <Form
                className="form"
                value={value}
                onChange={nextValue => setValue(nextValue)}
                onSubmit={(e) => submitHandler(e)}
            >
                <div className="user-form">
                    <div className="form-column">
                        <FormField className="input" label="Nombre">
                            <TextInput placeholder="Agustín" name="firstName" required />
                        </FormField>
                        <FormField className="input" label="Apellido">
                            <TextInput placeholder="Fernández" name="lastName" required />
                        </FormField>
                        <FormField className="input" label="Teléfono">
                            <TextInput type="number" name="phone" placeholder="26045555" required />
                        </FormField>
                        <FormField className="input" label="Rol">
                            <Select
                                name="role"
                                options={['admin', 'user']}
                                required
                            />
                        </FormField>
                    </div>

                    <div className="form-column">
                        <FormField className="input" type="email" label="Email">
                            <TextInput name="email" placeholder="agustinfernandez@ejemplo.com" required />
                        </FormField>
                        <FormField className="input" label="Contraseña">
                            < div className="password-box focus" direction="row" >
                                <TextInput
                                    className="focus"
                                    plain
                                    type={reveal ? 'text' : 'password'}
                                    name="password"
                                    required
                                />
                                <Button
                                    className="password-icon focus"
                                    icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
                                    onClick={() => setReveal(!reveal)}
                                />
                            </div >
                        </FormField >
                    </div >
                </div >

                <Box className="button" direction="row" gap="medium">
                    <Button type="submit" label="Registrar" primary />
                </Box>
            </Form >
        </div >
    )
}