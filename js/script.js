document.querySelector('.menu-button').addEventListener('click', function () {
    document.querySelector('.menu-bars').classList.toggle('menu-closed');
    document.querySelector('nav').classList.toggle('show');
})