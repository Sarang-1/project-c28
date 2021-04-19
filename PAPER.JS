class paper{
    constructor(x,y){
        var options = {
            
            'restitution':0.3,
            'friction':2.0,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 18, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("images/paper.png");

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0, this.width, this.height);
        pop();
      }
    };
