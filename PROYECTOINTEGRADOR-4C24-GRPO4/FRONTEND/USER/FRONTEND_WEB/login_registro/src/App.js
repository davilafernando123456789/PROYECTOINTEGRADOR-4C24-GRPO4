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
        <Route path="register" element={<Register />} />
        <Route path="menu" element={<Menu />} />
        <Route path="tareas" element={<Tareas />} />
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
