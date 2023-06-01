


const form = document.querySelector(".form");
const username = document.querySelector("#idName");
const tell = document.querySelector("#idTel");
const email = document.querySelector("#idEmail");


form.addEventListener('submit', (e)=> {
    e.preventDefault()

    checkInputs()
});

function checkInputs(){

    const usernameValue = username.value.trim()
    const tellValue = tell.value.trim()
    const emailValue = email.value.trim()

    if(usernameValue === "" ){
        setErrorFor(username, "Preencha esse campo")
    }else{
        setSuccessFor(username)
        
    }


    if(tellValue === ""){
        setErrorFor(tell, "Preencha esse campo")
    }else if(tellValue.length < 8){
        setErrorFor(tell, "Digite um telefone válido")
    }else{
        setSuccessFor(tell)
    }


    if(emailValue === ""){
        setErrorFor(email, "Preencha esse campo")
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Email inválido")
    }else{
        setSuccessFor(email)
        location.href = "index.html"
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


function isEmail(email){
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}