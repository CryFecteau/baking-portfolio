// loader
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.className += ' hidden';
});

//navbar
const selectElement = function (element) {
    return document.querySelector(element);
};
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
let nav = selectElement('.nav-list');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});
nav.onclick = function () {
    body.classList.remove('open');
}

// modals
let customModal = document.getElementById('customsModal');
let customBtn = document.getElementById('customBtn');
let showPieceModal = document.getElementById('showPieceModal');
let showPieceBtn = document.getElementById('showPieceBtn');
let spanCustom = document.getElementById('closeCustoms');
let spanShowPiece = document.getElementById('closeShowPiece')

customBtn.onclick = function () {
    customModal.style.display = 'block';
}
showPieceBtn.onclick = function () {
    showPieceModal.style.display = 'block';
}
spanCustom.onclick = function () {
    customModal.style.display = 'none';
}
spanShowPiece.onclick = function () {
    showPieceModal.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == customModal || event.target == showPieceModal) {
        customModal.style.display = 'none';
        showPieceModal.style.display = 'none';
    }
}

// scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});
sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});
sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});
sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});