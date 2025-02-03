// Smooth Scroll Effect
document.querySelector('.scroll-down').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});

// GSAP Animations
gsap.from("#hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from("#hero p", { opacity: 0, y: 20, delay: 0.5, duration: 1 });
