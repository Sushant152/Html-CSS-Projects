const btnEl = document.querySelector(".btn")

btnEl.addEventListener("mouseover",(e)=>{

const x = e.pageX - btnEl.offsetLeft;
const y = e.pageY - btnEl.offsetTop;

btnEl.style.setProperty("--posX", x + "px");
btnEl.style.setProperty("--posY", y + "px");

})