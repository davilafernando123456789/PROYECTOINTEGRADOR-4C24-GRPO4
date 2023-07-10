import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../assets/css/bootstrap.css';
import '../assets/css/login.css';
import useInput from '../hooks/useInput';
import useToggle from '../hooks/useToggle';
import axios from 'axios';
import '../App.css';
import { useAuth } from '../AuthContext';
const LOGIN_URL = 'http://localhost:8080/api/profesores/login';
const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const isMounted = useRef(true); // Variable de referencia para rastrear el estado de montaje

  const emailRef = useRef();
  const errRef = useRef();

  const [email, resetEmail, emailAttribs] = useInput('email', '');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [check, toggleCheck] = useToggle('persist', false);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }

    // Función de limpieza para actualizar el estado de montaje cuando el componente se desmonte
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        LOGIN_URL,
        null,
        {
          params: { email, password: pwd },
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
  
      // Verificar si el componente está montado antes de actualizar el estado
      if (isMounted.current) {
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
  
        // Obtener el ID del profesor y los nombres del response
        const idProfesor = response?.data?.idProfesor;
        const nombres = response?.data?.nombres;
  
        // Guardar los datos del usuario logeado en el contexto de autenticación
        setAuth({ idProfesor, nombres, password: pwd, roles, accessToken });
  
        resetEmail();
        setPwd('');
        navigate('/menu'); // Redirigir al usuario a la vista del menú
      }
    } catch (err) {
      // Verificar si el componente está montado antes de actualizar el estado
      if (isMounted.current) {
        if (!err?.response) {
          setErrMsg('El servidor no responde');
        } else if (err.response?.status === 400) {
          setErrMsg('Correo electrónico o contraseña faltantes');
        } else if (err.response?.status === 401) {
          setErrMsg('Correo o contraseña incorrectos');
        } else {
          setErrMsg('Login Fallido');
        }
        if (errRef.current) {
          errRef.current.focus();
        }
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
              <header>
                <h1 className="text-center login-header">GeniusTec</h1>
              </header>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <div className="col-12">
                    <input
                      type="text"
                      id="email"
                      ref={emailRef}
                      autoComplete="off"
                      {...emailAttribs}
                      required
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    className="form-control mb-3"
                    placeholder="Password"
                  />
                </div>

                <div classNameclassName="text-center">
                  <button className="w-50 btn btn-primary btn-lg mb-3">Login</button>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    id="persist"
                    onChange={toggleCheck}
                    checked={check}
                    className="form-check-input"
                  />
                  <label htmlFor="persist" className="form-check-label">Trust This Device</label>
                </div>
              </form>

              <p>
                Need an Account?<br />
                <span className="line">
                  <Link to="/register">Usar correo electronico</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
