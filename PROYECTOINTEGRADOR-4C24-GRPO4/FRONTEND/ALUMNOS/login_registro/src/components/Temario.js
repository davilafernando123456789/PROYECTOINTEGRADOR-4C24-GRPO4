import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { useAuth } from '../AuthContext';
import '../assets/css/temario.css';
import { Link } from 'react-router-dom';
const Temario = () => {
  const [bimestre, setBimestre] = useState(1);
  const [temas, setTemas] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [idAlumno, setIdAlumno] = useState('');
  const { authData } = useAuth();

  useEffect(() => {
    const idAlumno = authData?.idAlumno;
    setIdAlumno(idAlumno);

    fetch(`http://localhost:8090/temas?bimestre=${bimestre}`)
      .then(response => response.json())
      .then(data => setTemas(data))
      .catch(error => console.log(error));

    fetch('http://localhost:8090/cursos')
      .then(response => response.json())
      .then(data => setCursos(data))
      .catch(error => console.log(error));
  }, [bimestre]);

  const cambiarBimestre = (bimestre) => {
    setBimestre(bimestre);
  };

  let contenido;
  if (temas.length > 0) {
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
          {temas.map((tema) => (
            <tr key={tema.id}>
              <td>
                {cursos.find(curso => curso.id === tema.id_curso)?.nombre}
              </td>
              <td>{tema.nombre}</td>
              <td><a href='#'>ver</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    contenido = <div>No hay información para el bimestre seleccionado</div>;
  }

  return (
    <Menu>
      <div className="row mt-4 justify-content-center">
          <div className="col-md-12">
            <Link to="/Detallescurso" className="link-black">Volver a detalles de Cursos</Link>
          </div>
        </div>
      <div className="temario">
        <h1 className="temario__heading"><b>Temario</b></h1>
        <div className="temario__buttons">
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
        <div className="temario__contenido">{contenido}</div>
      </div>
    </Menu>
  );
};

export default Temario;
