import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { useAuth } from '../AuthContext'; // Importa el hook useAuth

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [idAlumno, setIdAlumno] = useState('');
  const { authData } = useAuth(); // Utiliza el hook useAuth aquí

  useEffect(() => {
    const idAlumno = authData?.idAlumno;
    setIdAlumno(idAlumno);

    fetch(`http://localhost:8080/insercciones/alumno/${idAlumno}`)
      .then(response => response.json())
      .then(data => {
        const cursosAlumno = data.map(inserccion => inserccion.curso);
        setCursos(cursosAlumno);
      })
      .catch(error => console.log(error));
  }, [authData]); // Agrega authData como dependencia para que el efecto se ejecute cuando cambie


  return (
    <Menu>
      <div className="container">
        <h1 className="text-dark" style={{ textAlign: 'center' }}>Cursos</h1>
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
                  <p className="card-text">Tema: {curso.idTema.nombre}</p>
                  <p className="card-text">Libro: {curso.idTema.libro.nombre}</p>
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