let PerformersButton = document.getElementById('Performers')
let CloseButton = document.getElementById('Closing_Button')
let ConceptButton = document.getElementById('Concept')
let PopUp = document.getElementById('PopUp_Us')
let PopUpIlya = document.getElementById('PopUp_Ilya')
let NewImage = document.getElementById('Campus')
let Return = document.getElementById('CampusButton')
let ReturnImg = document. getElementById('Campus')

PopUp.style.display = 'none'; //sets Yerk's and Marta's bio images as invisible
PopUpIlya.style.display = 'none';//sets Ilya's bio image as invisible

PerformersButton.addEventListener ('click', showPopUp);//makes the bio images appear with a click
function showPopUp(){
  PopUp.style.display='block';
  PopUpIlya.style.display = 'block';
}

CloseButton.addEventListener ('click', hidePopUp); //closes the bio images with a click
function hidePopUp(){
  PopUp.style.display = 'none';
  PopUpIlya.style.display = 'none';
}

ConceptButton.addEventListener ('click', addImg);//replaces the image of the campus with the desription of the concept
function addImg () {
  NewImage.src = "media/funkytown.jpg";
}

Return.addEventListener('click', addAnotherImg)//returns the image of the campus
function addAnotherImg () {
  ReturnImg.src = "media/campus.jpg";
}
