class EntitieGenerator{
	createEntitie(type) {
		var exampleId = 0;
		costs = [50,100,35,10];
		switch(tipe != ""){
			case tipe == "example":
				if (money>costs[0]) {
					money -=costs[0]
					eval('example'+exampleId+' = new Example("example'+exampleId+'")');
					entities.push(eval('example'+exampleId));
					entities[exampleId].display();
					exampleId++;
				}
				break; 
			default:
				alert("No Money")
		}
	}
}
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
