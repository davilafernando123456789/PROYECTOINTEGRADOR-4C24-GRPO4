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
        const response = await axios.get('http://localhost:8080/tareas');
        setTareas(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTareas();
  }, []);

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
            <div className="col-md-4 mb-4" key={tarea.idTarea}>
              <div className="card">
                <img src={tarea.curso.imagen} className="card-img-top" alt={tarea.nombre} />
                <div className="card-body">
                  <h5 className="card-title">{tarea.nombre}</h5>
                  <p className="card-text">{tarea.descripcion}</p>
                  <p className="card-text">Curso: {tarea.curso.nombre}</p>
                  <p className="card-text">Fecha de entrega: {tarea.fechaEntrega}</p>
                  <a href="#" className="btn btn-primary">Completar</a>
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
