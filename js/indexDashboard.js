const popupLinkHeader = document.querySelector(".main-header-right-log__left_linkn > a");
const iconPopupLinkHeader = document.querySelector(".main-header-right-log__left_linkn_svg > svg");
const popupHeaderLogin = document.querySelector(".main-header-right-log__left_block");

const headerIsLogout = document.querySelector(".main-header-right");
const headerIsLogin = document.querySelector(".main-header-right-log");

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

if (localStorage.getItem("isLogin") !== null) {
  if (localStorage.getItem("isLogin") !== "true") {
    window.location.href = "login.html";
  }
} else {
  window.location.href = "login.html";
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
  } else {
    if (localStorage.getItem("isLogin") === "true") {
      headerIsLogin.style.display = "flex";
    } else {
      headerIsLogout.style.display = "flex";
    }
  }
}, 100);

const mobileNavs = document.querySelectorAll(".main-subheader-mob__block_btn");
const mobileContentCards = document.querySelector(".main-subheader-mob__content_cards");
const mobileContentTransaction = document.querySelector(".main-subheader-mob__content_transaction");

function changeCardContent(needChange) {
  if (needChange === "cards") {
    if (mobileNavs[0].classList.contains("main-subheader-mob__block_btn_active") === false) {
      mobileNavs[0].classList.add("main-subheader-mob__block_btn_active");
    }
    mobileNavs[1].classList.remove("main-subheader-mob__block_btn_active");
    mobileContentCards.style.display = "block";
    mobileContentTransaction.style.display = "none";
  }

  if (needChange === "activity") {
    if (mobileNavs[1].classList.contains("main-subheader-mob__block_btn_active") === false) {
      mobileNavs[1].classList.add("main-subheader-mob__block_btn_active");
    }
    mobileNavs[0].classList.remove("main-subheader-mob__block_btn_active");
    mobileContentCards.style.display = "none";
    mobileContentTransaction.style.display = "block";
  }
}

const logoutApplication = document.querySelector(".main-header-right-log__left_block_logout");

logoutApplication.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("isLogin", "false");
  window.location.href = "login.html";
});

const logoutApplicationMob = document.querySelector(".main-headermob-menu__link_textlog");
logoutApplicationMob.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("isLogin", "false");
  window.location.href = "login.html";
});

// form
const popupContainerBlock = document.querySelector(".popup-container-block");
const menuOptions = document.querySelector(".popup-container-block__right_form_options_block");
const menuOptionsContent = document.querySelector(
  ".popup-container-block__right_form_options_content",
);
const menuMethod = document.querySelector(".popup-container-block__right_form_method_block");
const menuMethodContent = document.querySelector(
  ".popup-container-block__right_form_method_content",
);

const cardShowPriceLeft = document.querySelector(".popup-container-block__left_card_price");
const inputAmount = document.querySelector(".popup-container-block__right_form_amount > input");
const infoConversion = document.querySelector(
  ".popup-container-block__right_form_convinfo_block > div > span",
);

const finishPrice = document.querySelector(".popup-container-block__right_form_pay_price");

const allMethodCurrencies = document.querySelectorAll(
  ".popup-container-block__right_form_method_content_input",
);
const currentNameMethodCurrency = document.querySelector(
  ".popup-container-block__right_form_method_block_currency_t",
);

const currentNamePayCurrency = document.querySelector(
  ".popup-container-block__right_form_pay_curr",
);
const currentImgPayCurrency = document.querySelector(
  ".popup-container-block__right_form_pay_img > img",
);

let currencies = {};
let chooseCurrency = "BTC";
let finalPriceChoose = 0;
let userWrite = 0;

function requestCryptoCurrency() {
  fetch(
    "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,USDT,USDC,BCH,LTC&tsyms=USD,BTC,USDT,USDC,ETH,BCH,LTC",
  )
    .then((response) => response.json())
    .then((data) => {
      currencies = data;
      infoConversion.innerHTML = `1 BTC = ${data["BTC"]["USD"]}`;
    });
}
requestCryptoCurrency();

