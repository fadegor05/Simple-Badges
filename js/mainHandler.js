const urlParams = new URLSearchParams(window.location.search);

window.onload = windowLoadHandler;

// http://127.0.0.1:5501/?title=Title&subtitle=Subtitle&color=8c26ab&px=96
const titleVal = urlParams.get('title');
const subtitleVal = urlParams.get('subtitle');
const colorVal = "#" + urlParams.get('color');
const sizeVal = urlParams.get('px');


const initGrayHue = 218;
const grayHues = [226,241]; // top, accent



function windowLoadHandler() {
    let badgeColors = Array();
    grayHues.forEach(element => {
        badgeColors.push(colorConvert(colorVal, element, initGrayHue))
    })
    initPage(badgeColors[0], colorVal, badgeColors[1], Number(sizeVal)/6, titleVal, subtitleVal)
    document.querySelector('.badge').style.display = "block";
    html2canvas(document.querySelector('.badge')).then((canvas) =>{
        document.body.appendChild(canvas);
    })
    document.querySelector('.badge').style.display = "none";
}



