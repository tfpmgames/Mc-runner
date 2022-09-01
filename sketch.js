var ob1img, ob2img, ob3img, ob4img, ob5img
var ob1, ob2, ob3, ob4, ob5
var player, playerimg
var estrada, estradaimg
var gamestate, pontos
pontos = 0
var obn

function preload(){

  estradaimg = loadImage("Rodovia.png")
  ob1img = loadImage("OB1.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
//height/3 = um terço da tela (altura - cima baixo)
// height/2 = metade da tela


 


  


  player = createSprite( 40, 2200, 50, 50)


}

function draw() {
  
  background(estradaimg);
  spawnObstacles()
  if (keyCode==49){
    player.x = 100
    
  }

  if (keyCode==50){
    player.x = 540
  }

  if (keyCode== 51){
    player.x = 980
  
  

  }




  spawnObstacles()
  drawSprites()
  textSize(200)
  fill(255, 255, 255)
  text(" "+ pontos, 440, 250);

}


// testa!!    ta dando erro 

  function spawnObstacles() {
    if(frameCount % 60 === 0) {
      ob1 = createSprite(1000, 200, 100, 100)
      ob1.addImage(ob1img)
    
      obn = Math.round(random(1,5));
      //generate random obstacles
      switch(obn) {
        case 1: ob1.y == height/2   //(ok) a posição que o obstaculo vai estar posicionado
                break;
        case 2: ob1.y == height/3
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      ob1.scale = 0.1
      ob1.lifetime = 300;
      
     
      //add each obstacle to the group
      // obstaclesGroup.add(obstacle);
    }
  }


