import React from 'react';
import { CustomerForm, Container } from '../../components';
import './styles.scss';


export default function Customer() {
    return (
        <Container>
            <div className="customer-container">
                <CustomerForm />
            </div>
        </Container>
    )
}