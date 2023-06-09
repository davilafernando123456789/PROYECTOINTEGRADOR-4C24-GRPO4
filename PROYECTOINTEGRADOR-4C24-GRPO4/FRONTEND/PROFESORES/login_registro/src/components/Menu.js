import React from 'react';
import { useAuth } from '../AuthContext';
import { RiFileTextLine, RiDashboardLine, RiFileListLine, RiBookOpenLine, RiChatSmile3Line, RiSettings5Line, RiCalendarLine } from 'react-icons/ri';
import Carousel from 'react-bootstrap/Carousel';

const Menu = ({ children }) => {
  const { authData } = useAuth();
  const nombres = authData?.nombres;

  const [cursosOpen, setCursosOpen] = React.useState(false);

  const toggleCursos = () => {
    setCursosOpen(!cursosOpen);
  };

  
  return (
    <div className="d-flex">
      <div className="d-flex flex-column flex-shrink-0 p-3 text-light bg-dark" style={{ width: '280px', minHeight: '100vh', borderRight: '1px solid #ccc' }}>
        <header className="bg-primary py-3">
          <div className="container">
            <h1 className="text-light">GeniusTec</h1>
          </div>
        </header>

        <div className="mt-3">
          <div className="mt-auto">
            <div className="d-flex align-items-center text-light">
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
              <strong>{nombres}</strong>
            </div>
          </div>
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <a href="/Menu" className="nav-link text-light">
                <RiSettings5Line size={16} className="me-2" />
                Home
              </a>
            </li>
            {/* Menú items */}
            <li className="nav-item">
              <button className="nav-link active d-flex align-items-center" onClick={toggleCursos}>
                <RiDashboardLine size={16} className="me-2" />
                Cursos
              </button>
              {cursosOpen && (
                <ul className="nav nav-pills flex-column ml-3">
                  <li>
                    <a href="/Temario" className="nav-link text-light">
                      <RiFileListLine size={16} className="me-2" />
                      Temario
                    </a>
                  </li>
                  <li>
                    <a href="/Cursos" className="nav-link text-light">
                      <RiFileListLine size={16} className="me-2" />
                      Cursos
                    </a>
                  </li>
                  <li>
                    <a href="/Notas" className="nav-link text-light">
                      <RiFileListLine size={16} className="me-2" />
                      Notas
                    </a>
                  </li>
                  <li>
                    <a href="/Tareas" className="nav-link text-light">
                      <RiBookOpenLine size={16} className="me-2" />
                      Tareas
                    </a>
                  </li>
                  <li>
                    <a href="/Comentarios" className="nav-link text-light">
                      <RiChatSmile3Line size={16} className="me-2" />
                      Comentarios
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/Chatbox" className="nav-link text-light">
                <RiFileTextLine size={16} className="me-2" />
                ChatBox
              </a>
            </li>
            <li>
              <a href="/Horario" className="nav-link text-light">
                <RiCalendarLine size={16} className="me-2" />
                Horario
              </a>
            </li>
            <li>
              <a href="/Calendario" className="nav-link text-light">
                <RiCalendarLine size={16} className="me-2" />
                Calendario
              </a>
            </li>
            <li>
              <a href="/Configuraciones" className="nav-link text-light">
                <RiSettings5Line size={16} className="me-2" />
                Configuración
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-light">
                <RiDashboardLine size={16} className="me-2" />
                Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex-grow-1">
        {children !== undefined ? (
          <div className="flex-grow-1">{children}</div>
        ) : (
          <div className="flex-grow-1">
            <div className="container">
            <h1 className="text-primary" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Bienvenido, {nombres}</h1>
              <div className="row mt-4">
                <div className="col-md-6 mx-auto">
                  <input type="text" className="form-control" placeholder="Buscar" />
                </div>
              </div>
            </div>
            <div className="justify-content-center mt-4">
              <Carousel className="col-md-8 mx-auto">
                <Carousel.Item>
                  <img className="d-block w-100" src="/login.avif" alt="Imagen 1" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src="/login.avif" alt="Imagen 2" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src="/login.avif" alt="Imagen 3" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
