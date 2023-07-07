import React from 'react';
import Menu from './Menu';

const Cursos = () => {
  const cursos = [
    {
      idCurso: 1,
      nombre: 'Historia',
      descripcion: 'Curso de historia mundial',
      codigo: 'HIS101',
      imagen: 'https://static.mercadonegro.pe/wp-content/uploads/2021/02/23133540/curso-on-line.png',
      url: '/Detallecurso', // Agrega la URL de la página de historia
    },
    {
      idCurso: 2,
      nombre: 'Matemáticas',
      descripcion: 'Curso de matemáticas avanzadas',
      codigo: 'MAT201',
      imagen: 'https://static.mercadonegro.pe/wp-content/uploads/2021/02/23133540/curso-on-line.png',
      url: '/Detallecurso', // Agrega la URL de la página de matemáticas
    },
    {
      idCurso: 3,
      nombre: 'Ciencias',
      descripcion: 'Curso de ciencias naturales',
      codigo: 'CIE301',
      imagen: 'https://static.mercadonegro.pe/wp-content/uploads/2021/02/23133540/curso-on-line.png',
      url: '/Detallecurso', // Agrega la URL de la página de ciencias
    },
    // Agrega más cursos aquí...
  ];

  return (
    <Menu>
      <div className="container">
        <h1 className="text-primary">Cursos</h1>
        <div className="row">
          {cursos.map((curso) => (
            <div className="col-md-4 mb-4" key={curso.idCurso}>
              <div className="card">
                <img src={curso.imagen} className="card-img-top" alt={curso.nombre} />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href={curso.url}>{curso.nombre}</a>
                  </h5>
                  <p className="card-text">{curso.descripcion}</p>
                  <p className="card-text">Código: {curso.codigo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Menu>
  );
};

export default Cursos;
