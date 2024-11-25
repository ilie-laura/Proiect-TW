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
// Not required for animation, just provides "Retype" button functionality

// Animation restart method from CSS-Tricks:
// @link https://css-tricks.com/restart-css-animation/

const button = document.querySelector("button");
const word = document.querySelector("h1 span");

// reset the transition by...
button.addEventListener(
	"click",
	function (e) {
		e.preventDefault;

		// -> removing the class
		word.classList.remove("animating");

		// -> triggering reflow /* The actual magic */
		void word.offsetWidth;

		// -> and re-adding the class
		word.classList.add("animating");
	},
	false
);
