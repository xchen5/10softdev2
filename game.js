var canvas = document.getElementById("thing");
var clear = document.getElementById("clear");
var stopv = document.getElementById("Stop");
var grow = document.getElementById("grow");
var screen = document.getElementById("screen");
var dxdy = [];
var dxdyCounter = 0;


var requestID;
var timer;
var timerscreen;

var drawcirc = function(e){
    clearInterval(timerscreen);
    timerscreen = setInterval(screensaver , 20);
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    circle.setAttribute("cx", e.offsetX);
    circle.setAttribute("cy", e.offsetY);
    circle.setAttribute("r", 20);
    circle.setAttribute("fill", "red");
    dxdy.push(6);
    //console.log("drawcirc dxdy: " + dxdy[dxdyCounter] + "dxdy counter:" + dxdyCounter);
    dxdyCounter += 1;
    dxdy.push(5);
    //console.log("drawcirc dxdy: " + dxdy[dxdyCounter]);
    dxdyCounter += 1;
    canvas.appendChild(circle);
}

var screensaver = function(){
    circle = document.getElementsByTagName("circle");

    console.log(circle.length);
    for(i = 0; i < circle.length; i++){
        c = i * 2;
        console.log(i);
        var circ = circle[i];
        //console.log(circle);
        var x = parseInt(circ.getAttribute("cx"));
        var y = parseInt(circ.getAttribute("cy"));
        if(x>=480 || x<=20){
            dxdy[c] = dxdy[c] * -1;
        }
        if(y>=480 || y<=20){
            dxdy[c + 1] = dxdy[c + 1] * -1;
        }
        x += dxdy[c];
        y += dxdy[c + 1];
        circ.setAttribute("cx", x);
        circ.setAttribute("cy", y);
    }
    //console.log("xd")
}

var clearcan = function(){
    stop();
    canvas.innerHTML = "";
}

var stop = function(){
    clearInterval(timer)
    clearInterval(timerscreen)
}



stopv.addEventListener("click", stop);
clear.addEventListener("click", clearcan);
canvas.addEventListener("click", drawcirc);
