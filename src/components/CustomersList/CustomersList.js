import { InfiniteScroll, Text, Box, Header } from 'grommet';
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
        <div className="container">
            <div className="customers-list">
                <Header className="header">
                    <Text className="header-item first-item">NOMBRE<Down className="arrow" color='brand' /></Text>
                    <Text className="header-item">APELLIDO<Down className="arrow" color='brand' /></Text>
                    <Text className="header-item">EMAIL<Down className="arrow" color='brand' /></Text>
                    <Text className="header-item">DOCUMENTO<Down className="arrow" color='brand' /></Text>
                    <Text className="header-item">NACIMIENTO<Down className="arrow" color='brand' /></Text>
                    <Text className="header-item">TELÉFONO<Down className="arrow" color='brand' /></Text>
                </Header>
                <Box className="scroll-container" height="medium" overflow="auto">
                    <InfiniteScroll items={data}>
                        {(item) => (
                            <Box
                                className="customer-box"
                                flex={false}
                                border={{ side: 'bottom' }}
                            >
                                <Text className="row-item">{item.firstName}</Text>
                                <Text className="row-item">{item.lastName}</Text>
                                <Text className="row-item">{item.email}</Text>
                                <Text className="row-item">{item.ci}</Text>
                                <Text className="row-item">{item.birthDate}</Text>
                                <Text className="row-item">{item.phone}</Text>
                            </Box>
                        )}
                    </InfiniteScroll>
                </Box>
            </div>
        </div >
    )
}