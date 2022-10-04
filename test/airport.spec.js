const Airport = require("../src/airport.js"); 
const { assertEquals } = require("../testing-framework");

let expected;
let actual;
let result;

// Test 1 - Has a plane landed at the airport?

//Arrange
airport = new Airport();
plane = { id: `easyJet` };
expected = 1;

//Act
airport.landPlane(plane);
actual = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 1 - A plane has landed at the airport: ${result}`);

//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 2 - When a plane lands, is a string returned?

//Arrange
airport = new Airport();
plane = { id: `easyJet` };
expected = `${plane} has landed.`;

//Act
airport.landPlane(plane);
actual = airport.landPlane(plane);

//Assert
result = assertEquals(expected, actual);
console.log(`Test 2 - A string is returned when a plane lands: ${result}`);

//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 3 - Is a default capacity set when an airport is created?

//Arrange
airport = new Airport();
expected = 0;

//Act
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 3 - Airports have a default capacity of 0: ${result}`);

//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
