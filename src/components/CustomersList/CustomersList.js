import { Card, DataTable, Header, Text } from 'grommet';
import React from 'react';
import './styles.scss';
import { Down } from 'grommet-icons'

export default function CustomersList() {
    return (
        <div className="customers-list">
            <Card className="customers-list-card" background="light-1">
                <DataTable
                    columns={[
                        {
                            property: 'name',
                            header: <Text className="list-column" margin="none">NOMBRE<Down className="arrow" /></Text>,

                        },
                        {
                            property: 'surname',
                            header: <Text className="list-column" margin="none">APELLIDO<Down className="arrow" /></Text>,
                        },
                        {
                            property: 'email',
                            header: <Text className="list-column" margin="none">EMAIL<Down className="arrow" /></Text>,
                        },
                        {
                            property: 'id',
                            header: <Text className="list-column" margin="none">DOCUMENTO<Down className="arrow" /></Text>,
                        },
                        {
                            property: 'birthDate',
                            header: <Text className="list-column" margin="none">NACIMIENTO<Down className="arrow" /></Text>,
                        },
                        {
                            property: 'phone',
                            header: <Text className="list-column" margin="none">TELÉFONO<Down className="arrow" /></Text>,
                        },
                    ]}
                    data={[
                        {
                            name: 'Agustín',
                            surname: 'Fernández',
                            id: 12345678,
                            email: 'agustinfernandez@gmail.com',
                            birthDate: 29021992,
                            phone: 27065555
                        },
                        {
                            name: 'Camila',
                            surname: 'Sánchez',
                            id: 49602960,
                            email: 'contactcamilasanchez@gmail.com',
                            birthDate: 17042000,
                            phone: 27066099
                        },
                        {
                            name: 'Matías',
                            surname: 'Martínez',
                            id: 48592733,
                            email: 'matiasmartineeez@gmail.com',
                            birthDate: 16012000,
                            phone: 27056909
                        },
                    ]}
                />
            </Card>
        </div>
    )
}
