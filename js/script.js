// active menu
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
};

// active search
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
};

// active cart
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#card-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
};

//remove active on scroll
window.onscroll = () => {
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
}














