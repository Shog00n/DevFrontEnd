window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    header.classList.toggle("hidden", window.scrollY > header.offsetHeight);
});
