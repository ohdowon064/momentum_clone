const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    title.style.color = "blue";
    console.log("title was click!");
}

title.addEventListener("click", handleTitleClick);