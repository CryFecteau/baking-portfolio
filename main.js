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
let recipeModal = document.getElementById('recipesModal');
let recipeBtn = document.getElementById('recipesBtn');
let spanCustom = document.getElementById('closeCustoms');
let spanRecipe = document.getElementById('closeRecipes')

customBtn.onclick = function () {
    customModal.style.display = 'block';
}
recipeBtn.onclick = function () {
    recipeModal.style.display = 'block';
}
spanCustom.onclick = function () {
    customModal.style.display = 'none';
}
spanRecipe.onclick = function () {
    recipeModal.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == customModal || event.target == recipeModal) {
        customModal.style.display = 'none';
        recipeModal.style.display = 'none';
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