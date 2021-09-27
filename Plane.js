class Plane{
    constructor(x,y){
    var options = {
        'density': 30,
        'friction': 1.0,
        'restitution': 0.5,
        'isStatic':true
    }

    this.body = Bodies.rectangle(x,y,800,40,options);
    this.width = 800;
    this.height = 40;
    World.add(world, this.body);
    }

    display(){
    var pos = this.body.position;
    //pos.x = mouseX
    //pos.y = mouseY
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke("white");
    fill("orange");
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop();
    }
}
