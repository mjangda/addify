# addify

Simple Node.js script that exposes a function called `addify` that adds all provided number values together.

## Installation

```bash
npm install
```

## Usage

```javascript
const addify = require('./index');

// Add two numbers
console.log(addify(2, 3)); // 5

// Add multiple numbers
console.log(addify(1, 2, 3, 4, 5)); // 15

// Works with no arguments (returns 0)
console.log(addify()); // 0

// Works with negative numbers
console.log(addify(-5, 10, -3)); // 2

// Works with decimal numbers
console.log(addify(1.5, 2.5, 3)); // 7
```

## API

### `addify(...numbers)`

Adds all provided number values together.

**Parameters:**
- `...numbers` (number): Any number of numeric values to add together

**Returns:**
- (number): The sum of all provided numbers

## Testing

Run the test suite:

```bash
npm test
```
