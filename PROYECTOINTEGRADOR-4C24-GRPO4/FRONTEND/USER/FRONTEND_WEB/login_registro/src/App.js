import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Configuration, OpenAIApi } from 'openai';

import Layout from './components/Layout';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Menu from './components/Menu';
import Gpt from './components/Gpt';
import Tareas from './components/Tareas';
import Cursos from './components/Cursos';
import Notas from './components/Notas';
import NotasH from './components/NotasH';
import NotasG from './components/NotasG';
import NotasM from './components/NotasM';
import NotasL from './components/NotasL';
import NotasE from './components/NotasE';
import NotasC from './components/NotasC';
import Horario from './components/Horario';
import DetallecursoHistoria from './components/DetallecursoHistoria';
import DetallecursoMate from './components/DetallecursoMate';
import DetallecursoCiencia from './components/DetallecursoCiencia';
import DetallecursoGeo from './components/DetallecursoGeo';
import DetallecursoLit from './components/DetallecursoLit';
import DetallecursoEdf from './components/DetallecursoEdf';
import Configuraciones from './components/Configuraciones';
import Calendario from './components/Calendario';
import Temario from './components/Temario';
import TemarioG from './components/TemarioG';
import TemarioH from './components/TemarioH';
import TemarioM from './components/TemarioM';
import TemarioL from './components/TemarioL';
import TemarioC from './components/TemarioC';
import TemarioE from './components/TemarioE';
import Docente from './components/Docente';
import Comentarios from './components/Comentarios';
import ComentariosH from './components/ComentariosH';
import ComentariosM from './components/ComentariosM';
import ComentariosC from './components/ComentariosC';
import ComentariosE from './components/ComentariosE';
import ComentariosG from './components/ComentariosG';
import ComentariosL from './components/ComentariosL';
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
import NotificacionesH from './components/NotificacionesH';
import NotificacionesE from './components/NotificacionesE';
import NotificacionesG from './components/NotificacionesG';
import NotificacionesM from './components/NotificacionesM';
import NotificacionesL from './components/NotificacionesL';
import NotificacionesC from './components/NotificacionesC';


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
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="menu" element={<Menu />} />
        <Route path="tareas" element={<Tareas />} />
        <Route path="cursos" element={<Cursos />} />
        <Route path="horario" element={<Horario />} />
        <Route path="docente" element={<Docente />} />
        <Route path="notificaciones" element={<Notificaciones />} />
        <Route path="notificacionesh" element={<NotificacionesH />} />
        <Route path="notificacionese" element={<NotificacionesE />} />
        <Route path="notificacionesg" element={<NotificacionesG />} />
        <Route path="notificacionesm" element={<NotificacionesM />} />
        <Route path="notificacionesl" element={<NotificacionesL />} />
        <Route path="notificacionesc" element={<NotificacionesC />} />
        <Route path="detallecursohistoria" element={<DetallecursoHistoria />} />
        <Route path="detallecursomate" element={<DetallecursoMate />} />
        <Route path="detallecursociencia" element={<DetallecursoCiencia />} />
        <Route path="detallecursogeo" element={<DetallecursoGeo />} />
        <Route path="detallecursolit" element={<DetallecursoLit />} />
        <Route path="Detallecursoedf" element={<DetallecursoEdf />} />
        <Route path="configuraciones" element={<Configuraciones />} />
        <Route path="comentarios" element={<Comentarios />} />
        <Route path="comentariosc" element={<ComentariosC />} />
        <Route path="comentariosg" element={<ComentariosG />} />
        <Route path="comentariose" element={<ComentariosE />} />
        <Route path="comentariosl" element={<ComentariosL />} />
        <Route path="comentariosh" element={<ComentariosH />} />
        <Route path="comentariosm" element={<ComentariosM />} />
        <Route path="notificaciones" element={<Notificaciones />} />
        <Route path="notas" element={<Notas />} />
        <Route path="notash" element={<NotasH />} />
        <Route path="notasm" element={<NotasM />} />
        <Route path="notasg" element={<NotasG />} />
        <Route path="notasc" element={<NotasC />} />
        <Route path="notasl" element={<NotasL />} />
        <Route path="notase" element={<NotasE />} />
        <Route path="calendario" element={<Calendario />} />
        <Route path="temario" element={<Temario />} />
        <Route path="temariog" element={<TemarioG />} />
        <Route path="temarioh" element={<TemarioH />} />
        <Route path="temariom" element={<TemarioM />} />
        <Route path="temariol" element={<TemarioL />} />
        <Route path="temarioc" element={<TemarioC />} />
        <Route path="temarioe" element={<TemarioE />} />
        <Route path="chat" element={<FormSection openai={openai} />} />
        <Route path="chatb" element={<AnswerSection openai={openai} />} />
        <Route path="chatbox" element={<Gpt openai={openai} />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<Home />} />
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
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
