import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, FormGroup } from 'reactstrap';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';

const Login = ({ setAdminName }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/administradores/login/', { email, password });

      if (response.status === 200) {
        const { nombres } = response.data;
        setAdminName(nombres); // Establece el nombre del administrador en el componente App
        history.push('/menu', { adminName: nombres });
      } else {
        alert('Error: ' + response.status);
      }
 
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Credenciales inválidas');
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="container-fluid bg-image">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div
              className="card"
              style={{
                backgroundColor: 'rgba(240, 240, 240, 0.9)',
                border: '1px solid #e2e5ec',
                borderRadius: '10px',
                padding: '20px',
                maxWidth: '400px',
                margin: '0 auto',
              }}
            >
              <h2 className="card-title">Bienvenido</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mt-2">
                  <Button color="primary" className="btn-login" onClick={handleLogin}>
                    Iniciar sesión
                  </Button>
                </div>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <div className="mt-1">
                  <p>
                    ¿No tienes una cuenta? <a href="/contacto">Comunícate con un asesor</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
