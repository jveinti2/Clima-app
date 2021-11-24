window.addEventListener('load', ()=>{
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(poss =>{
            // lon = poss.coords.longitude
            // lat = poss.coords.latitude

            //Referencia elementos del Dom
            let temperaturaValor = document.getElementById('temperatura-valor')
            let temperaturaDescripcion = document.getElementById('temperatura-descripcion')
            let ubicacion = document.getElementById('ubicacion')
            let iconoAnimado = document.getElementById('icono-animado')
            let vientoVelocidad = document.getElementById('viento-velocidad')

            //Captura de API
            const url =  `https://api.openweathermap.org/data/2.5/weather?q=Barrancabermeja&appid=cd29f37f99cae462d478a2535677c0d5`
            
            
            fetch(url)
                .then(response => {return response.json() })
                .then(data => {
                    console.log(data)
                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = `${temp} °C`
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }
})