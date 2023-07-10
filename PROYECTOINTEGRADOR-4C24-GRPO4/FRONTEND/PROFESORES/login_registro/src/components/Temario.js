import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { useAuth } from '../AuthContext';

const Temario = () => {
  const [bimestre, setBimestre] = useState(1);
  const [cursos, setCursos] = useState([]);
  const { authData } = useAuth();
  const idProfesorLogueado = authData?.idProfesor;

  useEffect(() => {
    const fetchCursosByBimestre = async (bimestre) => {
      try {
        const response = await fetch(`http://localhost:8080/cursos/bimestre/${bimestre}`);
        const data = await response.json();

        // Filtrar los cursos por el id del profesor logueado
        const cursosFiltrados = data.filter((curso) => curso.profesor.idProfesor === idProfesorLogueado);
        setCursos(cursosFiltrados);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCursosByBimestre(bimestre);
  }, [bimestre, idProfesorLogueado]);

  const cambiarBimestre = (bimestre) => {
    setBimestre(bimestre);
  };

  let contenido;
  if (cursos.length > 0) {
    contenido = (
      <table className="table">
        <thead>
          <tr>
            <th>Curso</th>
            <th>Tema</th>
            <th>Libro</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.idCurso}>
              <td>{curso.nombre}</td>
              <td>{curso.idTema.nombre}</td>
              <td>{curso.idTema.libro.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    contenido = <div>No hay cursos disponibles para el bimestre seleccionado.</div>;
  }

  return (
    <Menu>
      <div className="temario">
        <h1 className="temario__heading text-center"><b>Temario</b></h1>
        <div className="temario__buttons d-flex justify-content-center mb-4">
          <button
            className={`temario__button btn ${bimestre === 1 ? 'btn-primary' : 'btn-light'}`}
            onClick={() => cambiarBimestre(1)}
          >
            Bimestre 1
          </button>
          <button
            className={`temario__button btn ${bimestre === 2 ? 'btn-primary' : 'btn-light'}`}
            onClick={() => cambiarBimestre(2)}
          >
            Bimestre 2
          </button>
          <button
            className={`temario__button btn ${bimestre === 3 ? 'btn-primary' : 'btn-light'}`}
            onClick={() => cambiarBimestre(3)}
          >
            Bimestre 3
          </button>
        </div>
        <div className="temario__contenido text-center">{contenido}</div>
      </div>
    </Menu>
  );
};

export default Temario;
