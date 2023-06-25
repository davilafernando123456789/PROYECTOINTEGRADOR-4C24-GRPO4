// components/FormSection.jsx

import { useState } from 'react';

const FormSection = ({ generateResponse }) => {
    const [newQuestion, setNewQuestion] = useState('');

    return (
        <div class="form-section">
            <textarea
                rows="5"
                class="form-control"
                placeholder="Escribe aqui la regunta que desees realizar"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
            ></textarea><br></br>
            <button class="btn btn-primary" onClick={() => generateResponse(newQuestion, setNewQuestion)}>
                Enviar pregunta
            </button>
        </div>

    )
}

export default FormSection;