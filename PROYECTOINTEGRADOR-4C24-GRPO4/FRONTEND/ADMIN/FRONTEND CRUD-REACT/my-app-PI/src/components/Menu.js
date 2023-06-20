import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiUser3Line, RiUserSettingsLine, RiAccountPinCircleLine, RiBookOpenLine, RiSettings5Line } from 'react-icons/ri';
import { useLocation , Link} from 'react-router-dom';

const Menu = (props) => {
  const { adminName, content } = props;
  const location = useLocation();


  return (
    <div className="d-flex">
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-primary" style={{ width: '280px', height: '100vh' }}>
        <header className="bg-primary py-3">
          <div className="container">
            <h1 className="text-white">Genius-Tec</h1>
          </div>
        </header>

        <div className="mt-3">
          <div className="mt-auto">
            <div className="d-flex align-items-center text-white">
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
              <strong>{adminName}</strong>
            </div>
          </div>
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
            <Link to="/usuarios" className="nav-link text-white">
              <RiUser3Line size={16} className="me-2" />
              Usuarios
            </Link>
            </li>
            <li>
            <Link to="/cursos" className="nav-link text-white">
              <RiBookOpenLine size={16} className="me-2" />
              Cursos
            </Link>
            </li>
            <li>
            <Link to="/profesores" className="nav-link text-white">
              <RiAccountPinCircleLine size={16} className="me-2" />
              Profesores
            </Link>
            </li>
            <li>
            <Link to="/administradores" className="nav-link text-white">
              <RiUserSettingsLine size={16} className="me-2" />
              Administradores
            </Link>
            </li>
            <li>
            <Link to="/menu" className="nav-link text-white">
              <RiSettings5Line size={16} className="me-2" />
              Configuración
            </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-grow-1">
        {content}
      </div>
    </div>
  );
};

export default Menu;
