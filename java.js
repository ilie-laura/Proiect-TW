document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-gallery-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const gallery = this.nextElementSibling;
            if (gallery.style.display === 'none' || gallery.style.display === '') {
                gallery.style.display = 'flex'; // Afișează galeria
                this.textContent = 'Ascunde galeria';
            } else {
                gallery.style.display = 'none'; // Ascunde galeria
                this.textContent = 'Vezi galeria';
            }
        });
    });
});