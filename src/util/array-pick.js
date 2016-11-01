
// pick a random value from an array: 
Array.prototype.pick = function() {
	return this[(this.length * Math.random())|0];
};