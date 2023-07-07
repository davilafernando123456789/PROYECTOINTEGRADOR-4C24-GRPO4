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
          <div>
            <h2>Bimestre 1</h2>
            <ul>
              <li>Introducción a React</li>
              <li>Manejo de eventos en React</li>
              <li>Enrutamiento en React</li>
              <li>Gestión de estado en React</li>
            </ul>
          </div>
        );
        break;
      case 2:
        contenido = (
          <div>
            <h2>Bimestre 2</h2>
            <ul>
              <li>Uso de APIs en React</li>
              <li>Diseño de componentes reutilizables</li>
              <li>Pruebas unitarias en React</li>
              <li>Despliegue de aplicaciones de React</li>
            </ul>
          </div>
        );
        break;
      case 3:
        contenido = (
          <div>
            <h2>Bimestre 3</h2>
            <ul>
              <li>Hooks en React</li>
              <li>Estilizado en React</li>
              <li>Animaciones en React</li>
              <li>Optimización de rendimiento en React</li>
            </ul>
          </div>
        );
        break;
      default:
        contenido = <div>No hay información para el bimestre seleccionado</div>;
    }

    return (
        <Menu>
      <div className="temario">
        <h1 className="temario__heading">Temario</h1>
        <div className="temario__buttons">
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
        </div>
        <div className="temario__contenido">{contenido}</div>
      </div>
      </Menu>
    );
  }
}

export default Temario;
