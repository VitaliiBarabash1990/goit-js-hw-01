console.log("Task-3");
function getElementWidth(content, padding, border) {
	const a = Number.parseFloat(content);
	const b = Number.parseFloat(padding);
	const c = Number.parseFloat(border);
	return `${a + b * 2 + c *2}`;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"))