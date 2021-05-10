class Baseclass{
    //proplerties and functions
    constructor(x,y,width,height,angle){//arguements
    var options={
        restitutin:0.8,
        friction:1.0,
        density:1.0,
    }
    this.mbody=Bodies.rectangle(x, y, width, height, options);
    World.add(myWorld,this.mbody);
    this.width=width;
    this.height=height;
    this.image=loadImage("sprites/base.png")
    }
    display(){
        var angle=this.mbody.angle
        push ()
        translate (this.mbody.position.x,this.mbody.position.y)
        angleMode (RADIANS);
        rotate (angle);
       
        
        imageMode(CENTER);
        //fill("blue");
        image (this.image,0,0,this.width,this.height);
        pop ()
    }
}