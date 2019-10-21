import React from "react";
import "./App.css";
import VideoChat from "./VideoChat.js";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Video Chat with Hooks</h1>
      </header>
      <main>
        <VideoChat />
      </main>
      <footer>
        <p>
          Made with{" "}
          <span role="img" aria-label="React">
            ⚛
          </span>{" "}
          by <a href="https://twitter.com/EssWhy91">EssWhy91</a>
        </p>
      </footer>
    </div>
  );
};
export default App;
