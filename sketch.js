var firstCharacter, secondCharacter, thirdCharacter, fourthCharacter

function setup() {
  createCanvas(800,400);
  firstCharacter = createSprite(400, 200, 50, 50);
  firstCharacter.shapeColor = "blue";
  secondCharacter = createSprite(200, 100, 50, 50);
  secondCharacter.shapeColor = "red";

  thirdCharacter = createSprite(100, 100, 50, 50);
  thirdCharacter.shapeColor = "purple";
  thirdCharacter.velocityX = 3;
  fourthCharacter = createSprite(700, 100, 50, 50);
  fourthCharacter.shapeColor = "pink";
  fourthCharacter.velocityX = -3;
}

function draw() {

  secondCharacter.y = mouseY
  secondCharacter.x = mouseX

  if(firstCharacter.x - secondCharacter.x <= firstCharacter.width/2 + secondCharacter.width/2 && firstCharacter.y - secondCharacter.y <= firstCharacter.height/2 + secondCharacter.height/2
    && secondCharacter.x - firstCharacter.x <= firstCharacter.width/2 + secondCharacter.width/2 && secondCharacter.y - firstCharacter.y <= firstCharacter.height/2 + secondCharacter.height/2){
      firstCharacter.shapeColor = "gray";
      secondCharacter.shapeColor = "gray";
  } else {
    firstCharacter.shapeColor = "blue";
    secondCharacter.shapeColor = "red";
  }

  if(fourthCharacter.x - thirdCharacter.x <= thirdCharacter.width/2 + fourthCharacter.width/2){
    thirdCharacter.velocityX *= -1;
    fourthCharacter.velocityX *= -1;
  }

  if(thirdCharacter.x < 25){
    thirdCharacter.velocityX *= -1
  }

  if(fourthCharacter.x > 775){
    fourthCharacter.velocityX *= -1
  }
  
  background(0);  
  drawSprites();
}