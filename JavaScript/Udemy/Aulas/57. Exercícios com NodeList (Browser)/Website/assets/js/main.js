// Seleciona o elemento, no caso a div
const paragrafos = document.querySelector('.paragrafos');

// seleciona as tags dentro do elemento pai
const ps = paragrafos.querySelectorAll('p');

// pegou todos os estilos do css no body
const estilosBody = getComputedStyle(document.body);

//pegou especificamente a cor de fundo do body
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF'
}