// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
let btn = document.getElementById("random")

window.onload = inserir()
function inserir(){

  fetch('https://randomuser.me/api/')

    .then(response => {
        return response.json()
    })
    .then(response => {
        renderizarDadosUsuario(response)      
    });
    
    function renderizarDadosUsuario(dados) {
        let card = document.querySelector(".card");
        for(let imagem of dados.results){
        card.innerHTML = `
        <img src="${imagem.picture.large}" class="image">
        <p>${imagem.name.title} ${imagem.name.first} ${imagem.name.last}</p>
        <p>${imagem.email}</p>
        `
        }
    }
    } 
    btn.addEventListener("click", inserir)





    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.





/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.