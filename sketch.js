function setup() {
  //add your setup code here
    createCanvas(window.innerWidth); //Example: create a canvas with 
    //width and height of 400 pixels
  }
  
  function draw() {
    // Add your drawing code here
    background(220); // Example: set the background color to
    circle(mouseX, mouseY, width*0.01);
  }