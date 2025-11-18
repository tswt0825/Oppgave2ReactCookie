import { useState } from "react";

export default function CookieClicker() {
  const [score, setScore] = useState(0);

  function handleClick() {
    setScore(score + 1);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Poeng: {score}</h2>

      <button
        onClick={handleClick}
        style={{ border: "none", background: "none" }}
      >
        <img src="vite.svg" alt="Cookie" style={{ width: "150px" }} />
      </button>
    </div>
  );
}
