// src/App.js
import { Configuration, OpenAIApi } from 'openai';
import openai from 'openai';

import FormSection from './FormSection';
import AnswerSection from './AnswerSection';
import Menu from './Menu';

import { useState } from 'react';

const Gpt = () => {
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const [storedValues, setStoredValues] = useState([]);

    const generateResponse = async (newQuestion, setNewQuestion) => {
        let options = {
            model: 'text-davinci-003',
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ['/'],
        };

        let completeOptions = {
            ...options,
            prompt: newQuestion,
        };

        const response = await openai.createCompletion(completeOptions);

        if (response.data.choices) {
            setStoredValues([
                {
                    question: newQuestion,
                    answer: response.data.choices[0].text,
                },
                ...storedValues,
            ]);
            setNewQuestion('');
        }
    };

    return (
        <Menu>
        <div class="container">
            <div class="header-section text-center">
                <h1><b>ChatBox</b></h1>
                <p>
                Explora y aprende con ChatBox, donde tus preguntas encuentran respuestas. ¡Aprende sin límites y despeja tus dudas!
                </p>
            </div>
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <FormSection generateResponse={generateResponse} />
                </div>
            </div>

            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <AnswerSection storedValues={storedValues} />
                </div>
            </div>
        </div>

        </Menu>
    );
};

export default Gpt;