import { Card, CardBody, Heading } from 'grommet';
import React from 'react';
import './styles.scss';
import { CarForm, Container } from '../../components'

export default function Car() {
    return (
        <Container>
            <Card className="card" background="light-1">
                <Heading className="card-header" margin="none">NUEVO AUTO</Heading>
                <CardBody className="card-body">
                    <CarForm />
                </CardBody>
            </Card>
        </Container>
    )
}
