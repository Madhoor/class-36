class Player{
constructor(){

}

getCount(){
var playerCountref = database.ref("playerCount");
playerCountref.on("value",function(data){  
    playerCount = data.val();
 })
}
update(name){
var playerindex = "player"+playerCount;
database.ref(playerindex).set({
    name:name
})
}
updateCount(count){
database.ref("/").update({
    playerCount:count
})
}
}