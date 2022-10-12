var city = document.getElementById("current-location");




// record value of entered city
const searchButton = (event) =>{
    var cityName = document.querySelector('.city-value').value;
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);


    city.innerHTML = cityName;
}

