# html-color-tools #

Tools for working with HTML colors.


# Use #

## Functions

<dl>
<dt><a href="#isValidHexColorCode">isValidHexColorCode(str)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Determine if given input is a valid hex color code</p>
</dd>
<dt><a href="#lightenDarkenColor">lightenDarkenColor(color, percent)</a> ⇒ <code>String</code></dt>
<dd><p>Programmatically lighten or darken a color</p>
<p>from <a href="http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color">http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color</a></p>
</dd>
<dt><a href="#contrastingColor">contrastingColor(bgColor, threshold, invert)</a> ⇒ <code>String</code></dt>
<dd><p>Determines if a foreground color should be black or white depending on the given contrasting background color</p>
</dd>
<dt><a href="#colorBrightness">colorBrightness(hex)</a> ⇒ <code>Number</code></dt>
<dd><p>Determines the brightness level of a color</p>
<p>from <a href="https://www.w3.org/TR/AERT#color-contrast">https://www.w3.org/TR/AERT#color-contrast</a></p>
</dd>
<dt><a href="#hexToRGB">hexToRGB(hex, alpha)</a> ⇒ <code>Object</code></dt>
<dd><p>Convert a hex color to RGB</p>
</dd>
<dt><a href="#hex3ToHex6">hex3ToHex6(hex3, addHash)</a> ⇒ <code>String</code></dt>
<dd><p>Converts a 3 digit hex color (e.g., #FFF) and returns its 6 digit equivlent (e.g., #FFFFFF)</p>
</dd>
</dl>

<a name="isValidHexColorCode"></a>

## isValidHexColorCode(str) ⇒ <code>Boolean</code>
Determine if given input is a valid hex color code

**Kind**: global function
**Returns**: <code>Boolean</code> - if input is a valid hex color code

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | user input |

<a name="lightenDarkenColor"></a>

## lightenDarkenColor(color, percent) ⇒ <code>String</code>
Programmatically lighten or darken a color

from http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color

**Kind**: global function
**Returns**: <code>String</code> - lightened or darkened color

| Param | Type | Description |
| --- | --- | --- |
| color | <code>String</code> | hex color |
| percent | <code>Number</code> | percent to lighten or darken by. |

<a name="contrastingColor"></a>

## contrastingColor(bgColor, threshold, invert) ⇒ <code>String</code>
Determines if a foreground color should be black or white depending on the given contrasting background color

**Kind**: global function
**Returns**: <code>String</code> - `#000000` or `#FFFFFF`

| Param | Type | Description |
| --- | --- | --- |
| bgColor | <code>String</code> | The color of the background |
| threshold | <code>Number</code> | Brightness threshold (e..g, `186`) |
| invert | <code>Boolean</code> | Apply the change if the color's brightness is below the threshold instead of above |

<a name="colorBrightness"></a>

## colorBrightness(hex) ⇒ <code>Number</code>
Determines the brightness level of a color

from https://www.w3.org/TR/AERT#color-contrast

**Kind**: global function
**Returns**: <code>Number</code> - brightness value

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>String</code> | hex color code |

<a name="hexToRGB"></a>

## hexToRGB(hex, alpha) ⇒ <code>Object</code>
Convert a hex color to RGB

**Kind**: global function
**Returns**: <code>Object</code> - An object with `r`, `g`, and `b` values (optionally `a` if `alpha` is `true`)

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>String</code> | Hex color code |
| alpha | <code>Boolean</code> | Include alpha |

<a name="hex3ToHex6"></a>

## hex3ToHex6(hex3, addHash) ⇒ <code>String</code>
Converts a 3 digit hex color (e.g., #FFF) and returns its 6 digit equivlent (e.g., #FFFFFF)

**Kind**: global function
**Returns**: <code>String</code> - 6 digit hex color code

| Param | Type | Description |
| --- | --- | --- |
| hex3 | <code>String</code> | 3 digit hex color code |
| addHash | <code>Boolean</code> | Prepends `#` to the output |




# License #

The MIT License (MIT)

Copyright (c) 2019 Eric Lewin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.