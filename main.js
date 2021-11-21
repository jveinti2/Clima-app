window.addEventListener('load', ()=>{
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(poss =>{
            lon = poss.coords.longitude
            lat = poss.coords.latitude

            const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cd29f37f99cae462d478a2535677c0d5

            console.log(url)
        })
    }
})