/**
 * This function calculates total price of a new order
 *
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
  let sum = 0;

  products.forEach((product) => (sum += product.price));

  return sum;
};

/**
 * This function determines the date current
 *
 * @returns {date} date
 */

export const currentDate = () => {
  const date = new Date().toLocaleDateString();
  return date;
};
