import React, { useState } from "react";

function App() {
  const torches = ["🟡", "🔴", "🟢", "🔵", "🟠"];
  const [sequence, setSequence] = useState([...torches].sort(() => Math.random() - 0.5));
  const [player, setPlayer] = useState([]);
  const [message, setMessage] = useState("Light the torches in the correct order!");
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (torch) => {
    const newPlayer = [...player, torch];
    if (newPlayer.join("") === sequence.slice(0, newPlayer.length).join("")) {
      setPlayer(newPlayer);
      if (newPlayer.length === sequence.length) {
        setMessage("🔥 All torches lit! You win! 🎉");
      }
    } else {
      setPlayer([]);
      setMessage("❌ Wrong order! Try again.");
    }
  };

  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      height: "100vh", width: "100vw", background: darkMode ? "#222" : "#f4f4f4", color: darkMode ? "#fff" : "#000"
    }}>
      <div style={{
        width: "90%", height: "90%", maxWidth: "600px", maxHeight: "600px",
        background: darkMode ? "#333" : "#fff", padding: "20px", borderRadius: "10px", textAlign: "center",
        display: "flex", flexDirection: "column", justifyContent: "center"
      }}>
        <h1>🔥 Light the Torches</h1>
        <p>{message}</p>
        <div>
          {torches.map((torch) => (
            <button key={torch} onClick={() => handleClick(torch)} style={{ fontSize: "24px", margin: "5px", padding: "10px" }}>
              {torch}
            </button>
          ))}
        </div>
        <button onClick={() => { setPlayer([]); setSequence([...torches].sort(() => Math.random() - 0.5)); setMessage("Light the torches in the correct order!"); }} style={{ margin: "10px", padding: "10px" }}>
          Restart
        </button>
        <button onClick={() => setDarkMode(!darkMode)} style={{ padding: "10px" }}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;
