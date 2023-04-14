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
  } else {
    headerIsLogin.style.display = "none";
    headerIsLogout.style.display = "flex";
  }
} else {
  headerIsLogin.style.display = "none";
  headerIsLogout.style.display = "flex";
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

//
// const blockShowInfo = document.querySelectorAll(".main-info__block");
const blockImgInfo = document.querySelectorAll(".main-info__block_right > svg");
const blockShowText = document.querySelectorAll(".main-info__content_text");

const needValue = [
  {
    name: 0,
    value: [0, 1],
    isOpen: false,
  },
  {
    name: 1,
    value: [2],
    isOpen: false,
  },
  {
    name: 2,
    value: [3],
    isOpen: false,
  },
  {
    name: 3,
    value: [4],
    isOpen: false,
  },
  {
    name: 4,
    value: [5],
    isOpen: false,
  },
  {
    name: 5,
    value: [6],
    isOpen: false,
  },
  {
    name: 6,
    value: [7],
    isOpen: false,
  },
  {
    name: 7,
    value: [8],
    isOpen: false,
  },
  {
    name: 8,
    value: [9],
    isOpen: false,
  },
  {
    name: 9,
    value: [10],
    isOpen: false,
  },
  {
    name: 10,
    value: [11],
    isOpen: false,
  },
  {
    name: 11,
    value: [12],
    isOpen: false,
  },
  {
    name: 12,
    value: [13],
    isOpen: false,
  },
  {
    name: 13,
    value: [14],
    isOpen: false,
  },
  {
    name: 14,
    value: [15],
    isOpen: false,
  },
  {
    name: 15,
    value: [16],
    isOpen: false,
  },
  {
    name: 16,
    value: [17],
    isOpen: false,
  },
  {
    name: 17,
    value: [18],
    isOpen: false,
  },
  {
    name: 18,
    value: [19],
    isOpen: false,
  },
  {
    name: 19,
    value: [20],
    isOpen: false,
  },
  {
    name: 20,
    value: [21],
    isOpen: false,
  },
  {
    name: 21,
    value: [22],
    isOpen: false,
  },
  {
    name: 22,
    value: [23],
    isOpen: false,
  },
  {
    name: 23,
    value: [24],
    isOpen: false,
  },
  {
    name: 24,
    value: [25],
    isOpen: false,
  },
  {
    name: 25,
    value: [26],
    isOpen: false,
  },
  {
    name: 26,
    value: [27],
    isOpen: false,
  },
  {
    name: 27,
    value: [28],
    isOpen: false,
  },
];

const blockShowNeed = (num) => {
  for (let i = 0; i < blockImgInfo.length; i++) {
    blockImgInfo[i].style.transform = "none";
  }
  for (let i = 0; i < blockShowText.length; i++) {
    blockShowText[i].style.display = "none";
  }

  let resNeedValue = needValue.find((e) => {
    if (e.name === num) {
      return e;
    }
  });
  console.log("resNeedValue -->", resNeedValue);
  if (resNeedValue.isOpen === true) {
    needValue.find((e) => {
      if (e.name === num) {
        e.isOpen = false;
      }
    });
  } else {
    blockImgInfo[resNeedValue.name].style.transform = "rotate(180deg)";
    for (let i = 0; i < resNeedValue.value.length; i++) {
      blockShowText[resNeedValue.value[i]].style.display = "block";
    }
    needValue.find((e) => {
      if (e.name === num) {
        e.isOpen = true;
      }
    });
  }
};

const logoutApplication = document.querySelector(".main-header-right-log__left_block_logout");

logoutApplication.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("isLogin", "false");
  window.location.href = "login.html";
});
