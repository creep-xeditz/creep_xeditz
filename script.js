document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle Mobile Menu (Hamburger Animation)
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        const spans = menuToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            // Animate to "X"
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -7px)';
        } else {
            // Reset to Hamburger
            spans.forEach(s => s.style.transform = '');
            spans[1].style.opacity = '1';
        }
    });

    // Close menu when a navigation link OR the Logo is clicked
    // We target both '.nav-links a' and the '.logo'
    document.querySelectorAll('.nav-links a, .logo').forEach(link => {
        link.addEventListener('click', () => {
            // Remove the active class from the menu
            navLinks.classList.remove('active');
            
            // Reset hamburger icons to original state
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(s => s.style.transform = '');
            spans[1].style.opacity = '1';
        });
    });
});