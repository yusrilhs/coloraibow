(function (root, factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.Colorainbow = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.Colorainbow = factory();
  }

}(this, function () {
  // UMD Definition above, do not remove this line

  // To get to know more about the Universal Module Definition
  // visit: https://github.com/umdjs/umd

  'use strict';

  var Colorainbow = function Colorainbow(r, g, b) {
    this.red = Math.floor(r);
    this.green = Math.floor(g);
    this.blue = Math.floor(b);
    this.alph = 1;
  };

  Colorainbow.prototype.toString = function colorToString() {
    var prefix = (this.alph >= 0 && this.alph < 1) ? 'rgba' : 'rgb', 
        components =  (this.alph < 0 || this.alph >=1) ? 
                          [this.red, this.green, this.blue].join(',') : 
                          [this.red, this.green, this.blue, this.alph].join(',');
    
    var result = prefix + '(' + components + ')';

    return result;
  };

  Colorainbow.prototype.alpha = function(value) {
    this.alph = (value < 0 || value >= 1) ? 1 : value;

    return this;
  };

  Colorainbow.prototype.hexString = function() {
    var rgb = ((this.red & 0xFF) << 16) + ((this.green & 0xFF) << 8) + (this.blue & 0xFF);
    var str = rgb.toString(16).toUpperCase();

    return '#' + ('000000'.substring(str.length) + str);
  };

  Colorainbow.generate = function(numbers) {
    // Return an empty array when less than 1
    if (numbers <= 0) return [];
    else numbers = parseInt(numbers);

    var frequency = 5 / numbers, 
        results = [];
    
    for(var i=0;i<numbers;++i) {
      var r = Math.sin(frequency * i + 0) * (127) + 128, 
          g = Math.sin(frequency * i + 1) * (127) + 128, 
          b = Math.sin(frequency * i + 3) * (127) + 128;
      
      results.push(new Colorainbow(r, g, b));
    }

    return results;
  };

  return Colorainbow;
}));
