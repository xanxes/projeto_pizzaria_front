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
let url = "https://api-pizzaria.netlify.app/.netlify/functions/api/v1/mensagem"
let nome = document.getElementById("nome").value
let telefone = document.getElementById("telefone").value
let celular = document.getElementById("celular").value
let email = document.getElementById("email").value
let mensagem = document.getElementById("mensagem").value

let body = {
    "nome": nome,
    "email": email,
    "tipo_mensagem": true,
    "mensagem": mensagem,
    "telefone": telefone,
    "celular": celular
}

fazPost(url, body)


}

function clearForm() {
    document.getElementById("form_contact").reset();
  }

function enviarMensagemEresetar(){
    enviarMensagem()
    clearForm()
}