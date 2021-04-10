import React from "react";
import { Button, Text } from "grommet";
import { useHistory } from "react-router-dom";
export default function CarItem({car: { plate, brand, model, _id}}) {
  const history = useHistory();


  const handleView = () => {
    history.push(`/car-edit/${_id}`)
  }
  return (
    <div className="car-item">
      <div className="car-wrapper">
        <div className="car-header">
        <Button label="Alquilado" size="xsmall" color="green" primary />

          <Button label="Ver" size="small" onClick={handleView} />
        </div>
        <div className="car-title">
          <Text className="car-brand">
            {brand} <span>{model}</span>
          </Text>
          <br />
          <Text className="car-model">{plate}</Text>
        </div>
      </div>
      <div className="car-pictures">
        <img
          src="https://i.blogs.es/6bea49/peugeot-207-99g-1/450_1000.jpg"
          className="car-picture"
        />
        <img
          src="https://i.blogs.es/6bea49/peugeot-207-99g-1/450_1000.jpg"
          className="car-picture"
        />
        <img
          src="https://i.blogs.es/6bea49/peugeot-207-99g-1/450_1000.jpg"
          className="car-picture"
        />
        <img
          src="https://i.blogs.es/6bea49/peugeot-207-99g-1/450_1000.jpg"
          className="car-picture"
        />
        <img
          src="https://i.blogs.es/6bea49/peugeot-207-99g-1/450_1000.jpg"
          className="car-picture"
        />
      </div>

      <div className="car-actions">
        <Button primary label="Crear reserva" />
      </div>
    </div>
  );
}
