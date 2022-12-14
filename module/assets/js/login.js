function fazPost(url, body){
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        if(request.status === 200){
            sendToLogin()
        }else if(request.status === 401 || request.status === 404){
            window.alert(this.responseText)
        }

    }
    

} 

function enviarLogin(){
event.preventDefault()
let url = "https://api-pizzaria.netlify.app/.netlify/functions/api/v1/funcionario/login"
let email = document.getElementById("email").value
let senha = document.getElementById("senha").value

let body = {
    "email": email,
    "senha": senha
}

fazPost(url, body)


}

function sendToLogin() {
    location.href = '/module/assets/html/index_cms.html';
  }
