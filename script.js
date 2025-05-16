// Typewriter effect for hero subtitle
window.onload = () => {
    // Animate sections on scroll
    const sections = document.querySelectorAll('.animated-section');
    const skillCards = document.querySelectorAll('.skill-card');
    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                section.classList.add('visible');
            }
        });
        skillCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                card.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealSections);
    revealSections();

    // Contact form feedback
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
        this.reset();
    });
};
