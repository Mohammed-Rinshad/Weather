let search = document.getElementById('search')
let temperature = document.getElementById('temp')
let feelsLike = document.getElementById('feels-like-results')
let highTemp = document.getElementById('high-temp-results')
let placeName = document.getElementById('place-name')
let lowTemp = document.getElementById('low-temp-results')
let time = document.getElementById('time')
let timezone = document.getElementById('timezone')
let humidity = document.getElementById('humidity-results')
let windSpeed = document.getElementById('wind-speed-results')
let pressure = document.getElementById('pressure-results')
let locationPin = document.getElementById('location-pin')
temperature.textContent = '~'


                                    // SIDE MENU AND WEATHER CARDS DOCUMENTATION

let sideMenu = document.getElementById('side-bar')
let weatherWidgetInput = document.getElementById('weather-cards')
let weatherWidgetBtn = document.getElementById('add-btn')
let weatherWidgetBody = document.getElementById('weather-cards-div')
let weatherWidgetCrossline = document.getElementById('widget-crossline')
let weatherWidgetPlace = document.getElementById('weather-cards-place')
let weatherWidgetTemp = document.getElementById('weather-cards-temp')
let weatherWidgetTime = document.getElementById('weather-cards-time')
let weatherWidgetMinMaxTemp = document.getElementById('weather-cards-max-min-temp')
let weatherWidgetHumidity = document.getElementById('weather-cards-humidity')



// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAfBx7IK6n3j_K_0UrH8Q03DmaXN1A0rY8",
//     authDomain: "login-weather-2af60.firebaseapp.com",
//     databaseURL: "https://login-weather-2af60-default-rtdb.firebaseio.com",
//     projectId: "login-weather-2af60",
//     storageBucket: "login-weather-2af60.appspot.com",
//     messagingSenderId: "620657765692",
//     appId: "1:620657765692:web:a8fa84094e9bbac6458239"
//   };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// const db = getDatabase();




search.addEventListener('keydown', (e) =>{
    if(e.key === 'Enter'){
        getData(search.value)
    }
})

navigator.geolocation.getCurrentPosition(function(position) {
    showPosition(position);
    getData(); 
});


let latitude;
let longitude;

async function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}
    /*const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ latitude  +'&lon='+ longitude +'&appid=e3d12c319691e524cefe4f135ee68935&units=metric'
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    const urlTime = 'https://api.api-ninjas.com/v1/worldtime?lat='+ latitude + '&lon=' + longitude
    const request = new Request(urlTime,{
        headers:{
            'X-Api-Key': 'QXoElErY68BxhS8kLRPRthnabMLNLDvQeR52fUGT'
        }
    })
    const resTime = await fetch(request)
    const dataTime = await resTime.json()
    console.log(dataTime.hour)
    console.log(dataTime.minute)

    if(data.cod === 200){
        temperature.textContent = data.main.temp.toFixed(0) + "°"
        temperature.style.color = "white"
        feelsLike.textContent = data.main.feels_like.toFixed(0) + "°"
        highTemp.textContent = data.main.temp_max.toFixed(0) + "°"
        placeName.textContent = data.name
        lowTemp.textContent = data.main.temp_min.toFixed(0) + "°"
        time.textContent = dataTime.hour + ':' + dataTime.minute 
        timezone.textContent = dataTime.timezone
        humidity.textContent = data.main.humidity
        windSpeed.textContent = data.wind.speed
        pressure.textContent = data.main.pressure
        locationPin.style.display = "block"

    } else{
        temperature.textContent = 'City not Found'
        temperature.style.color = "red"
        placeName.textContent = ''
        time.textContent = ''
        timezone.textContent = ''
        feelsLike.textContent = '~'
        highTemp.textContent = '~'
        lowTemp.textContent = '~'
        humidity.textContent = '~'
        windSpeed.textContent = '~'
        pressure.textContent = '~'
        locationPin.style.display = "none"
        
    }
}
showPosition()*/


async function getData(){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+search.value+'&lat='+ latitude + '&lon='+ longitude +'& &appid=e3d12c319691e524cefe4f135ee68935&units=metric'
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    const urlTime = 'https://api.api-ninjas.com/v1/worldtime?lat='+ data.coord.lat+ '&lon=' + data.coord.lon
    const request = new Request(urlTime,{
        headers:{
            'X-Api-Key': 'b2SRNiptGYDO4FEPDQ4IVkgkVowJdT830GIUBvuH'
        }
    })
    const resTime = await fetch(request)
    const dataTime = await resTime.json()
    console.log(dataTime.hour)
    console.log(dataTime.minute)

    if(latitude === undefined){
        temperature.textContent = '~'
    }else if(data.cod === 200){
        temperature.textContent = data.main.temp.toFixed(0) + "°"
        temperature.style.color = "white"
        feelsLike.textContent = data.main.feels_like.toFixed(0) + "°"
        highTemp.textContent = data.main.temp_max.toFixed(0) + "°"
        placeName.textContent = data.name
        lowTemp.textContent = data.main.temp_min.toFixed(0) + "°"
        time.textContent = dataTime.hour + ':' + dataTime.minute
        timezone.textContent = dataTime.timezone
        humidity.textContent = data.main.humidity
        windSpeed.textContent = data.wind.speed
        pressure.textContent = data.main.pressure
        locationPin.style.display = "block"

    } else{
        temperature.textContent = 'City not Found'
        temperature.style.color = "red"
        placeName.textContent = ''
        time.textContent = ''
        timezone.textContent = ''
        feelsLike.textContent = '~'
        highTemp.textContent = '~'
        lowTemp.textContent = '~'
        humidity.textContent = '~'
        windSpeed.textContent = '~'
        pressure.textContent = '~'
        locationPin.style.display = "none"
        
    }
    


}

