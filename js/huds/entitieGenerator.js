import Example from '../elements/entitie.js';
class EntitieGenerator{
	constructor(game){
		this.game = game;
		this.costs = [50,100,35,10];
	}
	create(money,tipe,entities) {
		var exampleId = 0;
		if (tipe == "example"){
			if (money > this.costs[0]) {
				money -=this.costs[0]
				eval('var example'+exampleId+' = new Example("this.game,example'+exampleId+'")');
				entities.push(eval('example'+exampleId));
				entities[exampleId].display();
				exampleId++;
			}else{
				alert("No Money")
			}
		}
	}
}
export default EntitieGenerator;

/*if (tipe == "example") {
	if (money>costs[0]) {
		money -=costs[0]
		eval('example'+exampleId+' = new Example("example'+exampleId+'")');
		entities.push(eval('example'+exampleId));
		entities[exampleId].display();
		exampleId++;
	}else{
		alert("No Money")
	}
}*/
