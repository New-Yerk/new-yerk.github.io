let PerformersButton = document.getElementById('Performers')
let CloseButton = document.getElementById('Closing_Button')
let PopUp = document.getElementById('PopUp_Us')
PopUp.style.display = 'none';
PerformersButton.addEventListener ('click', showPopUp);
function showPopUp(){
  PopUp.style.display='block';
}
CloseButton.addEventListener ('click', hidePopUp);
function hidePopUp(){
  PopUp.style.display = 'none';
}
