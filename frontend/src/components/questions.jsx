import React from "react";
import '../styles/components/questions.css'

function Question(props) {
    return (
        <p id="question">
            <h2 className="question-class">{props.question}</h2>
            <p className="question-class">{props.answer}</p>
        </p>
    )
}

export default Question