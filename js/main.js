import { showPopup } from './popup.js';

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector("#btn-login");
  const registerBtn = document.querySelector("#btn-register");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => showPopup("login"));
  }

  if (registerBtn) {
    registerBtn.addEventListener("click", () => showPopup("register"));
  }
});
