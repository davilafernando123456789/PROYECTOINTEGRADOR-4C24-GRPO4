import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Configuration, OpenAIApi } from 'openai';
import { AuthProvider } from './AuthContext';

import Menu from './components/Menu';


import Layout from './components/Layout';
import Register from './components/Register';
import Login from './components/Login';

import Gpt from './components/Gpt';
import Tareas from './components/Tareas';
import Cursos from './components/Cursos';

import Notas from './components/Notas';
import Horario from './components/Horario';
import DetallesCurso from './components/Detallescurso';
import Configuraciones from './components/Configuraciones';
import Calendario from './components/Calendario';
import Temario from './components/Temario';
import Comentarios from './components/Comentarios';
import FormSection from './components/FormSection';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';
import AnswerSection from './components/AnswerSection';
import Notificaciones from './components/Notificaciones';
import Docente from './components/Docente';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

function App() {
  return (
    <AuthProvider>
     <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />

        <Route path="register" element={<Register />} />
        <Route path="menu" element={<Menu />} />
        <Route path="tareas" element={<Tareas />} />
        <Route path="cursos" element={<Cursos />} />
       
        <Route path="horario" element={<Horario />} />
        <Route path="notificaciones" element={<Notificaciones />} />
        <Route path="detallesCurso" element={<DetallesCurso />} />
        <Route path="configuraciones" element={<Configuraciones />} />
        <Route path="comentarios" element={<Comentarios />} />
        <Route path="notas" element={<Notas />} />
        <Route path="calendario" element={<Calendario />} />
        <Route path="temario" element={<Temario />} />
        <Route path="chat" element={<FormSection openai={openai} />} />
        <Route path="chatb" element={<AnswerSection openai={openai} />} />
        <Route path="chatbox" element={<Gpt openai={openai} />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="docente" element={<Docente />} />

        {/* we want to protect these routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<Menu />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Editor />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
            <Route path="lounge" element={<Lounge />} />
          </Route>
        </Route>

        {/* catch all */}
        <Route path="/menu" element={<Menu />} />
        </Route>
        </Routes>
    </AuthProvider>
  );
}
export default App;
