var swiper = new Swiper(".swiper-container", {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
        },
    },
});

var prevBtn = document.querySelector(".swiper-prev-btn");
var nextBtn = document.querySelector(".swiper-next-btn");

prevBtn.addEventListener("click", function () {
    swiper.slidePrev();
});

nextBtn.addEventListener("click", function () {
    swiper.slideNext();
});
