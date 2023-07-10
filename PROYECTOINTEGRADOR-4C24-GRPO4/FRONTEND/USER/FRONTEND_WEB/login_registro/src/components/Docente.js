import React from 'react';
import Menu from './Menu';
import '../assets/css/docente.css';
import { Link } from 'react-router-dom';

const Docente = () => {
  const docente = {
    nombre: 'John Doe',
    apellidos: 'Pedraza Campos',
    direccion:'Santa Anita',
    telefono:'9890768657',
    correo: 'johndoe@gmail.com',
  };

  return (
    <Menu>
         {/* Enlace para volver a la sección de cursos */}
        <div className="row mt-4 justify-content-center">
        <div className="col-md-12">
        <Link to="/DetallecursoHistoria" className="link-black">Volver a detalles de Cursos</Link>
        </div>
      </div>    
      <div className="container">
        <h1 className="text-dark" style={{ textAlign: 'center' }}><b>Información del Docente</b></h1>
        <div className="docente__content">
          <img
            src='https://media.istockphoto.com/id/948490226/es/vector/avatar-de-usuario-profesor-un-maestro-en-un-juego-con-gafas.jpg?s=170667a&w=0&k=20&c=KTnlhGDaEnV0Ay-w5xNrn-CnwTRKxljtN0hQ1tIbsSc='
            className="docente__imagen"
            alt="Imagen del docente"
          />

          <div className="docente__info">
            <p><strong>Nombre:</strong> {docente.nombre}</p>
            <p><strong>Apellidos:</strong> {docente.apellidos}</p>
            <p><strong>Dirección:</strong> {docente.direccion}</p>
            <p><strong>Telefono:</strong> {docente.telefono}</p>
            <p><strong>Correo:</strong> {docente.correo}</p>
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default Docente;
