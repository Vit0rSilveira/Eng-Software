import React from "react";
import '../../styles/components/questions.css'

function Question(props) {
    return (
        <p id="question">
            <h3 className="question-class">{props.question}</h3>
            <h4 className="question-class">{props.answer}</h4>
        </p>
    )
}

export default Question