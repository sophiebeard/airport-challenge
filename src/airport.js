class Airport {

  planesInAirport;
  capacity;

  constructor(capacity = 0) {
    this.planesInAirport = [];
    this.capacity = capacity;
  };

  landPlane = (plane) => {
    this.planesInAirport.push(plane);
    return `${plane} has landed.`;
  };

  isFull = () => {
    return this.planesInAirport.length >= this.capacity;
  };

}

module.exports = Airport;
