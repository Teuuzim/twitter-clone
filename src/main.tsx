import React from "react";
import ReactDOM from "react-dom/client";
import { Sparkle } from "phosphor-react";

import "./global.css";

import { Tweet } from "./components/Tweet";
import { Sidebar } from "./components/Sidebar";
import Header from "./components/Header";
import Separator from "./components/Separator";

const tweets = [
  "Meu primeiro tweet",
  "Meu segundo tweet",
  "Meu terceiro tweet",
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <main className="timeline">
          <Header title="Home" />

          <form action="" className="new-tweet-form">
            <label htmlFor="tweet">
              <img
                src="https://github.com/Teuuzim.png"
                alt="Matheus Henrique Vaz"
              />
              <textarea id="tweet" placeholder="What's happening" />
            </label>
            <button type="submit">Tweet</button>
          </form>

          <Separator />

          {tweets.map((tweet) => {
            return <Tweet key={tweet} content={tweet} />;
          })}
        </main>
      </div>
    </div>
  </React.StrictMode>
);
