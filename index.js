/**
 * Adds all provided number values together
 * @param {...number} numbers - Numbers to add together
 * @returns {number} The sum of all provided numbers
 * @note Expects all arguments to be numbers. Non-numeric values may produce unexpected results.
 */
function addify(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = addify;
