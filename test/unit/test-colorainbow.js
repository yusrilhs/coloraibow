var chai = require('chai');
var assert = chai.assert;
var Colorainbow = require('../../colorainbow');

describe('colorainbow.js', function() {

  describe('Instance Colorainbow', function() {

    it('Should return rgb color value', function() {
      var black = new Colorainbow(0, 0, 0);
      var white = new Colorainbow(255, 255, 255);

      assert.equal(black, 'rgb(0, 0, 0)');
      assert.equal(white, 'rgb(255, 255, 255)');
    });

    it('Should return rgba color value', function() {
      var black = new Colorainbow(0, 0, 0).alpha(0.5);
      var white = new Colorainbow(255, 255, 255).alpha(0.5);

      assert.equal(black, 'rgba(0, 0, 0, 0.5)');
      assert.equal(white, 'rgba(255, 255, 255, 0.5)');
    });

    it('Should return hex color value with uppercase', function() {
      var black = new Colorainbow(0, 0, 0).hexString();
      var white = new Colorainbow(255, 255, 255).hexString();
      var blue  = new Colorainbow(50, 122, 163).hexString();
      var red   = new Colorainbow(164, 8, 2).hexString();
      var green = new Colorainbow(164, 198, 57).hexString();

      assert.equal(black, '#000000');
      assert.equal(white, '#FFFFFF');
      assert.equal(blue, '#327AA3');
      assert.equal(red, '#A40802');
      assert.equal(green, '#A4C639');
    });
  });

  describe('Colorainbow generator', function() {
    it('Should return array of colorainbow', function() {
      var rainbows = Colorainbow.generate(10);

      assert.lengthOf(rainbows, 10);

      for(var i=0;i<rainbows.length;i++) {
        assert.instanceOf(rainbows[i], Colorainbow);
      }
    });
  });

});
