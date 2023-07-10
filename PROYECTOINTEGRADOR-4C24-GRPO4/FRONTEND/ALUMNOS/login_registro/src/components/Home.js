import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiFileTextLine, RiDashboardLine, RiFileListLine, RiBookOpenLine, RiChatSmile3Line, RiSettings5Line, RiCalendarLine } from 'react-icons/ri';
import Carousel from 'react-bootstrap/Carousel';
import '../assets/css/menu.css';

const Menu = ({ children }) => {
  const [cursosOpen, setCursosOpen] = React.useState(false);

  const toggleCursos = () => {
    setCursosOpen(!cursosOpen);
  };

  return (
    <div className="d-flex menu-container"> {/* Aplicando la clase CSS */}
    <div className="d-flex">
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-primary" style={{ width: '280px', height: '100vh' }}>
        <header className="bg-primary py-3">
          <div className="container">
            <h1 className="text-white"><b>GeniusTec</b></h1>
          </div>
        </header>

        <div className="mt-3">
          <div className="mt-auto">
            <div className="d-flex align-items-center text-white">
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
              <strong>Eduardo 4° B</strong>
            </div>
          </div>
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <a href="/Home" className="nav-link text-white">
                <RiSettings5Line size={16} className="me-2" />
                Home
              </a>
            </li>
            {/* Menú items */}
            <li className="nav-item">
              <button className="nav-link active d-flex align-items-center" onClick={toggleCursos}>
                <RiDashboardLine size={16} className="me-2" />
                Módulos
              </button>
              {cursosOpen && (
                <ul className="nav nav-pills flex-column sub-menu">
                     <li>
                    <a href="/Cursos" className="nav-link text-white">
                      <RiFileListLine size={16} className="me-2" />
                      Cursos
                    </a>
                  </li>
                  <li>
                    <a href="/Tareas" className="nav-link text-white">
                      <RiBookOpenLine size={16} className="me-2" />
                      Tareas
                    </a>
                  </li>
                  <li>
                    <a href="/Notas" className="nav-link text-white">
                      <RiFileListLine size={16} className="me-2" />
                      Notas
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
                    <a href="/Comentarios" className="nav-link text-white">
                      <RiChatSmile3Line size={16} className="me-2" />
                      Comentarios
                    </a>
                  </li>
            <li>
              <a href="/chatbox" className="nav-link text-white">
                <RiFileTextLine size={16} className="me-2" />
                ChatBox
              </a>
            </li>
            <li>
              <a href="/Horario" className="nav-link text-white">
                <RiCalendarLine size={16} className="me-2" />
                Horario
              </a>
            </li>
            <li>
              <a href="/Calendario" className="nav-link text-white">
                <RiCalendarLine size={16} className="me-2" />
                Calendario
              </a>
            </li>
                  <li>
                    <a href="/Notificaciones" className="nav-link text-white">
                      <RiChatSmile3Line size={16} className="me-2" />
                      Notificación
                    </a>
                  </li>
            <li>
              <a href="/" className="nav-link text-white">
                <RiSettings5Line size={16} className="me-2" />
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
          <div className="flex-grow-1 welcome-container">
            <div className="container">
            <h1 className="text-primary">Bienvenido, Eduardo</h1>
              <div className="row">
                <div className="mb-4">
                  <div className="col-md-3">
                    <input type="text" className="form-control" placeholder="Buscar" />
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-content-center">
            <Carousel className="col-md-8 mx-auto">
                <Carousel.Item>
                  <img className="d-block w-100 h-auto" src="https://mmedia.eluniversal.com/19424/hoy-se-celebra-el-dia-internacional-de-la-mujer-121820.jpg" alt="Imagen 1" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 h-auto" src="https://ceseconsultores.com/wp-content/uploads/2021/03/dia-mundial-agua.jpg" alt="Imagen 2" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 h-auto" src="https://i.ytimg.com/vi/_Ac0ny66_zE/maxresdefault.jpg" alt="Imagen 3" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 h-auto" src="https://i0.wp.com/educarplus.com/wp-content/uploads/2021/06/Dia-de-la-madre-segundo-domingo-de-mayo.jpg" alt="Imagen 4" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 h-auto" src="https://i0.wp.com/educarplus.com/wp-content/uploads/2021/06/Dia-del-Padre-Tercer-Domingo-de-Junio.jpg" alt="Imagen 5" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 h-auto" src="https://noticias-pe.laiglesiadejesucristo.org/media/960x540/Dia-del-Maestro-0.jpg" alt="Imagen 6" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 h-auto" src="https://800noticias.com/cms/wp-content/uploads/2020/08/Santa-Rosa-de-Lima-30-de-agosto.jpg" alt="Imagen 7" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 h-auto" src="https://www.consejosdeldia.com/wp-content/uploads/2021/09/diadelaprimavera.jpg" alt="Imagen 8" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 h-auto" src="https://noticias-pe.laiglesiadejesucristo.org/media/960x540/Dia-Periodista-Peruano-0.jpg" alt="Imagen 9" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 h-auto" src="https://pbs.twimg.com/media/En2Ckf1W8AcVBMf.jpg" alt="Imagen 10" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        )}
      </div>
    </div>
    {/* Contenido del componente Menu */}
  </div>
  );
};

export default Menu;
