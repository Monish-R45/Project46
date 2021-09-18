var runner, road, obs, invisibleGround;
var runnerImg, roadImg, obsImg 

function preload(){
   runnerImg = loadAnimation("Images/running1.PNG","Images/running2.PNG","Images/running3.PNG","Images/running4.PNG","Images/running5.PNG","Images/running6.PNG","Images/running7.PNG","Images/running8.PNG")
   roadImg = loadImage("Images/bg img.jpg")
   obsImg = loadImage("Images/redbubble.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  
  road = createSprite(width/2 + 200,height/2,5000,600)
  road.addImage(roadImg)
  road.scale = 2.5
  road.velocityX = -2

  runner = createSprite(250,500)
  runner.addAnimation("running",runnerImg)

  invisibleGround = createSprite(width/2,690,width,10)
  //invisibleGround.visible = false

 


}
function draw(){
  if(road.x < 680 ){
    road.x = width/2 
  }
  createObs(invisibleGround);
  if(keyDown('space')){
    runner.velocityY = -10
    console.log("Working")
  }
 runner.velocityY = runner.velocityY + 1

  runner.collide(invisibleGround)

  //console.log(road.x)
  drawSprites(); 
}

function createObs(invisibleGround){
  if(frameCount % 10 === 0){
    //var rand = Math.round(random(0,1))
   // if(rand === 0){
     // obs = createSprite(100,50)
     // obs.velocityX = 4
    //  obs.velocityY = 4

   // }else{
      obs = createSprite(width,100)
      obs.velocityX = -2
      obs.velocityY = 2
      
    //}
     obs.addImage(obsImg)
     obs.scale = 0.3
    // obs.collide(invisibleGround)
  }
  obs.collide(invisibleGround)
  //obs.bounceOff(invisibleGround)
}