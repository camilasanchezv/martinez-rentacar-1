import React, { useState, useEffect, useContext } from 'react';
import { ModifyCar, Container, Error } from '../../components'
import './styles.scss';
import { useParams } from "react-router-dom";
import { AppContext } from '../../context';

export default function CarEdit({ }) {
    const context = useContext(AppContext)
    const [response, setResponse] = useState();
    const { id } = useParams();


    const submitHandlerModify = async (value) => {
    
        const documentsIds = [];
        if (value.images) {
          for (let i of value.images) {
            const document = await context.uploadFileHandler(i);
            documentsIds.push(document._id);
          }
        }
    
        await context.modifyCar(
          value.brand,
          value.model,
          value.engineNumber,
          value.entryKM,
          value.buyValue,
          value.plate,
          documentsIds,
          id
        );
      };

    useEffect(async () => {
        const res = await context.getCar(id);
        setResponse(res)
    }, [])

    return (
        <Container>
            { response && response.error
                ? <Error error={response.error} />
                : <ModifyCar car={response} modify={true} handleSubmit={submitHandlerModify}/>
            }
        </Container >
    )
}
