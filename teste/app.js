let btn = document.getElementById("botao");
window.onload = inserir
btn.addEventListener("click", inserir )
   
function inserir(event){
        event.preventDefault();

fetch('https://dog.ceo/api/breeds/image/random')
.then(retorno => {
    return retorno.json()
})
.then(dados => {
listarFotosdeCachorros(dados.message)
console.log(dados.message)
})

function listarFotosdeCachorros(info){
    let imagem = document.getElementById("foto")
    imagem.innerHTML = `
    <img src="${info}" class="imagem">`
}
}
