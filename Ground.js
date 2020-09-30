class Ground {

constructor(x,y,width,height) {
var options = {isStatic : true}
this.ground = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;

World.add(world,this.ground);
}
display() {

push();
translate(this.ground.position.x,this.ground.position.y);
rotate(this.ground.angle);
fill("yellow");
rect(0,0,this.width,this.height);
pop();
}

}