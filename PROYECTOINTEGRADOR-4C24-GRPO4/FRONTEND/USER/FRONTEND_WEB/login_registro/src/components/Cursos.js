import React from 'react';
import Menu from './Menu';
import '../assets/css/Cursos.css';

const Cursos = () => {
  const cursos = [
    {
      idCurso: 1,
      nombre: 'Historia',
      descripcion: 'Curso de historia mundial',
      codigo: 'HIS101',
      imagen: 'https://c8.alamy.com/compes/fdxbwa/historia-texto-y-simbolos-relacionados-con-tiza-en-la-pizarra-sobre-fondo-blanco-fdxbwa.jpg',
      url: '/DetallecursoHistoria', // Agrega la URL de la página de historia
    },
    {
      idCurso: 2,
      nombre: 'Matemáticas',
      descripcion: 'Curso de matemáticas I',
      codigo: 'MAT201',
      imagen: 'https://previews.123rf.com/images/christianchan/christianchan1509/christianchan150900407/45241874-f%C3%B3rmulas-matem%C3%A1ticas-escritas-por-tiza-blanca-sobre-el-fondo-de-pizarra.jpg',
      url: '/DetallecursoMate', // Agrega la URL de la página de matemáticas
    },
    {
      idCurso: 3,
      nombre: 'Ciencias',
      descripcion: 'Curso de ciencias naturales',
      codigo: 'CIE301',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7V9suqYBpvz8TjCXAMwzx0guC_EV4lgAVM1LZnPBIV-BB3UoADG00-350Fvr7SihSdw&usqp=CAU',
      url: '/DetallecursoCiencia', // Agrega la URL de la página de ciencias
    },
    {
      idCurso: 4,
      nombre: 'Geografía',
      descripcion: 'Curso de Geografía',
      codigo: 'GEO101',
      imagen: 'https://mexicox.gob.mx/asset-v1:CENTROGEO+IAUY20028X+2020_02+type@asset+block@centro_geo.jpg',
      url: '/DetallecursoGeo', // Agrega la URL de la página de historia
    },
    {
      idCurso: 5,
      nombre: 'Literatura',
      descripcion: 'Curso de Literatura',
      codigo: 'LIT201',
      imagen: 'https://consentido.nl/wp/wp-content/uploads/0-2.png',
      url: '/DetallecursoLit', // Agrega la URL de la página de matemáticas
    },
    {
      idCurso: 6,
      nombre: 'Educación Física',
      descripcion: 'Curso de Educación Física',
      codigo: 'EDF301',
      imagen: 'https://cursosmasters.com/wp-content/uploads/2022/11/requisitos-para-ser-profesor-de-educacion-fisica-1-istock.jpg',
      url: '/DetallecursoEdf', // Agrega la URL de la página de ciencias
    },
    // Agrega más cursos aquí...
  ];

  return (
    <Menu>
      <div className="container">
        <h1 className="text-dark" style={{ textAlign: 'center' }}><b>Cursos</b></h1>
        <div className="row">
          {cursos.map((curso) => (
            <div className="col-md-4 mb-4" key={curso.idCurso}>
              <div className="card">
                <img src={curso.imagen} className="card-img-top" alt={curso.nombre} />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href={curso.url}>{curso.nombre}</a>
                  </h5>
                  <p className="card-text">{curso.descripcion}</p>
                  <p className="card-text">Código: {curso.codigo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Menu>
  );
};

export default Cursos;
