// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var canvas = document.getElementById("game-board")


function makeShape() {
  var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 40)
circle.setAttribute("cy", 40)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "blue")
 canvas.appendChild(circle)
}
function tapcircle(){
  var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 150)
circle.setAttribute("cy", 40)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "red")
 canvas.appendChild(circle)
}
function switchcircle(){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 250)
  circle.setAttribute("cy", 40)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "blue")
   canvas.appendChild(circle)
  }
  function middlecircle(){
var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 40)
    circle.setAttribute("cy", 140)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill", "red")
     canvas.appendChild(circle)
    }
    function sidecircle(){
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", 140)
      circle.setAttribute("cy", 240)
      circle.setAttribute("r", 30)
      circle.setAttribute("fill", "red")
       canvas.appendChild(circle)
    }
   function othersidecircle(){
     var circle = document.createElementNS(namespace, "circle")
     circle.setAttribute("cx", 145)
     circle.setAttribute("cy", 140)
     circle.setAttribute("r", 30)
     circle.setAttribute("fill", "blue")
      canvas.appendChild(circle)
   }
   function smallcircle(){
     var circle = document.createElementNS(namespace, "circle")
     circle.setAttribute("cx", 240)
     circle.setAttribute("cy", 240)
     circle.setAttribute("r", 30)
     circle.setAttribute("fill", "blue")
      canvas.appendChild(circle)
   }
   function thirdcircle(){
     var circle = document.createElementNS(namespace, "circle")
     circle.setAttribute("cx", 240)
     circle.setAttribute("cy", 140)
     circle.setAttribute("r", 30)
     circle.setAttribute("fill", "red")
      canvas.appendChild(circle)
   }
   function lastcircle(){
     var circle = document.createElementNS(namespace, "circle")
     circle.setAttribute("cx",40)
     circle.setAttribute("cy", 240)
     circle.setAttribute("r", 30)
     circle.setAttribute("fill", "blue")
      canvas.appendChild(circle)
   }
