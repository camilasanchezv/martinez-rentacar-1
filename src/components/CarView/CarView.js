import React from 'react';
import { Heading, Tab, Tabs, Text } from 'grommet';

import './styles.scss';

export default function CarView({ car }) {


    console.log(car)
    if (!car) {
        car = {
            brand: '',
            model: '',
            engineNumber: '',
            entryKM: '',
            buyValue: '',
            plate: '',
        }
    }
    console.log(car)

    return (
        < div className="customer-settings" >
            <Heading size="xsmall" color="brand">AUTO</Heading>
            <Tabs alignControls="start">
                <Tab title="Información">
                    <div className="information-tab">
                        <div className="information-container">
                            <div className="information-box">
                                <Text color="brand">Marca</Text>
                                <Text size="large">{car.brand}</Text>
                            </div>
                            <div className="information-box">
                                <Text color="brand">Modelo</Text>
                                <Text size="large">{car.model}</Text>
                            </div>
                        </div>
                        <div className="information-container">
                            <div className="information-box">
                                <Text color="brand">Matrícula</Text>
                                <Text size="large">{car.plate}</Text>
                            </div>
                            <div className="information-box">
                                <Text color="brand">Kilómetros de Entrada</Text>
                                <Text size="large">{car.entryKM}</Text>
                            </div>
                        </div>
                        <div className="information-container">
                            <div className="information-box">
                                <Text color="brand">Número de Motor</Text>
                                <Text size="large">{car.engineNumber}</Text>
                            </div>
                            <div className="information-box">
                                <Text color="brand">Valor de Compra</Text>
                                <Text size="large">{car.buyValue}</Text>
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