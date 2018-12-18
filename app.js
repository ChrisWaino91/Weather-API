// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Initialise Weather
const weather = new Weather(weatherLocation.postcode);

// Init UI
const ui = new UI();



// Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) =>  {
    const postcode = document.getElementById('postcode').value;

    // Change Postcode
    weather.changePostcode(postcode);

    // Set new location to local storage
    storage.setLocationData(postcode);

    // Get and display weather
    getWeather();

    //Close modal
    $('#locModal').modal('hide');
})


function getWeather(){
weather.getWeather()
.then(results => {
    console.log(results);
    ui.paint(results);
})
.catch(err => console.log(err));
}

