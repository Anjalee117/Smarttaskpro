// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Testimonials Data
const testimonials = [
    {
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
        text: 'The AI assistant has completely transformed how I manage my tasks. It\'s like having a personal productivity coach!',
        name: 'Sarah Johnson',
        role: 'Product Manager'
    },
    {
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        text: 'The Pomodoro timer and focus mode have helped me double my productivity. Best investment ever!',
        name: 'Michael Chen',
        role: 'Software Developer'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        text: 'Finally, a task manager that understands how I work. The AI suggestions are surprisingly accurate!',
        name: 'Emily Rodriguez',
        role: 'Freelance Designer'
    }
];

// Populate Testimonials
const testimonialSlider = document.querySelector('.testimonials-slider');

testimonials.forEach((testimonial, index) => {
    if (index === 0) return; // Skip first testimonial as it's already in HTML
    
    const testimonialElement = document.createElement('div');
    testimonialElement.className = 'testimonial';
    testimonialElement.setAttribute('data-aos', 'fade-up');
    testimonialElement.setAttribute('data-aos-delay', index * 100);
    
    testimonialElement.innerHTML = `
        <div class="testimonial-image">
            <img src="${testimonial.image}" alt="User">
        </div>
        <p>${testimonial.text}</p>
        <h4>${testimonial.name}</h4>
        <p class="role">${testimonial.role}</p>
    `;
    
    testimonialSlider.appendChild(testimonialElement);
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-background');
    
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 