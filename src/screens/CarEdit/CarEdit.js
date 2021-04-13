import React, { useState, useEffect, useContext } from 'react';
import { ModifyCar, Container, Error } from '../../components'
import './styles.scss';
import { useParams } from "react-router-dom";
import { AppContext } from '../../context';

export default function CarEdit({ }) {
    const context = useContext(AppContext)
    const [response, setResponse] = useState();
    const { id } = useParams();

    useEffect(async () => {
        const res = await context.getCar(id);
        setResponse(res)
    }, [])

    return (
        <Container>
            { response && response.error
                ? <Error error={response.error} />
                : <ModifyCar car={response} modify={true} />
            }
        </Container >
    )
}
