const popupLinkHeader = document.querySelector(".main-header-right-log__left_linkn > a");
const iconPopupLinkHeader = document.querySelector(".main-header-right-log__left_linkn_svg > svg");
const popupHeaderLogin = document.querySelector(".main-header-right-log__left_block");

popupLinkHeader.addEventListener("click", (e) => {
  e.preventDefault();
  if (getComputedStyle(iconPopupLinkHeader).transform === "none") {
    iconPopupLinkHeader.style.transform = "rotate(180deg) translate(-2px, -1px)";
    popupHeaderLogin.style.display = "block";
  } else {
    iconPopupLinkHeader.style.transform = "none";
    popupHeaderLogin.style.display = "none";
  }
});

const headerIsLogout = document.querySelector(".main-header-right");
const headerIsLogin = document.querySelector(".main-header-right-log");

if (localStorage.getItem("isLogin") !== null) {
  if (localStorage.getItem("isLogin") === "true") {
    headerIsLogin.style.display = "flex";
    headerIsLogout.style.display = "none";
    window.location.href = "dashboard.html";
  } else {
    headerIsLogin.style.display = "none";
    headerIsLogout.style.display = "flex";
  }
} else {
  headerIsLogin.style.display = "none";
  headerIsLogout.style.display = "flex";
}

const btnGetStarted = document.querySelector(".main-subheader-right__btn > button");
const btnGetStartedTwo = document.querySelector(".main-readytry__btn > button");

btnGetStarted.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "login.html";
});

btnGetStartedTwo.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "login.html";
});

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

const logoutApplication = document.querySelector(".main-header-right-log__left_block_logout");

logoutApplication.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("isLogin", "false");
  window.location.href = "login.html";
});
