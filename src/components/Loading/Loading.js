import React, { useContext } from "react";
import Loader from "react-loader-spinner";

import "./styles.scss";
import { AppContext } from "../../context";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Text } from "grommet";

export default function Loading() {
  const { loading } = useContext(AppContext);

  const message = loading && loading !== "" ? loading : "Cargando"

  return loading ? (
    <div className="loading-container">
      <Loader
        type="Puff"
        color="#fff"
        height={100}
        width={100}
      />

      <Text color="#fff" margin="small">{message}</Text>
    </div>
  ) : null;
}
