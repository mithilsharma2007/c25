class Bird extends Baseclass{
    
    constructor(x,y){
   super(x,y,50,50)
   this.image=loadImage("sprites/bird.png")
    }
    display(){
        this.mbody.position.x=mouseX
        this.mbody.position.y=mouseY
        super.display()
    }
}