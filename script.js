let city = 'Lviv';
let newCity = document.querySelector('input');
let img = document.querySelector(".weatherIconImg");
let apiKey = "343d33d71141f1623d91c8c8aab91982";
let lat;
let lon;
let humidity = document.querySelectorAll(".temp");
let wind = document.querySelectorAll(".wind");
let mW = document.querySelectorAll(".mW");
let nextDayWeatherImg = document.querySelectorAll(".nextDayWeatherImg");

document.querySelector("input").addEventListener("keypress", showNewCity);

function showNewCity(e) {
    if (e.key === 'Enter') {
        city = newCity.value;
        showWeather(city)
    }
}

function showWeather(e) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + `${city}` + "&appid=bf35cac91880cb98375230fb443a116f";
    fetch(url)
        .then(response =>
            response.json()
        )
        .then(data => {
            console.log(data)
            lat = data.coord.lat;
            lon = data.coord.lon;
            document.querySelector(".cityNameLogo").innerHTML = data.name;
            document.querySelector(".day").innerHTML = now;
            document.querySelector(".temperature").innerHTML = Math.round(data.main.temp - 272) + '&deg';
            document.querySelector(".feelsLike").innerHTML = 'Feels like ' + Math.round(data.main.feels_like - 272) + '&deg';
            document.querySelector(".mainWeather").innerHTML = data.weather[0].main;
            document.querySelector("#p1").innerHTML = data.wind.speed + ' m/s';
            document.querySelector("#p2").innerHTML = data.main.humidity + ' %';
            if (data.weather[0].main == 'Thunderstorm') {
                img.src = './img/thunderstorm.png'
            }
            if (data.weather[0].main == 'Drizzle') {
                img.src = './img/drizzle.png'
            }
            if (data.weather[0].main == 'Rain') {
                img.src = './img/rain.png'
            }
            if (data.weather[0].main == 'Snow') {
                img.src = './img/snow.png'
            }
            if (data.weather[0].main == 'Clear' && (Number(today.getHours()) >= 7 && Number(today.getHours()) <= 19)) {
                img.src = './img/sun.png'
            }
            if (data.weather[0].main == 'Clear' && (Number(today.getHours()) <= 7 || Number(today.getHours()) >= 19)) {
                img.src = './img/moon.png'
            }
            if (data.weather[0].main == 'Clouds') {
                img.src = './img/clouds.png'
            }


            let url1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${apiKey}&units=metric`;
            fetch(url1)
                .then(response =>
                    response.json()
                )
                .then(data =>{
                    for(let i = 0; i < humidity.length; i++){
                        humidity[i].innerHTML = 'Temperature ' + data.daily[i + 1].temp.day + '&deg';
                        wind[i].innerHTML = 'Wind ' + data.daily[i + 1].wind_speed + ' m/s';
                        mW[i].innerHTML = data.daily[i + 1].weather[0].main;

                        if (data.daily[i + 1].weather[0].main == 'Thunderstorm') {
                            nextDayWeatherImg[i].src = './img/thunderstorm.png'
                        }
                        if (data.daily[i + 1].weather[0].main == 'Drizzle') {
                            nextDayWeatherImg[i].src = './img/drizzle.png'
                        }
                        if (data.daily[i + 1].weather[0].main == 'Rain') {
                            nextDayWeatherImg[i].src = './img/rain.png'
                        }
                        if (data.daily[i + 1].weather[0].main == 'Snow') {
                            nextDayWeatherImg[i].src = './img/snow.png'
                        }
                        if (data.daily[i + 1].weather[0].main == 'Clear' && (Number(today.getHours()) >= 7 && Number(today.getHours()) <= 19)) {
                            nextDayWeatherImg[i].src = './img/sun.png'
                        }
                        if (data.daily[i + 1].weather[0].main == 'Clear' && (Number(today.getHours()) <= 7 || Number(today.getHours()) >= 19)) {
                            nextDayWeatherImg[i].src = './img/moon.png'
                        }
                        if (data.daily[i + 1].weather[0].main == 'Clouds') {
                            nextDayWeatherImg[i].src = './img/clouds.png'
                        }
                    }
                })
        })
}

showWeather();