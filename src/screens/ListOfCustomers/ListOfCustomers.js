import React from 'react';
import './styles.scss';
import { CustomersList, Container } from '../../components'

export default function ListOfCustomers() {
    return (
        <Container>
            <CustomersList />
        </Container>
    )
}