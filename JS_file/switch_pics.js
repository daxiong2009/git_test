/* var elForm=document.getElementsByTagName('form');
var elPics=document.getElementById('pics');
var img1 = document.createElement("img");
img1.src = "IMG_0888.JPG";
img1.height="200";
img1.width="150";
var img2 = document.createElement("img");
img2.src = "flowChart.PNG";
img2.height="200";
img2.width="150";
img_list=[img1,img2]; */
/* elPics.appendChild(img_list[0]);
elPics.appendChild(img_list[1]); */



function  changePics(v) {
    
  var target = document.getElementById("pics");
  switch(v){
      case "Image1":
          target.innerHTML= "<img height=250 width=200 src='me.jpg'>";
          break;
      case "Image2":
          target.innerHTML= "<img height=250 width=200 src='IMG_0888.JPG'>";
          break;
      case "Image3":
          target.innerHTML= "<img height=250 width=200 src='flowChart.PNG'>";
          break;
  }
}


