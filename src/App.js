import React, { useState } from "react";

export default function App() {
  const [topic, setTopic] = useState("");
  const [sources, setSources] = useState([]);
  const [status, setStatus] = useState("");
  const [audioSrc, setAudioSrc] = useState("");

  const sourceList = ["BBC", "NASA", "NYTimes", "The Verge", "Reddit"];

  const handleSourceChange = (e) => {
    const value = e.target.value;
    setSources((prev) =>
      prev.includes(value)
        ? prev.filter((source) => source !== value)
        : [...prev, value]
    );
  };

  const generatePodcast = () => {
    if (!topic || sources.length === 0) {
      alert("Please enter a topic and select at least one source.");
      return;
    }
    setStatus(
      `Creating your podcast about '${topic}' from: ${sources.join(", ")}`
    );
    // Placeholder audio - Replace with AI generated audio later
    setAudioSrc(
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    );
  };

  return (
    <div style={styles.container}>
      <h1>AI Podcast Hub</h1>
      <input
        style={styles.input}
        type="text"
        placeholder="Enter your topic (e.g., SpaceX Mars Mission)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <div style={styles.sources}>
        {sourceList.map((source) => (
          <label key={source}>
            <input
              type="checkbox"
              value={source}
              checked={sources.includes(source)}
              onChange={handleSourceChange}
            />{" "}
            {source}
          </label>
        ))}
      </div>

      <button style={styles.button} onClick={generatePodcast}>
        Generate Podcast
      </button>

      {status && <p>{status}</p>}

      {audioSrc && (
        <audio controls style={{ width: "100%", marginTop: "20px" }}>
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "#f4f4f4",
    color: "#333",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "auto",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
  },
  input: {
    width: "90%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  sources: {
    textAlign: "left",
    marginBottom: "20px",
  },
  button: {
    background: "#4CAF50",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
