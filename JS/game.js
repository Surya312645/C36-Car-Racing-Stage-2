class Game{
    constructor(){

    }

    getState(){
        var countRef = database.ref("gameState")
        countRef.on("value", function(data){
            gameState = data.val()
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

    start(){
        if (gameState == 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
    }

    play(){
        form.hide()
        text("Start!", 120, 100)
        Player.getPlayerInfo()
    if (allPlayers != undefined){
        var yPos = 130
        for (var plr in allPlayers){
            if (plr == "player" + player.index){
                fill("blue")
            }
            else {
                fill("purple")
            }
            yPos = yPos+30
            textSize(20)
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 130, yPos)
        }
    }
    if (keyDown(UP_ARROW) && player.index != null){
        player.distance = player.distance + 20
        player.update()
    }
    }
}