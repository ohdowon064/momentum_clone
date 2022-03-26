const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector("input");

const link = document.querySelector("a")

function onLoginSubmit(event) {
    event.preventDefault(); // 기본동작(새로고침) 막음
    console.dir(event);
}

function handleLinkClick(event) {
    event.preventDefault(); // 기본동작(링크이동) 막음
    console.log(event)
}

loginForm.addEventListener("submit", onLoginSubmit);
link.onclick = handleLinkClick