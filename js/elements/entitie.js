class Entitie {
	constructor(x,y,rot) {
		this.x = x;
		this.y = y;
		this.rot = rot;
	}
	move(dir){
		//move the ped
	}
}
class FirstEntitie extends Entities{
	constructor(){
		super();
		this.health = 50;
		this.speed = 5;
		this.damege = 10; // Damage/s
		this.helmet = "leather";
		this.body = "leather";
		this.pants = "leather";
		this.shoes = "leather";
	}
	display(){
		//ped = game.add.graphics(this.x, this.y);
		//ped.beginFill("0x00aa00", 1);
		//ped.drawCircle(16, 16, 16);	
	}
}