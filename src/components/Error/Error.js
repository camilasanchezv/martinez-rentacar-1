import React from 'react';
import { Text, Button } from 'grommet';
import './styles.scss';


export default function Error({ error }) {
    return (
        <div className="error-container">
            <Text size="large">{error}</Text>
            <Button primary size="small" label="Ir atrás"></Button>
        </div>
    )
}
