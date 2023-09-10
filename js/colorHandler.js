/**
 * 
 * ColorHandler file
 * 
 */

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}


function hueConvert(mainHue, grayHue, initGrayHue) {
    return 255 - (255 - mainHue) * (255 - grayHue) / (255 - initGrayHue);
}


function colorConvert(mainColor, grayHue, initGrayHue) {
    let outColor = Array();
    hexToRgb(mainColor).forEach(element => {
        outColor.push(Math.floor(hueConvert(element, grayHue, initGrayHue)));
    });
    return rgbToHex(outColor[0],outColor[1],outColor[2  ]);
}
