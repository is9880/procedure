//assets
var coin, warehouse, escape;
var dog;
var life;
var myFont;
var c, b;

function preload() {
    warehouse = loadImage("assets/warehouse.jpg");
    myFont = loadFont("assets/Tandysoft.ttf");
    escape = loadImage("assets/pasture.jpg");
}

function setup() {
    createCanvas(1000, 750);
    score = 0;
    life = 100;
    c = 0;
    b = 0;
    dog = createSprite(150, 550);
    dog.addAnimation("standing", "assets/dogrest_sm/dogr_00.png", "assets/dogrest_sm/dogr_19.png");
    dog.addAnimation("moving", "assets/dogwalk_sm/dogw_0.png", "assets/dogwalk_sm/dogw_5.png");
    dog.addAnimation("dead", "assets/dd_0.png");
    coin = createSprite(random(900, 400), random(400, 300));
    coin.addAnimation("normal", "assets/coin_small/coin_sm_0.png", "assets/coin_small/coin_sm_8.png");
}

function draw() {
    image(warehouse, 0, 0, 1000, 750);
    dog.overlap(coin, choice);
    drawSprites();
    
    //life
    fill(255);
    stroke(0);
    strokeWeight(2);
    textSize(20);
    textFont(myFont);
    text("life gauge:", 25, 25);
    text(life, 50, 50);
    textSize(15);
    text("instructions:", 600, 25);
    textSize(12); 
    text("Pick up the coin.", 750, 25);
    
    //deplete life
    if (frameCount === 1100) {
        life -= 20;
    }
    if (frameCount === 2200) {
        life -= 20;
    }
    if (frameCount === 3300) {
        life -= 20;
    }
    if (frameCount === 4400) {
        life -= 20;
    }
    if (frameCount === 6600) {
        life -= 20;
    }
    if (life <= 0) {
        background(0);
        fill(255);
        textSize(80);
        textFont(myFont);
        text("Game Over", 450, height / 2);
        coin.remove();
        drawSprites(dog.changeAnimation("dead"));
    }
}

function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        dog.changeAnimation("moving");
        dog.mirrorX(1);
        dog.setSpeed(1.5, 0);
    }
    else if (keyCode == DOWN_ARROW) {
        dog.changeAnimation("moving");
        dog.setSpeed(1.5, 90);
        dog.scale += 0.05;
    }
    else if (keyCode == LEFT_ARROW) {
        dog.changeAnimation("moving");
        dog.mirrorX(-1);
        dog.setSpeed(1.5, 180);
    }
    else if (keyCode == UP_ARROW) {
        dog.changeAnimation("moving");
        dog.setSpeed(1.5, 270);
        dog.scale -= 0.05;
    }
    else if (key == ' ') {
        dog.changeAnimation("standing");
        dog.setSpeed(0, 0);
    }
    return false;
}

function choice(dog, coin) {
    dog.changeAnimation("standing");
    dog.setSpeed(0, 0);
    noStroke();
    rect(400, 650, 260, 90);
    textFont(myFont);
    fill(0);
    textSize(14);
    text("Pick up the coin?", 470, 670);
    fill(c);
    textSize(20);
    text("Yes", 425, 705);
    fill(b);
    text("No", 600, 705);
    if (mouseX >= 425 && mouseX <= 450) {
        if (mouseIsPressed) c = 170;
        else c = 0;
    }
    else if (mouseX >= 600 && mouseX <= 630) {
        if (mouseIsPressed) b = 170;
        else b = 0;
    }
}

function mouseClicked() {
    if (mouseX >= 425 && mouseX <= 450) {
        coin.remove();
        life = 0;
    }
}
