import React from 'react';
import '../assets/css/notas.css';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const NotasM = () => {
  const notas = [
    { materia: 'Matemática', nota: 'A' },
    { materia: 'Matemática', nota: 'B' },
    { materia: 'Matemática', nota: 'A' },
    { materia: 'Matemática', nota: 'B' },
  ];

  return (
    <Menu>
      {/* Enlace para volver a la sección de cursos */}
      <div className="row mt-4 justify-content-center">
        <div className="col-md-12">
          <Link to="/DetallecursoMate" className="link-black">Volver a detalles de Cursos</Link>
        </div>
      </div>
      <div className="container">
        <h1 className="text-center">Notas del Alumno</h1>

        <table className="table notas-table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Materia</th>
              <th scope="col">Nota</th>
            </tr>
          </thead>
          <tbody>
            {notas.map((nota, index) => (
              <tr key={index}>
                <td>{nota.materia}</td>
                <td>{nota.nota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Menu>
  );
};

export default NotasM;
