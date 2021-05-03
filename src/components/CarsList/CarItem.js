import React from "react";
import { Button, Text, Carousel, Image, Box } from "grommet";
import { useHistory } from "react-router-dom";
export default function CarItem({ car: { plate, brand, model, images, _id } }) {
  const history = useHistory();

  const handleView = () => {
    history.push(`/car/edit/${_id}`);
  };

  return (
    <div className="car-item">
      <div className="car-wrapper">
        <div className="car-header">
          <Button label="Alquilado" size="xsmall" color="green" primary />

          <Button label="Editar" size="small" onClick={handleView} />
        </div>
        <div className="car-title">
          <Text className="car-brand">
            {brand} <span>{model}</span>
          </Text>
          <br />
          <Text className="car-model">{plate}</Text>
        </div>
      </div>
      <Box height="small" width="medium" overflow="hidden">
        <Carousel fill>
          {images.map((i) => (
            <Image fit="cover" src={i.url} width="100%" />
          ))}
        </Carousel>
      </Box>

      <div className="car-actions">
        <Button primary label="Crear reserva" />
      </div>
    </div>
  );
}
