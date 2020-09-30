class Paper {

constructor(check) {
var options_paper = {
isStatic : check,
restitution: 0.3,
friction:1,
density:4
}
this.paper = Matter.Bodies.circle(200,350,10,options_paper);
World.add(world,this.paper);


}
display() {
push();
translate(this.paper.position.x,this.paper.position.y);
rotate(this.paper.angle);
ellipseMode(RADIUS)
fill("pink");
ellipse(0,0,10,10);

pop();

}


}