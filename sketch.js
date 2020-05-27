var fixedRect,movingRect,rect1,rect2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 50);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(800, 400, 80, 80);
  movingRect.shapeColor = "green"
  rect1= createSprite(300,100,50,50)
  rect1.shapeColor = "green"
  rect2= createSprite(400,100,50,50)
  rect2.shapeColor = "green"
}

function draw() {
  background(0);  

  movingRect.x = mouseX
  movingRect.y = mouseY

  isTouching(movingRect,rect2)

  drawSprites();
}

