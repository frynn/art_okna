const time = document.getElementById("time");

function updateTime() {
    const date = new Date();
    time.textContent = date.toLocaleTimeString(); // здесь вы можете указать формат времени, которое вы хотите использовать.
}

// вызываем функцию один раз при загрузке страницы, чтобы установить начальное значение.
updateTime();

// затем установите интервал для обновления времени каждые 1000 миллисекунд (т.е. каждую секунду)
setInterval(updateTime, 1000);
