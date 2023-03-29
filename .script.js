const menuClick = document.querySelector('.bg header i');
const nav =document.querySelector('.bg header nav ul');

menuClick.addEventListener('click', clicou);

function clicou() {
    nav.classList.toggle('ativo');
}
