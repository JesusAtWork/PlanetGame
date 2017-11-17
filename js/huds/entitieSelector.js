class EntitieIcon{
	constructor(name,icon,x,y){
		this.name = name;
		this.icon = icon;
		this.x = x;
		this.y = y;
		this.w = 16;
		this.h = 16;
	}
	draw(){
		//var icon = game.add.sprite(this.x,this.y,this.icon);
	}
}
var entitiesIcon1 = new EntitieIcon("first Enty","guy",200,200);