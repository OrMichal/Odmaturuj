import "./question-answer.css";

export default function ({ click, title, answerCorrect, clicked }) {
    return (
        <li
            className={`book-item ${answerCorrect === true && clicked ? "correct" : ""} ${
                answerCorrect === false && clicked ? "incorrect" : ""
            }`}
            onClick={click}
        >
            <strong>{title}</strong>
        </li>
    );
}