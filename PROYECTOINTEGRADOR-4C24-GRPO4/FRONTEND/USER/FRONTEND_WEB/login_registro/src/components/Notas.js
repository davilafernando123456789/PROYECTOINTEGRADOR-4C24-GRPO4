import React from 'react';
import '../assets/css/notas.css';
import Menu from './Menu';

const Notas = () => {
  const notas = [
    { materia: 'Matemáticas', nota: 'B' },
    { materia: 'Historia', nota: 'A' },
    { materia: 'Ciencias', nota: 'C' },
    { materia: 'Lenguaje', nota: 'B' },
  ];

  return (
    <Menu>
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

export default Notas;
