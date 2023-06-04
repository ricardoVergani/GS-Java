// Relogio JS

function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds();

    var months = ["Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    var week = ["Domingo","Segunda","Terca","Quarta","Quinta","Sexta","Sabado"];
    var ids = ["dayName","month","dayNum","year","hour","minutes","seconds"];
    var values = [week[dname],months[mo],dnum,yr,hou,min,sec];
    for(var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];

}
    
function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}




// Dark Mode JS
const isDarkMode = localStorage.getItem('darkMode') === 'true';


function toggleDarkMode() {
  const body = document.body;


  body.classList.toggle('dark-mode');


  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}


const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', toggleDarkMode);


if (isDarkMode) {
  document.body.classList.add('dark-mode');
}





// Carrosel JS


const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

let idx = 0;

function carrosel(){
    idx ++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 200}px)`;


}

setInterval(carrosel,1800);