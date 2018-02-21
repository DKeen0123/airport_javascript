var Airport = function() {
  this.hangar = [];
  this.weather = new Weather();
};

Airport.prototype.land = function(plane) {
  if (plane.isLanded()) {
    throw 'This plane has already landed';
  } else if (this.weather.isStormy() === true) {
    console.log(this.weather.isStormy());
    throw 'The weather is too bad!';
  } else {
    plane.land();
    this.hangar.push(plane);
    return plane;
  }
};

Airport.prototype.takeOff = function(plane) {
  var index = this.hangar.indexOf(plane);
  if (index === -1) {
    throw 'This plane is not here!';
  }
  this.hangar.splice(index, 1);
  return `${plane} has taken off`;
};
