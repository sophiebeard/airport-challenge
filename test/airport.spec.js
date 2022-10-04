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



