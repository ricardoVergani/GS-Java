
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
