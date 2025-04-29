import "./question-answer.css";

export default function ({ click, title, answerCorrect }) {
    return (
        <li
            className={`book-item ${answerCorrect === true ? "correct" : ""} ${
                answerCorrect === false ? "incorrect" : ""
            }`}
            onClick={click}
        >
            <strong>{title}</strong>
        </li>
    );
}