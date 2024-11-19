import React, { useState } from "react";
import axios from "axios";

const GoogleTTS = () => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);

  const convertToSpeech = async () => {
    if (!text.trim()) {
      alert("Please enter some text to convert.");
      return;
    }
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:8080/tts",
        data: { text },
      });
      console.log({ response });
      setAudioUrl(response.data.url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <img src="data:image/png;base64,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" />
      <h2>Google Text-to-Speech Converter</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
        style={{
          width: "100%",
          height: "100px",
          marginBottom: "10px",
          padding: "10px",
          fontSize: "16px",
        }}
      />
      <br />
      <button
        onClick={convertToSpeech}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Convert to Speech
      </button>
      <br />
      {audioUrl && (
        <audio controls style={{ marginTop: "20px", width: "100%" }}>
          <source src={audioUrl} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default GoogleTTS;
