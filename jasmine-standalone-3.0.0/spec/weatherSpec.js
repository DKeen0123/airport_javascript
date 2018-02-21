describe('Weather', function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe('.isStormy', function() {
    it('returns false when .random is < 0.75', function() {
      spyOn(Math, 'random').and.returnValue(0.1);
      expect(weather.isStormy()).toEqual(false);
    });

    it('randomly returns true when return value is > 0.75', function() {
      spyOn(Math, 'random').and.returnValue(0.8);
      expect(weather.isStormy()).toBe(true);
    });
  });
});
