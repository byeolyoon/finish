const clock = document.querySelector("h2#clock");


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // getclock을 바로 호출하면 00:00:00이 뜨지 않고 바로 시간이 뜸
setInterval(getClock, 1000);