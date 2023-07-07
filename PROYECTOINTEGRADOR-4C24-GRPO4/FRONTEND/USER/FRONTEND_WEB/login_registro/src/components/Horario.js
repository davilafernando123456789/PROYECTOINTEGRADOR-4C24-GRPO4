import React from 'react';
import Menu from './Menu';

const Horario = () => {
  // Datos del horario
  const horario = [
    { dia: 'Lunes', hora: '9:00 AM - 11:00 AM', materia: 'Matemáticas' },
    { dia: 'Martes', hora: '1:00 PM - 3:00 PM', materia: 'Historia' },
    { dia: 'Miércoles', hora: '10:00 AM - 12:00 PM', materia: 'Ciencias' },
    { dia: 'Jueves', hora: '3:00 PM - 5:00 PM', materia: 'Inglés' },
    { dia: 'Viernes', hora: '2:00 PM - 4:00 PM', materia: 'Arte' },
  ];

  return (
    <Menu>
      <div className="container">
        <h1 className="text-primary">Horario</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Día</th>
              <th>Hora</th>
              <th>Materia</th>
            </tr>
          </thead>
          <tbody>
            {horario.map((clase, index) => (
              <tr key={index}>
                <td>{clase.dia}</td>
                <td>{clase.hora}</td>
                <td>{clase.materia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Menu>
  );
};

export default Horario;
