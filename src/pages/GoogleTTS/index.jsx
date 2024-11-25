import React, { useState } from "react";
import axios from "axios";
import VoicesComponent from "./Voices";

const GoogleTTS = () => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(null);

  const convertToSpeech = async () => {
    if (!text.trim()) {
      alert("Please enter some text to convert.");
      return;
    }
    try {
      setLoading(true);
      const response = await axios({
        method: "POST",
        url: "http://localhost:8080/tts",
        data: { text, selectedVoice },
      });
      setAudioUrl(response.data.url);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", marginLeft: "20px" }}>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <img
          style={{ height: "80px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
        />
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
          disabled={loading}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: loading ? "rgb(121 124 122)" : "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Convert to Speech
        </button>
        <br />
        {audioUrl && (
          <audio
            controls
            style={{ marginTop: "20px", width: "100%" }}
            key={audioUrl}
          >
            <source src={audioUrl} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
      <VoicesComponent
        selectedVoice={selectedVoice}
        setSelectedVoice={setSelectedVoice}
      />
    </div>
  );
};

export default GoogleTTS;
