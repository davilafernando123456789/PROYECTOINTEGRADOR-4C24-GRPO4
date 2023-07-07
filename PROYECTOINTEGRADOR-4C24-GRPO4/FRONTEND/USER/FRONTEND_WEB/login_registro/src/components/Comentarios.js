import React, { useState } from 'react';
import Menu from './Menu';

const Comentarios = () => {
  // Estado para almacenar los comentarios
  const [comentarios, setComentarios] = useState([]);

  // Función para agregar un nuevo comentario
  const agregarComentario = (texto) => {
    const nuevoComentario = {
      id: new Date().getTime(),
      texto: texto,
    };
    setComentarios([...comentarios, nuevoComentario]);
  };

  return (
    <Menu>
      <div className="container">
        <h1 className="text-primary">Comentarios</h1>
        <div>
          {/* Formulario para agregar comentarios */}
          <form onSubmit={(e) => {
            e.preventDefault();
            const texto = e.target.comentario.value;
            agregarComentario(texto);
            e.target.comentario.value = '';
          }}>
            <div className="mb-3">
              <label htmlFor="comentario" className="form-label">Nuevo Comentario</label>
              <textarea className="form-control" id="comentario" rows="3" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Agregar Comentario</button>
          </form>
        </div>
        <div className="mt-4">
          {/* Lista de comentarios */}
          {comentarios.length === 0 ? (
            <p>No hay comentarios.</p>
          ) : (
            <ul className="list-group">
              {comentarios.map((comentario) => (
                <li key={comentario.id} className="list-group-item">{comentario.texto}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Menu>
  );
};

export default Comentarios;
