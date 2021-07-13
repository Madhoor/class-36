class Form{
constructor(){

}

display(){
var title = createElement("h2");
title.html("Car Racing Game");
title.position(130,0);

var input = createInput("name");
var greating = createElement("h3");
input.position(130,160);
  
var button = createButton("play");
button.position(250,200);
button.mousePressed(function(){
    
    input.hide();
    button.hide();

    var name = input.value();
playerCount = playerCount +1;

greating.html("Welcome"+name);
greating.position(130,100);

player.update(name);
player.updateCount(playerCount);

  })
 }
}
