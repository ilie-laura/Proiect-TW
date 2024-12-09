document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.menu3');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const dropdown = toggle.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});
