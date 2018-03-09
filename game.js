var canvas = document.getElementById("thing");
var clear = document.getElementById("clear");
var stopv = document.getElementById("Stop");
var grow = document.getElementById("grow");
var screen = document.getElementById("screen");
var r = 0;
var t = 0;
var z = 1;
var dy = 5;
var dx = 6;
var requestID;
var timer;
var timerscreen;

var drawcirc = function(x,y){
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")  
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 20);
    circle.setAttribute("fill", "red");
    canvas.appendChild(circle)
}

var draw = function(event){
    storeGuess(event);
    drawcirc(guessX, guessY);
    drawscreensaver();
}

var screensaver = function(){
    t=1;
    circle = document.getElementsByTagName("circle");
    console.log(circle.length);
    for(i = 0; i < circle.length; i++){
        var circ = circle[i]
        console.log(circle)
        var x = parseInt(circ.getAttribute("cy"))
        console.log(x);
        var y = parseInt(circ.getAttribute("cy"))
        if(x>480 || x<20){
            dx = -dx;
        }
        if(y>480 || y<20){
            dy = -dy;
        }
        x += dx;
        y += dy;
        circ.setAttribute("cx", x);
        circ.setAttribute("cy", y);
    }
    console.log("xd")
}

var drawscreensaver = function(){
    timerscreen = setInterval(screensaver , 1700);

}

function storeGuess(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    guessX = x;
    guessY = y;
    console.log("x coords: " + guessX + ", y coords: " + guessY);
}

var clearcan = function(){
    stop()
    t = 0;
    canvas.innerHTML = "";
    r = 0;
    z = 1;
    var x = Math.random()*459 + 20;
    var y = Math.random()*459 + 20;
    dx = 5;
    dy = 6;
}

var stop = function(){
    clearInterval(timer)
    clearInterval(timerscreen)
    grow.removeAttribute("disabled");
    screen.removeAttribute("disabled");
}



stopv.addEventListener("click", stop);
clear.addEventListener("click", clearcan);
canvas.addEventListener("click", draw);