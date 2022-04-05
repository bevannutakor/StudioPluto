var canvas = document.getElementById('planet');
var homeContainer = document.getElementById('home-container');

function scroller(){
    canvas.style.position = "absolute";
    canvas.style.right = homeContainer.scrollTop.toString() + "px";
}