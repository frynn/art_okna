document.querySelector(".menu").addEventListener("click", function () {
    this.classList.toggle("opened");
    document.querySelector(".burger-menu").classList.toggle("burger-opened");
});
