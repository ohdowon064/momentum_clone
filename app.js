const loginForm = document.getElementById('login-form');
// document.querySelector("#login-form");

const loginInput = loginForm.querySelector("input");
// document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");

function handleLoginBtnClick() {
    const username = loginInput.value;
    if(username === "") {
        alert("Please wriate your name");
    } else if(username.length > 15) {
        alert("Your name is too long.(less 15 letters)")
    }
}

loginButton.addEventListener("click", handleLoginBtnClick);