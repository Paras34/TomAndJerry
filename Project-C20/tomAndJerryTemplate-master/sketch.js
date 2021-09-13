var tom,tomImg1,tomImg2,tomImg3,tomImg;
var jerry,jerryImg1,jerryImg2,jerryImg3,jerryImg;
var bg, bgImg;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    tomImg1 = loadImage("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3 = loadImage("images/cat4.png");

    jerryImg1 = loadImage("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    bg = createSprite(500,400);
    bg.addAnimation("background",bgImg)

    //create tom and jerry sprites here
    tom = createSprite(875,600);
    tom.addAnimation("tomHappy",tomImg1);
    tom.scale = 0.21;

    jerry = createSprite(200,600);
    jerry.addAnimation("JerryHappy",jerryImg1);
    jerry.scale = 0.17;



}

function draw() {

    background(255);

    //Write condition here to evalute if tom and jerry collide
    if(tom.isTouching(jerry)){
        tom.addAnimation("tomFunny",tomImg3);
        tom.changeAnimation("tomFunny");
        tom.velocityX = 0;
        tom.scale = 0.21;
        tom.x = 300;

        jerry.addAnimation("jerryFunny",jerryImg3);
        jerry.changeAnimation("jerryFunny");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  
  if(keyCode === LEFT_ARROW){
      jerry.addAnimation("jerryTaunt",jerryImg2);
      jerry.changeAnimation("jerryTaunt");
      jerry.frameDelay = 15;

     tom.velocityX = -4;
     tom.addAnimation("tomChasing",tomImg2);
     tom.changeAnimation("tomChasing");
     tom.scale = 0.21;
  }

}
