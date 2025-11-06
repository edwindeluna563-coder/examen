const URL = 'https://api.open-meteo.com/v1/forecast?latitude=21.8823&longitude=-102.2826&hourly=temperature_2m';

const btn = document.getElementById('btn');
const cards = document.getElementById('cards');

btn.addEventListener('click', function (){
    fetch (URL)
    .then(function (res){return res.json() })
    .then(function(data){
        const horas = data.hourly.time.slice(0,3)
        const temps = data.hourly.temperature_2m.slice(0,3)
        
        let html = ''
        for (let i = 0; i < horas.length; i++){
            html += `
            <div class="card">
            <div class="card-body">
            <h5 class = "card-title"> ${temps[i]}°C</h5>
            <h5 class = "card-title"> Hora:  ${horas[i]}°C</h5>
            </div>
            </div>
            `
        }
        cards.innerHTML = html
    }).catch(function () {
        alert ("ERROR")
    })
})