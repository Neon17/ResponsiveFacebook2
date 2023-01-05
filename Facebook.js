window.onload = function () {
  var LeftPage = document.getElementById("LeftPage");
  var RightPage = document.getElementById("RightPage");
  var x = window.innerHeight - 56;
  var y = x.toString() + "px";
  LeftPage.style.height = y;
  RightPage.style.height = y;
  console.log(y);
  var Fixed = document.getElementsByClassName("FixedPageStart");  

  AllStories = document.getElementsByClassName("StoriesinNewsFeed");
  CountStories = AllStories.length;
  for (var i = 0; i < CountStories; i++){
    if ((i>=0) && (i<=4)){
      AllStories[i].style.display = "flex";  
    }
    else {
      AllStories[i].style.display = "none";
    }
  }
};

/*Current Start is the News Feed Stories Scrolling*/
var CurrentStart = 0;
var CurrentEnd = 4;
var CountStories; //To find the number of total stories

function LeftAnchorClick () {
  AllStories = document.getElementsByClassName("StoriesinNewsFeed");
  CountStories = AllStories.length;
  if (CurrentStart > 0){
    CurrentStart -= 4;
    CurrentEnd -=4;
    for (var i = 0; i < CountStories; i++){
      if ((i>=CurrentStart) && (i<=CurrentEnd)){
        AllStories[i].style.display = "flex";  
      }
      else {
        AllStories[i].style.display = "none";
      }
    }
  }
}
function RightAnchorClick () {
  AllStories = document.getElementsByClassName("StoriesinNewsFeed");
  CountStories = AllStories.length;
  if (CurrentEnd < (CountStories-1)){
    CurrentStart += 4;
    CurrentEnd +=4;
    for (var i = 0; i < CountStories; i++){
      if ((i>=CurrentStart) && (i<=CurrentEnd)){
        AllStories[i].style.display = "flex";  
      }
      else {
        AllStories[i].style.display = "none";
      }
    }
  }
}


function BlueBarFirst() {
  BlueBarReset(); /* To make all remaining Blue Bars black if not clicked */
  var Line = document.getElementsByClassName("LineDrawHolderMain")[0];
  Line.style.backgroundColor="blue";
}
function BlueBarSecond() {
  BlueBarReset();
  var Line = document.getElementsByClassName("LineDrawHolderMain")[1];
  Line.style.backgroundColor="blue";
}
function BlueBarThird() {
  BlueBarReset();
  var Line = document.getElementsByClassName("LineDrawHolderMain")[2];
  Line.style.backgroundColor="blue";
}

function BlueBarReset () {
  var Line = document.getElementsByClassName("LineDrawHolderMain");
  Line[0].style.backgroundColor = "black";
  Line[1].style.backgroundColor = "black";
  Line[2].style.backgroundColor = "black";
}
