import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter } from 'reactstrap';
import axios from 'axios';

class Curso extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalActualizar: false,
    form: {
      idCurso: '',
      nombre: '',
      descripcion: '',
    },
  };

  componentDidMount() {
    this.obtenerCursos();
  }

  obtenerCursos() {
    axios.get('http://localhost:8000/api/cursos/')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: {
        ...dato,
        idCurso: dato.idCurso,
      },
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = () => {
    const { idCurso, nombre, descripcion } = this.state.form;
    axios.put(`http://localhost:8000/api/cursos/${idCurso}/`, {
      nombre,
      descripcion,
    })
      .then(response => {
        this.obtenerCursos();
        this.setState({ modalActualizar: false });
      })
      .catch(error => {
        console.error(error);
      });
  };

  eliminar = (dato) => {
    const opcion = window.confirm(`¿Estás seguro que deseas eliminar el curso ${dato.nombre}?`);
    if (opcion) {
      const { idCurso } = dato;
      axios.delete(`http://localhost:8000/api/cursos/${idCurso}/`)
        .then(response => {
          this.obtenerCursos();
          this.setState({ modalActualizar: false });
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  insertar = () => {
    const { nombre, descripcion } = this.state.form;
    axios.post(`http://localhost:8000/api/cursos/`, {
      nombre,
      descripcion,
    })
      .then(response => {
        this.obtenerCursos();
        this.setState({ modalInsertar: false });
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={this.mostrarModalInsertar}>Agregar Curso</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.idCurso}>
                  <td>{dato.idCurso}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.descripcion}</td>
                  <td>
                    <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)}>Editar</Button>{' '}
                    <Button color="danger" onClick={this.eliminar.bind(this, dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>ID:</label>
              <input className="form-control" readOnly type="text" value={this.state.form.idCurso} />
            </FormGroup>

            <FormGroup>
              <label>Nombre:</label>
              <input className="form-control" name="nombre" type="text" onChange={this.handleChange} value={this.state.form.nombre} />
            </FormGroup>

            <FormGroup>
              <label>Descripción:</label>
              <input className="form-control" name="descripcion" type="text" onChange={this.handleChange} value={this.state.form.descripcion} />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.editar}>Editar</Button>{' '}
            <Button color="danger" onClick={this.cerrarModalActualizar}>Cancelar</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Insertar Curso</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>ID:</label>
              <input className="form-control" readOnly type="text" value={this.state.data.length + 1} />
            </FormGroup>

            <FormGroup>
              <label>Nombre:</label>
              <input className="form-control" name="nombre" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <label>Descripción:</label>
              <input className="form-control" name="descripcion" type="text" onChange={this.handleChange} />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.insertar}>Insertar</Button>{' '}
            <Button className="btn btn-danger" onClick={this.cerrarModalInsertar}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Curso;
