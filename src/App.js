import React from 'react';
import share from './images/share.svg';
import './App.css';

const sounds = [
  { src: 'sounds/falopa.mp3', title: 'Falopa' },
  { src: 'sounds/famoso.mp3', title: 'Famoso' },
  { src: 'sounds/mechupa.mp3', title: 'Me chupa...' },
  { src: 'sounds/pingo.mp3', title: 'Pingo' },
  { src: 'sounds/sos-bastante-puto.mp3', title: 'Sos bastante...' },
  { src: 'sounds/enamorar.ogg', title: 'Enamorado' },
  { src: 'sounds/manga-de-pajeros.mp3', title: 'Manga de pajeros...' },
  { src: 'sounds/sisisi.mp3', title: 'Si si si' },
  { src: 'sounds/pija.ogg', title: 'Pija' },
  { src: 'sounds/te-la-puso.mp3', title: 'Te la puso' },
  { src: 'sounds/az-querido.opus', title: 'Az querido!', extra: true },
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Botoncelo</h1>
        <img src={require('./images/marce.png')} alt=""/>
      </header>
      <div className="sound-list">
        {sounds.map((sound, i) => <SoundButton key={i} sound={sound} />)}
      </div> 
    </div>
  );
}

class SoundButton extends React.Component {

  handleMouseDown() {
    this.sound.currentTime = 0;
    this.sound.play();
  }

  handleMouseUp() {
    //this.sound.currentTime = 0;
    //this.sound.pause();
  }

  async handleShare() {
    const audioRequest = await fetch(this.props.sound.src);
    const audioBlob = await audioRequest.blob();
    const audioFile = new File([audioBlob], 'botoncelo.mp3', { type: 'audio/mp3' });
    
    console.log(audioFile)
    if (navigator.canShare && navigator.canShare({ files: [audioFile] })) {
      navigator.share({
        files: [audioFile],
        title: 'Pictures',
        text: 'Our Pictures.',
      })
      .then(() => console.log('Share was successful.'))
      .catch((error) => console.log('Sharing failed', error));
    } else {
      console.log(`Your system doesn't support sharing files.`);
    }
  }

  render() {
    return (
      <div className="sound-box">
        <audio ref={(el) => this.sound = el } src={this.props.sound.src} controls preload="true" />
        <button className="sound-button" onMouseDown={(e) => this.handleMouseDown(e)} onMouseUp={(e) => this.handleMouseUp(e)}>{this.props.sound.title}</button>
        <button className="share-button" onClick={(e) => this.handleShare(e)}>
          <img className="share-img" src={share} />
        </button>
      </div>
    ) 
  }
}

export default App;
