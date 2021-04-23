var canvas;
var music;
var Edges;
var sur1,sur2,sur3,sur4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    sur1 = createSprite(100, 550, 175, 25);
    sur1.shapeColor = 'green';

    sur2 = createSprite(287.5, 550, 175, 25);
    sur2.shapeColor = 'yellow';

    sur3 = createSprite(475,550,175,25);
    sur3.shapeColor = 'lightblue';

    sur4 = createSprite(662.5,550,175,25);
    sur4.shapeColor = 'orange';

    //create box sprite and give velocity
    box = createSprite(330,220,20,20);
    box.velocityX = 5;
    box.velocityY = 5;
}

function draw() {
    background(rgb(0,0,0));

    //create edgeSprite
    Edges = createEdgeSprites();

    box.bounceOff(Edges);

    //add condition to check if box touching surface and make it box
    if(collide(box,sur1)){
        bounceOff(box,sur1);
        box.shapeColor = sur1.shapeColor;
        music.play();
    }

    if(collide(box,sur2)){
        bounceOff(box,sur2);
        box.shapeColor = sur2.shapeColor;
    }

    if(collide(box,sur3)){
        box.velocityX = 0;
        box.velocityY = 0;
        box.shapeColor = sur3.shapeColor;
        music.play();
    }

    if(collide(box,sur4)){
        bounceOff(box,sur4);
        box.shapeColor = sur4.shapeColor;
    }
    drawSprites();
}
