let snake;
let scl = 20;

function setup(){
    createCanvas(600, 600);
    frameRate(5)
    snake = new Snake()
}

function draw(){
    background(50);
    snake.update();
    snake.show();
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