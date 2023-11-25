document.addEventListener("DOMContentLoaded", function () {
    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');
    const imagemBox = document.querySelector(".imagem-box img");
    const body = document.body;

    function updateTime() {
        let dateToday = new Date();
        let hr = dateToday.getHours();
        let min = dateToday.getMinutes();
        let s = dateToday.getSeconds();

        if (hr < 10) hr = '0' + hr;
        if (min < 10) min = '0' + min;
        if (s < 10) s = '0' + s;

        horas.textContent = hr;
        minutos.textContent = min;
        segundos.textContent = s;
    }

    const relogio = setInterval(function () {
        updateTime();

        let dateToday = new Date();
        let hr = dateToday.getHours();

     
        const imagens = {
            manha: "morning.gif",
            meioDia: "midday.gif",
            tarde: "day.gif",
            porDoSol: "sunset.gif",
            noite: "night.gif",
        };

        if (hr >= 6 && hr < 12) {
            body.className = "fundo-manha";
            imagemBox.src = imagens.manha;
        } else if (hr >= 12 && hr < 14) {
            body.className = "fundo-meio-dia";
            imagemBox.src = imagens.meioDia;
        } else if (hr >= 14 && hr < 18) {
            body.className = "fundo-tarde";
            imagemBox.src = imagens.tarde;
        } else if (hr >= 18 && hr < 20) {
            body.className = "fundo-por-do-sol";
            imagemBox.src = imagens.porDoSol;
        } else if (hr >= 20 || hr < 6) {
            body.className = "fundo-noite";
            imagemBox.src = imagens.noite;
        }
    }, 1000);

   
    updateTime();
});
