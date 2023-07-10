import React from 'react';
import '../assets/css/temario.css';
import Menu from './Menu';
import { Link } from 'react-router-dom';

class TemarioG extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bimestre: 1,
    };
  }

  cambiarBimestre = (bimestre) => {
    this.setState({ bimestre });
  };

  render() {
    const { bimestre } = this.state;

    let contenido;
    switch (bimestre) {
      case 1:
        contenido = (
          <table className="temario__table">
            <thead>
              <tr>
                <th>Curso</th>
                <th>Temas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Geografía</td>
                <td>
                  <ul className="temario__temas">
                    <li>Introducción a la geografía y sus subdisciplinas</li>
                    <li>Estudio de los elementos del paisaje</li>
                    <li>Análisis de regiones geográficas</li>
                    <li>Estudio de los problemas y desafíos globales</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        );
        break;
      case 2:
        contenido = (
          <table className="temario__table">
            <thead>
              <tr>
                <th>Curso</th>
                <th>Temas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Geografía</td>
                <td>
                  <ul className="temario__temas">
                    <li>Estudio de los sistemas naturales</li>
                    <li>Análisis de los fenómenos climáticos</li>
                    <li>Exploración de los recursos naturales</li>
                    <li>Análisis de los procesos de urbanización</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        );
        break;
      case 3:
        contenido = (
          <table className="temario__table">
            <thead>
              <tr>
                <th>Curso</th>
                <th>Temas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Geografía</td>
                <td>
                  <ul className="temario__temas">
                    <li>Análisis de las problemáticas ambientales</li>
                    <li>Estudio de las migraciones y movimientos poblacionales</li>
                    <li>Análisis de las relaciones económicas internacionales</li>
                    <li>Exploración de las culturas y sociedades del mundo</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        );
        break;
      case 4:
        contenido = (
          <table className="temario__table">
            <thead>
              <tr>
                <th>Curso</th>
                <th>Temas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Geografía</td>
                <td>
                  <ul className="temario__temas">
                    <li>Estudio de las relaciones internacionales y geopolítica</li>
                    <li>Exploración de los conflictos y cooperación mundial</li>
                    <li>Análisis de los cambios y tendencias demográficas</li>
                    <li>Estudio de la geografía económica global</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        );
        break;
      default:
        contenido = <div>No hay información para el bimestre seleccionado</div>;
    }

    return (
      <Menu>
         {/* Enlace para volver a la sección de cursos */}
         <div className="row mt-4 justify-content-center">
        <div className="col-md-12">
        <Link to="/DetallecursoGeo" className="link-black">Volver a detalles de Cursos</Link>
        </div>
      </div> 
        <div className="temario" style={{ backgroundColor: '', padding: '20px' }}>
          <h1 className="temario__heading" style={{ color: 'black', textAlign: 'center' }}><b>Temario</b></h1>
          <div className="temario__buttons" style={{ display: 'flex', justifyContent: '', marginBottom: '20px' }}>
            <button
              className={`temario__button ${bimestre === 1 ? 'active' : ''}`}
              onClick={() => this.cambiarBimestre(1)}
            >
              Bimestre 1
            </button>
            <button
              className={`temario__button ${bimestre === 2 ? 'active' : ''}`}
              onClick={() => this.cambiarBimestre(2)}
            >
              Bimestre 2
            </button>
            <button
              className={`temario__button ${bimestre === 3 ? 'active' : ''}`}
              onClick={() => this.cambiarBimestre(3)}
            >
              Bimestre 3
            </button>
            <button
              className={`temario__button ${bimestre === 4 ? 'active' : ''}`}
              onClick={() => this.cambiarBimestre(4)}
            >
              Bimestre 4
            </button>
          </div>
          <div className="temario__contenido" style={{ textAlign: 'center' }}>{contenido}</div>
        </div>
      </Menu>
    );
  }
}

export default TemarioG;
