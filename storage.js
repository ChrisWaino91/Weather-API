class Storage {
    constructor(){
        this.city;
        this.state;
        this.defaultPostcode = 'TS5';
    }

    getLocationData(){
        if (localStorage.getItem('postcode') === null){
            this.postcode = this.defaultPostcode;
        } else {
            this.postcode = localStorage.getItem('postcode');
        }

        return {
            postcode: this.postcode
        }
    }

    setLocationData(postcode){
        localStorage.setItem('postcode', postcode);
    }
}