function fazPost(url, body){
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        window.alert(this.responseText)
    }

} 

function enviarMensagem(){
event.preventDefault()
let url = "https://api-pizzaria.netlify.app/.netlify/functions/api/v1/funcionario/"
let nome = document.getElementById("nome").value
let rg = document.getElementById("rg").value
let cpf = document.getElementById("cpf").value
let telefone = document.getElementById("telefone").value
let email = document.getElementById("email").value
let senha = document.getElementById("senha").value

let body = {
    "nome": nome, 
    "rg": rg, 
    "cpf": cpf,
    "telefone": telefone,
    "email": email,
    "senha": senha
}

fazPost(url, body)


}

function sendToLogin() {
    location.href = '/cms-login.html';
  }


function enviarMensagemEresetar(){
    enviarMensagem()

    sendToLogin()
}
