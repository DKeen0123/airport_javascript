var Weather = function() {};

Weather.prototype.isStormy = function() {
  if (Math.random() > 0.75) {
    return true;
  }
  return false;
};
