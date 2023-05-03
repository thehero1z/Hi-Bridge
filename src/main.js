const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hLink = document.querySelector('#hLink');
const faSolid = document.querySelector('#faSolid');

hamburger.addEventListener("click",() => {
    menu.classList.toggle('hidden')
    faSolid.classList.toggle('fa-xmark')
})