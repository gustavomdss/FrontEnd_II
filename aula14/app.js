

let texto = document.getElementById("texto");
let botao = document.getElementById("enviar");
let sessao = document.getElementById("principal");
let somar = []
let inicial = localStorage.getItem("01")


function Construcao(texto){
    this.texto = texto
}
function ValidateEmail(texto) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(texto.value))
  {
    return (true)
  }
    
    return (false)
}
texto.addEventListener("keyup", function()
{
    if(ValidateEmail(texto)){
        botao.removeAttribute("disabled")
    }
}
)

     
    //  let arrayObjeto = new Construcao(texto.value)

    //  //JSON.stringify(arrayObjeto)
    //  somar.push(arrayObjeto.texto);
    
    // console.log(somar);

    // localStorage.setItem("01", somar)
    // let conteudo = localStorage.getItem("01");
    
    // sessao.innerHTML += `
    // <p>${conteudo}</p>
    // `



// botao.addEventListener("click", acrescentar)

