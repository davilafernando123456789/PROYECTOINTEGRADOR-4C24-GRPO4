import React from 'react';
import Menu from './Menu';
import '../assets/css/detalle.css';
import { Link } from 'react-router-dom';


const DetallecursoMate = () => {
  const curso = {
    idCurso: 1,
    nombre: 'Matemática',
    codigo: 'MAT201',
    imagenAlumno: 'https://e7.pngegg.com/pngimages/488/964/png-clipart-computer-icons-mathematics-calculation-calculator-modern-education-text-orange.png', // Agrega la URL de la foto del alumno
   
  };

  return (
    <Menu>
    {/* Enlace para volver a la sección de cursos */}
 <div className="row mt-4 justify-content-center">
        <div className="col-md-12">
        <Link to="/Cursos" className="link-black">Volver a Cursos</Link>
        </div>
      </div>     
  <div className="container custom-bg col-md-12 d-flex flex-column align-items-center">
    <div className="card bg-primary text-white col-md-12">
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
    <div className="card mt-2 col-md-12">
      <div className="card-body">
        <div className="row justify-content-center">
        <div className="col-md-4">
        <div className="card border-primary">
          <div className="card-body center">
          <a href="https://meet.google.com/?hs=197&authuser=0" target="_blank" rel="noopener noreferrer"className="link-black">
              <img
                src="https://static.vecteezy.com/system/resources/previews/019/512/601/non_2x/video-conference-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg"
                className="card-img-top small-image"
                alt="Imagen 1"
              />
              <p className="card-text text-center">Meet</p>
            </a>
          </div>
        </div>
      </div>
          <div className="col-md-4">
            <div className="card border-primary">
              <div className="card-body">
              <Link to="/Notificaciones" className="link-black">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4658/4658755.png"
                  className="card-img-top small-image"
                  alt="Imagen 2"
                />
                <p className="card-text text-center">Notificación</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-primary">
              <div className="card-body">
              <Link to="/Docente" className="link-black">
                <img
                  src="https://media.istockphoto.com/id/948490226/es/vector/avatar-de-usuario-profesor-un-maestro-en-un-juego-con-gafas.jpg?s=170667a&w=0&k=20&c=KTnlhGDaEnV0Ay-w5xNrn-CnwTRKxljtN0hQ1tIbsSc="
                  className="card-img-top small-image"
                  alt="Imagen 3"
                />
                <p className="card-text text-center">Docente</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-4 justify-content-center">
    <div className="col-md-3">
  <div className="card">
    <div className="card-body text-center">
      <img
        src='https://previews.123rf.com/images/dmvector/dmvector2203/dmvector220300096/183928672-documento-icono-de-vector-de-contrato-papel-con-icono-de-l%C3%A1piz.jpg'
        className="card-img-top small-image"
        alt="Imagen 4"
      />
      <p className="card-text">Temario</p>
      <Link to="/Temario" className="btn btn-primary btn-block">Abrir</Link>
    </div>
  </div>
</div>
<div className="col-md-3">
  <div className="card">
    <div className="card-body text-center">
      <img
        src='https://us.123rf.com/450wm/get4net/get4net1709/get4net170901930/86308564-conversaci%C3%B3n-en-grupo.jpg?ver=6'
        className="card-img-top small-image"
        alt="Imagen 1"
      />
      <p className="card-text">Comentario</p>
      <Link to="/Comentarios" className="btn btn-primary btn-block">Abrir</Link>
    </div>
  </div>
</div>
<div className="col-md-3">
  <div className="card">
    <div className="card-body text-center">
      <img
        src='https://cdn-icons-png.flaticon.com/512/45/45292.png'
        className="card-img-top small-image"
        alt="Imagen 2"
      />
      <p className="card-text">Notas</p>
      <Link to="/Notas" className="btn btn-primary btn-block">Abrir</Link>
    </div>
  </div>
</div>
<div className="col-md-3">
  <div className="card">
    <div className="card-body text-center">
      <img
        src='https://ih1.redbubble.net/image.4882611619.7688/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
        className="card-img-top small-image"
        alt="Imagen 3"
      />
      <p className="card-text">ChatBox</p>
      <Link to="/chatbox" className="btn btn-primary btn-block">Abrir</Link>
    </div>
  </div>
</div>

</div>
  </div>
</Menu>
  );
};

export default DetallecursoMate;
