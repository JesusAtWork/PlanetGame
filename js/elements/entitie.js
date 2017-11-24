class Example{
	constructor(sprite){

		this.x = base.x+64;
		this.y =  base.y+72;

		this.t=0;

		this.sprite = sprite;
		this.radius = Math.random()*90+35;

		this.h = 400;
		this.rot = 270;
		this.health = 50;
		this.speed = 0.5;
		this.damege = 10; // Damage/s

		/*this.helmet = "leather";
		this.body = "leather";
		this.pants = "leather";
		this.shoes = "leather";*/
	}
	display(){
		this.sprite = game.add.graphics(0,0);  // remplace for sprite
		this.sprite.beginFill("0xff0000", 1);
		this.sprite.drawCircle(0, 0, this.radius);
	}
	walkLeft(){
		this.sprite.position.x = Math.cos(this.rot*Math.PI/180)*(planet.radius+this.radius+this.h)/2+planet.x;
		this.sprite.position.y = Math.sin(this.rot*Math.PI/180)*(planet.radius+this.radius+this.h)/2+planet.y;

		this.rot -= this.speed/2;
	}
	walkRight(){
		//console.log("walking right...");
		this.rot += this.speed;
	}
	update(){
		if(this.h-Math.pow(this.t,2)/14>0){
			this.h-=Math.pow(this.t,2)/14
		}else{
			this.h=0;
		}
		this.t+=1;

}
}
