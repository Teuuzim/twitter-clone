import ReactTextareaAutosize from "react-textarea-autosize";
import Header from "../components/Header";
import Separator from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { FormEvent, useState, KeyboardEvent } from "react";

import "./Timeline.css";

export function Timeline() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "Meu segundo tweet",
    "Meu terceiro tweet",
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweets([newTweet, ...tweets]); // react reagindo as alteracoes que eu fiz na variavel
    setNewTweet("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/Teuuzim.png"
            alt="Matheus Henrique Vaz"
          />
          <ReactTextareaAutosize
            id="tweet"
            value={newTweet}
            placeholder="What's happening"
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
          />
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
