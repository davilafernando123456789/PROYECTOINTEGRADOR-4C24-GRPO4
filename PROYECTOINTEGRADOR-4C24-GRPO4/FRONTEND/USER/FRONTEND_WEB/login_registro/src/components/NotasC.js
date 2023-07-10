import React from 'react';
import '../assets/css/notas.css';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const NotasC = () => {
  const notas = [
    { materia: 'Ciencias', nota: 'A' },
    { materia: 'Ciencias', nota: 'A' },
    { materia: 'Ciencias', nota: 'B' },
    { materia: 'Ciencias', nota: 'B' },
  ];

  return (
    <Menu>
      {/* Enlace para volver a la sección de cursos */}
      <div className="row mt-4 justify-content-center">
        <div className="col-md-12">
          <Link to="/DetallecursoCiencia" className="link-black">Volver a detalles de Cursos</Link>
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

export default NotasC;
