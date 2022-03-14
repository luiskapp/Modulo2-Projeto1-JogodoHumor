const alterar = document.querySelector("#btn");

alterar.addEventListener("click", function(){ 
  const image = document.querySelector("#image");
  const txt = document.querySelector("#txt");
  if (alterar.value == 'primeiro') {
    image.src = './Imagens/monica3.gif' 
    txt.innerText = 'Falante igual a uma Maritaca!  -bláblaáblaááblaáblá-' 
    alterar.value = 'segundo'
  } else if (alterar.value == 'segundo') {
    image.src = './Imagens/monica4.gif'  
    txt.innerText = 'Rindo das gracinhas do cebolinha.' 
    alterar.value = 'terceiro' 
  } else {
    image.src = './Imagens/monica1.gif'
    txt.innerText = 'Furiosa porque o cebolinha chamou de dentuça' 
    alterar.value = 'primeiro' 
  }
})