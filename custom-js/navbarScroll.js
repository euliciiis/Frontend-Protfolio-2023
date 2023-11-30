// Navbar Fade on Scroll
let lastScrollTop = 0;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-100px';
    navbar.style.transition = 'all .3s ease';
  } else {
    navbar.style.top = '0';
  }

  lastScrollTop = scrollTop;
});