    let gameState = "startScreen";
    let y = 100;
    let speed = 0;
    let thrust = -0.25;
    let gravity = 0.1;
    let safeLandingSpeed = 2.5;
    
    function setup(){
      createCanvas(625,600);
    }

    function Helicopter(x, y, size) {
    push();
    
    translate(x, y);
    scale(size);
    
    // body
    fill(253, 185, 39);
    rect(-50, 0, 100, 40, 10); 
  
    // cockpit
    fill(85, 37, 130);
    ellipse(-20, 20, 40, 40); 
  
    // tail
    fill(253, 185, 39);
    rect(45, 10, 40, 10); 
  
    // rotor
    fill(100);
    rect(-55, -20, 110, 10, 5); 
  
    // axis
    fill(0);
    ellipse(0, -15, 10, 10); 
    strokeWeight(4);
    line(0,-15, 0, 0);
    
    // lander
    stroke(0);
    strokeWeight(4);
    line(-20, 40,-20, 50);
    line(20, 40, 20, 50);
    line(-40, 50, 40, 50); 
    line(-50, 60, -30, 50); 
    line(50, 60, 30, 50);   
  
    pop();
    
    }
    
    function sky(){
        fill(135, 206, 235); 
        rect(0, 0, width, height * 0.75);
    }
    
    function earth(){
        fill(139, 69, 19); 
        rect(0, height * 0.75, width, height * 0.25); 
    }
    
    function draw() {
        background(0);
        if (gameState === "startScreen") {
          showStartScreen();
        } else if (gameState === "gameScreen") {
          playGame();
        } else if (gameState === "endScreen") {
          showEndScreen();
        }
    }
    
    function showStartScreen() {
        textAlign(CENTER);
        textSize(30);
        fill(255);
        text("Chopper Earth Lander", width / 2, height / 2 - 50);
        textSize(16);
        text("press 'B' to start", width / 2, height / 2);
    }
    
    function playGame() {
        
        sky();
        earth();
        Helicopter(width / 2, y, 1);
        
        y += speed;
        speed += gravity;
      
        if (keyIsDown(32)) {
          speed += thrust;
        }
      
        
      
        if (y>= height- 207.5) {
          if (abs(speed) <= safeLandingSpeed) {
            gameState = "endScreen";
            result = "Win";
          } else {
            gameState = "endScreen";
            result = "Fail";
          }
        }
    }
    
    function showEndScreen() {
        textAlign(width / 2, height / 2);
        textSize(30);
        fill(255);
        text(result, width / 2, height / 2 - 50);
        textSize(16);
        text("press 'R' to reset", width / 2, height / 2);
    }
    function keyPressed() {
        if (gameState === "startScreen" && key.toUpperCase() === 'B') {
          gameState = "gameScreen";
          resetGame();
        } else if (gameState === "endScreen" && key.toUpperCase() === 'R') {
          gameState = "startScreen";
        }
    }
      
    function resetGame() {
        speed = 0;
        y = 100;
    }    
