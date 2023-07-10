import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import '../assets/css/docente.css';

const Docente = () => {
  const [docentes, setDocentes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8090/profesores')
      .then(response => response.json())
      .then(data => {
        setDocentes(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Menu>
                <div className="row mt-4 justify-content-center">
          <div className="col-md-12">
            <Link to="/Detallescurso" className="link-black">Volver a detalles de Cursos</Link>
          </div>
        </div>
      <div className="container">
        <h1 className="text-dark" style={{ textAlign: 'center' }}><b>Información de los Docentes</b></h1>
        {docentes.map((docente) => {
          // Condición para mostrar solo a 'Fernando'
          if (docente.nombres === 'Fernando') {
            return (
              <div className="docente__content" key={docente.id}>
                <img
                  src='https://media.istockphoto.com/id/948490226/es/vector/avatar-de-usuario-profesor-un-maestro-en-un-juego-con-gafas.jpg?s=170667a&w=0&k=20&c=KTnlhGDaEnV0Ay-w5xNrn-CnwTRKxljtN0hQ1tIbsSc='
                  className="docente__imagen"
                  alt="Imagen del docente"
                />
                <div className="docente__info">
                  <p><strong>Nombre:</strong> {docente.nombres}</p>
                  <p><strong>Apellidos:</strong> {docente.apellidos}</p>
                  <p><strong>Dirección:</strong> {docente.direccion}</p>
                  <p><strong>Teléfono:</strong> {docente.telefono}</p>
                  <p><strong>Correo:</strong> {docente.email}</p>
                </div>
              </div>
            );
          }
          return null; // Oculta a los demás profesores
        })}

      </div>
    </Menu>
  );
};

export default Docente;
