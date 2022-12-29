const resultTemplate = document.getElementsByTagName("template")[0];
const tbody = document.getElementsByTagName("tbody")[0];
const searchInput = document.getElementById("searchInput");

let products = [];

searchInput.addEventListener("input", (event) => {
	const value = event.target.value.toLowerCase();
	products.forEach((product) => {
		const isVisible =
			product.id.toLowerCase().includes(value) ||
			product.name.toLowerCase().includes(value) ||
			product.address.toLowerCase().includes(value);
		product.element.classList.toggle("hidden", !isVisible);
	});
});

fetch("./products.json")
	.then((response) => response.json())
	.then((data) => {
		products = data.products.map((product) => {
			const result = resultTemplate.content.cloneNode(true).children[0];
			const resultId = result.querySelector("[data-id]");
			const resultName = result.querySelector("[data-name]");
			const resultAddress = result.querySelector("[data-address]");
			resultId.textContent = product.id;
			resultName.textContent = product.name;
			resultAddress.textContent = product.address;
			tbody.append(result);
			return {
				id: product.id,
				name: product.name,
				address: product.address,
				element: result,
			};
		});
	});
