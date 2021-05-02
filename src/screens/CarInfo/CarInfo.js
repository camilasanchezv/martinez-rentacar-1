import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, CarView, Error } from '../../components';
import { AppContext } from '../../context';

export default function CarInfo({ }) {
    const context = useContext(AppContext)
    const [response, setResponse] = useState(null);
    const { id } = useParams();

    useEffect(async () => {
        const res = await context.getCar(id);
        setResponse(res)
    }, [])

    return (
        <Container>
            { response && response.error
                ? <Error error={response.error} />
                : <CarView car={response} />
            }
        </Container>)
}