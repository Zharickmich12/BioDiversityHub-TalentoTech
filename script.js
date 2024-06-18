// scrollreveal
document.addEventListener('DOMContentLoaded', function() {
    reveal();
    setupAccordion();
});

window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// accordion
function setupAccordion() {
    const accButtons = document.querySelectorAll('.accordion-button');
    for (let i = 0; i < accButtons.length; i++) {
        accButtons[i].addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            for (let j = 0; j < accButtons.length; j++) {
                accButtons[j].classList.remove('active');
                accButtons[j].nextElementSibling.style.display = 'none';
                accButtons[j].querySelector('.accordion-icon').textContent = '+';
            }

            if (!isActive) {
                this.classList.add('active');
                content.style.display = 'block';
                this.querySelector('.accordion-icon').textContent = '-';
            }
        });
    }
}
