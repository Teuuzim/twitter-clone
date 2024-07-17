import Separator from "../components/Separator";
import Header from "../components/Header";
import { Tweet } from "../components/Tweet";

import './Status.css'
import ReactTextareaAutosize from "react-textarea-autosize";

const answers = [
  "Esta certo!",
  "Resposta de tweet ",
  "OK",
];

export default function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="vai se fude"/>
      <Separator />

      <form action="" className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/Teuuzim.png"
            alt="Matheus Henrique Vaz"
          />
          <ReactTextareaAutosize id="tweet" placeholder="Tweet your answer" />
        </label>
        <button type="submit">Answer</button>
      </form>

      

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
