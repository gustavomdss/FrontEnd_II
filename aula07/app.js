let titulo = document.querySelector("h1");

titulo.onmouseover = function(){
    titulo.style.color = "red";
}
titulo.onmouseout = function(){
    titulo.style.color = "blue"
}

let submit = document.querySelector("#submit")
let dados = document.querySelector("#dadosinseridos")

let texto = ""

dados.onkeypress = function(event){
   texto += event.key
   console.log(texto)
  
}

submit.onclick = function(event){
    event.preventDefault()
    document.body.innerHTML += "<p>O texto " + texto + " foi digitado " + texto.length + " vezes</p>"
    let h1 = document.querySelector("p")
    h1.style.textAlign = "center";
    h1.style.paddingTop = "50px"
}

window.onload = function(){
    alert("Pagina carregada com sucesso!")
}



// submit.onclick = function(event){
//     event.preventDefault()
//     document.body.innerHTML += "<p>O texto " + dados.value + " foi escrito</p>"
//     event.preventDefault()
// }


