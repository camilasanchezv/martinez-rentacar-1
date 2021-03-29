import React from 'react';
import { UserSignUp, Container } from '../../components';
import './styles.scss';


export default function Customer() {
    return (
        <Container>
            <div className="customer-container">
                <UserSignUp />
            </div>
        </Container>
    )
}