// import TemperatureConverter from "./components/TemperatureConverter";
// import Counter from "./components/Counter";
// import Greeting from "./components/Greetings";

// function App() {
//   return (
//     <div>
//       <h1>React Practice</h1>

//       <TemperatureConverter />

//       <Counter />

//       <Greeting />
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import TemperatureConverter from "./components/TemperatureConverter";
import Counter from "./components/Counter";
import Greeting from "./components/Greetings";

function App() {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: isDark ? "#222" : "#ccb4b4",
        color: isDark ? "#ffffff" : "#222",
        padding: "20px",
      }}
    >
      <button onClick={toggleTheme}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>

      <TemperatureConverter />

      <Counter />

      <Greeting />
    </div>
  );
}

export default App;