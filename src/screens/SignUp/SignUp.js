import React from 'react';
import { UserSignUp, Container } from '../../components';
import './styles.scss';


export default function SignUp() {
    return (
        <Container>
            <div className="sign-up-container">
                <UserSignUp />
            </div>
        </Container>
    )
}