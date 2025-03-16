const barra = document.querySelector(".navbar");
const conteiner = document.querySelector(".mobile-menu");
const icone_close = document.querySelector(".navbar-close")

barra.addEventListener('click', () => {
    conteiner.classList.toggle('ativo');
    icone_close.classList.toggle('ativo');
    barra.classList.toggle('ativo')
});

icone_close.addEventListener('click', () => {
    conteiner.classList.toggle('ativo');
    icone_close.classList.toggle('ativo');
    barra.classList.toggle('ativo')
});