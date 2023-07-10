import React from 'react';
import Menu from './Menu';
import '../assets/css/Notificacion.css';
import { Link } from 'react-router-dom';

const NotificacionesL = () => {
  const notificaciones = [
    {
      idNotificacion: 1,
      titulo: 'Nueva tarea asignada',
      mensaje: 'Se ha asignado una nueva tarea en el curso de Matemáticas',
      fecha: '2023-07-08',
    },
    {
      idNotificacion: 2,
      titulo: 'Actualización del horario',
      mensaje: 'Se ha realizado una actualización en el horario de clases',
      fecha: '2023-07-10',
    }
    // Agrega más notificaciones aquí...
  ];
  
  return (
    <Menu>
        {/* Enlace para volver a la sección de cursos */}
        <div className="row mt-4 justify-content-center">
        <div className="col-md-12">
        <Link to="/DetallecursoLit" className="link-black">Volver a detalles de Cursos</Link>
        </div>
      </div> 
      <div className="container">
        <h1 className="text-dark" style={{ textAlign: 'center' }}><b>Notificaciones</b></h1>
        <div className="notificacion__list">
          {notificaciones.map((notificacion) => (
            <div className="notificacion__item" key={notificacion.idNotificacion}> 
              <img
              src='https://cdn-icons-png.flaticon.com/512/4658/4658755.png'
              className="notificacion__imagen">
              </img>
              <div className="notificacion__content">
                <h3 className="notificacion__titulo">{notificacion.titulo}</h3>
                <p className="notificacion__mensaje">{notificacion.mensaje}</p>
                <p className="notificacion__fecha">{notificacion.fecha}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Menu>
  );
};

export default NotificacionesL;