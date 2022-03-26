const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(event) {
    event.preventDefault();
    // 여기서 default(기본동작)은 submit시 새로고침
    // 이 기본동작(현재는 새로고침)을 막는 함수

    console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);