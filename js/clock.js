const clock = document.querySelector("h2#clock"); // querySelector("#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // 화면에 바로 보이도록 한번 호출해줌.
setInterval(getClock, 1000);