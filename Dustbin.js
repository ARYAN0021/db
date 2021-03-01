class Dustbin extends BaseClass {
    constructor(x,y,width,height) {
      super(x,y,width,height)
      this.image=loadImage("dustbingreen.png")
    }
    display(){
      var pos =this.body.position;
      super.display();
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };