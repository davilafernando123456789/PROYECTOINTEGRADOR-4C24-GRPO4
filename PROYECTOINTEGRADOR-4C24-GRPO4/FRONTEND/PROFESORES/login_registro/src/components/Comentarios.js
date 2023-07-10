import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Menu from './Menu';
import { useAuth } from '../AuthContext';

const Comentarios = () => {
  const { authData } = useAuth();
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');

  useEffect(() => {
    fetchComentarios();
  }, []);

  const fetchComentarios = async () => {
    try {
      const response = await axios.get('http://localhost:8080/comentarios');
      setComentarios(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const agregarComentario = async () => {
    try {
      const idAlumno = authData?.idAlumno;
      await axios.post('http://localhost:8080/comentarios', {
        alumno: { idAlumno: idAlumno },
        comentario: nuevoComentario
      });
      setNuevoComentario('');
      fetchComentarios();
    } catch (error) {
      console.error(error);
    }
  };

  const editarComentario = async (id, nuevoTexto) => {
    try {
      await axios.put(`http://localhost:8080/comentarios/${id}`, {
        comentario: nuevoTexto
      });
      fetchComentarios();
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarComentario = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/comentarios/${id}`);
      fetchComentarios();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Menu>
      <div className="container">
        <h1 className="text-primary">Comentarios</h1>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              agregarComentario();
            }}
          >
            <div className="mb-3">
              <label htmlFor="comentario" className="form-label">Nuevo Comentario</label>
              <textarea
                className="form-control"
                id="comentario"
                rows="3"
                value={nuevoComentario}
                onChange={(e) => setNuevoComentario(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Agregar Comentario</button>
          </form>
        </div>
        <div className="mt-4">
          {comentarios.length === 0 ? (
            <p>No hay comentarios.</p>
          ) : (
            <ul className="list-group">
              {comentarios.map((comentario) => (
                <li key={comentario.idComentario} className="list-group-item">
                  <div>
                    <span>{comentario.alumno?.nombres}</span> dijo:
                  </div>
                  <div>{comentario.comentario}</div>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="form-control"
                      value={comentario.comentario}
                      onChange={(e) => editarComentario(comentario.idComentario, e.target.value)}
                    />
                  </div>
                  <div className="mt-2">
                  <button
                    className="btn btn-danger mr-1"
                    onClick={() => eliminarComentario(comentario.idComentario)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-primary ml-1"
                    onClick={() => editarComentario(comentario.idComentario, comentario.comentario)}
                  >
                    Guardar cambios
                  </button>
                </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Menu>
  );
};

export default Comentarios;
