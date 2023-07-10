import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { useAuth } from '../AuthContext';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [idProfesor, setIdProfesor] = useState('');
  const [mostrarMas, setMostrarMas] = useState(false);
  const { authData } = useAuth();

  useEffect(() => {
    const idProfesor = authData?.idProfesor;
    setIdProfesor(idProfesor);

    fetch(`http://localhost:8080/cursos/profesor/${idProfesor}`)
      .then(response => response.json())
      .then(data => {
        setCursos(data);
      })
      .catch(error => console.log(error));
  }, [authData, idProfesor]);

  const handleMostrarMas = () => {
    setMostrarMas(true);
  };

  const cursosToShow = mostrarMas ? cursos : cursos.slice(0, 3);

  return (
    <Menu>
      <div className="container-fluid">
        <h1 className="text-dark text-center" style={{ marginBottom: '30px' }}>Cursos</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {cursosToShow.map((curso) => (
            <div className="col mb-4" key={curso.idCurso}>
              <div className="card bg-primary text-white">
                <img src={curso.imagen} className="card-img-top" alt={curso.nombre} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href={curso.url} style={{ textDecoration: 'none', color: '#fff' }}>{curso.nombre}</a>
                  </h5>
                  <p className="card-text" style={{ marginBottom: '10px' }}>{curso.descripcion}</p>
                  <div className="card-text">
                    <p className="mb-1">Tema: {curso.idTema.nombre}</p>
                    <p className="mb-1">Libro: {curso.idTema.libro.nombre}</p>
                  </div>
                  <a href="https://example.com" className="btn btn-light">Acceder al curso</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!mostrarMas && cursos.length > 3 && (
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={handleMostrarMas}>Mostrar más cursos</button>
          </div>
        )}
      </div>
    </Menu>
  );
};

export default Cursos;
