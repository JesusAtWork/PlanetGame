var exampleId = 0;
function createEntitie(type) {
	costs = [50,100,35,10];

	if (type == "example") {
		if (money>costs[0]) {
			money -=costs[0]
			eval('example'+exampleId+' = new Example("example'+exampleId+'")');
			entities.push(eval('example'+exampleId));
			entities[exampleId].display();
			exampleId++;
		}else{
			alert("No Money")
		}
	}
}
