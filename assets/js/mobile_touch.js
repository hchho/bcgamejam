// var canvas = document.getElementById("game");
// // Set up touch events for mobile, etc
// canvas.addEventListener("touchstart", function (e) {  
//   mousePos = getTouchPos(canvas, e);
//   var touch = e.touches[0];
//   var mouseEvent = new MouseEvent("mousedown", {
//     clientX: touch.clientX,
//     clientY: touch.clientY
//   });
//   canvas.dispatchEvent(mouseEvent);
// }, false);
// canvas.addEventListener("touchend", function (e) {
//   var mouseEvent = new MouseEvent("mouseup", {});
//   canvas.dispatchEvent(mouseEvent);
// }, false);

// // Get the position of a touch relative to the canvas
// function getTouchPos(canvasDom, touchEvent) {
//   var rect = canvasDom.getBoundingClientRect();
//   return {

//     x: touchEvent.touches[0].clientX - rect.left,
//     y: touchEvent.touches[0].clientY - rect.top
//   };
// }