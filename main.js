var answer1 = document.querySelector('#one span');
var answer2 = document.querySelector('#two span');
var answer3 = document.querySelector('#three span');
var answer4 = document.querySelector('#four span');
var answer5 = document.querySelector('#five span');
var answer6 = document.querySelector('#six span');
// average price of all items
var allPrices = items.map(function(item) {
  return item.price;
});

totalCost = allPrices.reduce(function(a, b) {
  var total = a+b;
  return a+b;
});

var averagePrice = (totalCost/allPrices.length).toFixed(2);
console.log(averagePrice);
answer1.textContent = 'The average price is $' + averagePrice;


// array of items that cost between $14.00 and $18.00 USD
// not working
var between14And18 = items.filter(function(item) {
  return (item.price >= 14 && item.price <= 18);
});

var displayBetween = between14And18.map(function(item) {
  return (item.title);
});

answer2.textContent = displayBetween;

// Which item has a "GBP" currency code? Display it's name and price
var gbpFilter = items.filter(function(item) {
  return item.currency_code === 'GBP';
});

gbpDisplayPrice = gbpFilter.map(function(item) {
  return item.price;
});
gbpDisplayName = gbpFilter.map(function(item) {
  return item.title;
});

answer3.textContent = '1970s Schlitz Malt Liquor Glass Beer Pitcher costs £' + String(gbpDisplayPrice);

// Display a list of all items who are made of wood
var materialsArr = items.filter(function(item) {
  return item.materials.indexOf('wood') !== -1;
});

var displayWoodItems = materialsArr.map(function(item) {
  return item.title;
});

answer4.textContent = displayWoodItems;


// Which items are made of eight or more materials? Display the name, number of items and the items it is made of

var eightMaterials = items.filter(function(item) {
  return item.materials.length >= 8;
});

var displayMaterialsTitle = eightMaterials.map(function(item) {
  return item.title;
});


var displayMaterialsItems = eightMaterials.map(function(item) {
  return item.materials;
});

answer5.textContent += displayMaterialsTitle[0] + displayMaterialsItems[0].join('') + ' ';
answer5.textContent += ' ' + displayMaterialsTitle[1] + displayMaterialsItems[1].join('');

// How many items were made by their sellers?
var madeBySeller = items.filter(function(item) {
  return item.who_made === 'i_did';
});

answer6.textContent = madeBySeller.length + ' were made by their sellers';
