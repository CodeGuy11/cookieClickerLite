let cookies = 0
let cursors = 0
let cursorPrice = 15
let clicksPerSecond = 0
let grandmas = 0
let grandmaPrice = 100
let farms = 0
let farmPrice = 1100
function updateDisplay() {
    document.getElementById("cookieCount").textContent = Math.floor(cookies) + " cookies";
    document.getElementById("cursorCount").textContent = cursors;
    document.getElementById("cursorPrice").textContent = cursorPrice;
    document.getElementById("clicksPerSecond").textContent = "per second: " + clicksPerSecond;
    document.getElementById("grandmaCount").textContent = grandmas;
    document.getElementById("grandmaPrice").textContent = grandmaPrice;
    document.getElementById("farmCount").textContent = farms;
    document.getElementById("farmPrice").textContent = farmPrice;
}
updateDisplay()
function bake(bakeAmount) {
    cookies+= bakeAmount;
    updateDisplay();
}
function buyCursor(cursorAmount) {
    if (cookies >= cursorPrice) {
        cursors+= cursorAmount;
        cookies-= cursorPrice;
    }
    cursorPrice = Math.ceil(15*(1.15**cursors));
    updateDisplay();
}
function buyGrandma(grandmaAmount) {
    if (cookies >= grandmaPrice) {
        grandmas+= grandmaAmount;
        cookies-= grandmaPrice;
    }
    grandmaPrice = Math.ceil(100*(1.15**grandmas));
    updateDisplay();
}
function buyFarm(farmAmount) {
    if (cookies >= farmPrice) {
        farms+= farmAmount;
        cookies-= farmPrice;
    }
    grandmaPrice = Math.ceil(1100*(1.15**farms));
    updateDisplay();
}
setInterval(() => {
    clicksPerSecond = ((cursors/10) + grandmas + (farms*8);
    cookies+= clicksPerSecond;
    updateDisplay();
}, 1000);
