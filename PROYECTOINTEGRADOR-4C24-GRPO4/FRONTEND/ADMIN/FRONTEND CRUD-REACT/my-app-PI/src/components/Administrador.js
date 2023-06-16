import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const Administrador = () => {
  const [administradores, setAdministradores] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET a la API para obtener la lista de administradores
    axios.get('http://localhost:8000/api/administradores')
      .then(response => {
        setAdministradores(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Administradores</h1>
      <ul>
        {administradores.map(administrador => (
          <li key={administrador.id}>{administrador.nombres} {administrador.apellidos}</li>
        ))}
      </ul>
    </div>
  );
};

export default Administrador;
