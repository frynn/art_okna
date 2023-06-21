var swiper1 = new Swiper(".swiper-container-certificate", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
        },
        400: {
            slidesPerView: 3,
        },
    },
});

var prevBtn = document.querySelector(".swiper-prev");
var nextBtn = document.querySelector(".swiper-next");

prevBtn.addEventListener("click", function () {
    swiper1.slidePrev();
});

nextBtn.addEventListener("click", function () {
    swiper1.slideNext();
});
