function setup() {
    createCanvas(600, 600);
    background("#FFFBFA");
  }
  
  function draw() {
    stroke("#4CAF50");
    fill("#673AB7");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 17,5);
    }
  }