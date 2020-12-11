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
      case "KNN":
          target.innerHTML= "<img height=300 width=450 src='knn.png'>";
          break;
      case "Logistic":
          target.innerHTML= "<img height=320 width=450 src='logisitic.jpeg'>";
          break;
      case "Ridge":
          target.innerHTML= "<img height=320 width=450 src='ridge.jpg'>";
          break;
      case "Tree":
          target.innerHTML= "<img height=320 width=450 src='decision-trees.jpg'>";
          break;
      case "Random Forest":
          target.innerHTML= "<img height=320 width=450 src='Random_Forest.png'>";
          break;
      case "Naive Bayes":
          target.innerHTML= "<img height=380 width=600 src='naive bayes.png'>";
          break;
      case "NNs":
          target.innerHTML= "<img height=320 width=450 src='NNs.png'>";
          break;
  }
}


