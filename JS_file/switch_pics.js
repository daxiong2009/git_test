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
          target.innerHTML= "<img height=400 width=400 src='user_case1.JPG'>";
          break;
      case "Image2":
          target.innerHTML= "<img height=250 width=200 src='user_case2.JPG'>";
          break;
      case "Image3":
          target.innerHTML= "<img height=250 width=200 src='user_case3.JPG'>";
          break;
  }
}


