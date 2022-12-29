const resultTemplate = document.getElementsByTagName("template")[0];
fetch("./products.json")
	.then((response) => response.json())
	.then((data) => {
		const result = resultTemplate.content.cloneNode(true).children[0];
		console.log(result);
	});
