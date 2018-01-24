# colorainbow

Easiest way for create rainbow color for your projects

## Installation

* npm `npm install colorainbow`
* bower `bower install colorainbow`
* yarn `yarn add colorainbow`
* Zip Release [Download](https://github.com/yusrilhs/colorainbow/releases/download/v1.0.3/colorainbow-1.0.3.zip)

## How to use
```js
var rainbows = Colorainbow.generate(10);

for(var i=0;i<rainbows.length;i++) {
  console.log(rainbows[i].toString()); // Rgb Color Value
  console.log(rainbows[i].alpha(0.4).toString()); // Rgba Color Value
  console.log(rainbows[i].hexString()); // Hex Color Value
}

```
