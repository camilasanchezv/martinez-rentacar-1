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
    
        const imagesUrls = [];
        if (value.images) {
          for (let i of value.images) {
            const fileURL = await context.uploadFileHandler(i);
            imagesUrls.push(fileURL);
          }
        }
    
        await context.modifyCar(
          value.brand,
          value.model,
          value.engineNumber,
          value.entryKM,
          value.buyValue,
          value.plate,
          imagesUrls,
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
