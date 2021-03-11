import { InfiniteScroll, Text, Box, Header } from 'grommet';
import React, { useContext, useEffect } from 'react';
import './styles.scss';
import { Down } from 'grommet-icons'
import { AppContext } from '../../context';
import { useWindowDimensions } from '../../utils/CustomHooks';

export default function CustomersList() {
    const context = useContext(AppContext)

    useEffect(() => {
        context.getCustomersList();
    }, [])

    const data = context.customers;

    const { height, width } = useWindowDimensions(); // for responsive

    return (
        <div className="container">
            <div className="customers-list">
                <Header className="header">
                    {width > 664 ? <Text className="header-item first-item">NOMBRE<Down className="arrow" color='brand' /></Text> : null}
                    {width > 493 ? <Text className="header-item">APELLIDO<Down className="arrow" color='brand' /></Text> : null}
                    {width > 836 ? <Text className="header-item">EMAIL<Down className="arrow" color='brand' /></Text> : null}
                    <Text className="header-item">DOCUMENTO<Down className="arrow" color='brand' /></Text>
                    {width > 1008 ? <Text className="header-item">NACIMIENTO<Down className="arrow" color='brand' /></Text> : null}
                    {width > 1180 ? <Text className="header-item">TELÉFONO<Down className="arrow" color='brand' /></Text> : null}
                </Header>
                <Box className="scroll-container" height="medium" overflow="auto">
                    <InfiniteScroll items={data}>
                        {(item) => (
                            <Box
                                className="customer-box"
                                flex={false}
                                border={{ side: 'bottom' }}
                            >
                                {width > 664 ? <Text className="row-item">{item.firstName}</Text> : null}
                                {width > 493 ? <Text className="row-item">{item.lastName}</Text> : null}
                                {width > 836 ? <Text className="row-item">{item.email}</Text> : null}
                                <Text className="row-item">{item.ci}</Text>
                                {width > 1008 ? <Text className="row-item">{item.birthDate}</Text> : null}
                                {width > 1180 ? <Text className="row-item">{item.phone}</Text> : null}
                            </Box>
                        )}
                    </InfiniteScroll>
                </Box>
            </div>
        </div >
    )
}