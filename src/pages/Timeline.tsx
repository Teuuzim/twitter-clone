import ReactTextareaAutosize from "react-textarea-autosize";
import Header from "../components/Header";
import Separator from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Timeline.css'

const tweets = [
  "Meu primeiro tweet",
  "Meu segundo tweet",
  "Meu terceiro tweet",
];

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />

      <form action="" className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/Teuuzim.png"
            alt="Matheus Henrique Vaz"
          />
          <ReactTextareaAutosize id="tweet" placeholder="What's happening" />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
