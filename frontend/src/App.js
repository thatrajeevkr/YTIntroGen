import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [script, setScript] = useState('');
  const [intro, setIntro] = useState('');
  const [error, setError] = useState('');

  const handleGenerateIntro = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate-intro', { script });
      setIntro(response.data.intro);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong.');
      setIntro('');
    }
  };

  return (
    <div className="App">
      <h1>YouTube Intro Generator</h1>
      <textarea
        value={script}
        onChange={(e) => setScript(e.target.value)}
        placeholder="Paste your video script here..."
        rows="6"
        cols="50"
      ></textarea>
      <br />
      <button onClick={handleGenerateIntro}>Generate Intro</button>
      {intro && (
        <div>
          <h3>Generated Intro:</h3>
          <p>{intro}</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
