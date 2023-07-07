import React from 'react';
import Menu from './Menu';
import '../assets/css/detalle.css';

const DetallesCurso = () => {
  const curso = {
    idCurso: 1,
    nombre: 'Historia',
    codigo: 'HIS101',
    imagenAlumno: 'https://profuturo.education/wp-content/uploads/2022/03/Captura-de-pantalla-2022-03-11-a-las-10.51.35.png', // Agrega la URL de la foto del alumno
    // Agrega más detalles del curso aquí...
  };

  return (
    <Menu>
      <div className="container custom-bg col-md-12">
        <div className="card bg-primary text-white col-md-12">
          <div className="row">
            <div className="col-md-4">
              <h1>{curso.nombre}</h1>
              <p>Código: {curso.codigo}</p>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-end">
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
            <div className="row">
              <div className="col-md-3">
                <div className="card border-primary">
                  <div className="card-body center">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/019/512/601/non_2x/video-conference-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg"
                      className="card-img-top small-image"
                      alt="Imagen 1"
                    />
                    <p className="card-text text-center">Palabra 1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-primary">
                  <div className="card-body">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4658/4658755.png"
                      className="card-img-top small-image"
                      alt="Imagen 2"
                    />
                    <p className="card-text text-center">Palabra 2</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-primary">
                  <div className="card-body">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/262/262606.png"
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
        <div className="row mt-4">
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Botón 1</h5>
                <p className="card-text">Descripción del botón 1</p>
                <button className="btn btn-primary">Acción 1</button>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Botón 2</h5>
                <p className="card-text">Descripción del botón 2</p>
                <button className="btn btn-primary">Acción 2</button>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Botón 3</h5>
                <p className="card-text">Descripción del botón 3</p>
                <button className="btn btn-primary">Acción 3</button>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Botón 4</h5>
                <p className="card-text">Descripción del botón 4</p>
                <button className="btn btn-primary">Acción 4</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default DetallesCurso;
