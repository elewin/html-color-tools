
/**
 * Determine if given input is a valid hex color code
 *
 * @param {String} str user input
 * @returns {Boolean} if input is a valid hex color code
 */
export function isValidHexColorCode(str) {
  const regExp = /^([0-9a-fA-F]{6})?$/;
  let colorCode = str;
  if (!str) {
    return false;
  }
  if (str[0] === "#") {
    colorCode = colorCode.slice(1);
  }
  return regExp.test(colorCode);
}

/**
 * Programmatically lighten or darken a color
 * 
 * from http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color
 *
 * @param {String} color hex color
 * @param {Number} percent percent to lighten or darken by. 
 * @returns {String} lightened or darkened color
 */
export function lightenDarkenColor(color, percent) {
  var num = parseInt(color, 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt;

  return (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
    (G < 255 ? (G < 1 ? 0 : G) : 255)
  )
    .toString(16)
    .slice(1);
}

/**
 * Determines if a foreground color should be black or white depending on the given contrasting background color
 *
 * @param {String} bgColor The color of the background 
 * @param {Number} threshold Brightness threshold (e..g, `186`)
 * @param {Boolean} invert Apply the change if the color's brightness is below the threshold instead of above
 * @returns {String} `#000000` or `#FFFFFF`
 */
export function contrastingColor(bgColor, threshold, invert) {
  let aboveThreshold = !!(colorBrightness(bgColor) > threshold);
  if (invert) {
    aboveThreshold = !aboveThreshold;
  }
  return aboveThreshold ? "#000000" : "#FFFFFF";
}

/**
 * Determines the brightness level of a color
 * 
 * from https://www.w3.org/TR/AERT#color-contrast
 *
 * @param {String} hex hex color code
 * @returns {Number} brightness value
 */
export function colorBrightness(hex) {
  const rgb = hexToRGB(hex);
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}

/**
 * Convert a hex color to RGB
 *
 * @param {String} hex Hex color code
 * @param {Boolean} alpha Include alpha
 * @returns {Object} An object with `r`, `g`, and `b` values (optionally `a` if `alpha` is `true`)
 */
export function hexToRGB(hex, alpha) {
  let myHex = typeof hex == "string" ? hex.replace("#", "") : hex.toString();
  if (myHex.length === 3) {
    myHex = hex3ToHex6(myHex);
  }

  let rgb = {
    r: parseInt(myHex.substr(0, 2), 16),
    g: parseInt(myHex.substr(2, 2), 16),
    b: parseInt(myHex.substr(4, 2), 16)
  };
  if (alpha || alpha === 0) {
    rgb.a = alpha;
  }
  return rgb;
}

/**
 * Converts a 3 digit hex color (e.g., #FFF) and returns its 6 digit equivlent (e.g., #FFFFFF)
 *
 * @param {String} hex3 3 digit hex color code
 * @param {Boolean} addHash Prepends `#` to the output
 * @returns {String} 6 digit hex color code
 */
export function hex3ToHex6(hex3, addHash) {
  let myHex = typeof hex3 == "string" ? hex3.replace("#", "") : hex3.toString();
  if (myHex.length > 3) {
    return hex3; //bail if we were given a value with more than 3 digits
  }
  const chars = myHex.split("");
  let hex6 = "";
  chars.forEach(function(e) {
    hex6 += e + e;
  });
  return addHash ? "#" + hex6 : hex6;
}
