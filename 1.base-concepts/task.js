"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;
	if (a === 0) {
		let x = -c / b;
		arr.push(x);
		return arr;
	} else if (d < 0) {
		return arr;
	} else if (d === 0) {
		let x = -b / (2 * a);
		arr.push(x);
		return arr;
	} else if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1);
		arr.push(x2);
		return arr;
	}

}
console.log(arr);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = percent / 100 / 12;
	let s = amount - contribution;
	let total = 0;
	if (s > 0) {
		let payment = s * (p + (p / (((1 + p) ** countMonths) - 1)));
		let allPercent = payment * countMonths;
		total = +(allPercent).toFixed(2);
		return total;
	} else return total;
}
console.log(total);