
// var ol = 0;
// var isPlaying = false;
// var circleInterval;

// var el = document.getElementById("circle");
// var sc = 1;




// function circleAnimation(time){
//     ol++;
//     sc++;
//     el.style.left = ol +"px";
//     el.style.width = sc + "px";
//     el.style.height = sc + "px";
//     el.style.borderRadius = 10 + "px";
//     circleInterval = requestAnimationFrame(circleAnimation);

// }

// function mouseClicked(){
//     if(isPlaying){
//         isPlaying = false;
//         document.getElementById("circle").style.backgroundColor = "dimgrey";
//         cancelAnimationFrame(circleInterval);
//     }else{
//         isPlaying = true;
//         document.getElementById("circle").style.backgroundColor = "crimson";
//         circleInterval = requestAnimationFrame(circleAnimation);
//     }
// }

// document.getElementById("circle").addEventListener("click", mouseClicked);
// document.getElementById("circle").style.backgroundColor = "dimgrey";


//  ---------------------------------------------------------C I R C L E

// var canvas = document.getElementById("animated-canvas");
// var context = canvas.getContext("2d");
// var canvasInterval = requestAnimationFrame(canvasAnimation);
// var circleX = 60;
// var velocity = 1;
// var acceleration = 0.5;

// var pasY = canvas.height/2;
// function makeRandom(n){
//     return Math.floor(Math.random()*Math.floor(n));
//     }

// function canvasAnimation(){
//     circleX++;
//     drawCircle(circleX, pasY, 25);
//     canvasInterval = requestAnimationFrame(canvasAnimation);
// }

// function drawCircle(x, y, s){
//     // clearCanvas();
//     context.globalCompositeOperation = "exclusion";
//     context.fillStyle = "crimson";
//     context.beginPath();
//     context.arc(x, y, s, 0, 2 * Math.PI);
//     context.fill();
//     velocity += acceleration;
//     circleX += velocity;

//     if(circleX > canvas.width){
//         circleX = makeRandom(canvas.width);
//         velocity = makeRandom(3);
//         pasY = makeRandom(canvas.height);
//     }
// }

// function clearCanvas(){
//     context.clearRect(0, 0, canvas.width, canvas.height);
// }



// drawCircle();







//  ---------------------------------------------------------C I R C L E




var rotatingSquare = document.getElementById("web-animation").animate(
    [
        { backgroundColor: "#000000", opacity: 1.0, transform: 'rotate(0deg) translate3D(0, 0, 0)', easing: 'ease-out' },
        { backgroundColor: "#440000", opacity: 0.3 },
        { backgroundColor: "#000000", opacity: 1.0, transform: 'rotate(360deg) translate3D(0, 0, 0)', easing: 'ease-out'  }
    ],
    {
        duration: 500,
        iterations: Infinity,
        easing: 'ease-in-out'
    }
)
