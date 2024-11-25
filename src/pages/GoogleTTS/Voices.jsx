import React, { useEffect, useState } from "react";
import axios from "axios";

export default function VoicesComponent({ selectedVoice, setSelectedVoice }) {
  const [loading, setLoading] = useState(false);
  const [voices, setVoices] = useState([]);
  const getVoices = async () => {
    try {
      setLoading(true);
      const results = await axios({
        method: "GET",
        url: "http://localhost:8080/tts/get-voices",
      });
      setVoices(results.data?.voices[0].voices);
    } catch (err) {
      alert(err?.message || "Internal server error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVoices();
  }, []);

  const handleSelect = (voice) => {
    if (voice) {
      setSelectedVoice(voice);
    }
  };
  return (
    <div style={{ width: "400px" }}>
      <h1>Voices</h1>
      {loading ? (
        <h6>Loading...</h6>
      ) : (
        <div style={{ maxHeight: "400px", overflow: "scroll" }}>
          {voices?.map((voice, i) => (
            <div
              style={{
                border: "1px solid grey",
                borderRadius: "10px",
                margin: "1px",
                background:
                  selectedVoice?.name === voice.name ? "#4CAF50" : "#242424",
              }}
              key={i}
              onClick={() => handleSelect(voice)}
            >
              <p>{voice.name}</p>
              <p>{voice.ssmlGender}</p>
              <audio controls preload="none" key={i}>
                <source
                  src={`https://cloud.google.com/static/text-to-speech/docs/audio/${voice.name}.wav`}
                  type="audio/wav"
                />
                Your browser doesn't support the audio element.
              </audio>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
