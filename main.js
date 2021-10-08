var canvas = new fabric.Canvas("myCanvas");
blockwidth = 30;
blockheight = 30;
playerx = 10;
playery = 10;
var playerobject = "";
var blockimage = "";
function playerupdate() {
    fabric.Image.fromURL("player.png",function(image){
        playerobject = image;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:playery ,
            left: playerx 
        });
        canvas.add(playerobject);
    });
}
function blockupdate(getimage) {
    fabric.Image.fromURL(getimage,function(image){
        blockobject = image;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
            top:playery ,
            left: playerx 
        });
        canvas.add(blockobject);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e) {
    keypress = e.keyCode;
    console.log(keypress);
    if(e.shiftKey == true && keypress == "80") {
        console.log("shift and p pressed together");
blockheight = blockheight + 10 ;
blockwidth = blockwidth + 10;
document.getElementById("current_height").innerHTML = blockheight;
document.getElementById("current_width").innerHTML = blockwidth;

    } 
    if(e.shiftKey == true && keypress == "77") {
        console.log("shift and m pressed together");
blockheight = blockheight - 10 ;
blockwidth = blockwidth - 10;
document.getElementById("current_height").innerHTML = blockheight;
document.getElementById("current_width").innerHTML = blockwidth;

    } 
    if( keypress == "37") {
        console.log("left pressed");
left();
    } 
    if( keypress == "38") {
        console.log("up pressed");
up();
    }
    if( keypress == "39") {
        console.log("right pressed");
right();
    } 
    if(keypress == "40") {
        console.log("down pressed");
        down();
    }
    
    if(keypress == "87") {
        console.log("w");
        blockupdate("wall.jpg");
    }
    if(keypress == "71") {
        console.log("g");
        blockupdate("ground.png");
    }
    if(keypress == "76") {
        console.log("l");
        blockupdate("light_green.png");
    }
    if(keypress == "84") {
        console.log("t");
        blockupdate("trunk.jpg");
    }
    if(keypress == "82") {
        console.log("r");
        blockupdate("roof.jpg");
    }
    if(keypress == "89") {
        console.log("y");
        blockupdate("yellow_wall.png");
    }
    if(keypress == "68") {
        console.log("d");
        blockupdate("dark_green.png");
    }
    if(keypress == "85") {
        console.log("u");
        blockupdate("unique.png");
    }
    if(keypress == "67") {
        console.log("c");
        blockupdate("cloud.jpg");
    }

} 
 function up () {
if(playery >= 0){
   playery = playery - blockheight ; 
console.log(  "blockheight =" + blockheight  );
console.log("player's x = " + playerx + "player's y = " + playery);
canvas.remove(playerobject);
playerupdate();
}
 }
 function down() {
     if(playery <= 460){
         playery = playery + blockheight;
         console.log("block height = " + blockheight);
         console.log("player x = " + playerx + "player y =" + playery);
         canvas.remove(playerobject);
         playerupdate();
     }

 }
 function left() {
     if(playerx >= 0){
         playerx = playerx - blockwidth ;
         console.log("block width" + blockwidth );
         console.log("player x = " + playerx + "player y =" + playery);
         canvas.remove(playerobject);
         playerupdate();
     }
 }
 function right () {
     if(playerx <= 850 ){
         playerx = playerx + blockwidth;
         console.log("block width =" + blockwidth );
         console.log("player x = " + playerx + "player y =" + playery);
        canvas.remove(playerobject);
         playerupdate();
     }
 }

 

      
