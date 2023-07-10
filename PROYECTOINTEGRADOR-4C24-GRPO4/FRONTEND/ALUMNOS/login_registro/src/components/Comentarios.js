import React, { useState } from 'react';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faThumbsUp, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';


const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);
  const [respuestas, setRespuestas] = useState({});
  const [mostrarRespuesta, setMostrarRespuesta] = useState({});
  const [editandoComentario, setEditandoComentario] = useState({});
  const [editandoRespuesta, setEditandoRespuesta] = useState({});

  const agregarComentario = (texto) => {
    const nuevoComentario = {
      id: new Date().getTime(),
      texto: texto,
      fecha: new Date().toLocaleString(),
      respuestas: [],
      meGusta: 0,
    };
    setComentarios([...comentarios, nuevoComentario]);
  };

  const agregarRespuesta = (idComentario) => {
    setMostrarRespuesta({ ...mostrarRespuesta, [idComentario]: true });
  };

  const guardarRespuesta = (idComentario) => {
    const texto = respuestas[idComentario];
    if (texto) {
      const comentariosActualizados = comentarios.map((comentario) => {
        if (comentario.id === idComentario) {
          const nuevaRespuesta = {
            id: new Date().getTime(),
            texto: texto,
            fecha: new Date().toLocaleString(),
          };
          return {
            ...comentario,
            respuestas: [...comentario.respuestas, nuevaRespuesta],
          };
        }
        return comentario;
      });
      setComentarios(comentariosActualizados);
      setRespuestas({ ...respuestas, [idComentario]: '' });
      setMostrarRespuesta({ ...mostrarRespuesta, [idComentario]: false });
    }
  };

  const editarComentario = (idComentario, nuevoTexto) => {
    const comentariosActualizados = comentarios.map((comentario) => {
      if (comentario.id === idComentario) {
        return {
          ...comentario,
          texto: nuevoTexto,
        };
      }
      return comentario;
    });
    setComentarios(comentariosActualizados);
    setEditandoComentario({ ...editandoComentario, [idComentario]: false });
  };

  const incrementarMeGusta = (idComentario) => {
    const comentariosActualizados = comentarios.map((comentario) => {
      if (comentario.id === idComentario) {
        return {
          ...comentario,
          meGusta: comentario.meGusta + 1,
        };
      }
      return comentario;
    });
    setComentarios(comentariosActualizados);
  };

  const eliminarComentario = (idComentario) => {
    const comentariosActualizados = comentarios.filter((comentario) => comentario.id !== idComentario);
    setComentarios(comentariosActualizados);
  };

  const editarRespuesta = (idComentario, idRespuesta, nuevoTexto) => {
    const comentariosActualizados = comentarios.map((comentario) => {
      if (comentario.id === idComentario) {
        const respuestasActualizadas = comentario.respuestas.map((respuesta) => {
          if (respuesta.id === idRespuesta) {
            return {
              ...respuesta,
              texto: nuevoTexto,
            };
          }
          return respuesta;
        });
        return {
          ...comentario,
          respuestas: respuestasActualizadas,
        };
      }
      return comentario;
    });
    setComentarios(comentariosActualizados);
    setEditandoRespuesta({ ...editandoRespuesta, [idRespuesta]: false });
  };

  const eliminarRespuesta = (idComentario, idRespuesta) => {
    const comentariosActualizados = comentarios.map((comentario) => {
      if (comentario.id === idComentario) {
        const respuestasFiltradas = comentario.respuestas.filter(
          (respuesta) => respuesta.id !== idRespuesta
        );
        return {
          ...comentario,
          respuestas: respuestasFiltradas,
        };
      }
      return comentario;
    });
    setComentarios(comentariosActualizados);
  };

  return (
    <Menu>
      <div className="container">
        <h1 className="text-primary">Comentarios</h1>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const texto = e.target.comentario.value;
              agregarComentario(texto);
              e.target.comentario.value = '';
            }}
          >
            <div className="mb-3">
              <label htmlFor="comentario" className="form-label">
                Nuevo Comentario
              </label>
              <textarea className="form-control" id="comentario" rows="3" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Agregar Comentario
            </button>
          </form>
        </div>
        <div className="mt-4">
          {comentarios.length === 0 ? (
            <p>No hay comentarios.</p>
          ) : (
            <ul className="list-group">
              {comentarios.map((comentario) => (
                <li key={comentario.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <div>
                      {editandoComentario[comentario.id] ? (
                        <textarea
                          className="form-control"
                          value={comentario.texto}
                          onChange={(e) => editarComentario(comentario.id, e.target.value)}
                        ></textarea>
                      ) : (
                        <p>{comentario.texto}</p>
                      )}
                      <small>{comentario.fecha}</small>
                    </div>
                    <div>
                      {!editandoComentario[comentario.id] && (
                        <>
                          <button
                            className="btn btn-secondary btn-sm mx-1"
                            onClick={() => agregarRespuesta(comentario.id)}
                          >
                            <FontAwesomeIcon icon={faReply} /> Responder
                          </button>
                          <button
                            className="btn btn-primary btn-sm mx-1"
                            onClick={() => incrementarMeGusta(comentario.id)}
                          >
                            <FontAwesomeIcon icon={faThumbsUp} /> Me gusta ({comentario.meGusta})
                          </button>
                          <button
                            className="btn btn-danger btn-sm mx-1"
                            onClick={() => eliminarComentario(comentario.id)}
                          >
                            <FontAwesomeIcon icon={faTrashAlt} /> Eliminar
                          </button>
                          <button
                            className="btn btn-warning btn-sm mx-1"
                            onClick={() =>
                              setEditandoComentario({ ...editandoComentario, [comentario.id]: true })
                            }
                          >
                            <FontAwesomeIcon icon={faEdit} /> Editar
                          </button>
                        </>
                      )}
                      {editandoComentario[comentario.id] && (
                        <button
                          className="btn btn-success btn-sm mx-1"
                          onClick={() => editarComentario(comentario.id, comentario.texto)}
                        >
                          Guardar
                        </button>
                      )}
                    </div>
                  </div>
                  {mostrarRespuesta[comentario.id] && (
                    <div className="mt-2 mt-4">
                      <textarea
                        className="form-control"
                        rows="2"
                        value={respuestas[comentario.id] || ''}
                        onChange={(e) =>
                          setRespuestas({ ...respuestas, [comentario.id]: e.target.value })
                        }
                      ></textarea>
                      <button
                        className="btn btn-primary btn-sm mt-2"
                        onClick={() => guardarRespuesta(comentario.id)}
                      >
                        Guardar respuesta
                      </button>
                    </div>
                  )}
                  {comentario.respuestas.length > 0 && (
                    <ul className="list-group mt-3">
                      {comentario.respuestas.map((respuesta) => (
                        <li key={respuesta.id} className="list-group-item">
                          <div>
                            {editandoRespuesta[respuesta.id] ? (
                              <textarea
                                className="form-control"
                                value={respuesta.texto}
                                onChange={(e) =>
                                  editarRespuesta(comentario.id, respuesta.id, e.target.value)
                                }
                              ></textarea>
                            ) : (
                              <p>{respuesta.texto}</p>
                            )}
                            <small>{respuesta.fecha}</small>
                          </div>
                          <div>
                            {!editandoRespuesta[respuesta.id] && (
                              <>
                                <button
                                  className="btn btn-danger btn-sm mx-1"
                                  onClick={() =>
                                    eliminarRespuesta(comentario.id, respuesta.id)
                                  }
                                >
                                  Eliminar
                                </button>
                                <button
                                  className="btn btn-warning btn-sm mx-1"
                                  onClick={() =>
                                    setEditandoRespuesta({
                                      ...editandoRespuesta,
                                      [respuesta.id]: true,
                                    })
                                  }
                                >
                                  Editar
                                </button>
                              </>
                            )}
                            {editandoRespuesta[respuesta.id] && (
                              <button
                                className="btn btn-success btn-sm mx-1"
                                onClick={() =>
                                  editarRespuesta(
                                    comentario.id,
                                    respuesta.id,
                                    respuesta.texto
                                  )
                                }
                              >
                                Guardar
                              </button>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
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