import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Text, Button } from 'grommet';
import './styles.scss';


export default function Error({ error }) {
    let history = useHistory();

    function handleClick() {
        history.goBack();
    }

    return (
        <div className="error-container">
            <Text size="large">{error}</Text>
            <Button primary size="small" label="Ir atrás" onClick={handleClick}></Button>
        </div>
    )
}
