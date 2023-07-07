import React from 'react';
import '../assets/css/temario.css';
import Menu from './Menu';

class Temario extends React.Component {
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
                <td>Matemáticas</td>
                <td>
                  <ul className="temario__temas">
                    <li>Álgebra</li>
                    <li>Geometría</li>
                    <li>Probabilidad</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Ciencias Naturales</td>
                <td>
                  <ul className="temario__temas">
                    <li>Biología</li>
                    <li>Química</li>
                    <li>Física</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Lenguaje y Literatura</td>
                <td>
                  <ul className="temario__temas">
                    <li>Comprensión lectora</li>
                    <li>Gramática</li>
                    <li>Redacción</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Historia</td>
                <td>
                  <ul className="temario__temas">
                    <li>Prehistoria</li>
                    <li>Edad Antigua</li>
                    <li>Edad Media</li>
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
                <td>Inglés</td>
                <td>
                  <ul className="temario__temas">
                    <li>Gramática</li>
                    <li>Vocabulario</li>
                    <li>Conversación</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Artes</td>
                <td>
                  <ul className="temario__temas">
                    <li>Pintura</li>
                    <li>Dibujo</li>
                    <li>Escultura</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Educación Física</td>
                <td>
                  <ul className="temario__temas">
                    <li>Deportes</li>
                    <li>Ejercicios físicos</li>
                    <li>Juegos recreativos</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Geografía</td>
                <td>
                  <ul className="temario__temas">
                    <li>Continentes</li>
                    <li>Países</li>
                    <li>Recursos naturales</li>
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
                <td>Ciencias Sociales</td>
                <td>
                  <ul className="temario__temas">
                    <li>Sociedad</li>
                    <li>Política</li>
                    <li>Economía</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Formación Ciudadana</td>
                <td>
                  <ul className="temario__temas">
                    <li>Derechos y deberes</li>
                    <li>Participación ciudadana</li>
                    <li>Valores cívicos</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Tecnología</td>
                <td>
                  <ul className="temario__temas">
                    <li>Informática</li>
                    <li>Robótica</li>
                    <li>Innovación</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Religión</td>
                <td>
                  <ul className="temario__temas">
                    <li>Historia de las religiones</li>
                    <li>Creencias y prácticas</li>
                    <li>Ética religiosa</li>
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
            <tbody></tbody>
              <tr>
                <td>Educación para la Salud</td>
                <td>
                  <ul className="temario__temas">
                    <li>Alimentación saludable</li>
                    <li>Higiene personal</li>
                    <li>Ejercicio físico</li>
                  </ul>
                </td>
              </tr>
              <tbody>
                </tbody>
                </table>
        );
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

export default Temario;
