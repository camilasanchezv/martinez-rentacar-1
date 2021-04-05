import React, { useState, useContext } from 'react';
import { Form, FormField, TextInput, Box, Button, Text } from 'grommet';
import { AppContext } from '../../context';
import { Hide, View } from 'grommet-icons';
import { useSnackbar } from 'notistack';
import './styles.scss';

const defaultValue = {
    email: '',
    password: ''
}

export default function UserLogin() {
    const { enqueueSnackbar } = useSnackbar();
    const [value, setValue] = useState(defaultValue);
    const [reveal, setReveal] = React.useState(false);
    const context = useContext(AppContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        const response = await context.logIn(value.email, value.password);
        if (response && response.error) {
            enqueueSnackbar(response.error, { variant: 'error' });
            return
        }

        setValue(defaultValue);
    }
    return (
        <div className="user-login-container">
            <Form
                className="login"
                value={value}
                onChange={nextValue => setValue(nextValue)}
                onSubmit={(e) => submitHandler(e)}
            >
                <div className="user-login">
                    <FormField className="input" type="email" label="Email">
                        <TextInput name="email" required />
                    </FormField>
                    <FormField className="input" label="Contraseña">
                        <div className="password-box focus" direction="row" >
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

                <Box className="button" direction="row" gap="medium">
                    <Button type="submit" label="Entrar" primary />
                </Box>
            </Form >
        </div >
    )
}