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
    this.r = Math.floor(r);
    this.g = Math.floor(g);
    this.b = Math.floor(b);
    this.a = 1;
  };

  Colorainbow.prototype.toString = function colorToString() {
    var prefix = (this.a >= 0 && this.a < 1) ? 'rgba' : 'rgb'
      , components =  (this.a < 0 || this.a >=1) ? 
                          [this.r, this.g, this.b].join(', ') : 
                          [this.r, this.g, this.b, this.a].join(', ');
    
    var result = prefix + '(' + components + ')';

    return result;
  };

  Colorainbow.prototype.alpha = function(value) {
    this.a = (value < 0 && value >= 1) ? 1 : value;

    return this;
  };

  Colorainbow.prototype.hexString = function() {
    var rgb = ((this.r & 0xFF) << 16) + ((this.g & 0xFF) << 8) + (this.b & 0xFF);
    var str = rgb.toString(16).toUpperCase();

    return '#' + ('000000'.substring(str.length) + str);
  };

  Colorainbow.generate = function(numbers) {
    // Return an empty array when less than 1
    if (numbers <= 0) return [];
    else numbers = parseInt(numbers);

    var frequency = 5 / numbers
      , results = [];
    
    for(var i=0;i<numbers;++i) {
      var r = Math.sin(frequency * i + 0) * (127) + 128
        , g = Math.sin(frequency * i + 1) * (127) + 128
        , b = Math.sin(frequency * i + 3) * (127) + 128;
      
      results.push(new Colorainbow(r, g, b));
    }

    return results;
  };

  return Colorainbow;
}));
