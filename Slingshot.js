class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.slingshot= Constraint.create(options);
        World.add(world, this.slingshot);
        this.pointB=pointB;
    }

    display(){
        if(this.slingshot.bodyA!=null){
            var pointA = this.slingshot.bodyA.position;
            //var pointB = this.slingshot.bodyB.position;
            strokeWeight(4);
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }


    }
    
    fly(){
        this.slingshot.bodyA=null;
        
    }
}