import { useState } from "react";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

export default function Users() {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleAddUser() {
    if (username.trim() === "" || email.trim() === "") return;

    const newUser = {
      username: username,
      email: email,
    };

    setUsers([...users, newUser]);
    setUsername("");
    setEmail("");
  }

  return (
    <div>
      <h2>Brukerliste</h2>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.username}</strong> – {user.email}
          </li>
        ))}
      </ul>

      <h3>Legg til ny bruker</h3>

      <input
        type="text"
        placeholder="Brukernavn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      <input
        type="email"
        placeholder="E-post"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <button onClick={handleAddUser}>Legg til bruker</button>
    </div>
  );
}