menuOptions.addEventListener("click", (e) => {
  console.log("CLICK 1");
  e.preventDefault();
  menuMethodContent.style.display = "none";
  menuMethodContent.style.zIndex = "100";
  console.log("menuOptionsContent.style.display -->", menuOptionsContent.style.display);
  if (!menuOptionsContent.style.display || menuOptionsContent.style.display === "none") {
    menuOptionsContent.style.display = "block";
    menuOptionsContent.style.zIndex = "100";
  } else {
    menuOptionsContent.style.display = "none";
    menuOptionsContent.style.zIndex = "100";
  }
});

menuMethod.addEventListener("click", (e) => {
  console.log("CLICK 2");
  e.preventDefault();
  menuOptionsContent.style.display = "none";
  menuOptionsContent.style.zIndex = "100";
  if (!menuMethodContent.style.display || menuMethodContent.style.display === "none") {
    menuMethodContent.style.display = "block";
    menuMethodContent.style.zIndex = "100";
  } else {
    menuMethodContent.style.display = "none";
    menuMethodContent.style.zIndex = "100";
  }
});

inputAmount.addEventListener("input", (e) => {
  console.log("CLICK 3");
  cardShowPriceLeft.innerHTML = `$${e.target.value}.00`;
  let priceCalculate = currencies["USDT"][chooseCurrency] * e.target.value;
  finishPrice.innerHTML = `${priceCalculate.toFixed(3)}`;
  finalPriceChoose = priceCalculate;
  userWrite = Number(e.target.value);
  e.preventDefault();
});

function changeCurrencyNeed(needCurrency, nameCurrency, nameSocr) {
  console.log("CLICK 4");
  for (let i = 0; i < allMethodCurrencies.length; i++) {
    if (
      allMethodCurrencies[i].classList.contains(
        "popup-container-block__right_form_method_content_input_active",
      )
    ) {
      console.log("allMethodCurrencies[i] -->", allMethodCurrencies[i].innerHTML);
      allMethodCurrencies[i].classList.remove(
        "popup-container-block__right_form_method_content_input_active",
      );
    }
  }
  allMethodCurrencies[needCurrency].classList.add(
    "popup-container-block__right_form_method_content_input_active",
  );
  currentNameMethodCurrency.innerHTML = nameCurrency;
  currentNamePayCurrency.innerHTML = nameSocr;
  if (nameCurrency === "Coinbase (BCH)") {
    currentImgPayCurrency.src = "img/bch-img.png";
  }
  if (nameCurrency === "Coinbase (LTC)") {
    currentImgPayCurrency.src = "img/ltc-img.png";
  }
  if (nameCurrency === "Coinbase (ETH)") {
    currentImgPayCurrency.src = "img/eth-coinbase.png";
  }
  if (nameCurrency === "Coinbase (BTC)") {
    currentImgPayCurrency.src = "img/btc-img.png";
  }
  if (nameCurrency === "Coinbase (USDC)") {
    currentImgPayCurrency.src = "img/usdc-img.png";
  }
  if (nameCurrency === "Bitcoin") {
    currentImgPayCurrency.src = "img/btc-img.png";
  }

  infoConversion.innerHTML = `1 ${nameSocr} = ${currencies[nameSocr]["USD"]}`;
  let priceCalculate = currencies["USDT"][nameSocr] * Number(inputAmount.value);
  finishPrice.innerHTML = priceCalculate.toFixed(3);
  finalPriceChoose = priceCalculate;
  chooseCurrency = nameSocr;
  userWrite = Number(inputAmount.value);

  menuMethodContent.style.display = "none";
  menuMethodContent.style.zIndex = "100";
}

//
// на сколько минут ставим таймер
var count = 3;
// запущен таймер или нет
started = false;

// запуск таймера по кнопке
function start() {
  // если таймер уже запущен — выходим из функции
  if (started) {
    return;
  }
  // запоминаем время нажатия
  var start_time = new Date();
  // получаем время окончания таймера
  var stop_time = start_time.setMinutes(start_time.getMinutes() + count);

  // запускаем ежесекундный отсчёт
  var countdown = setInterval(function () {
    // текущее время
    var now = new Date().getTime();
    // сколько времени осталось до конца таймера
    var remain = stop_time - now;
    // переводим миллисекунды в минуты и секунды
    var min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((remain % (1000 * 60)) / 1000);
    // если значение текущей секунды меньше 10, добавляем вначале ведущий ноль
    sec = sec < 10 ? "0" + sec : sec;
    // отправляем значение таймера на страницу в нужный раздел
    document.querySelector(".popup-container-blocktwo__info_textth_time").innerHTML =
      min + ":" + sec;
    // если время вышло
    if (remain < 0) {
      // останавливаем отсчёт
      clearInterval(countdown);
      // пишем текст вместо цифр
      document.querySelector(".popup-container-blocktwo__info_textth_time").innerHTML = "00:00";
    }
  }, 1000);
  // помечаем, что таймер уже запущен
  started = true;
}

