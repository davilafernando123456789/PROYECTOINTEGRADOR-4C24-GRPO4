import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiFileTextLine, RiDashboardLine, RiFileListLine, RiBookOpenLine, RiChatSmile3Line, RiSettings5Line } from 'react-icons/ri';
import Carousel from 'react-bootstrap/Carousel';

const Menu = ({ content }) => {
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
              <strong>Admin</strong>
            </div>
          </div>
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <a href="/usuarios" className="nav-link text-white">
                <RiBookOpenLine size={16} className="me-2" />
                Usuarios
              </a>
            </li>
            <li>
              <a href="/profesores" className="nav-link text-white">
                <RiBookOpenLine size={16} className="me-2" />
                Profesores
              </a>
            </li>
            <li>
              <a href="/administradores" className="nav-link text-white">
                <RiFileTextLine size={16} className="me-2" />
                Administradores
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <RiChatSmile3Line size={16} className="me-2" />
                Comentarios
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <RiSettings5Line size={16} className="me-2" />
                Configuración
              </a>
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
