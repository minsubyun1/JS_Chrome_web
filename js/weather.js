
const API_KEY ="dbcc7122d57ecf75264accc59f7faaf7";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather= document.querySelector("#weather div:first-child");
        const city = document.querySelector("#weather div:last-child");
      city.innerText = " Region: " + data.name;
     weather.innerText = `  ${" Today weather: "+data.weather[0].main} ${data.main.temp + "°"}`
    });
}
function onGeoError() {
    alert("Can't find you. no weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);