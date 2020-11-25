class Rope{
    constructor(body1,body2,offSetX,offSetY){
this.offSetX = offSetX;
this.offSetY = offSetY;
  var test = {
    bodyA:body1,
    bodyB:body2,
pointB:{x:this.offSetX,y:this.offSetY},
    stiffness:0.5,
    length:30
}
this.rope = Constraint.create(test);
World.add(world,this.rope);
}
    
display(){
    var posA = this.rope.bodyA.position;
    var posB = this.rope.bodyB.position; 
    strokeWeight(3);
    stroke("black");
    line(posA.x,posA.y,posB.x,posB.y);
}

}