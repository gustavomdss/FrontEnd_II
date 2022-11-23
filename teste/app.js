let email = document.getElementById("emailinput")
let botao = document.getElementById("enviar")
let teste = document.getElementById('teste')

botao.addEventListener("click", function(event){
event.preventDefault()
})

botao.addEventListener("click", function(){

    let item = `
    <div>
    <h1>${email.value}</h1>
    </div>`
    teste.innerHTML += item

})
botao.addEventListener("dblclick", function(){
    alert('voce clicou duas vezes"')
})