import { useState } from "react";

function Greeting() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Greeting</h2>

      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />

      <p>Hello, {name}</p>
    </div>
  );
}

export default Greeting;