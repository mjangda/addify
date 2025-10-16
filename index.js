/**
 * Adds all provided number values together
 * @param {...number} numbers - Numbers to add together
 * @returns {number} The sum of all provided numbers
 */
function addify(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = addify;
