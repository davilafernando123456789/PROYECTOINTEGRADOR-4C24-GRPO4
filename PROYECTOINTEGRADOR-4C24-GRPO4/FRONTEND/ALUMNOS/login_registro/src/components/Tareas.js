import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Menu from './Menu';
import { useAuth } from '../AuthContext';

const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const { authData } = useAuth();

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const idAlumno = authData?.idAlumno;
        const response = await axios.get(`http://localhost:8090/Realizartareas/alumno/${idAlumno}`);
        setTareas(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTareas();
  }, [authData]);

  return (
    <Menu>
      <div className="container">
        <h1 className="text-dark text-center">Tareas</h1>
        <div className="row">
          <div className="mb-4">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control text-center"
                placeholder="Buscar tarea..."
              />
            </div>
          </div>
          {tareas.map((tarea) => (
            <div className="col-md-4 mb-4" key={tarea.idRealizacionTarea}>
              <div className="card">
              <img
                  src='https://cdn-icons-png.flaticon.com/512/747/747094.png'
                  className="docente__imagen"
                  alt="Imagen del docente"
                />
                <div className="card-body">
                  
                  <h5 className="card-title">{tarea.tarea.nombre}</h5>
                  <p className="card-text">{tarea.tarea.descripcion}</p>
                  <p className="card-text">Curso: {tarea.tarea.curso.nombre}</p>
                  <p className="card-text">Fecha de entrega: {tarea.tarea.fechaEntrega}</p>
                  <a href="#" className="btn btn-primary">Empezar</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Menu>
  );
};

export default Tareas;
