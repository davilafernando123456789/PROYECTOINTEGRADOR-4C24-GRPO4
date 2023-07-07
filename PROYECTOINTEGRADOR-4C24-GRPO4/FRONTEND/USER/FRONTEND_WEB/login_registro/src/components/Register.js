import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importa Axios

import '../assets/css/bootstrap.css';
import '../assets/css/registro.css';

const Register = () => {
  const [apellidos, setApellidos] = useState('');
  const [nombres, setNombres] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/usuarios/registrar', {
        apellidos,
        nombres,
        email,
        password,
      });

      if (response.status === 200) {
        setSuccess(true);
        navigate('/login');
      } else {
        setSuccess(false);
        setErrMsg('Registration Failed');
      }
    } catch (err) {
      setSuccess(false);
      if (!err.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg('Registration Failed');
      }
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidEmail(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setValidPassword(e.target.value.length >= 8);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setValidConfirmPassword(e.target.value === password);
  };

  const validateEmail = (value) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to="/login">Sign In</Link>
          </p>
        </section>
      ) : (
        <section>
          <div className="container-fluid  registro-container">
        <div className="row justify-content-start align-items-center vh-100"> {/* Ajuste: Cambiar "justify-content-start" por "justify-content-center" */}
          <div className="col-md-4 ml-3 registro-form">
          <div className="border p-3 bg-write bg-opacity-75 text-white">
                  <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
                    {errMsg}
                  </p>
                  <header>
                    <h1 className="text-center registro-header ">GeniusTec</h1>
                  </header>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="nombres"></label>
                      <input
                        type="text"
                        id="nombres"
                        autoComplete="off"
                        onChange={(e) => setNombres(e.target.value)}
                        value={nombres}
                        required
                        className="form-control"
                        placeholder="Nombres"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="apellidos"></label>
                      <input
                        type="text"
                        id="apellidos"
                        autoComplete="off"
                        onChange={(e) => setApellidos(e.target.value)}
                        value={apellidos}
                        required
                        className="form-control"
                        placeholder="Apellidos"
                      />
                    </div>
  
                    <div className="form-group">
                      <label htmlFor="email"></label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="off"
                        onChange={handleEmailChange}
                        value={email}
                        required
                        className="form-control"
                        placeholder="Correo Electrónico"
                      />
                      {!validEmail && email !== '' && (
                        <div className="alert alert-danger" role="alert">
                          Invalid email address
                        </div>
                      )}
                    </div>
  
                    <div className="form-group">
                      <label htmlFor="password"></label>
                      <input
                        type="password"
                        id="password"
                        autoComplete="off"
                        onChange={handlePasswordChange}
                        value={password}
                        required
                        className="form-control"
                        placeholder="Contraseña"
                      />
                      {!validPassword && password !== '' && (
                        <div className="alert alert-danger" role="alert">
                          Password must be at least 8 characters long
                        </div>
                      )}
                    </div>
  
                    <div className="form-group mb-3">
                      <label htmlFor="confirm-password"></label>
                      <input
                        type="password"
                        id="confirm-password"
                        autoComplete="off"
                        onChange={handleConfirmPasswordChange}
                        value={confirmPassword}
                        required
                        className="form-control"
                        placeholder="Confirmar contraseña"
                      />
  
                      {!validConfirmPassword && password !== '' && (
                        <div className="alert alert-danger" role="alert">
                          Passwords do not match
                        </div>
                      )}
                    </div>
  
                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={!validEmail || !validPassword || !validConfirmPassword}
                        className="btn btn-primary"
                      >
                        Registrarse
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
  
};

export default Register;
