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
class Example extends Entitie{
	constructor(dir){
		super();
		this.health = 50;
		this.speed = 5;
		this.damege = 10; // Damage/s
		this.dir = dir // 1 -1
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
