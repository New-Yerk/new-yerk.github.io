let panels = [];
let audio_sequence = [];

for(let i = 0; i < 7; i++){
  panels.push('media/' + "panels/" + i +'.png');
  audio_sequence.push('media/' + 'soundtrack/' + i + '_audio.mp3');
}

let previous = document.getElementById  ('backButton');
let next = document.getElementById ('nextButton');
let panel = document.getElementById ('Comic');
let audio = document.getElementById('audio');
let again = document.getElementById('Again_Button');

again.style.display = 'none';

let panelNumber = 0;

previous.addEventListener('click', prevImage);
next.addEventListener('click', nextImage);

function prevImage(){
  panelNumber = panelNumber - 1;
  panel.src = panels[panelNumber];
  if (panelNumber<0) {
    panelNumber = 6;
  }
  panel.src = panels[panelNumber];
  audio.src = audio_sequence[panelNumber];

}

function nextImage(){
  panelNumber = panelNumber + 1;

  if (panelNumber==6) {
    again.style.display='block';
  }
  else {
    again.style.display='none';
  }

  if (panelNumber>=7) {
    panelNumber = 0;
  }
  panel.src = panels[panelNumber];
  audio.src = audio_sequence[panelNumber];
}

let Audio = document.getElementById('audio');
let Mute = document.getElementById ('NoSoundButton');
let Unmute = document.getElementById ('soundButton');

Mute.addEventListener ('click', mute);
function mute() {
  Audio.muted = true;
}
Unmute.addEventListener ('click', unmute);
function unmute() {
  Audio.muted = false;
}
