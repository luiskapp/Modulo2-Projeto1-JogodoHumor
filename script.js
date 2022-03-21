const alterar = document.querySelector("#btn");

alterar.addEventListener("click", function(){ 
  const image = document.querySelector("#image");
  const txt = document.querySelector("#txt");
  if (alterar.value == 'primeiro') {
    image.src = './img/monica3.gif' 
    txt.innerText = 'Falante igual a uma Maritaca!  -bláblaáblaááblaáblá-' 
    alterar.value = 'segundo'
  } else if (alterar.value == 'segundo') {
    image.src = './img/monica4.gif'  
    txt.innerText = 'Rindo das gracinhas do cebolinha.' 
    alterar.value = 'terceiro' 
  } else if (alterar.value == 'terceiro') {
    image.src = './img/monica6.gif'  
    txt.innerText = 'Passeando com o monicão.' 
    alterar.value = 'quarto' 
  } else if (alterar.value == 'quarto') {
    image.src = './img/monica7.gif'  
    txt.innerText = 'Furiosa com cebolinha.' 
    alterar.value = 'quinto' 
  } else if (alterar.value == 'quinto') {
    image.src = './img/monica8.gif'  
    txt.innerText = 'Feliz da vida!' 
    alterar.value = 'sexto' 
  } else {
    image.src = './img/monica1.gif'
    txt.innerText = 'Nervosa porque o cebolinha chamou de dentuça' 
    alterar.value = 'primeiro' 
  }
})