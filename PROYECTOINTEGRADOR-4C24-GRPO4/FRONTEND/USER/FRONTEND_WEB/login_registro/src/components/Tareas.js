import React from 'react';
import Menu from './Menu';

const Tareas = () => {
  const tareas = [
    {
      idTarea: 1,
      curso: 'Historia',
      profesor: 'John Smith',
      titulo: 'Tarea 1',
      descripcion: 'Realizar un ensayo sobre la Revolución Francesa',
      fechaEntrega: '2023-07-01',
      imagen: 'https://tiempodenegocios.com/wp-content/uploads/2017/10/lista-de-tareas.jpg',
    },
    {
      idTarea: 2,
      curso: 'Matemáticas',
      profesor: 'Jane Doe',
      titulo: 'Tarea 2',
      descripcion: 'Resolver los ejercicios del capítulo 3 de matemáticas',
      fechaEntrega: '2023-07-05',
      imagen: 'https://tiempodenegocios.com/wp-content/uploads/2017/10/lista-de-tareas.jpg',
    },
    {
      idTarea: 3,
      curso: 'Ciencias',
      profesor: 'Robert Johnson',
      titulo: 'Tarea 3',
      descripcion: 'Investigar sobre la vida de Albert Einstein',
      fechaEntrega: '2023-07-10',
      imagen: 'https://tiempodenegocios.com/wp-content/uploads/2017/10/lista-de-tareas.jpg',
    },
  ];

  return (
    <Menu>
      <div className="container">
        <h1 className="text-primary">Tareas</h1>
        <div className="row">
          <div className="mb-4">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar tarea..."
              />
            </div>
          </div>
          {tareas.map((tarea) => (
            <div className="col-md-4 mb-4" key={tarea.idTarea}>
              <div className="card">
                <img src={tarea.imagen} className="card-img-top" alt={tarea.titulo} />
                <div className="card-body">
                  <h5 className="card-title">{tarea.titulo}</h5>
                  <p className="card-text">{tarea.descripcion}</p>
                  <p className="card-text">Curso: {tarea.curso}</p>
                  <p className="card-text">Profesor: {tarea.profesor}</p>
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
