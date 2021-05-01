import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, CustomerSettings, Error } from '../../components';
import { AppContext } from '../../context';

import './styles.scss';

export default function CustomerInfo({ }) {
    const context = useContext(AppContext)
    const [response, setResponse] = useState(null);
    const { id } = useParams();

    useEffect(async () => {
        const res = await context.getCustomer(id);
        setResponse(res)
    }, [])

    return (
        <Container>
            { response && response.error
                ? <Error error={response.error} />
                : <CustomerSettings customer={response} />
            }
        </Container>)
}