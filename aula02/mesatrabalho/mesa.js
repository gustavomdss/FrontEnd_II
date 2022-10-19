function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var ganhador = 0;

var maquina = 0;

var jogador = 0;


do {



    var aleatorio = getRandomIntInclusive(1, 3);

    var escolhaMaquina = 0;

    switch (aleatorio) {

        case 1:
            escolhaMaquina = "pedra";
            break;
        case 2:
            escolhaMaquina = "papel";
            break;
        case 3:
            escolhaMaquina = "tesoura";
            break;
        default:
            escolhaMaquina = "incorreto";
            break;
    }



    let escolhaUsuario = prompt("Escolha pedra, papel ou tesoura");

    alert(escolhaMaquina);




    if (escolhaMaquina == "pedra" && escolhaUsuario == "pedra") {
        ganhador;
    } else if (escolhaMaquina == "pedra" && escolhaUsuario == "papel") {
        jogador += 1;
    } else if (escolhaMaquina == "pedra" && escolhaUsuario == "tesoura") {
        maquina += 1;
    } else if (escolhaMaquina == "papel" && escolhaUsuario == "papel") {
        ganhador;
    } else if (escolhaMaquina == "papel" && escolhaUsuario == "tesoura") {
        jogador += 1;
    } else if (escolhaMaquina = "papel" && escolhaUsuario == "pedra") {
        maquina += 1;
    } else if (escolhaMaquina == "tesoura" && escolhaUsuario == "tesoura") {
        ganhador;
    } else if (escolhaMaquina == "tesoura" && escolhaUsuario == "pedra") {
        jogador += 1;
    } else if (escolhaMaquina == "tesoura" && escolhaUsuario == "papel") {
        maquina += 1;
    } else {
        exit()
    }
    alert("Pontos Maquina: " + maquina)
    alert("Pontos jogador: " + jogador)

} while (jogador < 2 && maquina < 2);

if(jogador == 2){
    alert(" Voce Ganhou!")
}else{
    alert("A maquina ganhou!")
};
