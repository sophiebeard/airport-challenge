class Airport {

  planesInAirport;
  capacity;

  constructor(capacity = 0) {
    this.planesInAirport = [];
    this.capacity = capacity;
  };

  landPlane = (plane) => {
    if (!this.isFull()) {
      this.planesInAirport.push(plane);
      return `${plane} has landed.`; 
    } else {
        return `${plane} cannot land because the airport is at capacity.`;
    } 
  };

  isFull = () => {
    return this.planesInAirport.length >= this.capacity;
  };
    
};

module.exports = Airport;
