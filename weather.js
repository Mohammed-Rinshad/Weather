let search = document.getElementById('search')
let temperature = document.getElementById('temp')
let feelsLike = document.getElementById('feels-like-results')
let highTemp = document.getElementById('high-temp-results')
let placeName = document.getElementById('place-name')
let lowTemp = document.getElementById('low-temp-results')
let time = document.getElementById('time')
let timezone = document.getElementById('timezone')
temperature.textContent = '~'

async function getData(){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+search.value+'&appid=e3d12c319691e524cefe4f135ee68935&units=metric'
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    const urlTime = 'https://api.api-ninjas.com/v1/worldtime?city='+ data.name
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

    } else{
        temperature.textContent = 'City not Found'
        temperature.style.color = "red"
        placeName.textContent = ''
        time.textContent = ''
        timezone.textContent = ''
        feelsLike.textContent = '~'
        highTemp.textContent = '~'
        lowTemp.textContent = '~'
    }

   /* if((dataTime.hour >= '6') || (dataTime.hour <= '18')){
        console.log('day')
    }else{
        console.log('night')
    }*/


}


//getData()

//.then(res => res.json())
//.then(data => console.log(data))
//.catch(error => console.log(error))


