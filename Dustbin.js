class Dustbin{

    constructor(x,y,width,height) {
    

      var options = {isStatic : true}
      this.dustbin1 = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.dustbin1);
      
    
    }
      display() {

      push();
      translate(this.dustbin1.position.x,this.dustbin1.position.y);
      rotate(this.dustbin1.angle);
      fill ("white");
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();

      }
    }