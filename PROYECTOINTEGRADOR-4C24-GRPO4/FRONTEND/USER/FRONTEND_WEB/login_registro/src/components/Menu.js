import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiFileTextLine, RiDashboardLine, RiFileListLine, RiBookOpenLine, RiChatSmile3Line, RiSettings5Line } from 'react-icons/ri';

const Menu = ({ children }) => {
  return (
    <div className="d-flex">
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-primary" style={{ width: '280px', height: '100vh' }}>
        <header className="bg-primary py-3">
          <div className="container">
            <h1 className="text-white">GeniusTec</h1>
          </div>
        </header>

        <div className="mt-3">
          <div className="mt-auto">
            <div className="d-flex align-items-center text-white">
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
              <strong>Eduardo</strong>
            </div>
          </div>
          <ul className="nav nav-pills flex-column mb-auto">
            {/* Menú items */}
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                <RiDashboardLine size={16} className="me-2" />
                Cursos
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <RiFileListLine size={16} className="me-2" />
                Módulos
              </a>
            </li>
            <li>
              <a href="/Tareas" className="nav-link text-white">
                <RiBookOpenLine size={16} className="me-2" />
                Tareas
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <RiFileTextLine size={16} className="me-2" />
                Resúmenes
              </a>
            </li>
            <li>
              <a href="/chatbox" className="nav-link text-white">
                <RiFileTextLine size={16} className="me-2" />
                ChatBox
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
        {children}
      </div>
    </div>
  );
};

export default Menu;
