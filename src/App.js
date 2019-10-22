import React from "react";
import "./App.css";
import Tweet from "./components/Tweet";

function App() {
  return (
    <div className="App">
      <h3>Reactwitter</h3>
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}

export default App;
