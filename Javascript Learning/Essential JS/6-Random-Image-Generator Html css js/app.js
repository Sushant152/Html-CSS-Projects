const btnELe = document.querySelector(".btn");
const imgContEle = document.querySelector(".img-container");

btnELe.addEventListener("click", (e) => {
  let additionalImgToIncl = 6;
  updateImg(additionalImgToIncl);
});

function updateImg(num) {
  for (let i = 0; i < num; i++) {
    const newImgEle = document.createElement("img");
    newImgEle.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 1000
    )}`;
    newImgEle.className = "img";
    imgContEle.appendChild(newImgEle);
    console.log(newImgEle);
  }
}
