import Separator from "../components/Separator";
import Header from "../components/Header";
import { Tweet } from "../components/Tweet";

import "./Status.css";
import ReactTextareaAutosize from "react-textarea-autosize";
import { FormEvent, useState } from "react";

export default function Status() {
  const [newAnswers, setNewAnswers] = useState("");
  const [answers, setAnswers] = useState([
    "Esta certo!",
    "Resposta de tweet ",
    "OK",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();
    setAnswers([newAnswers, ...answers]);
    setNewAnswers(""); // react reagindo as alteracoes que eu fiz na variavel
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, autem esse, deserunt dignissimos maxime assumenda quia voluptas impedit modi, ab exercitationem! Incidunt, odio. Harum aliquid excepturi quam, officiis qui itaque?
      "
      />
      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/Teuuzim.png"
            alt="Matheus Henrique Vaz"
          />
          <ReactTextareaAutosize
            id="tweet"
            value={newAnswers}
            onChange={(event) => {
              setNewAnswers(event.target.value);
            }}
            placeholder="Tweet your answer"
          />
        </label>
        <button type="submit">Answer</button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
