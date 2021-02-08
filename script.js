let PerformersButton = document.getElementById('Performers')
let CloseButton = document.getElementById('Closing_Button')
let ConceptButton = document.getElementById('Concept')
let NewImage = document.getElementById('Campus')
let PopUp = document.getElementById('PopUp_Us')
let PopUpIlya = document.getElementById('PopUp_Ilya')
let Return = document.getElementById('CampusButton')
let Return2 = document. getElementById('Campus')
PopUp.style.display = 'none';
PopUpIlya.style.display = 'none';
PerformersButton.addEventListener ('click', showPopUp);
function showPopUp(){
  PopUp.style.display='block';
  PopUpIlya.style.display = 'block';
}
CloseButton.addEventListener ('click', hidePopUp);
function hidePopUp(){
  PopUp.style.display = 'none';
  PopUpIlya.style.display = 'none';
}
ConceptButton.addEventListener ('click', addImg);
function addImg () {
  NewImage.src = "media/funkytown.jpg";
}
Return.addEventListener('click', addAnotherImg)
function addAnotherImg () {
  Return2.src = "media/campus.jpg";
}
