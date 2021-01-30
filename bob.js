class Bob{
    constructor(x,y,width,height){
    var options = {
        isStatic : true
    }
 
        this.body = Bodies.circle(x,y,width,options);
        this.width= width;
        this.height = height;
        World.add(world,this.body);
        
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS);
        strokeWeight(3);
        stroke("black");
        fill("blue");
        ellipse(0,0,40,40)
        pop();
    }
}