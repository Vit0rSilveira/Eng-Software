import React from "react";
import '../styles/components/questions.css'

function Question(props) {
    return (
        <p id="question">
            <h2 className=" textoBranco question-question">{props.question}</h2>
            <p className=" textoBranco question-answer">{props.answer}</p>
        </p>
    )
}

export default Question