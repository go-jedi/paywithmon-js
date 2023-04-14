const btnGoogleLogIn = document.querySelector(".main-subheader-right__google > button");
const preloader = document.querySelector(".loading");
// form
const btnLoginForm = document.querySelector(".main-subheader-right__form_submit > button");
const inputEmailForm = document.querySelector(".main-subheader-right__form_email > input");
const inputPasswordForm = document.querySelector(".main-subheader-right__form_password > input");

const btnSignUp = document.querySelectorAll(".main-subheader-right__header_btn > button")[1];

btnGoogleLogIn.addEventListener("click", (e) => {
  e.preventDefault();
  preloader.style.display = "block";
  setTimeout(() => {
    preloader.style.display = "none";
    window.location.href = "dashboard.html";
    localStorage.setItem("isLogin", "true");
  }, 3000);
});

btnLoginForm.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputEmailForm.value.length > 5 && inputPasswordForm.value.length > 5) {
    preloader.style.display = "block";
    setTimeout(() => {
      preloader.style.display = "none";
      window.location.href = "dashboard.html";
      localStorage.setItem("isLogin", "true");
    }, 3000);
  }
});

btnSignUp.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "signup.html";
});

if (localStorage.getItem("isLogin") !== null) {
  if (localStorage.getItem("isLogin") === "true") {
    window.location.href = "dashboard.html";
  }
}

const burgerIconOpen = document.querySelector(".main-headermob-right__toggle");
const burgerIconClose = document.querySelector(".main-headermob-menu__close");
const headerMenuMobile = document.querySelector(".main-headermob-menu");

burgerIconOpen.addEventListener("click", (e) => {
  headerMenuMobile.style.display = "block";
  document.body.style.overflow = "hidden";
});

burgerIconClose.addEventListener("click", (e) => {
  headerMenuMobile.style.display = "none";
  document.body.style.overflow = "auto";
});

setInterval(() => {
  if (window.innerWidth < 1080) {
    headerIsLogout.style.display = "none";
    headerIsLogin.style.display = "none";
  }
}, 100);
