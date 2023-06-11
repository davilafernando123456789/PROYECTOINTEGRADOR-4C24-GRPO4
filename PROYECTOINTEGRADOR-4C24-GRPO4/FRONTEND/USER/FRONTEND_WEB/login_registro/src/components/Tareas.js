import React from 'react';
import { RiFileTextLine, RiDashboardLine, RiFileListLine, RiBookOpenLine, RiChatSmile3Line, RiSettings5Line } from 'react-icons/ri';

const Tareas = () => {
  const tareas = [
    {
      id: 1,
      titulo: 'Tarea 1',
      descripcion: 'Realizar un ensayo sobre la Revolución Francesa',
      imagen: 'https://tiempodenegocios.com/wp-content/uploads/2017/10/lista-de-tareas.jpg',
    },
    {
      id: 2,
      titulo: 'Tarea 2',
      descripcion: 'Resolver los ejercicios del capítulo 3 de matemáticas',
      imagen: 'https://tiempodenegocios.com/wp-content/uploads/2017/10/lista-de-tareas.jpg',
    },
    {
      id: 3,
      titulo: 'Tarea 3',
      descripcion: 'Investigar sobre la vida de Albert Einstein',
      imagen: 'https://tiempodenegocios.com/wp-content/uploads/2017/10/lista-de-tareas.jpg',
    },
    
  ];

  return (
    <div className="d-flex">
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-primary" style={{ width: '280px', height: '100vh' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
          <div className="dropdown">
            <a href="#" className="d-flex align-items-center text-white text-decoration-none " data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
              <strong>Eduardo</strong>
            </a>
          </div>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
  <li className="nav-item">
    <a href="#" className="nav-link active" aria-current="page">
      <RiDashboardLine size={16} className="me-2" />
      Cursos
    </a>
  </li>
  <li>
    <a href="#" className="nav-link text-white">
      <RiFileListLine size={16} className="me-2" />
      Módulos
    </a>
  </li>
  <li>
    <a href="/Tareas" className="nav-link text-white">
      <RiBookOpenLine size={16} className="me-2" />
      Tareas
    </a>
  </li>
  <li>
    <a href="#" className="nav-link text-white">
      <RiFileTextLine size={16} className="me-2" />
      Resúmenes
    </a>
  </li>
  <li>
    <a href="#" className="nav-link text-white">
      <RiChatSmile3Line size={16} className="me-2" />
      Comentarios
    </a>
  </li>
  <li>
    <a href="#" className="nav-link text-white">
      <RiSettings5Line size={16} className="me-2" />
      Configuración
    </a>
  </li>
</ul>



      </div>
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
            <div className="col-md-4 mb-4" key={tarea.id}>
              <div className="card">
                <img src={tarea.imagen} className="card-img-top" alt={tarea.titulo} />
                <div className="card-body">
                  <h5 className="card-title">{tarea.titulo}</h5>
                  <p className="card-text">{tarea.descripcion}</p>
                  <a href="#" className="btn btn-primary">Completar</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tareas;
