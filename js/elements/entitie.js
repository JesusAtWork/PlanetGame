class Entitie{
	constructor(){
		this.time=0;
		this.h = base.y-128;
		this.rot = 270;
	}
	update(){
		if(this.h-Math.pow(this.time,2)/14>0){
			this.h-=Math.pow(this.time,2)/14
			this.time+=1;
		}else{
			this.h=0;
			this.time=0;
		}
	}
}

class Example extends Entitie{
	constructor(sprite){
		super();
		this.sprite = sprite;
		this.radius = 50;

		this.health = 50;
		this.speed = 0.15;
		this.damege = 10;
	}
	display(){
		this.sprite = game.add.graphics(0,0);  // remplace for sprite
		this.sprite.beginFill("0xff0000", 1);
		this.sprite.drawCircle(0, 0, this.radius);
	}
	walkLeft(){
		this.sprite.position.x = Math.cos(this.rot*Math.PI/180)*(planet.radius+this.radius+this.h)/2+planet.x;
		this.sprite.position.y = Math.sin(this.rot*Math.PI/180)*(planet.radius+this.radius+this.h)/2+planet.y;

		if (true) {
			this.rot -= this.speed/2;
		}
	}
	walkRight(){
		//console.log("walking right...");
		//this.rot += this.speed;
	}
	update(){
		super.update();
	}
}
