class Helicopter{
    constructor(x, y, width, height){
        var option={
            'density':2,
            'friction':1.0,  
            'restitution':0.5
        }
        this.image=loadImage("sprites/helicopter.png")
        this.body = Bodies.rectangle(x,y, width, height,  option)  
      this.width=width
      this.height=height
        World.add(world,this.body)
   
    }
    display(){
        var pos = this.body.position
        this.body.position.x = mouseX;
    this.body.position.y = mouseY;
   
        push ()
        translate(pos.x, pos.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        strokeWeight(3)
        stroke("red")
        fill("blue")
        image(this.image,0, 0, this.width, this.height)
        pop ()
    }
}