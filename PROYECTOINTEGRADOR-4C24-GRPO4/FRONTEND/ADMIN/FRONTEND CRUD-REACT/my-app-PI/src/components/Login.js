import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, FormGroup } from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      // Realizar la solicitud de inicio de sesión a la API utilizando los valores de email y password
      const response = await axios.post('http://localhost:8000/api/administradores/login/', { email, password });

      // Verificar si el inicio de sesión fue exitoso
      if (response.status === 200) {
        // Redirigir a la vista Menu
        history.push('/menu');
      } else {
        alert('Error: ' + response.status);
      }
    } catch (error) {
      // Manejar errores de la solicitud
      console.error(error);
    }
  };

  return (
    <div className="container-fluid bg-image">
      <div class="container">
      <div className="row justify-content-start">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card" style={{ backgroundColor: "rgba(240, 240, 240, 0.9)", border: "1px solid #e2e5ec", borderRadius: "10px", padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
            <h2 className="card-title">Bienvenido</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Nombre de usuario:</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Correo electrónico"
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
              <div className="mt-1">
                <p>
                  ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>
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
