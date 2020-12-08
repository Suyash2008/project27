class Bob{
    constructor(x,y,radius){
        var options = {
            restitution : 1,
            friction : 0,
            density : 0.8
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        

       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(CENTER)
        fill("blue");
        ellipse(0,0,this.radius *2,this.radius * 2)
        pop();
    }
}