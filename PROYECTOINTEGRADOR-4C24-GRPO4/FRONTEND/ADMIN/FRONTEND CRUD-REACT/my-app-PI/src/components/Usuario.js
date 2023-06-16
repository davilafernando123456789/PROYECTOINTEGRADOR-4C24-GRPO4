import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter } from 'reactstrap';
import axios from 'axios';

class Usuario extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalActualizar: false,
    form: {
      idUsuario: '',
      nombres: '',
      apellidos: '',
      email: '',
      password: '',
    },
  };

  componentDidMount() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    axios.get('http://localhost:8000/api/usuarios/')
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
        idUsuario: dato.idUsuario,
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
    const { idUsuario, nombres, apellidos, email, password } = this.state.form;
    axios.put(`http://localhost:8000/api/usuarios/${idUsuario}/`, {
      nombres,
      apellidos,
      email,
      password
    })
      .then(response => {
        this.obtenerUsuarios();
        this.setState({ modalActualizar: false });
      })
      .catch(error => {
        console.error(error);
      });
  };

  eliminar = (dato) => {
    const opcion = window.confirm(`¿Estás seguro que deseas eliminar el usuario ${dato.idUsuario}?`);
    if (opcion) {
      const { idUsuario } = dato;
      axios.delete(`http://localhost:8000/api/usuarios/${idUsuario}/`)
        .then(response => {
          this.obtenerUsuarios();
          this.setState({ modalActualizar: false });
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  insertar = () => {
    const { nombres, apellidos, email, password } = this.state.form;
    axios.post(`http://localhost:8000/api/usuarios/`, {
      nombres,
      apellidos,
      email,
      password
    })
      .then(response => {
        this.obtenerUsuarios();
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
          <Button color="success" onClick={this.mostrarModalInsertar}>Agregar Usuario</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Email</th>
                <th>Password</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.idUsuario}>
                  <td>{dato.idUsuario}</td>
                  <td>{dato.nombres}</td>
                  <td>{dato.apellidos}</td>
                  <td>{dato.email}</td>
                  <td>{dato.password}</td>
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
              <input className="form-control" readOnly type="text" value={this.state.form.idUsuario} />
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
              <label>Email:</label>
              <input className="form-control" name="email" type="text" onChange={this.handleChange} value={this.state.form.email} />
            </FormGroup>

            <FormGroup>
              <label>Password:</label>
              <input className="form-control" name="password" type="text" onChange={this.handleChange} value={this.state.form.password} />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.editar}>Editar</Button>{' '}
            <Button color="danger" onClick={this.cerrarModalActualizar}>Cancelar</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Insertar Usuario</h3></div>
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
              <label>Email:</label>
              <input className="form-control" name="email" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <label>Password:</label>
              <input className="form-control" name="password" type="text" onChange={this.handleChange} />
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

export default Usuario;
