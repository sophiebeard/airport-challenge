class Airport {

  planesInAirport;
  capacity;

  constructor(capacity = 0) {
    this.planesInAirport = [];
    this.capacity = capacity;
  };

  landPlane = (plane) => {
    if (this.isFull()) {
      return `${plane.id} cannot land because the airport is at capacity.`
    } else {
      this.planesInAirport.push(plane);
      return `${plane.id} has landed.`;
    }
  }

  takeOffPlane = (plane) => {
    this.planesInAirport.pop();
    return `${plane.id} has taken off.`;
  }

  isFull = () => {
    if (this.planesInAirport.length >= this.capacity) {
      return true;
    } else {
      return false;
    }
  };

  checkID(plane) {
    if (plane.id === `${plane.id}`) return true
  };
};

module.exports = Airport;