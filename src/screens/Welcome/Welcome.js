import React from 'react'
import { Title } from '../../components'
import { FormField, TextInput, Form, Button, Box } from 'grommet'
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import './styles.scss';
export default function Welcome() {
    const [value, setValue] = React.useState({});
    return (
        <div className="customer-form">
            <Form
                value={value}
                onChange={nextValue => setValue(nextValue)}
                onReset={() => setValue({})}
                onSubmit={({ value }) => { }}
            >
                <FormField name="name" htmlFor="text-input-id" label="Customer">
                    <TextInput id="text-input-id" name="name" />
                </FormField>
                <Box direction="row" gap="medium">
                    <Button type="submit" primary label="Submit" />
                    <Button type="reset" label="Reset" />
                </Box>
            </Form>
        </div>
    );

}
