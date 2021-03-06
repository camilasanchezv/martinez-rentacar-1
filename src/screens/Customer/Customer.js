import { Card, CardBody, Heading } from 'grommet';
import React from 'react';
import './styles.scss';
import { CustomerForm } from '../../components'

export default function Customer() {
    return (
        <div className="customer-container">
            <Card className="card" background="light-1">
                <Heading className="card-header" margin="none">NUEVO CLIENTE</Heading>
                <CardBody className="card-body">
                    <CustomerForm></CustomerForm>
                </CardBody>
            </Card>
        </div>
    )
}
