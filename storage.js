class Storage{
    constructor(city, country){
        this.city = city;
        this.country = country;
        this.defaultCity = 'Himatnagar';
        this.defaultCountry = 'IN';
    }

    getStorage(){

        if(localStorage.getItem('City') === null){
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('City');
        }

        if(localStorage.getItem('Country') === null){
            this.country = this.defaultCountry;
        } else {
            this.country = localStorage.getItem('Country');
        }

        return {
            city: this.city,
            country: this.country
        }

    }

    setStorage(city, country){
        localStorage.setItem('City', city);
        localStorage.setItem('Country', country);
    }
}