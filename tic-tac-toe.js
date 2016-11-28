// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var canvas = document.getElementById("game-board")
var circle = document.createElementNS(namespace, "circle")

function makeShape() {
circle.setAttribute("cx", 40)
circle.setAttribute("cy", 40)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "blue")
 canvas.appendChild(circle)
}
function tapcircle(){
circle.setAttribute("cx", 150)
circle.setAttribute("cy", 40)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
}
function switchcircle(){
  circle.setAttribute("cx", 250)
  circle.setAttribute("cy", 40)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "blue")
   canvas.appendChild(circle)
  }
  function middlecircle(){
    circle.setAttribute("cx", 40)
    circle.setAttribute("cy", 140)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill", "red")
     canvas.appendChild(circle)
    }
    function sidecircle(){
      circle.setAttribute("cx", 140)
      circle.setAttribute("cy", 240)
      circle.setAttribute("r", 30)
      circle.setAttribute("fill", "red")
       canvas.appendChild(circle)
    }
   function othersidecircle(){
     circle.setAttribute("cx", 145)
     circle.setAttribute("cy", 140)
     circle.setAttribute("r", 30)
     circle.setAttribute("fill", "blue")
      canvas.appendChild(circle)
   }
   function smallcircle(){
     circle.setAttribute("cx", 240)
     circle.setAttribute("cy", 240)
     circle.setAttribute("r", 30)
     circle.setAttribute("fill", "blue")
      canvas.appendChild(circle)
   }
   function thirdcircle(){
     circle.setAttribute("cx", 240)
     circle.setAttribute("cy", 140)
     circle.setAttribute("r", 30)
     circle.setAttribute("fill", "red")
      canvas.appendChild(circle)
   }
   function lastcircle(){
     circle.setAttribute("cx",40)
     circle.setAttribute("cy", 240)
     circle.setAttribute("r", 30)
     circle.setAttribute("fill", "blue")
      canvas.appendChild(circle)
   }

   var turn="player1"

   function topLeft(){
    if(turn=="player1"){

    }else{

var turn="player1"
}
}
  function topMiddle(){
if(turn=="player1")



  }
