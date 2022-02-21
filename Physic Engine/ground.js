class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    this.image=loadImage("Desert.jpg")    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
    imageMode(CENTER)
    image(this.image,pos.x, pos.y, this.w, this.h);
   
    // fill("green");
    // rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}


