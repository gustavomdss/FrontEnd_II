

let texto = document.getElementById("texto");
let botao = document.getElementById("enviar");
let sessao = document.getElementById("principal");


function Construcao(texto){
    this.texto = texto
}


function acrescentar(event){
    event.preventDefault();

     
     let arrayObjeto = new Construcao(texto.value)

     let somar = ""
     somar += arrayObjeto.texto
    //  JSON.stringify(arrayObjeto)
     console.log(somar);
    // localStorage.setItem("01", texto.array)
    // let conteudo = localStorage.getItem("01");
    // sessao.innerHTML += `
    // <p>${conteudo}</p>
    // `
}

botao.addEventListener("click", acrescentar)

