let cookies = 0
let cursors = 0
let cursorPrice = 15
let clicksPerSecond = 0
let grandmas = 0
let grandmaPrice = 100
function updateDisplay() {
    document.getElementById("cookieCount").textContent = "You have " + Math.floor(cookies) + " cookies.";
    document.getElementById("cursorCount").textContent = "You have " + cursors + " cursors.";
    document.getElementById("cursorPrice").textContent = cursorPrice;
    document.getElementById("clicksPerSecond").textContent = clicksPerSecond + " clicks per second."
    document.getElementById("grandmaCount").textContent = "You have " + grandmas + " grandmas.";
    document.getElementById("grandmaPrice").textContent = grandmaPrice;
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
    grandmaPrice = Math.ceil(100*(1.15**cursors));
    updateDisplay();
}
setInterval(() => {
    clicksPerSecond = ((cursors/10) + grandmas);
    cookies+= clicksPerSecond;
    updateDisplay();
}, 1000);