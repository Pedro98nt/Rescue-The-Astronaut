let astronaut = document.querySelector("#astronaut");

// we've lost our astronaut!
// Quickly! Log out her bounding box to the console with element.getBBox() and find out where she is!
// When you know her coordinates, add them into the variables below to launch the rescue.

let x = 0;
let y = 0;
let width = 804;
let height = 1454;

let rescueCoords = `${x} ${y} ${width} ${height}`

var _svg = document.getElementById('svg');
console.log(_svg.getBBox());

if(typeof rescueCoords !== 'undefined'){
  gsap.to("#svg", {duration: 10, attr: {viewBox: rescueCoords }, ease: Power4.easeOut});
}