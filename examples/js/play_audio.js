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
  for(let i=0;i<source.length;i++){
    const sound = new Audio(source[i]);
    sound.src = source[i];
    sound.play();
    var count = 0;
    sound.addEventListener('ended', async () => {
      count++;
        if(count < source.length){
          //setTimeout(function(){
            sound.src = source[count];
            sound.play();
        }else{
        sound.pause();
        }
    });
  }
}
  async function stop_play_audiofile(source){
    sound.pause();
  }