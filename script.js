const resultTemplate = document.getElementsByTagName("template")[0];
const tbody = document.getElementsByTagName("tbody")[0];

fetch("./products.json")
	.then((response) => response.json())
	.then((data) => {
		data.products.forEach((product) => {
			const result = resultTemplate.content.cloneNode(true).children[0];
			const resultId = result.querySelector("[data-id]");
			const resultName = result.querySelector("[data-name]");
			const resultAddress = result.querySelector("[data-address]");
			resultId.textContent = product.id;
			resultName.textContent = product.name;
			resultAddress.textContent = product.address;
			tbody.append(result);
		});
	});
