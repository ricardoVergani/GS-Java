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

// Validacao Login






const form = document.querySelector(".loginForm")
const user = document.querySelector("#idUsername")
const pass = document.querySelector("#idPass")

form.addEventListener('submit', (e)=> {
    e.preventDefault()

    checkInputs()
});

function checkInputs(){

    const usernameValue = user.value.trim();
    const passwordValue = pass.value.trim();
    let contName = 0;
    let contPass = 0;
    
    if(usernameValue === "" || usernameValue == undefined || usernameValue == null){
        setErrorFor(user, "Preencha esse campo")
    }else if(usernameValue != "admin"){
        setErrorFor(user, "Nome de usuário incorreto")
    }else{
        setSuccessFor(user)
        contName = 1
    }


    if(passwordValue === "" || passwordValue === undefined || passwordValue === null){
        setErrorFor(pass, "Preencha esse campo")
    }else if(passwordValue != 123456){
        setErrorFor(pass, "Senha Incorreta")
    }else{
        setSuccessFor(pass)
        contPass = 1
    }



    if(contName === 1 && contPass === 1){
        location.href = "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021"
    }
   
}


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    small.innerText = message

    formControl.className = "form-control error"
}


function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = "form-control success"
}
