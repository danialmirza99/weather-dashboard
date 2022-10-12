var city = document.getElementById("current-location");
var firstDate = document.getElementById("one-date");
var secondDate = document.getElementById("two-date");
var thirdDate = document.getElementById("three-date");
var fourthDate = document.getElementById("four-date");
var fifthDate = document.getElementById("five-date");

var currentWind = document.getElementById("current-wind");
var firstWind = document.getElementById("one-day-wind");
var secondWind = document.getElementById("two-day-wind");
var thirdWind = document.getElementById("three-day-wind");
var fourthWind = document.getElementById("four-day-wind");
var fifthWind = document.getElementById("five-day-wind");

var currentTemp = document.getElementById("current-temp");
var firstTemp = document.getElementById("one-day-temp");
var secondTemp = document.getElementById("two-day-temp");
var thirdTemp = document.getElementById("three-day-temp");
var fourthTemp = document.getElementById("four-day-temp");
var fifthTemp = document.getElementById("five-day-temp");

var currentHumidity = document.getElementById("current-humidity");
var firstHumidity = document.getElementById("one-day-humidity");
var secondHumidity = document.getElementById("two-day-humidity");
var thirdHumidity = document.getElementById("three-day-humidity");
var fourthHumidity = document.getElementById("four-day-humidity");
var fifthHumidity = document.getElementById("five-day-humidity");

var currentIcon = document.getElementById("current-icon");
var firstIcon = document.getElementById("one-day-icon");
var secondIcon = document.getElementById("two-day-icon");
var thirdIcon = document.getElementById("three-day-icon");
var fourthIcon= document.getElementById("four-day-icon");
var fifthIcon = document.getElementById("five-day-icon");


// record value of entered city
const searchButton = (event) =>{
    var cityName = document.querySelector('.city-value').value;
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    // cityName = "Miami";
    
    fetch("https://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&appid=239391e5829e93d40ba73fc38797a87d")
        .then(function (res){
            return res.json();
        })
    .then(function(data){
        var long = data[0].lon;
        var lat = data[0].lat;
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+"&units=imperial&exclude=minutely,hourly&appid=239391e5829e93d40ba73fc38797a87d")
        .then(function (res){
            return res.json();
        })
        .then(function(data){
            var currDate = data.list[0].dt_txt.slice(0, -9);
            var oneDate = data.list[5].dt_txt.slice(0, -9);
            var twoDate = data.list[13].dt_txt.slice(0, -9);
            var threeDate = data.list[21].dt_txt.slice(0, -9);
            var fourDate = data.list[29].dt_txt.slice(0, -9);
            var fiveDate = data.list[37].dt_txt.slice(0, -9);
            console.log(data.list)
            city.innerHTML = cityName + " " + currDate;
            
            firstDate.innerHTML = oneDate;
            secondDate.innerHTML = twoDate;
            thirdDate.innerHTML = threeDate;
            fourthDate.innerHTML = fourDate;
            fifthDate.innerHTML = fiveDate;

            var currWind = data.list[0].wind.speed;
            var oneWind = data.list[5].wind.speed;
            var twoWind = data.list[13].wind.speed;
            var threeWind = data.list[21].wind.speed;
            var fourWind = data.list[29].wind.speed;
            var fiveWind = data.list[37].wind.speed;

            currentWind.innerHTML = "Wind: " + currWind + " MPH";
            firstWind.innerHTML = "Wind: " + oneWind + " MPH";
            secondWind.innerHTML = "Wind: " + twoWind + " MPH";
            thirdWind.innerHTML = "Wind: " + threeWind + " MPH";
            fourthWind.innerHTML = "Wind: " + fourWind + " MPH";
            fifthWind.innerHTML = "Wind: " + fiveWind + " MPH";


            var currTemp = data.list[0].main.temp;
            var oneTemp = data.list[5].main.temp;
            var twoTemp = data.list[13].main.temp;
            var threeTemp = data.list[21].main.temp;
            var fourTemp= data.list[29].main.temp;
            var fiveTemp = data.list[37].main.temp;

            currentTemp.innerHTML = "Temp: " + currTemp + " °F";
            firstTemp.innerHTML = "Temp: " + oneTemp + " °F";
            secondTemp.innerHTML = "Temp: " + twoTemp + " °F";
            thirdTemp.innerHTML = "Temp: " + threeTemp + " °F";
            fourthTemp.innerHTML = "Temp: " + fourTemp + " °F";
            fifthTemp.innerHTML = "Temp: " + fiveTemp + " °F";


            var currHumidity = data.list[0].main.humidity;
            var oneHumidity = data.list[5].main.humidity;
            var twoHumidity = data.list[13].main.humidity;
            var threeHumidity = data.list[21].main.humidity;
            var fourHumidity= data.list[29].main.humidity;
            var fiveHumidity = data.list[37].main.humidity;

            currentHumidity.innerHTML = "Humidity: " + currHumidity + " %";
            firstHumidity.innerHTML = "Humidity: " + oneHumidity + " %";
            secondHumidity.innerHTML = "Humidity: " + twoHumidity + " °%";
            thirdHumidity.innerHTML = "Humidity: " + threeHumidity + " %";
            fourthHumidity.innerHTML = "Humidity: " + fourHumidity + " %";
            fifthHumidity.innerHTML = "Humidity: " + fiveHumidity + " %";

            console.log(data.list[0].weather[0].icon)

            var currIcon = data.list[0].weather[0].icon;
            var oneIcon = data.list[5].weather[0].icon;
            var twoIcon = data.list[13].weather[0].icon;
            var threeIcon = data.list[21].weather[0].icon;
            var fourIcon= data.list[29].weather[0].icon;
            var fiveIcon = data.list[37].weather[0].icon;

            currentIcon.innerHTML = currIcon;
            firstIcon.innerHTML = OneIcon;
            secondIcon.innerHTML = TwoIcon;
            thirdIcon.innerHTML = threeIcon;
            fourthIcon.innerHTML = fourIcon;
            fifthIcon.innerHTML = fiveIcon;
            
        })
    })
}


