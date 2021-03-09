import { Card, InfiniteScroll, Text, Box, Header } from 'grommet';
import React, { useContext, useEffect } from 'react';
import './styles.scss';
import { Down } from 'grommet-icons'
import { AppContext } from '../../context';

export default function CustomersList() {
    const context = useContext(AppContext)

    useEffect(() => {
        context.getCustomersList();
    }, [])

    const data = context.customers;

    return (
        <div className="customers-list">
            <Header className="customer-box header">
                <Text className="header-item first-item">NOMBRE<Down className="arrow" color='brand' /></Text>
                <Text className="header-item">APELLIDO<Down className="arrow" color='brand' /></Text>
                <Text className="header-item">EMAIL<Down className="arrow" color='brand' /></Text>
                <Text className="header-item">DOCUMENTO<Down className="arrow" color='brand' /></Text>
                <Text className="header-item">FECHA DE NACIMIENTO<Down className="arrow" color='brand' /></Text>
                <Text className="header-item">TELÉFONO<Down className="arrow" color='brand' /></Text>
            </Header>
            <InfiniteScroll items={data} >
                {item => (
                    <Box
                        className="customer-box"
                        border={{ side: 'bottom' }}
                        align="center"
                    >
                        <Text className="row-item">{item.firstName}</Text>
                        <Text className="row-item">{item.lastName}</Text>
                        <Text className="row-item">{item.email}</Text>
                        <Text className="row-item">{item.ci}</Text>
                        <Text className="row-item">{item.phone}</Text>
                        <Text className="row-item">{item.phone}</Text>
                    </Box>
                )}
            </InfiniteScroll>
        </div>
    )
}
