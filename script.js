const menu = document.querySelector('.menu-button-wrap');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');

let menuOpen = false;

menu.addEventListener('click', () => {
  if (!menuOpen) {
    menu.classList.add('open');
    menuOpen = true;
  } else {
    menu.classList.remove('open');
    menuOpen = false;
  }

  navLinks.classList.toggle('open');
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuOpen = false;
    navLinks.classList.toggle('open');
  });
});