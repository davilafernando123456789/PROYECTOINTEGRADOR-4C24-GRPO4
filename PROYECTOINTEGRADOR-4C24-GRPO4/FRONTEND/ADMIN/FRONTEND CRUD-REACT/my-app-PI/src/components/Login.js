import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, FormGroup } from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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
        alert('Error: ' + response.status)
      }
    } catch (error) {
      // Manejar errores de la solicitud
      console.error(error);
    }
  };

  return (
    <Container>
      <h3>Login</h3>
      <FormGroup>
        <label>Email:</label>
        <input className="form-control" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <label>Password:</label>
        <input className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </FormGroup>
      <Button color="primary" onClick={handleLogin}>Iniciar sesión</Button>
    </Container>
  );
};

export default Login;
