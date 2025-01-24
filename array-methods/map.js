'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const priceComp = prices.map((price) => {
  return {
    price,
    salePrice: price / 2,
  };
});
console.log('priceComp:', priceComp);
const formattedPrices = prices.map((price) => `$${price.toFixed(2)}`);
console.log('formattedPrices:', formattedPrices);
