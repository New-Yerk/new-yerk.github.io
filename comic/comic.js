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
