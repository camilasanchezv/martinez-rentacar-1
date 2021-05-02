import React from 'react';
import { Box, FileInput, Heading, Tab, Tabs, Text, Carousel, Image } from 'grommet';

import './styles.scss';

export default function CustomerSettings({ customer = null }) {

    if (!customer) {
        customer = {
            firstName: '',
            lastName: '',
            ci: '',
            phone: '',
            email: '',
        }
    }

    return (
        < div className="customer-settings" >
            <Heading size="xsmall" color="brand">Customer Name</Heading>
            <Tabs alignControls="start">
                <Tab title="Información">
                    <div className="information-tab">
                        <div className="information-container">
                            <div className="title"><Text color="brand">Información Personal</Text></div>
                            <div className="information-box">
                                <Text color="brand">Nombre Completo</Text>
                                <Text size="large">{customer.firstName + ' ' + customer.lastName}</Text>
                            </div>
                            <div className="information-box">
                                <Text color="brand">Cédula de Identidad</Text>
                                <Text size="large">{customer.ci}</Text>
                            </div>
                        </div>
                        <div className="information-container">
                            <div className="title"><Text color="brand">Contacto</Text></div>
                            <div className="information-box">
                                <Text color="brand">Email</Text>
                                <Text size="large">{customer.email}</Text>
                            </div>
                            <div className="information-box">
                                <Text color="brand">Telefono</Text>
                                <Text size="large">{customer.phone}</Text>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab title="Documentos">
                    <div className="documents-container">
                    </div>
                </Tab>
                <Tab title="Reservas">
                    <div>
                        <p>res autos</p>
                    </div>
                </Tab>
            </Tabs>
        </div >
    )
}