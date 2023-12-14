import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './index.css'; // Importa el archivo CSS

const Contador = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(segundos => segundos + 1);
    }, 1000);


    return () => clearInterval(intervalo);
  }, []);


  const formatoSegundos = String(segundos).padStart(6, '0');

  return (
    <div>
      <h1 className="relojTitulo">
        Contador de segundos:
      </h1>
      <div className="contadorNumeroContainer">
        <FontAwesomeIcon icon={faClock} className="relojIcono" />
        {formatoSegundos.split('').map((digito, index) => (
          <div key={index} className="contadorNumero">
            {digito}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contador;