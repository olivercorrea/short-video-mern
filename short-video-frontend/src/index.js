import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// Importamos el componente App que será renderizado en la pantalla
import App from "./App";

// Renderizamos el componente App dentro de un contexto de modo estricto de React
ReactDOM.render(
  // El modo estricto de React nos permite detectar errores y advertencias en nuestra aplicación
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Seleccionamos el elemento HTML con id "root" para renderizar nuestro componente
  document.getElementById("root"),
);
