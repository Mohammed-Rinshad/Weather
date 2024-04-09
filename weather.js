
fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?q=palakkad?${zae6LQDSYRn3AQLQ5XVnjGkAhM1BiZ3l}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))