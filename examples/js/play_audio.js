//Mono
let channels = 1;

function init() {
  aud_ctx = new AudioContext();
  fs = aud_ctx.sampleRate; 
}

init();

var sound = new Audio();

async function connected_play_audiofile(source){
    sound.preload = "auto";
    sound.src = source[0];
    sound.play();
    var count = 0;
    sound.addEventListener('ended', async () => {
      count++;
        if(count < source.length){
            sound.src = source[1];
            sound.play();
        }else{
        sound.pause();
        }
    });
}

async function connected_play_audiofile_next(source){
  stop_play_audiofile();
    sound.src = source[0];
    sound.play();
    var count = 0;
    sound.addEventListener('ended', async () => {
      count++;
        if(count < source.length){
            sound.src = source[1];
            sound.play();
        }else{
        sound.pause();
        }
    });
}

  async function stop_play_audiofile(){ //sourceがない
      sound.stop();
  }