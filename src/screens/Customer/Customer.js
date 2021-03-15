import React from 'react';
import { CustomerForm, Container } from '../../components';
import { Heading } from 'grommet';
import './styles.scss';


export default function Customer() {
    return (
        <Container>
            <div className="customer-container">
                <Heading className="title" margin="0" color="brand">Agrega un nuevo cliente</Heading>
                <CustomerForm />
            </div>
        </Container>
    )
}