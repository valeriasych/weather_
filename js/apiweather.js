const inputCity = document.getElementById("city"),
inputTemp = document.getElementById("temperature"),
inputPrep = document.getElementById("prep"),
inputHum = document.getElementById("hum"),
inputWind = document.getElementById("wind"),
img = document.createElement('img'),
container = document.getElementById("picture"),
apikey = "a49c74e3b2b7475d9b965135232509";

let api;
let apiday;
let place="Осло";

alert('test new branch');

requestApi(place);

setTimeout(function(){
	location.reload();
}, 3600000);

function requestApi(){
    api = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${place}&lang=ru&&aqi=no`; 
    apiday = `http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${place}&lang=ru&&aqi=no`; 
	fetchData();
    fetchDay();
}

function fetchData(){
    fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() =>{
      errorfetch;
   });
}

function fetchDay(){
    fetch(apiday).then(res => res.json()).then(result => weatherDetails(result)).catch(() => {
        errorfetch;
    })
}

function errorfetch(){
    inputCity.innerText = "Что-то пошло не так";
    inputTemp.innerText = "...";
    inputPrep.innerText = "";
    inputHum.innerText = "";
    inputWind.innerText = "";
}

function weatherDetails(info){
	
    city = info.location["name"];
    temp = info.current["temp_c"];
    forcst = info.forecast.forecastday[0];
    prep = forcst.day["daily_chance_of_rain"];
    hum = info.current["humidity"];
    wind =  info.current["wind_kph"];
    icn = info.forecast.forecastday[0];
    img.src = "https:" + icn.day.condition.icon;
   
    inputCity.innerText = place;
    inputTemp.innerText = Math.floor(temp);
    inputPrep.innerText = "Вероятность осадков: " + prep  + "%"; 
    inputHum.innerText = "Влажность: " + hum + "%";
    inputWind.innerText = "Ветер: " + wind + " м/с";
    container.append(img);

}

