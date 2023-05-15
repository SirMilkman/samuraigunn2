/*
  This is your site JavaScript code - you can add interactivity!
*/
const title = document.getElementsByClassName("one")[0];


var scrollLeft =
  window.pageXOffset !== undefined
    ? window.pageXOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollLeft;
var scrollTop =
  window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;


function findScroll(){
 

  var scrollTop =
  window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
  title.innerHTML = scrollTop;
}

function scroll1(){
  document.documentElement.scrollTop = document.body.scrollTop = 170;
  
}
function scroll2(){
  document.documentElement.scrollTop = document.body.scrollTop = 680;
  
}
function scroll3(){
  document.documentElement.scrollTop = document.body.scrollTop = 1360;
  
}
function scroll4(){
  document.documentElement.scrollTop = document.body.scrollTop = 2040;
  
}
function scroll5(){
  document.documentElement.scrollTop = document.body.scrollTop = 2751;
  
}
function scroll0(){
  document.documentElement.scrollTop = document.body.scrollTop = 0;
  
}
function scroll6(){
  document.documentElement.scrollTop = document.body.scrollTop = 3315;
  
}
function scroll7(){
  document.documentElement.scrollTop = document.body.scrollTop = 4080;
  
}
function scroll8(){
  document.documentElement.scrollTop = document.body.scrollTop = 4845;
  
}
function scroll9(){
  document.documentElement.scrollTop = document.body.scrollTop = 5525;
  
}
function scroll10(){
  document.documentElement.scrollTop = document.body.scrollTop = 6460;
  
}
function scroll11(){
  document.documentElement.scrollTop = document.body.scrollTop = 7055;
  
}
function scroll12(){
  document.documentElement.scrollTop = document.body.scrollTop = 7990;
  
}
// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/


// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked

