import React, { useState } from 'react';

const EditarNota = ({ nota, onUpdateNota, onCancel }) => {
  const [editedCurso, setEditedCurso] = useState(nota.curso.nombre);
  const [editedAlumno, setEditedAlumno] = useState(`${nota.alumno.nombres} ${nota.alumno.apellidos}`);
  const [editedNota, setEditedNota] = useState(nota.nota);

  const handleGuardarEdicion = () => {
    const notaEditada = {
      ...nota,
      curso: {
        ...nota.curso,
        nombre: editedCurso
      },
      alumno: {
        ...nota.alumno,
        nombres: editedAlumno.split(' ')[0],
        apellidos: editedAlumno.split(' ')[1]
      },
      nota: parseFloat(editedNota)
    };

    onUpdateNota(notaEditada);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Editar Nota</h2>
        <form onSubmit={handleGuardarEdicion}>
          <div>
            <label htmlFor="cursoEdit">Curso:</label>
            <input
              type="text"
              id="cursoEdit"
              value={editedCurso}
              onChange={(e) => setEditedCurso(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="alumnoEdit">Alumno:</label>
            <input
              type="text"
              id="alumnoEdit"
              value={editedAlumno}
              onChange={(e) => setEditedAlumno(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="notaEdit">Nota:</label>
            <input
              type="number"
              id="notaEdit"
              value={editedNota}
              onChange={(e) => setEditedNota(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Guardar</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarNota;
