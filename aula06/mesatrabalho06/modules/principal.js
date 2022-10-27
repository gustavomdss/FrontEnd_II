let titulo1 = "O tigre";
let titulo2 = "O leão";
let titulo3 = "O leopardo";
let titulo4 = "A pantera negra";
let titulo5 = "O jaguar";
let titulo6 = "O guepardo";

var titulos = [titulo1, titulo2, titulo3, titulo4, titulo5, titulo6];

let p1 = "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão."
let p2 = "O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia."
let p3 = "O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra(melanista)."
let p4 = "A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais."
let p5 = "O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo)."
let p6 = "O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros."

var textos = [p1, p2, p3, p4, p5, p6];

var imagens = ["./imagens/tiger.jpg", "./imagens/leon.jpg", "./imagens/leopardo.jpg", "./imagens/pantera-negra.jpg", "./imagens/jaguar.jpg", "./imagens/chita.jpg"];


for (let i = 0; i < textos.length; i++) {

   var container1 = document.createElement("div");
   var container1image = document.createElement("img");
   var container1h2 = document.createElement("h2");
   var container1p = document.createElement("p");

   var textnode1 = document.createTextNode(textos[i])
   var titulonode1 = document.createTextNode(titulos[i])

   container1p.appendChild(textnode1);
   container1h2.appendChild(titulonode1);

   var container = document.querySelector(".container")

   container.appendChild(container1);

   container1.appendChild(container1image)
   container1.appendChild(container1h2);
   container1.appendChild(container1p);

   let adicionaclasse = document.querySelectorAll(".container div");
   let imagem = document.querySelectorAll('img');

   adicionaclasse[i].classList.add('item')
   imagem[i].setAttribute("src", imagens[i]);
}














