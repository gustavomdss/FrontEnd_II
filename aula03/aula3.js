let usuario = {
    nome: "Gustavo",
    idade: 39,
    endereco: {
        rua: "tal",
        numero: 2344,
        cidade: "Dourados"
    }
}

for(let teste in usuario){
    console.log(usuario[teste])
}

let pessoas = ["Gustavo", "Elias", "Joao", "Marcelo"]

for (let teste1 of pessoas){
console.log(teste1)
}
