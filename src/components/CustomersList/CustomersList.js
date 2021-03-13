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

    // this could be better done? yes. Do i have not idea at all of how to do it? also yes.

    function sortByName() {
        if (context.customers) {
            const aux = context.customers.map((a) => a)
            setData(aux.sort((a, b) => (a.firstName.toLowerCase() > b.firstName.toLowerCase()) ? 1 : -1));
        }
    }
    function sortByLastName() {
        if (context.customers) {
            const aux = context.customers.map((a) => a)
            setData(aux.sort((a, b) => (a.lastName.toLowerCase() > b.lastName.toLowerCase()) ? 1 : -1));
        }
    }
    function sortByEmail() {
        if (context.customers) {
            const aux = context.customers.map((a) => a)
            setData(aux.sort((a, b) => (a.email.toLowerCase() > b.email.toLowerCase()) ? 1 : -1));
        }
    }
    function sortByCI() {
        if (context.customers) {
            const aux = context.customers.map((a) => a)
            setData(aux.sort((a, b) => (a.ci > b.ci) ? 1 : -1));
        }
    }
    function sortByBirthDate() { //this should be sorted by date
        if (context.customers) {
            const aux = context.customers.map((a) => a)
            setData(aux.sort((a, b) => (a.birthDate > b.birthDate) ? 1 : -1));
        }
    }
    function sortByPhone() {
        if (context.customers) {
            const aux = context.customers.map((a) => a)
            setData(aux.sort((a, b) => (a.phone > b.phone) ? 1 : -1));
        }
    }


    return (
        <div className="container" >
            <div className="customers-list">
                <Header className="header" background={{ color: 'brand' }}>
                    {width > 664 && <Box className="box"><Text className="header-item first-item">NOMBRE<Down className="arrow" color='accent' onClick={() => sortByName()} /></Text></Box>}
                    {width > 493 && <Box className="box" border={{ side: 'left', color: 'accent', size: 'small' }}><Text className="header-item" >APELLIDO<Down className="arrow" color='accent' onClick={() => sortByLastName()} /></Text></Box>}
                    {width > 968 && <Box className="box" border={{ side: 'left', color: 'accent', size: 'small' }}><Text className="header-item">EMAIL<Down className="arrow" color='accent' onClick={() => sortByEmail()} /></Text></Box>}
                    <Box className="box" border={{ side: 'left', color: 'accent', size: 'small' }}><Text className="header-item">DOCUMENTO<Down className="arrow" color='accent' onClick={() => sortByCI()} /></Text></Box>
                    {width > 1138 && <Box className="box" border={{ side: 'left', color: 'accent', size: 'small' }}><Text className="header-item">NACIMIENTO<Down className="arrow" color='accent' onClick={() => sortByBirthDate()} /></Text></Box>}
                    {width > 1308 && <Box className="box" border={{ side: 'left', color: 'accent', size: 'small' }}><Text className="header-item">TELÉFONO<Down className="arrow" color='accent' onClick={() => sortByPhone()} /></Text></Box>}
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