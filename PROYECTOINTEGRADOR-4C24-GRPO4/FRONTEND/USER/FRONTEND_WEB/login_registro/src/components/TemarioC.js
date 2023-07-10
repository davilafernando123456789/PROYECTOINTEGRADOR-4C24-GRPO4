import React from 'react';
import '../assets/css/temario.css';
import Menu from './Menu';
import { Link } from 'react-router-dom';

class TemarioC extends React.Component {
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
                <td>Ciencia</td>
                <td>
                  <ul className="temario__temas">
                    <li>Introducción a la ciencia y el método científico</li>
                    <li>Conceptos básicos y fundamentos científicos</li>
                    <li>Observación, experimentación y análisis de datos</li>
                    <li>Aplicación de la ciencia en la vida cotidiana</li>
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
                <td>Ciencia</td>
                <td>
                  <ul className="temario__temas">
                    <li>Profundización en áreas específicas de la ciencia</li>
                    <li>Estudio de fenómenos naturales y sus explicaciones científicas</li>
                    <li>Investigación y descubrimientos científicos recientes</li>
                    <li>Aplicación de la ciencia en el contexto actual</li>
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
                <td>Ciencia</td>
                <td>
                  <ul className="temario__temas">
                    <li>Avances científicos y tecnológicos</li>
                    <li>Investigación y experimentación en el campo de la ciencia</li>
                    <li>Proyectos científicos individuales o en grupo</li>
                    <li>Presentación y divulgación de resultados científicos</li>
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
                <td>Ciencia</td>
                <td>
                  <ul className="temario__temas">
                    <li>Repaso y consolidación de conocimientos científicos previos</li>
                    <li>Resolución de problemas y ejercicios prácticos</li>
                    <li>Preparación para exámenes finales o evaluaciones finales</li>
                    <li>Retroalimentación y reflexión sobre el aprendizaje en ciencia</li>
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
        <Link to="/DetallecursoCiencia" className="link-black">Volver a detalles de Cursos</Link>
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

export default TemarioC;
