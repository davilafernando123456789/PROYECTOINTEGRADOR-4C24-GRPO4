import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { useAuth } from '../AuthContext';
import EditarNota from './EditarNota';

const Notas = () => {
  const { authData } = useAuth();
  const idProfesor = authData?.idProfesor;
  const [notas, setNotas] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [alumnos, setAlumnos] = useState([]);
  const [selectedCurso, setSelectedCurso] = useState('');
  const [selectedAlumno, setSelectedAlumno] = useState('');
  const [nota, setNota] = useState('');
  const [editingNota, setEditingNota] = useState(null);

  useEffect(() => {
    if (idProfesor) {
      fetch(`http://localhost:8080/cursos/profesor/${idProfesor}`)
        .then(response => response.json())
        .then(data => {
          setCursos(data);
        })
        .catch(error => console.log(error));
    }
  }, [idProfesor]);

  const fetchAlumnosByCurso = (cursoId) => {
    fetch(`http://localhost:8080/alumnos/curso/${cursoId}`)
      .then(response => response.json())
      .then(data => {
        setAlumnos(data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    if (selectedCurso) {
      fetchAlumnosByCurso(selectedCurso);
    }
  }, [selectedCurso]);

  useEffect(() => {
    if (idProfesor) {
      fetch(`http://localhost:8080/notas/curso/${idProfesor}`)
        .then(response => response.json())
        .then(data => {
          setNotas(data);
        })
        .catch(error => console.log(error));
    }
  }, [idProfesor]);

  const handleCursoChange = (e) => {
    setSelectedCurso(e.target.value);
    setSelectedAlumno('');
  };

  const handleAlumnoChange = (e) => {
    setSelectedAlumno(e.target.value);
  };

  const handleNotaChange = (e) => {
    setNota(e.target.value);
  };

  const handleNotaSubmit = (e) => {
    e.preventDefault();
    if (selectedCurso && selectedAlumno && nota) {
      const newNota = {
        curso: selectedCurso,
        alumno: selectedAlumno,
        nota: parseFloat(nota)
      };

      fetch('http://localhost:8080/notas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newNota)
      })
        .then(response => response.json())
        .then(data => {
          setNotas(prevNotas => [...prevNotas, data]);
          setSelectedCurso('');
          setSelectedAlumno('');
          setNota('');
        })
        .catch(error => console.log(error));
    }
  };

  const eliminarNota = (idNota) => {
    fetch(`http://localhost:8080/notas/${idNota}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          setNotas(prevNotas => prevNotas.filter(nota => nota.idNota !== idNota));
        } else {
          console.log('Error al eliminar la nota');
        }
      })
      .catch(error => console.log(error));
  };

  const handleEditarNota = (nota) => {
    setEditingNota(nota);
  };

  const handleUpdateNota = (notaEditada) => {
    fetch(`http://localhost:8080/notas/${notaEditada.idNota}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(notaEditada)
    })
      .then(response => response.json())
      .then(data => {
        setNotas(prevNotas =>
          prevNotas.map(nota => (nota.idNota === data.idNota ? data : nota))
        );
        setEditingNota(null);
      })
      .catch(error => console.log(error));
  };

  const handleCancelEdit = () => {
    setEditingNota(null);
    setEditingNota(null);
  };

  return (
    <Menu>
      <div className="container">
        <h1 className="text-center">Notas del Alumno</h1>

        <div className="row mb-4">
          {/* ...código anterior... */}
        </div>

        <table className="table notas-table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Curso</th>
              <th scope="col">Alumno</th>
              <th scope="col">Nota</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {notas.map(nota => (
              <tr key={nota.idNota}>
                <td>{nota.curso.nombre}</td>
                <td>{`${nota.alumno.nombres} ${nota.alumno.apellidos}`}</td>
                <td>{nota.nota}</td>
                <td>
                  <button className="btn btn-primary me-2" onClick={() => handleEditarNota(nota)}>Editar</button>
                  <button className="btn btn-danger" onClick={() => eliminarNota(nota.idNota)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editingNota && (
          <EditarNota nota={editingNota} onUpdateNota={handleUpdateNota} onCancel={handleCancelEdit} />
        )}
      </div>
    </Menu>
  );
};

export default Notas;
