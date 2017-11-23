class Entitie {
	constructor(x,y,rot) {
		this.x = x;
		this.y = y;
		this.rot = rot;
	}
	walkLeft(){
		console.log("walking left...")
	}
	walkRight(){
		console.log("walking right...")
	}
}
class Example extends Entitie{
	constructor(){
		super();
		this.health = 50;
		this.speed = 5;
		this.damege = 10; // Damage/s
		/*this.helmet = "leather";
		this.body = "leather";
		this.pants = "leather";
		this.shoes = "leather";*/
	}
	display(){
		entitie = game.add.graphics(this.x, this.y);
		entitie.beginFill("0x00aa00", 1);
		entitie.drawCircle(16, 16, 16);
	}
}
