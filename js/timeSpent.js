let seconds = 0;
let timerIntervalId;

function startTimer() {
    timerIntervalId = setInterval(() => {
        seconds++;
        document.getElementById("time-spent").textContent = `${seconds} секунд`;
    }, 1000);
}

// Запускаем таймер, когда пользователь начинает работу с сайтом
window.addEventListener("focus", startTimer);

// Останавливаем таймер, когда пользователь переходит на другую вкладку браузера
window.addEventListener("blur", () => clearInterval(timerIntervalId));

// Запускаем таймер при загрузке страницы
startTimer();
