var player
var paper, plasticCup
var gameState= "start"
var playerImg, paperImg, plasticCupImg
var bgImg
var foodWasteImg
var recyclingBinImg
var recyclingBin
var resuablebag, reusableBagImg
var points=300
function preload() {
playerImg= loadAnimation("alien1.png", "alien2.png")

paperImg=loadImage("paper.png")

plasticCupImg=loadImage("plasticcup.png")

bgImg= loadImage("bgImg.png")

foodWasteImg= loadImage("foodwaste.png")

recyclingBinImg= loadImage("recyclingbin.png")

reusableBagImg= loadImage("reusablebag.png")

option1Img= loadImage("option1.png")

plusTenImg=loadImage("plusTen.png")
minusTenImg=loadImage("minusTen.png")

option2Img=loadImage("option2.png")

}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
   player= createSprite(windowWidth/2-250, windowHeight- 50, 50, 50)
   player.addAnimation("running",playerImg)

 paper= createSprite( windowWidth/2-650, windowHeight- 290, 30, 30)
 paper.addImage(paperImg)
 paper.scale= 0.2

 plasticCup=createSprite( windowWidth/2 +50, windowHeight- 300, 40, 40)
plasticCup.addImage(plasticCupImg)
plasticCup.scale=0.07

foodWaste= createSprite(windowWidth/ 2- 250, windowHeight- 300, 30, 30)
foodWaste.addImage(foodWasteImg)
foodWaste.scale=0.15

recyclingBin= createSprite(windowWidth/2 + 520, windowHeight- 630, 30, 30)
recyclingBin.addImage(recyclingBinImg)
recyclingBin.scale=0.06
 
reusableBag= createSprite(windowWidth/2 - 300, windowHeight- 630, 30, 30)
reusableBag.addImage(reusableBagImg)
reusableBag.scale=0.15

wall1= createSprite(windowWidth/2 - 170, windowHeight-45, 30, 90)
wall2= createSprite(windowWidth/2 - 350, windowHeight-123, 25, 245)
wall3= createSprite(windowWidth/2 - 172, windowHeight-255, 25, 169)
wall4= createSprite(windowWidth/2 , windowHeight-298, 25, 257)
wall5= createSprite(windowWidth/2+180 , windowHeight-252, 25, 350)
wall6= createSprite(windowWidth/2-172 , windowHeight-624, 25, 236)
wall7= createSprite(windowWidth/2-350, windowHeight-624, 25, 236)
wall8= createSprite(windowWidth/2+387, windowHeight-624, 25, 236)
wall9= createSprite(windowWidth/2+567, windowHeight-624, 25, 236)

option1=createSprite(windowWidth/2, windowHeight/2, 700, 600)
option1.addImage(option1Img)
option1.scale= 0.5
option1.visible=false

paperoption= createSprite(windowWidth/2-180, windowHeight/2-110, 150, 100)
paperoption.visible=false

plasticoption= createSprite(windowWidth/2+160, windowHeight/2+110, 150, 100)
plasticoption.visible=false

plusTen= createSprite(windowWidth-100, windowHeight-700, 30, 30)
plusTen.addImage(plusTenImg)
plusTen.scale=0.3
plusTen.visible=false

minusTen= createSprite(windowWidth-100, windowHeight-700, 30, 30)
minusTen.addImage(minusTenImg)
minusTen.scale=0.3
minusTen.visible=false

option2=createSprite(windowWidth/2, windowHeight/2, 700, 600)
option2.addImage(option2Img)
option2.scale= 0.5
option2.visible=false

wetWasteOption=createSprite(windowWidth/2- 230, windowHeight/2-150, 100, 170)
wetWasteOption.visible=false

dryWasteOption=createSprite(windowWidth/2+ 230, windowHeight/2+150, 100, 180)
dryWasteOption.visible=false

}

function draw(){
    background(bgImg);

    textSize(30)
    fill("black")
text("Points : " + points, windowWidth/2- 700, windowHeight/2- 250)

if (gameState==="start"&& keyDown("SPACE")){
    gameState="play"
}

    if(gameState==="play"){

  playerMoving();
}


    if(player.isTouching(paper)){
      option1.visible=true
      gameState=3
    
 
        if(mousePressedOver(paperoption)){
            plusTen.visible=true
            points=points+10
        gameState="play2"
        }
        else if(mousePressedOver(plasticoption)){
            minusTen.visible=true 
            points=points-10 
            gameState="play2"
        }

    }

    if(keyDown("R") && gameState==3){
    
        option1.visible=true
    }

if(player.isTouching(foodWaste)){
    option2.visible=true

}
if(mousePressedOver(wetWasteOption)){
    plusTen.visible=true
    points=points+10
gameState="play2"


}
else if(mousePressedOver(dryWasteOption)){
    minusTen.visible=true  
    points=points-10
    gameState="play2"

}
if(gameState=="play2"){
    option1.visible=false
    option2.visible=false
    textSize(26)
    fill("red")
    text("Press R to continue!", windowWidth/2, windowHeight/2)
  playerMoving();}

 drawSprites()
}


function playerMoving(){
    if( keyDown(UP_ARROW)){
        player.y=player.y- 10
        plusTen.visible=false
        minusTen.visible=false
    }

    if( keyDown(DOWN_ARROW)){
        player.y=player.y+ 10
        plusTen.visible=false
        minusTen.visible=false
    }

    if( keyDown(RIGHT_ARROW)){
        player.x=player.x+10
        plusTen.visible=false
        minusTen.visible=false
    }

    if( keyDown(LEFT_ARROW)){
        player.x=player.x- 10
        plusTen.visible=false
        minusTen.visible=false
    }

}