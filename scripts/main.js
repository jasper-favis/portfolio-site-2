
// Scroll to top on page reload.
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Stop transitions when resizing window.
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-transition-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-transition-stopper");
  }, 400);
});

// Toggle nav-links.
const slide = () => {
   const menuButton = document.querySelector('.menu-button');
   const navLinks = document.querySelector('.nav-links');

   menuButton.addEventListener('click', () => {
     navLinks.classList.toggle('nav-links-active');
   });
}

slide();
