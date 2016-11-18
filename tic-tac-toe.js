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
