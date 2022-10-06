class Airport {

  planesInAirport;
  capacity;

  constructor(capacity = 0) {
    this.planesInAirport = [];
    this.capacity = capacity;
  };

  landPlane = (plane) => {
    if (!this.isFull() && !this.isPlaneInAirport(plane)) {
      this.planesInAirport.push(plane);
      return `${plane.id} has landed.`;
    } else {
      return `${plane.id} cannot land because the airport is at capacity.`;
    }
  };

  takeOffPlane = (plane) => {
    if (this.isPlaneInAirport(plane)) {
      this.planesInAirport.pop(plane);
      return `${plane} has taken off.`;
    } else {
      return `${plane} cannot take-off because it is not at the airport.`;
    }
  };

  isFull = () => {
    if (this.planesInAirport.length >= this.capacity) {
      return true;
    } else {
      return false;
    }
  };

  isPlaneInAirport = (plane) => {
    if (this.planesInAirport.includes(plane)) {
      return true;
    }
  };

  checkID(plane) {
    if (plane.id === `${plane.id}`) return true
  };
};

module.exports = Airport;