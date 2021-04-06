import React from 'react';
import { Heading } from 'grommet';
import { UserLogin } from '../../components';
import './styles.scss';


export default function Login() {
    return (
        <div className="login-screen">
            <div className="login-container">
                <div className="brand">
                    <Heading className="heading">Martínez</Heading>
                    <Heading className="small-heading">Rent A Car</Heading>
                </div>
                <UserLogin />
            </div>
        </div>
    )
}