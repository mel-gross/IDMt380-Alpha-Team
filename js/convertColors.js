
// Property of Henrah Magix at
// https://gist.github.com/henrahmagix/4740707#file-rgb-array-js-L69

    function getRgbArray(color, alpha, mode) {
        // Always return an array, either empty or filled.
        var rgb = [];
        var hex;

        // Get an array of rgb(a) values.
        if (color.substr(0, 1) === '#') {
            /* HEX STRING */
            // If the first character is # we're dealing with a hex string. Get
            // an array of each character. This is more explicit than dealing
            // with the indices of a String object due to all other instances
            // of hex in this function.
            hex = color.substr(1).split('');
            if (hex.length === 3) {
                // If this is a 3-char color, e.g. #f00, make it 6 characters
                // by duplicating each one.
                hex = [hex[0], hex[0], hex[1], hex[1], hex[2], hex[2]];
            }
            if (hex.length === 6) {
                // Only deal with 6-char hex colors when computing the rgb
                // array. Anything else at this point has been passed
                // incorrectly.
                var i = 0;
                var x = 0;
                var hexStr;
                // Convert each hex pair (represented by hexStr) into a decimal
                // value to go in rgb[]. i is the rgb[] index whilst x is 2i,
                // which translates Array(3) to Array(6).
                while (i < 3) {
                    hexStr = hex[x] + hex[x + 1];
                    rgb[i] = parseInt(hexStr, 16);
                    i += 1;
                    x = i * 2;
                }
            }
        } else if (color.search(/rgb/) !== -1) {
            /* RGB(A) STRING */
            rgb = color.match(/([0-9]+\.?[0-9]*)/g);
        }

        // Add or remove the alpha value.
        if (alpha && rgb.length === 3) {
            // If an alpha value has been requested and there currently isn't
            // one, add 1 as the alpha value.
            rgb.push(1);
        } else if (! alpha && rgb.length === 4) {
            // Otherwise if there's an alpha value that hasn't been requested,
            // remove it.
            rgb.pop();
        }

        // Ensure all values in rgb are decimal numbers, not strings.
        for (var i = 0; i < rgb.length; i++) {
            rgb[i] = parseInt(rgb[i], 10);
        }

        if (mode == 'rgb') {
            return rgb;   
        }
        if (mode == 'hsl') {
            return rgbToHsl(rgb[0],rgb[1],rgb[2]);
        }

    }
    // // Demonstrate.
    // var colors = [
    //     '#fff0ff',
    //     '#f0f',
    //     'rgb(0,255,50)',
    //     'rgb(0,   255,50)',
    //     'rgba(0,255,50 , 1)'
    // ];
    // for (var i = 0; i < colors.length; i++) {
    //     console.log('no alpha', colors[i], getRgbArray(colors[i], false));
    //     console.log('with alpha', colors[i], getRgbArray(colors[i], true));
    // }






/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   {number}  r       The red color value
 * @param   {number}  g       The green color value
 * @param   {number}  b       The blue color value
 * @return  {Array}           The HSL representation
 */

function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return [h, s, l];
}



/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}


