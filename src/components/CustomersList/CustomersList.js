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



    const { height, width } = useWindowDimensions(); // for responsive



    // sorting data

    function sortByName() { //known issue: list renders once. Need to render again for showing sorted list
        if (context.customers) {
            const aux = context.customers.map((a) => a)
            setData(aux.sort((a, b) => (a.firstName.toLowerCase() > b.firstName.toLowerCase()) ? 1 : -1));
            console.log(data)
        }
    }


    return (
        <Container className="container">
            <div className="customers-list">
                <Header className="header">
                    {width > 664 && <Text className="header-item first-item">NOMBRE<Down className="arrow" color='brand' onClick={() => sortByName()} /></Text>}
                    {width > 493 && <Box border={{ side: 'left', color: 'accent', size: 'small' }}><Text className="header-item" >APELLIDO<Down className="arrow" color='brand' /></Text></Box>}
                    {width > 836 && <Box border={{ side: 'left', color: 'accent', size: 'small' }}><Text className="header-item">EMAIL<Down className="arrow" color='brand' /></Text></Box>}
                    <Box border={{ side: 'left', color: 'accent', size: 'small' }}><Text className="header-item">DOCUMENTO<Down className="arrow" color='brand' /></Text></Box>
                    {width > 1008 && <Box border={{ side: 'left', color: 'accent', size: 'small' }}><Text className="header-item">NACIMIENTO<Down className="arrow" color='brand' /></Text></Box>}
                    {width > 1180 && <Box border={{ side: 'left', color: 'accent', size: 'small' }}><Text className="header-item">TELÉFONO<Down className="arrow" color='brand' /></Text></Box>}
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
                                {width > 836 ? <Text className="row-item">{item.email}</Text> : null}
                                <Text className="row-item">{item.ci}</Text>
                                {width > 1008 ? <Text className="row-item">{item.birthDate}</Text> : null}
                                {width > 1180 ? <Text className="row-item">{item.phone}</Text> : null}
                            </Box>
                        )}
                    </InfiniteScroll>
                </Box>
            </div>
        </Container>
    )
}