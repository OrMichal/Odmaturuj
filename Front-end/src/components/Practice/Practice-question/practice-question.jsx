import { useMutation, useQuery } from "@tanstack/react-query";
import "./practice-question.css";
import QuestionAnswer from "./question-answer/question-answer";
import { useState } from "react";

export default function ({ eraId }) {
    const [correctAnsw, setCorrectAnsw] = useState(null);
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["question", eraId],
        queryFn: () =>fetch(`http://localhost:3000/questions/books/${eraId}`)
            .then((res) => res.json()),
    });

    const AnswerSubmitter = useMutation({
        mutationKey: ["submitAnswBook"],
        mutationFn: (data) => fetch("http://localhost:3000/answers/bookcheck", 
            { 
                method: "POST", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data) 
            })
            .then(resp => {
                if(resp.status === 200){
                    setCorrectAnsw(true);
                }else{
                    setCorrectAnsw(false);
                }
                return resp.json();
            }),
        onSuccess: () => {
            setTimeout(() => {
                refetch();
                setCorrectAnsw(null);
            }, 1500)
        }
    });

    if (isLoading) return <div className="question-loading">Načítání dat...</div>;
    if (error) return <div className="question-error">Chyba při načítání dat.</div>;

    const authors = data.Author;
    const books = data.Books;

    return (
        <div className="question-container">
            {authors.map((author) => {
                return (
                    <div key={author._id} className="author-section">
                        <p>Vyberte dílo, které napsal tento autor:</p>
                        <h2 className="author-name">
                            {author.firstname} {author.middlename ? author.middlename + " " : ""}
                            {author.lastname}
                        </h2>
                        <p className="author-dates">
                            *{author.birth_date.slice(0, 4)} – †{author.death_date.slice(0, 4)}
                        </p>
                        <ul className="book-list">
                            {books.map((book, index) => (
                                <div
                                    key={index}
                                    style={{ 
                                        width: "100%", 
                                        alignItems: "center",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}
                                >
                                    <QuestionAnswer 
                                        title={book.bookname} 
                                        click={() => AnswerSubmitter.mutate({ bookId: book.id, authorId: author.id })}
                                        answerCorrect={correctAnsw}
                                    />
                                </div>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}