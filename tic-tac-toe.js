// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var canvas = document.getElementById("game-board")
var circle = document.createElementNS(namespace, "circle")

function changeshape() {
circle.setAttribute("cx", 40)
circle.setAttribute("cy", 40)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "blue")
}
