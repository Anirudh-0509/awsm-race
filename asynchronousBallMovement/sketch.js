var ball;
var database;
var pos;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    var bolpos = database.ref('ball/pos')
    bolpos.on("value", readposition)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(pos !== undefined){
        if(keyDown(LEFT_ARROW)){
            writeposition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writeposition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writeposition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writeposition(0,+1);
        }
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readposition(data){
    pos = data.val()
    ball.x = pos.x;
    ball.y = pos.y;
}

function writeposition(x, y){
    database.ref('ball/pos').set({x:pos.x + x, y:pos.y + y})
    
}
