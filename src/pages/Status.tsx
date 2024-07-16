import Separator from "../components/Separator";
import Header from "../components/Header";
import { Tweet } from "../components/Tweet";

const tweets = [
  "Meu primeiro tweet",
  "Meu segundo tweet",
  "Meu terceiro tweet",
];

export default function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

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

      {/* {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })} */}
    </main>
  );
}