async function createWeatherWidget(city) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e3d12c319691e524cefe4f135ee68935&units=metric';
    const res = await fetch(url);
    const data = await res.json();

    const urlTime = 'https://api.api-ninjas.com/v1/worldtime?lat=' + data.coord.lat + '&lon=' + data.coord.lon;
    const request = new Request(urlTime, {
        headers: {
            'X-Api-Key': 'b2SRNiptGYDO4FEPDQ4IVkgkVowJdT830GIUBvuH'
        }
    });
    const resTime = await fetch(request);
    const dataTime = await resTime.json();

    let newWeatherWidgetBody = document.createElement('div');
    newWeatherWidgetBody.classList.add('weather-cards-div');

    let newWeatherWidgetCrossline = document.createElement('img');
    newWeatherWidgetCrossline.classList.add('widget-crossline');
    newWeatherWidgetCrossline.src = 'https://fontkiko.com/storage/kiko/icons/cross-line/regular/cross-line.png';
    newWeatherWidgetCrossline.addEventListener('click', () => {
        deleteWeatherWidget(city, newWeatherWidgetBody);
    });

    let newWeatherWidgetPlace = document.createElement('h1');
    newWeatherWidgetPlace.classList.add('weather-cards-place');
    newWeatherWidgetPlace.textContent = data.name;

    let newWeatherWidgetTemp = document.createElement('h1');
    newWeatherWidgetTemp.classList.add('weather-cards-temp');
    newWeatherWidgetTemp.textContent = data.main.temp.toFixed(0) + "°";

    let newWeatherWidgetTime = document.createElement('h1');
    newWeatherWidgetTime.classList.add('weather-cards-time');
    newWeatherWidgetTime.textContent = dataTime.hour + ':' + dataTime.minute;

    let newWeatherWidgetMinMax = document.createElement('h1');
    newWeatherWidgetMinMax.classList.add('weather-cards-max-min-temp');
    newWeatherWidgetMinMax.textContent = data.main.temp_max.toFixed(0) + "°" + "/" + data.main.temp_min.toFixed(0) + "°";

    let newWeatherWidgetHumidity = document.createElement('h1');
    newWeatherWidgetHumidity.classList.add('weather-cards-humidity');
    newWeatherWidgetHumidity.textContent = 'Humidity: ' + data.main.humidity + "%";

    newWeatherWidgetBody.appendChild(newWeatherWidgetCrossline);
    newWeatherWidgetBody.appendChild(newWeatherWidgetPlace);
    newWeatherWidgetBody.appendChild(newWeatherWidgetTemp);
    newWeatherWidgetBody.appendChild(newWeatherWidgetTime);
    newWeatherWidgetBody.appendChild(newWeatherWidgetMinMax);
    newWeatherWidgetBody.appendChild(newWeatherWidgetHumidity);

    document.getElementById('weather-cards-div').appendChild(newWeatherWidgetBody);
}

async function deleteWeatherWidget(city, widgetElement) {
    let weatherWidgetArray = JSON.parse(localStorage.getItem('Addcity')) || [];
    weatherWidgetArray = weatherWidgetArray.filter(item => item !== city);
    localStorage.setItem('Addcity', JSON.stringify(weatherWidgetArray));
    widgetElement.remove();
}


async function WidgetClick() {
    let weatherWidgetInput = document.getElementById('weather-cards');
    if (weatherWidgetInput.value !== '') {
        let weatherWidgetArray = JSON.parse(localStorage.getItem('Addcity')) || [];

        // Check if the city already exists in the array
        if (!weatherWidgetArray.includes(weatherWidgetInput.value)) {
            weatherWidgetArray.push(weatherWidgetInput.value);
            localStorage.setItem('Addcity', JSON.stringify(weatherWidgetArray));
            weatherWidgetInput.value = '';

            // Create a weather widget for the last added city only
            await createWeatherWidget(weatherWidgetArray[weatherWidgetArray.length - 1]);
            document.getElementById('existing-text').style.display = "none"

        } else {
            // console.log('City already added.');
            document.getElementById('existing-text').style.display = "block"
            weatherWidgetInput.value = '';

        }
    }
}

async function loadWeatherWidgets() {
    let weatherWidgetArray = JSON.parse(localStorage.getItem('Addcity')) || [];
    for (let i = 0; i < weatherWidgetArray.length; i++) {
        await createWeatherWidget(weatherWidgetArray[i]);
    }
}

// Load weather widgets on page load
window.onload = loadWeatherWidgets;





    document.getElementById("menu-img").addEventListener('click',function(){
        sideMenu.style.left = "0"
    })

    document.getElementById("crossline-img").addEventListener('click',function(){
        sideMenu.style.left = "-250px"

    })


setTimeout(function(){
    getData()
},3000)
showPosition()


// function showSignUp() {
//     document.getElementById('login-form').style.display = 'none';
//     document.getElementById('signup-form').style.display = 'block';
// }

// function showLogin() {
//     document.getElementById('signup-form').style.display = 'none';
//     document.getElementById('login-form').style.display = 'block';
// }