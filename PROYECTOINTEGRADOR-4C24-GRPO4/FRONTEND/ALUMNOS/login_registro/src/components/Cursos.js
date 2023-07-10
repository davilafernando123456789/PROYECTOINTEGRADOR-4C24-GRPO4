import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { useAuth } from '../AuthContext';
import '../assets/css/cursos.css';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [idAlumno, setIdAlumno] = useState('');
  const { authData } = useAuth();

  useEffect(() => {
    const idAlumno = authData?.idAlumno;
    setIdAlumno(idAlumno);

    fetch('http://localhost:8090/cursos?nombre=Matematicas')
      .then(response => response.json())
      .then(data => {
        setCursos(data);
      })
      .catch(error => console.log(error));
  }, [authData]);

  return (
    <Menu>
      <div className="container">
        <h1 className="text-dark" style={{ textAlign: 'center' }}><b>Cursos</b></h1>
        <div className="row">
          {cursos.map((curso) => (
            <div className="col-md-4 mb-4" key={curso.idCurso}>
              <div className="card">
                <img className="curso__imagen" src='https://thumbs.dreamstime.com/b/icono-de-cursos-en-l%C3%ADnea-esbozo-vector-simple-bien-organizado-uso-con-fines-comerciales-impresi%C3%B3n-web-o-cualquier-tipo-proyecto-254645322.jpg'/>
                <div className="card-body">
                  <h5 className="card-title">
                  <a href='/Detallescurso'>{curso.nombre}</a>
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
