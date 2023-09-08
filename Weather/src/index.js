import './scripts/component/app-bar';
import './scripts/component/search-bar';
import './scripts/component/footer-bar';
import './style/style.css';

let searchElement = document.querySelector('search-bar');

const buttonSearchClicked = () => {
    // HTTP request 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchElement.value}&appid=43dd03f41055fb674d81425bff0de0b1`)
    .then(response => response.json())
    .then(response => {
                let resultWeather = document.querySelector('#result');
                // add html element to result
                resultWeather.innerHTML = `
                <h1>${response.name}, ${response.sys.country}</h1>
                <div class="cuaca">
                    <h2 class="derajat">${(response.main.temp-273.15).toFixed(2)}°C</h2>
                    <h2 class="kondisi">${response.weather[0].description}</h2>
                </div>
                <h5>${(response.main.temp_min-273.15).toFixed(2)}°C to ${(response.main.temp_max-273.15).toFixed(2)}°C</h5>
                <h3>Wind Speed: ${response.wind.speed} m/s</h3>
                <h3>Humadity: ${response.main.humidity}%</h3>
                <h2>Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</h2>
                `;
        }
    );
};

searchElement.clickEvent = buttonSearchClicked;


