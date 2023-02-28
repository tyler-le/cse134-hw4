const hamburger = document.getElementById("hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
mobileMenu.style.display = "none";
hamburger.addEventListener("click", () => {
    if (mobileMenu.classList.contains("show")) {
        mobileMenu.style.display = "none";
        mobileMenu.classList.remove("show");
    }
    else
    {
        mobileMenu.classList.toggle("show");
        mobileMenu.style.display = "block";
    }
});

const links = document.querySelectorAll('.mobile-menu a');
links.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = "none";
        
    });
});