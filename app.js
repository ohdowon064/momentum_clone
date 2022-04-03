const loginForm = document.getElementById('login-form');
// document.querySelector("#login-form");

const loginInput = loginForm.querySelector("input");
// document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");

function handleLoginBtnClick() {
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("click", handleLoginBtnClick);