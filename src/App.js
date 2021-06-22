import React from 'react';
import './App.css';
import HomepageImage from './components/HomepageImage'
import ReactAudioPlayer from 'react-audio-player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactAudioPlayer
          src="https://res.cloudinary.com/dzwpbkn3u/video/upload/v1624194033/cicada_eouhbk.mp3"
          autoPlay
          loop
          controls
        />
      <h1>
        a summer day
      </h1>
        <HomepageImage />
        <div class="footer">
          <p>image and audio source alexis.sae.an@gmail.com tokyo</p>
        </div>
      </header>
    </div>
  );
}

export default App;
