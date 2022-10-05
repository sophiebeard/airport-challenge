const Airport = require("../src/airport.js");
const { assertEquals, assertTrue } = require("../testing-framework");
const Plane = require("../src/plane.js");

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - Has a plane landed at the airport?

//Arrange
airport = new Airport(1);
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

// Test 1.1 - Does the landed plane have the same I.D?

// Arrange
airport = new Airport(1);
plane = { id: `easyJet` };
expected = true;

// Act
airport.landPlane(plane);
actual = airport.checkID(plane);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1.1 - The expected plane has landed at the airport: ${result}`);

//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 2 - When a plane lands, is a string returned?

//Arrange
airport = new Airport(1);
plane = { id: `easyJet` };
expected = `easyJet has landed.`;

//Act
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

// Test 6 - Test that if a plane doesn't land because the airport is full, a string is returned to inform the traffic control officer?

//Arrange
airport = new Airport(0);
plane = { id: `easyJet` };
expected = `easyJet cannot land because the airport is at capacity.`;

//Act
actual = airport.landPlane(plane);

//Assert
result = assertEquals(expected, actual);
console.log(`Test 6 - The plane officer is informed if a plane cannot land: ${result}`);

//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 7 - Test that a plane is no longer at the airport when it has taken off?

//Arrange
airport = new Airport(1);
plane = { id: `easyJet` };
airport.landPlane(plane);
expected = 0;

//Act
airport.takeOffPlane(plane);
actual = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 7 - A plane has taken off, and is no longer at the airport: ${result}`);

//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 7.1 - Confirm that when a plane takes off, it is not in the airport?

//Arrange
airport = new Airport(2);
airport.planesInAirport = [`easyJet`, `ryanAir`];
plane = { id: `easyJet` };
expected = 1;

//Act
airport.takeOffPlane(plane);
actual = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 7.1 - The plane is no longer at the airport: ${result}`);

//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 8 - Test that a plane is no longer at the airport when it has taken off?

//Arrange
airport = new Airport(1);
plane = { id: `easyJet` };
airport.landPlane(plane);
expected = `easyJet has taken off.`;

//Act
actual = airport.takeOffPlane(plane);

//Assert
result = assertEquals(expected, actual);
console.log(`Test 8 - When a plane takes off, a string is returned: ${result}`);

//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 9 - Test that airport has an isPlaneInAirport function?

//Arrange
airport = new Airport(2)
airport.planesInAirport = [new Plane("easyJet"), new Plane("ryanAir")];

// Act
actual = airport.isPlaneInAirport("easyJet");

// Assert
result = assertTrue(actual);
console.log(`Test 9 - Test that the airport has an isPlaneInAirport function that sees plane IDs: ${result}`);

//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

