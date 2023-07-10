import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import '../assets/css/detalle.css';

const DetallesCurso = () => {
  const [curso, setCurso] = useState(null);
  const [idProfesor, setIdProfesor] = useState(''); // Agrega el estado para almacenar el ID del profesor

  useEffect(() => {
    const idProfesor = 'insertar ID del profesor aquí'; // Inserta el ID del profesor correspondiente
    setIdProfesor(idProfesor);

    fetch(`http://localhost:8080/cursos`)
      .then(response => response.json())
      .then(data => {
        const cursosProfesor = data.filter(curso => curso.idProfesor.idProfesor === idProfesor);
        setCurso(cursosProfesor[0]); // Asigna el primer curso filtrado a la variable curso
      })
      .catch(error => console.log(error));
  }, [idProfesor]);

  if (!curso) {
    return null;
  }

  return (
    <Menu>
      <div className="container custom-bg col-md-12 d-flex flex-column align-items-center">
        <div className="card bg-primary text-white col-md-8">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1>{curso.nombre}</h1>
              <p>Código: {curso.codigo}</p>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end">
              <img
                src={curso.imagenAlumno}
                className="img-fluid rounded-circle alumno-image"
                alt="Foto del alumno"
              />
            </div>
          </div>
        </div>
        <div className="card mt-2 col-md-8">
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="card border-primary">
                  <div className="card-body center">
                    <img
                      src={curso.imagen1}
                      className="card-img-top small-image"
                      alt="Imagen 1"
                    />
                    <p className="card-text text-center">Palabra 1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-primary">
                  <div className="card-body">
                    <img
                      src={curso.imagen2}
                      className="card-img-top small-image"
                      alt="Imagen 2"
                    />
                    <p className="card-text text-center">Palabra 2</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-primary">
                  <div className="card-body">
                    <img
                      src={curso.imagen3}
                      className="card-img-top small-image"
                      alt="Imagen 3"
                    />
                    <p className="card-text text-center">Palabra 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Botón 1</h5>
                <p className="card-text">Descripción del botón 1</p>
                <button className="btn btn-primary btn-block">Acción 1</button>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Botón 2</h5>
                <p className="card-text">Descripción del botón 2</p>
                <button className="btn btn-primary btn-block">Acción 2</button>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Botón 3</h5>
                <p className="card-text">Descripción del botón 3</p>
                <button className="btn btn-primary btn-block">Acción 3</button>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Botón 4</h5>
                <p className="card-text">Descripción del botón 4</p>
                <button className="btn btn-primary btn-block">Acción 4</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default DetallesCurso;
