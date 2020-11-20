var elPics=document.getElementById('pics');
var elForm=document.getElementByTagName('form');

function changePics(){
  var choice=this.options[this.selectedIndex].value;
  if(choice=="image1"){
    elPics.innerHTML="Image1 is my picture";
  }else{
    elPics.innerHTML="Image2 is flow chart diagram";
  }
}

elForm.addEventListener('change',changePics, false);
