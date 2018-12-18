class Weather {
    constructor(postcode){
        this.apiKey = '4a5f8c5a40e1051c439b1402c86fec6f';
        this.postcode = postcode;
    }

    // Fetch Weather from API
    async getWeather(postcode){

        const tempResponse = await fetch(`//api.openweathermap.org/data/2.5/weather?zip=${this.postcode},gb&units=metric&APPID=${this.apiKey}`);

        const responseData = await tempResponse.json();
   
        return responseData;
        
    }

    // Change Weather Location
    changePostcode(postcode){
        this.postcode = postcode;
    }

}