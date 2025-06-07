---
title: JS Round Number
date: 2025-06-07 15:07:09 +08:00
tags:
  - js
  - number
---

# `Math.round()`

```js
Math.round(0.9); // 1
Math.round(5.5); // 6
Math.round(-5.95); // -6

Math.round(-5.5); // -5 (note)
```

> This differs from many languages' `round()` functions, which often round half-increments away from zero, giving a different result in the case of negative numbers with a fractional part of exactly 0.5.

# `Number.prototype.toFixed()`

```js
(2.34).toFixed(1); // '2.3'
(2.35).toFixed(1); // '2.4'

(2.55).toFixed(1); // '2.5' (note)
```

Because of the way floating-point numbers are represented in binary, some decimal fractions cannot be represented with perfect accuracy.

Exploring:

```js
(2.005).toFixed(2); // '2.00'
(2.0050000000000001).toFixed(2); // '2.00'
(2.0051).toFixed(2); // '2.01'
(2.005000000000001).toFixed(2); // '2.01'
```

```js
// float to binary conversion
function floatToBinary(floatNum) {
  const buffer = new ArrayBuffer(8);
  const floatView = new Float64Array(buffer);
  const intView = new Uint8Array(buffer);

  floatView[0] = floatNum;

  let binary = "";
  for (let i = intView.length - 1; i >= 0; i--) {
    let byte = intView[i];
    for (let j = 7; j >= 0; j--) {
      binary += (byte >>> j) & 1;
    }
  }
  return binary;
}

floatToBinary(2.005); //              '0 10000000000 0000000010100011110101110000101000111101011100001010'
floatToBinary(2.0050000000000001); // '0 10000000000 0000000010100011110101110000101000111101011100001010'
floatToBinary(2.0051); //             '0 10000000000 0000000010100111000111011110011010011010110101000011'
floatToBinary(2.005000000000001); //  '0 10000000000 0000000010100011110101110000101000111101011100001100'
```

```js
// Comparing floating-point numbers
2.005 === 2.0050000000000001; // true
```

```js
// binary to float64 conversion

function binaryToFloat64(binaryString) {
  if (binaryString.length !== 64) {
    throw new Error("Binary string must be 64 characters long.");
  }

  const sign = parseInt(binaryString[0], 2);
  const exponent = parseInt(binaryString.substring(1, 12), 2) - 1023;
  const mantissa = parseInt(binaryString.substring(12), 2) / Math.pow(2, 52);

  return Math.pow(-1, sign) * (1 + mantissa) * Math.pow(2, exponent);
}

binaryToFloat64(
  "0100000000000000000010100011110101110000101000111101011100001010"
); // 2.005
```
