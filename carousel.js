
let btnLeft = document.querySelector("#carousel-left");
let btnRight = document.querySelector("#carousel-right");
let carouselBlock = document.querySelector(".carousel__wrapper");
let carouselImgs = document.querySelectorAll(".carousel__section");
let carouselImg = document.querySelector(".carousel__section");
let imgWidth = carouselImg.offsetWidth;
//let imgMargin = getComputedStyle(carouselImg).marginRight;
//console.log(imgWidth);

btnRight.addEventListener('click', e => {
	let start = getComputedStyle(carouselBlock).left;
    let shift = Math.abs(+start.slice(0, start.length - 2)) + imgWidth;
    if (shift >= carouselBlock.offsetWidth) {
    	shift = 0;
    	carouselBlock.style.left = shift + 'px';
    	return;
    }
    carouselBlock.style.left = '-' + shift + 'px';
});

btnLeft.addEventListener('click', e => {
	let start = getComputedStyle(carouselBlock).left;
    let shift = Math.abs(+start.slice(0, start.length - 2)) - imgWidth;
    if (shift < 0) {
    	shift = carouselBlock.offsetWidth - imgWidth;
    }
    carouselBlock.style.left = '-' + shift + 'px';
});
