const inputCity = document.getElementById("city"),
inputTemp = document.getElementById("temperature"),
inputPrep = document.getElementById("prep"),
inputHum = document.getElementById("hum"),
inputWind = document.getElementById("wind"),
apikey = "a49c74e3b2b7475d9b965135232509";

let api;
let place="Норильск";

requestApi(place);

function requestApi(){
    api = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${place}&lang=ru&&aqi=no`; 
	fetchData();
}

function fetchData(){
    fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() =>{
        inputCity.innerText = "Что-то пошло не так";
        inputTemp.innerText = "...";
        inputPrep.innerText = "";
        inputHum.innerText = "";
        inputWind.innerText = "";
        inputWind.innerText = "";
   });
}

function weatherDetails(info){
	
    city = info.location["name"];
    temp = info.current["temp_c"];
   // prep = info.day["daily_chance_of_rain"];
    hum = info.current["humidity"];
    wind =  info.current["wind_kph"];
   
    inputCity.innerText = place;
    inputTemp.innerText = Math.floor(temp);
    //inputPrep.innerText = "Вероятность осадков: " + prep  + "%"; 
    inputHum.innerText = "Влажность: " + hum + "%";
    inputWind.innerText = "Ветер: " + wind + " м/с";

}

