import React from 'react';
import { Heading, Tab, Tabs, Text } from 'grommet';

import './styles.scss';

export default function CustomerSettings({ }) {


    return (
        <div className="customer-settings">
            <Heading size="xsmall" color="brand">Customer Name</Heading>
            <Tabs alignControls="start">
                <Tab title="Información">
                    <div className="information-tab">
                        <div className="information-container">
                            <div className="title"><Text color="brand">Información Personal</Text></div>
                            <div className="information-box">
                                <Text color="brand">Nombre Completo</Text>
                                <Text size="large">Agustín Fernández</Text>
                            </div>
                            <div className="information-box">
                                <Text color="brand">Cédula de Identidad</Text>
                                <Text size="large">29834729</Text>
                            </div>
                        </div>
                        <div className="information-container">
                            <div className="title"><Text color="brand">Contacto</Text></div>
                            <div className="information-box">
                                <Text color="brand">Email</Text>
                                <Text size="large">elagustodopiola@gmail.com</Text>
                            </div>
                            <div className="information-box">
                                <Text color="brand">Telefono</Text>
                                <Text size="large">24329847</Text>
                            </div>
                        </div>
                    </div>
                    <div className="documents-container">
                        <div className="title"><Text color="brand">Documentos</Text></div>
                    </div>
                </Tab>
                <Tab title="Reservas">
                    <div>
                        <p>res autos</p>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}