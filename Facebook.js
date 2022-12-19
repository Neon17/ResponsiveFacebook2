window.onload = function () {
  var LeftPage = document.getElementById("LeftPage");
  var RightPage = document.getElementById("RightPage");
  var x = window.innerHeight - 56;
  var y = x.toString() + "px";
  LeftPage.style.height = y;
  RightPage.style.height = y;
  console.log(y);
  var Fixed = document.getElementsByClassName("FixedPageStart");
};
