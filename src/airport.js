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
    if (this.planesInAirport.length >= this.capacity) {
      return `${plane} cannot land because the airport is at capacity.`;
    }
    
  };

}

module.exports = Airport;
