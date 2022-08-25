class Ball {
  constructor(x,y,w,h,angle) {
   var opcoes_ball={
    density: 1,
    fritionAir: 0.005
  }

   this.body=Bodies.rectangle(x,y,w,h,angle,opcoes_ball);

   this.h=h;
   this.w=w;
   World.add(world,this.body);
  }



  display() {
    var angle=this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    ellipse(0,0,this.w,this.h);
    pop();
    
  }
}
