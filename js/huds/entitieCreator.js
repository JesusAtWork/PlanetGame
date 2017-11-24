var exampleId = 0;
function createEntitie(type) {
	if (type == "example") {
		eval('example'+exampleId+' = new Example("example'+exampleId+'")');
		entities.push(eval('example'+exampleId));
		entities[exampleId].display();
		exampleId++
	}
}
