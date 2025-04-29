let cookies = 0
let cursors = 0
let cursorPrice = 15
let clicksPerSecond = 0
let grandmas = 0
let grandmaPrice = 100
let farms = 0
let farmPrice = 1100
let cursorMult = 1
let grandmaMult = 1
let farmMult = 1
function updateDisplay() {
    document.getElementById("cookieCount").textContent = Math.floor(cookies) + " cookies";
    document.getElementById("cursorCount").textContent = cursors;
    document.getElementById("cursorPrice").textContent = cursorPrice;
    document.getElementById("clicksPerSecond").textContent = "per second: " + clicksPerSecond;
    document.getElementById("grandmaCount").textContent = grandmas;
    document.getElementById("grandmaPrice").textContent = grandmaPrice;
    document.getElementById("farmCount").textContent = farms;
    document.getElementById("farmPrice").textContent = farmPrice;
    document.title = Math.floor(cookies) + " cookies - Cookie Clicker Lite";
}
updateDisplay()
function bake(bakeAmount) {
    cookies+= bakeAmount;
    updateDisplay();
}
function buyClicker(clikcerAmount, type) {
    if (cookies >= cursorPrice && type == "cursor") {
        cursors+= clickerAmount;
        cookies-= cursorPrice;
    }
    else if (cookies >= grandmaPrice && type == "grandma") {
        grandmas+= clickerAmount;
        cookies-= grandmaPrice;
    }
    else if (cookies >= farmPrice && type == "farm") {
        farms+= clickerAmount;
        cookies-= farmPrice;
    }
    cursorPrice = Math.ceil(15*(1.15**cursors));
    grandmaPrice = Math.ceil(100*(1.15**grandmas));
    farmPrice = Math.ceil(1100*(1.15**farms));
    updateDisplay();
}
function buyUpgrade(type) {
    if (cookies >= 100 && type == strongIndex) {
        cookies-= 100;
        cursorMult*= 2;
    }
}
setInterval(() => {
    clicksPerSecond = (((cursors/10)*cursorMult) + (grandmas*grandmaMult) + ((farms*8)*farmMult));
    cookies+= clicksPerSecond;
    updateDisplay();
}, 1000);
