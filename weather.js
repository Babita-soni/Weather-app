const apiKey = "c33b99856b9b16a49c543110de5dcdca";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
   
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    // console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "Kmph";

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "images/drizzle.png";
    }
    else{
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
}
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