// open popup
const popupContainer = document.querySelector(".popup-container");
const popupContainerClose = document.querySelector(
  ".popup-container-block__right_form_imgclose > img",
);
const popupContainerMobileClose = document.querySelector(
  ".popup-container-block__left_imgclose > img",
);
const popupBlock = document.querySelector(".popup-container-block");
const btnVccDesktop = document.querySelector(".main-subheader-left__vcc > button");
const btnNewCardDesktop = document.querySelector(".main-subheader-left__newcard > button");
const btnVccMobile = document.querySelector(".main-subheader-mob__content_cards > button");

let isPopupVccShow = false;

btnVccDesktop.addEventListener("click", (e) => {
  e.preventDefault();
  popupContainer.style.display = "flex";
  popupContainerBlock.style.display = "flex";
  isPopupVccShow = true;
  requestCryptoCurrency();
});

btnNewCardDesktop.addEventListener("click", (e) => {
  e.preventDefault();
  popupContainer.style.display = "flex";
  popupContainerBlock.style.display = "flex";
  isPopupVccShow = true;
  requestCryptoCurrency();
});

btnVccMobile.addEventListener("click", (e) => {
  e.preventDefault();
  popupContainer.style.display = "flex";
  popupContainerBlock.style.display = "flex";
  isPopupVccShow = true;
  requestCryptoCurrency();
});

popupContainerClose.addEventListener("click", (e) => {
  e.preventDefault();
  popupContainer.style.display = "none";
  isPopupVccShow = false;
});

popupContainerMobileClose.addEventListener("click", (e) => {
  e.preventDefault();
  popupContainer.style.display = "none";
  isPopupVccShow = false;
});

const btnSubmit = document.querySelector(".popup-container-block__right_form_btn > button");
const popupOne = document.querySelector(".popup-container-block__right_popone");
const popupTwo = document.querySelector(".popup-container-block__right_poptwo");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (Number(finishPrice.innerHTML) > 0) {
    popupOne.style.display = "none";
    popupTwo.style.display = "block";
  }
});

const inputCheckboxPopupTwo = document.querySelector(
  ".popup-container-block__right_poptwo_block_form_input > input",
);
const btnSubmitTwo = document.querySelector(".popup-container-block__right_poptwo_block_form_btn");

const popupContainerBlockTwo = document.querySelector(".popup-container-blocktwo");
const popupThreePrice = document.querySelector(".popup-container-blocktwo__sum_price");
const popupThreeCurrencyName = document.querySelector(".popup-container-blocktwo__sum_name");
const popupThreeSumFinal = document.querySelector(".popup-container-blocktwo__infosum_text");
const popupThreeImgCurrency = document.querySelector(".popup-container-blocktwo__sum_img > img");

const popupThreeQrCodeImg = document.querySelector(".popup-container-blocktwo__qrcode_img > img");
const popupThreeAddresCurrency = document.querySelector(".popup-container-blocktwo__info_textt");
const popupThreeLoading = document.querySelector(".popup-container-blocktwo__loading");
const popupThreeContent = document.querySelector(".popup-container-blocktwo__content");

