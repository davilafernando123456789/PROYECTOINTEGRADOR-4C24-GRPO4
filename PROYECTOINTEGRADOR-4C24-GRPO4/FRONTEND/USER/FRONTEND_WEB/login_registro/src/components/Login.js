import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../assets/css/bootstrap.css';
import useAuth from '../hooks/useAuth';
import useInput from '../hooks/useInput';
import useToggle from '../hooks/useToggle';
import axios from 'axios';

const LOGIN_URL = 'http://localhost:8080/api/usuarios/login';

const Header = () => {
  return (
    <header className="bg-primary py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-white">GeniusTec</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

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
    emailRef.current.focus();

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
        setAuth({ email, password: pwd, roles, accessToken });
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
        errRef.current.focus();
      }
    }
  };

  return (
    <section>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src="/login.avif" alt="Imagen" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="border p-4">
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
              <header className="bg-primary p-4 container">
                <h1 className="text-white text-center">Welcome</h1>
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

                <div className="text-center">
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
                  <Link to="/register">Register</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
