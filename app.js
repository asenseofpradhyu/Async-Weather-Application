// Init
const storage = new Storage;
const weatherStorage = storage.getStorage();
// Init Weather
const weather = new Weather(weatherStorage.city, weatherStorage.country);
// Init UI
const ui = new UI;

document.addEventListener("DOMContentLoaded", onloadDom);

document.getElementById('w-change-btn').addEventListener('click', (e) => {

    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);

    storage.setStorage(city, country);
    onloadDom();

    $('#locationModal').modal('hide');

    e.preventDefault();
});


function onloadDom(){
    weather.getweather()
        .then(result => {
            ui.showUi(result);
            // console.log(result);
        })
        .catch(error => console.error(error));
}