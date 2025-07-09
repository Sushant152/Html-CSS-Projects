// For bar setting
const barEle = document.querySelector(".bar");
const barItemsEle = document.querySelector(".bar-items");
const closeEle = document.querySelector(".close");

barEle.addEventListener("click", () => {
  barItemsEle.style.display = "block";
  sectionEle.style.display = "none";
});

closeEle.addEventListener("click", () => {
  barItemsEle.style.display = "none";
  sectionEle.style.display = "block";
});

// For Theme setting
const themeSettingEle = document.querySelector(".theme-setting");
const themeDisplayEle = document.querySelector(".theme-container");

const themeDafultEle = document.querySelector("#white-color");
const themeDarkEle = document.querySelector("#black-color");
const themeBlueEle = document.querySelector("#blue-color");

const bodyEle = document.querySelector("body");
var sectionEle = document.querySelector(".para");

themeSettingEle.addEventListener("click", () => {
  themeDisplayEle.style.display = "block";
  hideParaBlock();
});

// Default mode
themeDafultEle.addEventListener("click", () => {
  bodyEle.style.backgroundColor = "white";
  themeDisplayEle.style.display = "none";
  displayParaBlock()
});

//Dark mode
themeDarkEle.addEventListener("click", () => {
  bodyEle.style.backgroundColor = "rgb(88, 85, 85)";
  themeDisplayEle.style.display = "none";
  displayParaBlock()
});

//blue mode
themeBlueEle.addEventListener("click", () => {
  bodyEle.style.backgroundColor = "rgb(46, 73, 83)";
  themeDisplayEle.style.display = "none";
  displayParaBlock()
});

function hideParaBlock(){
    sectionEle.style.display = "none";
}

function displayParaBlock(){
    sectionEle.style.display = "block";
}