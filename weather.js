
fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?q=palakkad`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))