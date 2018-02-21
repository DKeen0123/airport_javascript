var Airport = function() {
  this.hangar = [];
};

Airport.prototype.land = function(plane) {
  if (plane.isLanded()) {
    throw 'This plane has already landed';
  } else {
    plane.land();
    this.hangar.push(plane);
    return plane;
  }
};

Airport.prototype.takeOff = function(plane) {
  var index = this.hangar.indexOf(plane);
  this.hangar.splice(index, 1);
  return `${plane} has taken off`;
};
