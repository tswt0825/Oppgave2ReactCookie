import "./App.css";
import CookieClicker from "./components/cookieClicker.jsx";
import Users from "./components/users.jsx";
import CatFacts from "./components/catFacts.jsx";

function App() {
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
