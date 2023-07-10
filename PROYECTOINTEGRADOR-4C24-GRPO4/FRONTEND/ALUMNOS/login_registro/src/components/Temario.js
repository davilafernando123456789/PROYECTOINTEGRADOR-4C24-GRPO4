import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { useAuth } from '../AuthContext'; // Importa el hook useAuth

const Temario = () => {
  const [bimestre, setBimestre] = useState(1);
  const [insercciones, setInsercciones] = useState([]);
  const [idAlumno, setIdAlumno] = useState('');
  const { authData } = useAuth(); // Utiliza el hook useAuth aquí

  useEffect(() => {
    const idAlumno = authData?.idAlumno;
    setIdAlumno(idAlumno);

    fetch(`http://localhost:8080/insercciones/alumno/${idAlumno}`)
      .then(response => response.json())
      .then(data => setInsercciones(data))
      .catch(error => console.log(error));
  }, []);

  const cambiarBimestre = (bimestre) => {
    setBimestre(bimestre);
  };

  let contenido;
  switch (bimestre) {
    case 1:
      contenido = (
        <table className="temario__table">
          <thead>
            <tr>
              <th>Curso</th>
              <th>Tema</th>
              <th>Libro</th>
            </tr>
          </thead>
          <tbody>
            {insercciones.map((inserccion) => (
              <tr key={inserccion.idInserccion}>
                <td>{inserccion.curso.nombre}</td>
                <td>{inserccion.curso.idTema.nombre}</td>
                <td>{inserccion.curso.idTema.libro.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
      break;
    case 2:
      // Agrega la lógica para el bimestre 2
      break;
    case 3:
      // Agrega la lógica para el bimestre 3
      break;
    case 4:
      // Agrega la lógica para el bimestre 4
      break;
    default:
      contenido = <div>No hay información para el bimestre seleccionado</div>;
  }

  return (
    <Menu>
      <div className="temario" style={{ backgroundColor: '', padding: '20px' }}>
        <h1 className="temario__heading" style={{ color: 'black', textAlign: 'center' }}><b>Temario</b></h1>
        <div className="temario__buttons" style={{ display: 'flex', justifyContent: '', marginBottom: '20px' }}>
          <button
            className={`temario__button ${bimestre === 1 ? 'active' : ''}`}
            onClick={() => cambiarBimestre(1)}
          >
            Bimestre 1
          </button>
          <button
            className={`temario__button ${bimestre === 2 ? 'active' : ''}`}
            onClick={() => cambiarBimestre(2)}
          >
            Bimestre 2
          </button>
          <button
            className={`temario__button ${bimestre === 3 ? 'active' : ''}`}
            onClick={() => cambiarBimestre(3)}
          >
            Bimestre 3
          </button>
          <button
            className={`temario__button ${bimestre === 4 ? 'active' : ''}`}
            onClick={() => cambiarBimestre(4)}
          >
            Bimestre 4
          </button>
        </div>
        <div className="temario__contenido" style={{ textAlign: 'center' }}>{contenido}</div>
      </div>
    </Menu>
  );
};

export default Temario;
