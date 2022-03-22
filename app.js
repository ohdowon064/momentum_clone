const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "blue";
    console.log("h1 was click!");
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!"
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!"
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copy!")
}

function handleWindowOffline() {
    alert("SOS no Wifi!")
}

function handleWindowOnline() {
    alert("All good!")
}

h1.onclick = handleTitleClick
h1.onmouseenter = handleMouseEnter
h1.onmouseleave = handleMouseLeave

window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);