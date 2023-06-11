import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter } from "reactstrap";

class App extends React.Component {
  state={
    data:[],
    modalInsertar: false,
    modalEliminar: false,
    form:{
      idUsuario: "",
      nombres: "",
      apellidos: "",
      correo: "",
      contraseña: "",
    }
  }
  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
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

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.idUsuario === registro.idUsuario) {
        arreglo[contador].nombres = dato.nombres;
        arreglo[contador].apellidos = dato.apellidos;
        arreglo[contador].correo = dato.correo;
        arreglo[contador].contraseña = dato.contraseña;
      }
      contador++;
      return registro;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("¿Estás seguro que deseas eliminar el usuario " + dato.idUsuario + "?");
    if (opcion) {
      var arreglo = this.state.data.filter((registro) => registro.idUsuario !== dato.idUsuario);
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.idUsuario = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
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
                <th>Correo</th>
                <th>Contraseña</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.idUsuario}>
                  <td>{dato.idUsuario}</td>
                  <td>{dato.nombres}</td>
                  <td>{dato.apellidos}</td>
                  <td>{dato.correo}</td>
                  <td>{dato.contraseña}</td>
                  <td>
                    <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)}>Editar</Button>{" "}
                    <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
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
              <label>Correo:</label>
              <input className="form-control" name="correo" type="text" onChange={this.handleChange} value={this.state.form.correo} />
            </FormGroup>

            <FormGroup>
              <label>Contraseña:</label>
              <input className="form-control" name="contraseña" type="text" onChange={this.handleChange} value={this.state.form.contraseña} />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.editar(this.state.form)}>Editar</Button>{" "}
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
              <label>Correo:</label>
              <input className="form-control" name="correo" type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <label>Contraseña:</label>
              <input className="form-control" name="contraseña" type="text" onChange={this.handleChange} />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.insertar}>Insertar</Button>{" "}
            <Button className="btn btn-danger" onClick={this.cerrarModalInsertar}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default App;
