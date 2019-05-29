class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.temp = document.getElementById('w-temp');
        this.country = document.getElementById('w-country');
        this.humidity = document.getElementById('w-humidity');
        this.temp_max = document.getElementById('w-temp-max');
        this.temp_min = document.getElementById('w-temp-min');
        this.wind = document.getElementById('w-wind');
    }

    showUi(weather){
        this.temp.textContent = `Temp : ${weather.main.temp}`;
        this.location.textContent = weather.name;
        this.country.textContent = weather.sys.country;
        this.humidity.textContent = `Humidity : ${weather.main.humidity}`;
        this.temp_max.textContent = `Max Temp : ${weather.main.temp_max}`;
        this.temp_min.textContent = `Min Temp : ${weather.main.temp_min}`;
        this.wind.textContent = `Wind Speed : ${weather.wind.speed}`;

    }
}