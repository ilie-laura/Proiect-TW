// JavaScript simplu pentru funcționalități interactive
document.addEventListener("DOMContentLoaded", () => {
    // Scroll la începutul paginii când se încarcă
    window.scrollTo(0, 0);

    // Butoane de navigare cu scroll lin
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").replace(".html", "");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
