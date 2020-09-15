class Form{
    constructor(){
     this.title = createElement("h2")
     this.input = createInput("Name:")
     this.button = createButton("Play")
     this.greeting = createElement("h3")
    }
    
    display(){
    textSize(20)
    this.title.html("Car Racing Game")
    this.title.position(120,10)
    this.input.position(130,150)
    this.button.position(250,200)
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player.name = this.input.value()
        playerCount = playerCount+1
        player.index = playerCount
        player.update()
        player.updateCount(playerCount)
        this.greeting.html("Hello! " + player.name)
        this.greeting.position(130,160)
    })
    }

    hide(){
    this.title.hide()
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
    }
} 