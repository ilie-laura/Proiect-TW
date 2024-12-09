const burgerMenu = document.querySelector('.burger-menu');
const sideMenu = document.querySelector('.side-menu'); // sau `.menu` pentru meniul principal

burgerMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('open'); // Adaugă/șterge clasa "open" pentru meniu
});
