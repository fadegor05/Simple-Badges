
let root = document.documentElement;

const accentColorVar = "--accent-color";
const topColorVar = "--top-color";
const bottomColorVar = "--bottom-color";
const textSizeVar = "--text-size";


const titleObj = document.querySelector('#title')
const subtitleObj = document.querySelector('#subtitle')

function initPage(topColor, botomColor, accentColor, size, title, subtitle) {
    initHTML(title, subtitle);
    initCSS(topColor, botomColor, accentColor, size);
}


function initHTML(title, subtitle) {
    titleObj.textContent = title;
    subtitleObj.textContent = subtitle;
}


function initCSS(topColor, bottomColor, accentColor, size) {
    root.style.setProperty(accentColorVar,accentColor)
    root.style.setProperty(topColorVar,topColor)
    root.style.setProperty(bottomColorVar,bottomColor)
    root.style.setProperty(textSizeVar,size+"px")
}