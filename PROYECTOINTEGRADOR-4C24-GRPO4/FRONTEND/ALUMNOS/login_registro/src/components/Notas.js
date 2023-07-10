// Notas.js
import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { useAuth } from '../AuthContext';
import '../assets/css/notas.css';
import { Link } from 'react-router-dom';

const Notas = () => {
  const { authData } = useAuth();
  const idAlumno = authData?.idAlumno;
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    if (idAlumno) {
      fetch(`http://localhost:8090/notas/alumno/${idAlumno}`)
        .then(response => response.json())
        .then(data => setNotas(data))
        .catch(error => console.log(error));
    }
  }, [idAlumno]);

  return (
    <Menu>
            <div className="row mt-4 justify-content-center">
          <div className="col-md-12">
            <Link to="/Detallescurso" className="link-black">Volver a detalles de Cursos</Link>
          </div>
        </div>
      <div className="container">
        <h1 className="text-center">Notas del Alumno</h1>

        <table className="table notas-table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Curso</th>
              <th scope="col">Alumno</th>
              <th scope="col">Nota</th>
            </tr>
          </thead>
          <tbody>
            {notas.map(nota => (
              <tr key={nota.idNota}>
                <td>{nota.curso.nombre}</td>
                <td>{`${nota.alumno.nombres} ${nota.alumno.apellidos}`}</td>
                <td>{nota.nota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Menu>
  );
};

export default Notas;
