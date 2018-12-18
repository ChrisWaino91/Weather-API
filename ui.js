class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.sunrise = document.getElementById('w-dewpoint');
        this.sunset = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp + '°C';
        this.icon.textContent = weather.weather[0].icon;
        this.humidity.textContent = 'Relative Humidity: ' + weather.main.humidity + '%';
            let sunrise = new Date(1000*weather.sys.sunrise);
            let sunriseHours = sunrise.getHours();
            let sunriseMins = sunrise.getMinutes();
        this.sunrise.textContent = 'Sunrise: ' + sunriseHours + ':' + sunriseMins + 'am';
            let sunset = new Date(1000*weather.sys.sunset);
            let sunsetHours = sunset.getHours();
            let sunsetMins = sunset.getMinutes();
        this.sunset.textContent = 'Sunset: ' +  sunsetHours + ':' +sunsetMins + 'pm';
        this.wind.textContent = 'Wind Speed: ' + weather.wind.speed + ' mph';
    }
}