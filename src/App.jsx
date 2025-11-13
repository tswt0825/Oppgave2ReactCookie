import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CookieClicker from "./components/cookieClicker.jsx";
import Users from "./components/users.jsx";
import CatFacts from "./components/catFacts.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="container">
      <div className="cardCookie">
        <CookieClicker />
      </div>

      <div className="cardUsers">
        <Users />
      </div>
      <div className="cardCatFacts">
        <CatFacts />
      </div>
      </div>
    </>
  );
}

export default App;