btnSubmitTwo.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputCheckboxPopupTwo.checked === true) {
    setTimeout(() => {
      popupThreeLoading.style.display = "none";
      popupThreeContent.style.display = "block";
    }, 3000);
    popupContainerBlock.style.display = "none";
    popupContainerBlockTwo.style.display = "flex";
    popupThreePrice.innerHTML = finalPriceChoose.toFixed(4);
    popupThreeCurrencyName.innerHTML = chooseCurrency;
    popupThreeSumFinal.innerHTML = `= $${userWrite} USD`;
    if (chooseCurrency === "BCH") {
      popupThreeImgCurrency.src = "img/bch-img.png";
      popupThreeQrCodeImg.src = "img/Your_Bitcoin_Cash_QR_Code.png";
      popupThreeAddresCurrency.innerHTML = "qrec0dgcfw8gjqrpp28qmg0klsvfvr6us5x8p96exj";
    }
    if (chooseCurrency === "LTC") {
      popupThreeImgCurrency.src = "img/ltc-img.png";
      popupThreeQrCodeImg.src = "img/Your_Litecoin_QR_Code.png";
      popupThreeAddresCurrency.innerHTML = "ltc1qj7vl0cr2hrwcva6tmp70m0carsknldqq32sfdq";
    }
    if (chooseCurrency === "ETH") {
      popupThreeImgCurrency.src = "img/eth-coinbase.png";
      popupThreeQrCodeImg.src = "img/Your_Ethereum_QR_Code.png";
      popupThreeAddresCurrency.innerHTML = "0x0AE609e30b6E4548E5b2dE56F7D013ae14396B82";
    }
    if (chooseCurrency === "BTC") {
      popupThreeImgCurrency.src = "img/btc-img.png";
      popupThreeQrCodeImg.src = "img/Your_Bitcoin_QR_Code.png";
      popupThreeAddresCurrency.innerHTML = "bc1qf6gfc3zp5vrgw4sxmm8luwztsrvjru3x3aj5wx";
    }
    if (chooseCurrency === "USDC") {
      popupThreeImgCurrency.src = "img/usdc-img.png";
      // popupThreeQrCodeImg.src = "../img/Yo";
      popupThreeAddresCurrency.innerHTML = "usdc";
    }
    start();
  }
});

setInterval(() => {
  if (window.screen.width <= 926 && window.screen.width > 428) {
    if (popupTwo.style.display === "none" || popupTwo.style.display === null) {
      popupContainerBlock.style.margin = "0";
    } else {
      if (window.screen.width <= 926) {
        popupContainerBlock.style.margin = "500px 0 80px 0";
      }
      if (window.screen.width <= 568) {
        popupContainerBlock.style.margin = "550px 0 80px 0";
      }
    }
  }
}, 100);

const btnGoCoinBase = document.querySelector(".popup-container-blocktwo__btn > button");
const btnCancel = document.querySelector(".popup-container-blocktwo__cancel > a");

btnGoCoinBase.addEventListener("click", (e) => {
  window.location.href = "https://www.coinbase.com/";
});

btnCancel.addEventListener("click", (e) => {
  popupContainerBlock.style.display = "none";
  popupContainerBlockTwo.style.display = "none";
  popupOne.style.display = "block";
  popupTwo.style.display = "none";
  popupContainer.style.display = "none";
});

const btnPopupThreeNavLighthing = document.querySelector(
  ".popup-container-blocktwo__nav_btnl > button",
);
const btnPopupThreeNavOnChain = document.querySelector(
  ".popup-container-blocktwo__nav_btnr > button",
);

