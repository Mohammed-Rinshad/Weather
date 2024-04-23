let search = document.getElementById('search')
let temperature = document.getElementById('temp')
let feelsLike = document.getElementById('feels-like-results')

async function getData(){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+search.value+'&appid=e3d12c319691e524cefe4f135ee68935&units=metric'
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    if(data.cod === 200){
        temperature.textContent = data.main.temp.toFixed(0) + "°"
        temperature.style.color = "white"
        feelsLike.textContent = data.main.feels_like.toFixed(0) + "°"
    } else{
        temperature.textContent = 'City not Found'
        temperature.style.color = "red"
    }

}


//getData()

//.then(res => res.json())
//.then(data => console.log(data))
//.catch(error => console.log(error))


