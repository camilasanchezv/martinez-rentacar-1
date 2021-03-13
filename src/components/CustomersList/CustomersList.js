import { InfiniteScroll, Text, Box, Header } from 'grommet';
import React, { useContext, useEffect, useState } from 'react';
import './styles.scss';
import { Down } from 'grommet-icons'
import { AppContext } from '../../context';
import { useWindowDimensions } from '../../utils/CustomHooks';
import Container from '../Container';

export default function CustomersList() {
    const context = useContext(AppContext)
    const [data, setData] = useState([])


    useEffect(() => {
        setData(context.customers);
    }, [context.customers])

    useEffect(() => {
        context.getCustomersList();
        setData(context.customers);
    }, [])

    const { height, width } = useWindowDimensions();

    // sorting data

    const sortTexts = (a, b, prop) => a[prop].toLowerCase() > b[prop].toLowerCase() ? 1 : -1;
    const sortCustomers = sorting => context.customers.map(a => a).sort(sorting);
    const sortBy = prop => setData(sortCustomers((a, b) => sortTexts(a, b, prop)));

    return (
        <div className="container" >
            <div className="customers-list">
                <Header className="header" background={{ color: 'brand' }}>
                    {width > 664 && <Box className="box">
                        <Text className="header-item first-item">
                            NOMBRE
                            <Down className="arrow" color='accent' onClick={() => sortBy('firstName')} />
                        </Text>
                    </Box>}
                    {width > 493 && <Box className="box lastname-box" border={{ side: 'left', color: 'accent', size: 'small' }}>
                        <Text className="header-item" >
                            APELLIDO
                            <Down className="arrow" color='accent' onClick={() => sortBy('lastName')} />
                        </Text>
                    </Box>}
                    {width > 968 && <Box className="box" border={{ side: 'left', color: 'accent', size: 'small' }}>
                        <Text className="header-item">
                            EMAIL
                            <Down className="arrow" color='accent' onClick={() => sortBy('email')} />
                        </Text>
                    </Box>}
                    <Box className="box ci-box" border={{ side: 'left', color: 'accent', size: 'small' }}>
                        <Text className="header-item">
                            DOCUMENTO
                            <Down className="arrow" color='accent' onClick={() => sortBy('ci')} />
                        </Text>
                    </Box>
                    {width > 1138 && <Box className="box" border={{ side: 'left', color: 'accent', size: 'small' }}>
                        <Text className="header-item">
                            NACIMIENTO
                            <Down className="arrow" color='accent' /*TODO: sort by date*/ />
                        </Text>
                    </Box>}
                    {width > 1308 && <Box className="box" border={{ side: 'left', color: 'accent', size: 'small' }}>
                        <Text className="header-item">
                            TELÉFONO
                            <Down className="arrow" color='accent' onClick={() => sortBy('phone')} />
                        </Text>
                    </Box>}
                </Header>
                <Box className="scroll-container" height="medium" overflow="auto">
                    <InfiniteScroll state={data} items={data}>
                        {(item) => (
                            <Box
                                className="customer-box"
                                flex={false}
                                border={{ side: 'bottom' }}
                            >
                                {width > 664 ? <Text className="row-item">{item.firstName}</Text> : null}
                                {width > 493 ? <Text className="row-item">{item.lastName}</Text> : null}
                                {width > 968 ? <Text className="row-item">{item.email}</Text> : null}
                                <Text className="row-item">{item.ci}</Text>
                                {width > 1138 ? <Text className="row-item">{item.birthDate}</Text> : null}
                                {width > 1308 ? <Text className="row-item">{item.phone}</Text> : null}
                            </Box>
                        )}
                    </InfiniteScroll>
                </Box>
            </div>
        </div >
    )
}