btnPopupThreeNavLighthing.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    document
      .querySelector(".popup-container-blocktwo__nav_btnl")
      .classList.contains("popup-container-blocktwo__nav_btnl_active") === false
  ) {
    popupThreeLoading.style.display = "flex";
    popupThreeContent.style.display = "none";
    document
      .querySelector(".popup-container-blocktwo__nav_btnr")
      .classList.remove("popup-container-blocktwo__nav_btnr_active");

    document
      .querySelector(".popup-container-blocktwo__nav_btnl")
      .classList.add("popup-container-blocktwo__nav_btnl_active");
    setTimeout(() => {
      popupThreeLoading.style.display = "none";
      popupThreeContent.style.display = "block";
    }, 3000);
    popupContainerBlock.style.display = "none";
    popupContainerBlockTwo.style.display = "flex";
    popupThreePrice.innerHTML = finalPriceChoose.toFixed(4);
    popupThreeCurrencyName.innerHTML = chooseCurrency;
    popupThreeSumFinal.innerHTML = `= $${userWrite} USD`;
    if (chooseCurrency === "BCH") {
      popupThreeImgCurrency.src = "img/bch-img.png";
      popupThreeQrCodeImg.src = "img/Your_Bitcoin_Cash_QR_Code.png";
      popupThreeAddresCurrency.innerHTML = "qrec0dgcfw8gjqrpp28qmg0klsvfvr6us5x8p96exj";
    }
    if (chooseCurrency === "LTC") {
      popupThreeImgCurrency.src = "img/ltc-img.png";
      popupThreeQrCodeImg.src = "img/Your_Litecoin_QR_Code.png";
      popupThreeAddresCurrency.innerHTML = "ltc1qj7vl0cr2hrwcva6tmp70m0carsknldqq32sfdq";
    }
    if (chooseCurrency === "ETH") {
      popupThreeImgCurrency.src = "img/eth-coinbase.png";
      popupThreeQrCodeImg.src = "img/Your_Ethereum_QR_Code.png";
      popupThreeAddresCurrency.innerHTML = "0x0AE609e30b6E4548E5b2dE56F7D013ae14396B82";
    }
    if (chooseCurrency === "BTC") {
      popupThreeImgCurrency.src = "img/btc-img.png";
      popupThreeQrCodeImg.src = "img/Your_Bitcoin_QR_Code.png";
      popupThreeAddresCurrency.innerHTML = "bc1qf6gfc3zp5vrgw4sxmm8luwztsrvjru3x3aj5wx";
    }
    if (chooseCurrency === "USDC") {
      popupThreeImgCurrency.src = "img/usdc-img.png";
      // popupThreeQrCodeImg.src = "../img/Yo";
      popupThreeAddresCurrency.innerHTML = "usdc";
    }
    start();
  }
});

btnPopupThreeNavOnChain.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    document
      .querySelector(".popup-container-blocktwo__nav_btnr")
      .classList.contains("popup-container-blocktwo__nav_btnr_active") === false
  ) {
    popupThreeLoading.style.display = "flex";
    popupThreeContent.style.display = "none";
    document
      .querySelector(".popup-container-blocktwo__nav_btnl")
      .classList.remove("popup-container-blocktwo__nav_btnl_active");

    document
      .querySelector(".popup-container-blocktwo__nav_btnr")
      .classList.add("popup-container-blocktwo__nav_btnr_active");
    setTimeout(() => {
      popupThreeLoading.style.display = "none";
      popupThreeContent.style.display = "block";
    }, 3000);
    popupContainerBlock.style.display = "none";
    popupContainerBlockTwo.style.display = "flex";
    popupThreePrice.innerHTML = finalPriceChoose.toFixed(4);
    popupThreeCurrencyName.innerHTML = chooseCurrency;
    popupThreeSumFinal.innerHTML = `= $${userWrite} USD`;
    if (chooseCurrency === "BCH") {
      popupThreeImgCurrency.src = "img/bch-img.png";
      popupThreeQrCodeImg.src = "img/Your_Bitcoin_Cash_QR_Code.png";
      popupThreeAddresCurrency.innerHTML = "qrec0dgcfw8gjqrpp28qmg0klsvfvr6us5x8p96exj";
    }
    if (chooseCurrency === "LTC") {
      popupThreeImgCurrency.src = "img/ltc-img.png";
      popupThreeQrCodeImg.src = "img/Your_Litecoin_QR_Code.png";
      popupThreeAddresCurrency.innerHTML = "ltc1qj7vl0cr2hrwcva6tmp70m0carsknldqq32sfdq";
    }
    if (chooseCurrency === "ETH") {
      popupThreeImgCurrency.src = "img/eth-coinbase.png";
      popupThreeQrCodeImg.src = "img/Your_Ethereum_QR_Code.png";
      popupThreeAddresCurrency.innerHTML = "0x0AE609e30b6E4548E5b2dE56F7D013ae14396B82";
    }
    if (chooseCurrency === "BTC") {
      popupThreeImgCurrency.src = "img/btc-img.png";
      popupThreeQrCodeImg.src = "img/Your_Bitcoin_QR_Code.png";
      popupThreeAddresCurrency.innerHTML = "bc1qf6gfc3zp5vrgw4sxmm8luwztsrvjru3x3aj5wx";
    }
    if (chooseCurrency === "USDC") {
      popupThreeImgCurrency.src = "img/usdc-img.png";
      // popupThreeQrCodeImg.src = "../img/Yo";
      popupThreeAddresCurrency.innerHTML = "usdc";
    }
    start();
  }
});
