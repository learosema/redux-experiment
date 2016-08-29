export function $(sel, con) {
	return (con||document).querySelector(sel);
}

export function $$(sel, con) {
	return Array.prototype.slice.call((con||document).querySelectorAll(sel));
}
