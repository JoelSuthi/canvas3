
var drawing = [];
var currentPath = [];
//var isDrawing=false;

function setup(){
  canvas = createCanvas(1400,650);
  canvas.mousePressed(startPath);
  //canvas.mouseReleased(endPath);

  form=new Form();
  form.display();

}

function startPath() {
  currentPath = [];
  drawing.push(currentPath);
}

//function endPath(){
 // isDrawing=false;
//}

function draw() {
  background(255);
  
  if(mouseIsPressed) {
    var point = {
     x: mouseX,
     y: mouseY 
    }

    currentPath.push(point);
  }

  stroke(0);
  strokeWeight(10);
  noFill();

  for (var i = 0; i < drawing.length; i++ ) {
    var path = drawing[i];
    beginShape();
    for (var j = 0; j < path.length; j++) {
    vertex(path[j].x, path[j].y );
  }
   endShape();
  }


  form.button.mousePressed(()=>{
    clearDrawing();
  });

}


   function clearDrawing(){
      drawing=[];
     
      ref.remove();
   }