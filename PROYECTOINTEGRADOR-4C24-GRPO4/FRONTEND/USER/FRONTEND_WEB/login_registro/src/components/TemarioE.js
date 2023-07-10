import React from 'react';
import '../assets/css/temario.css';
import Menu from './Menu';
import { Link } from 'react-router-dom';

class TemarioE extends React.Component {
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
                <td>Educación Física</td>
                <td>
                  <ul className="temario__temas">
                    <li>Introducción a la educación física</li>
                    <li>Fundamentos y técnicas básicas</li>
                    <li>Ejercicios y prácticas de calentamiento</li>
                    <li>Juegos y actividades recreativas</li>
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
                <td>Educación Física</td>
                <td>
                  <ul className="temario__temas">
                    <li>Deportes individuales</li>
                    <li>Técnicas y reglas de diferentes deportes</li>
                    <li>Estrategias y tácticas de juego</li>
                    <li>Competencias y prácticas supervisadas</li>
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
                <td>Educación Física</td>
                <td>
                  <ul className="temario__temas">
                    <li>Actividades al aire libre</li>
                    <li>Exploración de deportes alternativos</li>
                    <li>Condición física y entrenamiento</li>
                    <li>Proyectos individuales o en grupo</li>
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
                <td>Educación Física</td>
                <td>
                  <ul className="temario__temas">
                    <li>Desarrollo de habilidades deportivas</li>
                    <li>Organización y participación en eventos deportivos</li>
                    <li>Evaluación y seguimiento del rendimiento físico</li>
                    <li>Retroalimentación y reflexión sobre el aprendizaje</li>
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
        <Link to="/DetallecursoEdf" className="link-black">Volver a detalles de Cursos</Link>
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

export default TemarioE;
