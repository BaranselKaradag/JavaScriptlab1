let marks = [85, 97, 44, 37, 76, 60];
let total = marks.reduce((sum, mark) => sum + mark, 0);
let average = total / marks.length;
console.log("Avg Marks:", average);

let prices = [250, 645, 300, 900, 50];
let discountedPrices = prices.map(price => price - (price * 0.10));
console.log("Final Prices:", discountedPrices);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// Remove the first
companies.shift();
console.log("removing first company:", companies);

// Replace Uber with Ola
let uberIndex = companies.indexOf("Uber");
if (uberIndex !== -1) {
    companies[uberIndex] = "Ola";
}
console.log("replacing Uber :", companies);

//Add Amazon
companies.push("Amazon");
console.log("Amazon:", companies);

