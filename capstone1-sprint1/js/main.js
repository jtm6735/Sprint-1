"use strict";
// these variables are in "Script scope" and will be available in this and other .js files
const screenWidth = 600;
const screenHeight = 400;
let imageArray = []; // an array to hold all of our sprites
var heart = new Image();


function init(){
    heart.src = './img/heart.jpg';
    window.requestAnimationFrame(draw);
};

function draw(){
    
    const c = document.querySelector("canvas")
    const ctx = c.getContext("2d");
    
	// schedule a call to loop() in 1/60th of a second
	
	// draw background
	ctx.fillRect(0,0,screenWidth,screenHeight)
	
	// draw sprites
    var time = 1000;
    ctx.rotate(((2 * Math.PI) / 720 ) * time + ((2 * Math.PI) / 60000) * time);
    ctx.translate(2,0);
	ctx.drawImage(heart, 5,5);
    
        
    requestAnimationFrame(draw);
    ctx.translate(400,300);
}


init();