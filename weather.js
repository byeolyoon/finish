const API_KEY = "6cc06d9eed4f5ee8019eaf85054164a1";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
       const weather = document.querySelector("#weather span:first-child");
       const city = document.querySelector("#weather span:last-child");

       city.innerText = data.name;
       weather.innerText = `${data.weather[0].main} 날씨이며 ${data.main.temp}도 입니다`
    });
}

function onGeoError(){
    alert("Can 't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)


