// ======================== nav list ========================//
let open = document.querySelector (".header-links .hove");
let nav = document.querySelector (".header-links nav")

open.addEventListener("click", function() {
    nav.classList.toggle("open");
});
