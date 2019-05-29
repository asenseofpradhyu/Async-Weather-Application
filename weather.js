class Weather{
    constructor(city, country){
        // Use your apikey 
        this.apikey='****************'; 
        this.city = city;
        this.country = country;
    }

    async getweather(){
        // Here i'm using Openweather API
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apikey}`);

        const resposeData = await response.json();
        // console.log(resposeData);
        return resposeData;
    }

    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }
}