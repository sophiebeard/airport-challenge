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

// Test 4 - Test that the capacity can be changed?

//Arrange
airport = new Airport(1);
expected = 1;

//Act
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 4 - The capacity of the airport can be changed: ${result}`);

//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 5 - Test that if an airport's capacity is full, a plane cannot land?

//Arrange
airport = new Airport(1);
plane = { id: `easyJet` };
airport.landPlane(plane);

//Act
expected = true;
plane = { id: `ryanAir` };
airport.landPlane(plane);
actual = airport.isFull();

//Assert
result = assertEquals(expected, actual);
console.log(`Test 5 - A plane cannot land if the airport is at capacity: ${result}`);

//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 6 - Test that if a plane doesn't land, a string is returned to inform the traffic control officer?

//Arrange
airport = new Airport(1);
plane = { id: `easyJet` };
expected = `${plane} cannot land because the airport is at capacity.`;
airport.landPlane(plane);

//Act
plane = { id: `ryanAir` };
airport.landPlane(plane);
actual = airport.isFull();

//Assert
result = assertEquals(expected, actual);
console.log(`Test 6 - The plane officer is informed if a plane cannot land: ${result}`);

//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;



