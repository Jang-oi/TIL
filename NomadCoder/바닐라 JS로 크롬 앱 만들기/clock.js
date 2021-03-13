const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".js-title");

function getTime() {
    // Don't delete this.

    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const testday = new Date("2021-03-13:00:00:00+0900");
    const date = new Date();
    const month = xmasDay.getMonth() - date.getMonth();
    const day = xmasDay.getDate() - date.getDate();
    const hours = 23 - date.getHours();
    const minutes = 59 - date.getMinutes();
    const seconds = 59 - date.getSeconds();

    console.log(testday.getMinutes());
    clockTitle.innerText = `${month < 10 ? `0${month}` : month}Month ${
        day < 10 ? `0${day}` : day
    }Day ${hours < 10 ? `0${hours}` : hours}Hours ${
        minutes < 10 ? `0${minutes}` : minutes
    }Minutes ${seconds < 10 ? `0${seconds}` : seconds}Seconds`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();