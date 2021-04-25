import React, { useContext, useEffect } from "react";
import { Select, Heading } from "grommet";
import CarItem from "./CarItem";
import "./styles.scss";
import { AppContext } from "../../context";

export default function CarsList() {
  
  const { cars, getCarsList } = useContext(AppContext);
  const carsQty = cars.length;

  useEffect(() => {
    getCarsList();
  }, []);

  return (
    <div className="CarsList">
      <div className="header">
        <Heading className="cars-qty" size="medium" level={4}>
          {carsQty} Autos en el sistema
        </Heading>

        <div className="filters">
          <Select
            placeholder="Ordenar por"
            options={["Año del modelo", "Fecha de ingreso", "Marca"]}
          />
          <Select
            placeholder="Solo ver"
            options={["Todos", "Alquilado", "Disponible"]}
          />
        </div>
      </div>

      <div className="list-container">
        { cars.map( c => <CarItem car={c} /> )}
      </div>
    </div>
  );
}
