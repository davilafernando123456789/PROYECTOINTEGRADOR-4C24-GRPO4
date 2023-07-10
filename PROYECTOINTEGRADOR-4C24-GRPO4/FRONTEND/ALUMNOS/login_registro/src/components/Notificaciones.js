import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Agrega esta línea
import Menu from './Menu';
import { useAuth } from '../AuthContext';
import '../assets/css/Notificacion.css';

const Notificaciones = () => {
  const notificaciones = [
    {
      idNotificacion: 1,
      titulo: 'Recordatorio de reunión',
      mensaje: 'Recuerda que hay una reunión programada para el día de mañana',
      fecha: '2023-07-09',
    },
    {
      idNotificacion: 2,
      titulo: 'Actualización del horario',
      mensaje: 'Se ha realizado una actualización en el horario de clases',
      fecha: '2023-07-10',
    },
    {
      idNotificacion: 3,
      titulo: 'Tarea pendiente',
      mensaje: 'No olvides entregar la tarea para el viernes',
      fecha: '2023-07-11',
    },
    {
      idNotificacion: 4,
      titulo: 'Revisión de exámenes',
      mensaje: 'Los exámenes corregidos estarán disponibles para revisión el lunes',
      fecha: '2023-07-12',
    },
    {
      idNotificacion: 6,
      titulo: 'Próxima entrega de proyecto',
      mensaje: 'Recuerda que el proyecto final se debe entregar en dos semanas',
      fecha: '2023-07-14',
    },
    // Agrega más notificaciones aquí...
  ];
  
  return (
    <Menu>
        <div className="row mt-4 justify-content-center">
        <div className="col-md-12">
        <Link to="/Detallescurso" className="link-black">Volver a detalles de Cursos</Link>
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

export default Notificaciones;
