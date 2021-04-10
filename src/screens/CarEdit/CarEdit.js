import React from 'react';
import { ModifyCar, Container } from '../../components'
import './styles.scss';
import { useParams } from "react-router-dom";

export default function CarEdit({}) {
    const { id } = useParams()
    return (
        <Container>
            <ModifyCar carId={id} modify={true}/>
        </Container>
    )
}
