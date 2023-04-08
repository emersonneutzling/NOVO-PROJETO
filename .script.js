function MENUCLICK() {
    const menuClick = document.querySelector('.bg header i');
const nav = document.querySelector('.bg header nav ul');

menuClick.addEventListener('click', clicou);

function clicou() {
    nav.classList.toggle('ativo');
}

}

MENUCLICK();

const lista = document.querySelectorAll('.js-texto p');
const listaIcone = document.querySelectorAll('.js-texto i');
lista[0].classList.add('ativo')


function clickLista(index) {
    lista.forEach((item) => {
        item.classList.remove('ativo');
    });
    lista[index].classList.add('ativo');
}

listaIcone.forEach((item, index) => {
    item.addEventListener('click', () => {
        clickLista(index)
    })
})