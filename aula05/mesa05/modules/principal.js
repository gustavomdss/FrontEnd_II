let autorizar = confirm("Deseja ver a pagina utilizando DarkMode?")

if (autorizar == true){

   let escuro =  document.querySelector('body')
   escuro.classList.toggle('dark')
    
   let titulo = document.querySelector('h1')
   titulo.classList.toggle('titulo2')

   let itens = document.querySelectorAll('.item')
   
   for (let i = 0; i < itens.length; i++) {
    itens[i].classList.toggle('item_02')
 }
    let itens21 = document.querySelectorAll('.item h2')
    for (let i = 0; i < itens21.length; i++) {
        itens21[i].classList.toggle('item_03')
        
    }
    let itens22 = document.querySelectorAll('.item p')
    for (let i = 0; i < itens22.length; i++) {
       itens22[i].classList.toggle('item_03')
        
    }
    
   
   
}
