// components/AnswerSection.jsx

const AnswerSection = ({ storedValues }) => {
    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <>
            <hr class="hr-line" />
                <div class="answer-container">
                    {storedValues.map((value, index) => {
                        return (
                            <div class="answer-section" key={index}>
                                <p class="question">{value.question}</p>
                                <p class="answer">{value.answer}</p>
                                <div class="copy-icon" onClick={() => copyText(value.answer)}>
                                    <i class="fas fa-copy"></i>
                                </div>
                            </div>
                        );
                    })}
                </div>

        </>
    )
}

export default AnswerSection;