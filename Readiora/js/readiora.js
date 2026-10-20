document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelector(".bars");
    const navbar = document.querySelector(".nav-bar");
    let lastScrollTop = 0;

    bars.addEventListener("click", function(event) {
        navbar.classList.toggle("active");
        event.stopPropagation();
    });

    document.addEventListener("click", function(event) {
        if (navbar.classList.contains("active") && !navbar.contains(event.target)) {
            navbar.classList.remove("active");
        }
    });

    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 50 && !navbar.classList.contains("active")) {
            bars.classList.add("nav-hidden");
            navbar.classList.add("nav-hidden");
        } else {
            bars.classList.remove("nav-hidden");
            navbar.classList.remove("nav-hidden");
        }
        lastScrollTop = scrollTop;
    });
});