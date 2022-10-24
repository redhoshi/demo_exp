let AudioContext = window.AudioContext || window.webkitAudioContext;
let aud_ctx;

//Mono
let channels = 1;

function init() {
  aud_ctx = new AudioContext();
  fs = aud_ctx.sampleRate; 
}

init();

async function connected_play_audiofile(source){
    const sound = new Audio(source);
    sound.play(); 
    sound.addEventListener('ended', async () => {
        sound.pause();
    });
  }
  async function stop_play_audiofile(source){
    sound.pause();
  }