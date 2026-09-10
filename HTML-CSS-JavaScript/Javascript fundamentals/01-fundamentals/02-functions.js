// Functions, parameters, return values and scope

function calculateDiscount(price, percentage) {
  if (price < 0 || percentage < 0 || percentage > 100) {
    throw new Error("Invalid price or discount");
  }

  return price - price * (percentage / 100);
}

const finalPrice = calculateDiscount(1200, 15);
console.log(finalPrice);
