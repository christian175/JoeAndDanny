let snake;
let scl = 20;
let food
let score = 0;
let highScore = 0;
let display;
let HighDisplay;

function setup(){
    let canvas = createCanvas(500, 500);
    canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2)
    frameRate(10);
    snake = new Snake()
    pickLocation()
    display = document.getElementById("SCORE")
    HighDisplay = document.getElementById("Highscore")
}

function draw(){
    background(0);
    switch (true){
        case snake.die():
            score = 0;
    }
    snake.die()
    snake.update();
    snake.show();

    if(snake.eat(food)){
        pickLocation()
        score += 100;
    }
    display.textContent = "Score: " + score;
    if(highScore < score){
        highScore = score;
    }
    HighDisplay.textContent = "Highscore: " + highScore


    fill(255,0,0)
    rect(food.x, food.y, scl, scl);
}

function keyPressed(){
    switch(keyCode){
        case UP_ARROW:
           snake.dir(0,-1);
           break;
        case DOWN_ARROW:
            snake.dir(0,1);
            break;
        case RIGHT_ARROW:
            snake.dir(1,0);
            break;
        case LEFT_ARROW:
            snake.dir(-1, 0);
            break;
    }
}

function pickLocation() {
    let cols = floor(width/scl);
    let rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl)
}