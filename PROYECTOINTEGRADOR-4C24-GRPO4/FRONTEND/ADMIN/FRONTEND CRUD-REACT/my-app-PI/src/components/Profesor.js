import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter } from 'reactstrap';
import axios from 'axios';

class Profesor extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalActualizar: false,
    form: {
      idProfesor: '',
      nombres: '',
      apellidos: '',
      fecha_nacimiento: '',
      genero: '',
      direccion: '',
      telefono: '',
      email: '',
      fecha_ingreso: '',
    },
  };

  componentDidMount() {
    this.obtenerProfesores();
  }

  obtenerProfesores() {
    axios.get('http://localhost:8000/api/profesores/')
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
        idProfesor: dato.idProfesor,
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
    const { idProfesor, nombres, apellidos, fecha_nacimiento, genero, direccion, telefono, email, fecha_ingreso } = this.state.form;
    axios.put(`http://localhost:8000/api/profesores/${idProfesor}/`, {
      nombres,
      apellidos,
      fecha_nacimiento,
      genero,
      direccion,
      telefono,
      email,
      fecha_ingreso
    })
      .then(response => {
        this.obtenerProfesores();
        this.setState({ modalActualizar: false });
      })
      .catch(error => {
        console.error(error);
      });
  };

  eliminar = (dato) => {
    const opcion = window.confirm(`¿Estás seguro que deseas eliminar al profesor ${dato.idProfesor}?`);
    if (opcion) {
      const { idProfesor } = dato;
      axios.delete(`http://localhost:8000/api/profesores/${idProfesor}/`)
        .then(response => {
          this.obtenerProfesores();
          this.setState({ modalActualizar: false });
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  insertar = () => {
    const { nombres, apellidos, fecha_nacimiento, genero, direccion, telefono, email, fecha_ingreso } = this.state.form;
    axios.post(`http://localhost:8000/api/profesores/`, {
      nombres,
      apellidos,
      fecha_nacimiento,
      genero,
      direccion,
      telefono,
      email,
      fecha_ingreso
    })
      .then(response => {
        this.obtenerProfesores();
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
          <Button color="success" onClick={this.mostrarModalInsertar}>Agregar Profesor</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Fecha de Nacimiento</th>
                <th>Género</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Fecha de Ingreso</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.idProfesor}>
                  <td>{dato.idProfesor}</td>
                  <td>{dato.nombres}</td>
                  <td>{dato.apellidos}</td>
                  <td>{dato.fecha_nacimiento}</td>
                  <td>{dato.genero}</td>
                  <td>{dato.direccion}</td>
                  <td>{dato.telefono}</td>
                  <td>{dato.email}</td>
                  <td>{dato.fecha_ingreso}</td>
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
              <input className="form-control" readOnly type="text" value={this.state.form.idProfesor} />
            </FormGroup>

            <FormGroup>
              <label>Nombres:</label>
              <input className="form-control" name="nombres" type="text" onChange={this.handleChange} value={this.state.form.nombres} />
            </FormGroup>

            <FormGroup>
              <label>Apellidos:</label>
              <input className="form-control" name="apellidos" type="text" onChange={this.handleChange} value={this.state.form.apellidos} />
            </FormGroup>

            <FormGroup>
              <label>Fecha de Nacimiento:</label>
              <input className="form-control" name="fecha_nacimiento" type="date" onChange={this.handleChange} value={this.state.form.fecha_nacimiento} />
            </FormGroup>

            <FormGroup>
              <label>Género:</label>
              <input className="form-control" name="genero" type="text" onChange={this.handleChange} value={this.state.form.genero} />
            </FormGroup>

            <FormGroup>
              <label>Dirección:</label>
              <input className="form-control" name="direccion" type="text" onChange={this.handleChange} value={this.state.form.direccion} />
            </FormGroup>

            <FormGroup>
              <label>Teléfono:</label>
              <input className="form-control" name="telefono" type="text" onChange={this.handleChange} value={this.state.form.telefono} />
            </FormGroup>

            <FormGroup>
              <label>Email:</label>
              <input className="form-control" name="email" type="email" onChange={this.handleChange} value={this.state.form.email} />
            </FormGroup>

            <FormGroup>
              <label>Fecha de Ingreso:</label>
              <input className="form-control" name="fecha_ingreso" type="date" onChange={this.handleChange} value={this.state.form.fecha_ingreso} />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.editar()}>Editar</Button>{' '}
            <Button color="danger" onClick={() => this.cerrarModalActualizar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Agregar Profesor</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>ID:</label>
              <input className="form-control" readOnly type="text" value={this.state.data.length + 1} />
            </FormGroup>

            <FormGroup>
              <label>Nombres:</label>
              <input className="form-control" name="nombres" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <label>Apellidos:</label>
              <input className="form-control" name="apellidos" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <label>Fecha de Nacimiento:</label>
              <input className="form-control" name="fecha_nacimiento" type="date" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <label>Género:</label>
              <input className="form-control" name="genero" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <label>Dirección:</label>
              <input className="form-control" name="direccion" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <label>Teléfono:</label>
              <input className="form-control" name="telefono" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <label>Email:</label>
              <input className="form-control" name="email" type="email" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <label>Fecha de Ingreso:</label>
              <input className="form-control" name="fecha_ingreso" type="date" onChange={this.handleChange} />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>Agregar</Button>{' '}
            <Button color="danger" onClick={() => this.cerrarModalInsertar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Profesor;
