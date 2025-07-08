document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-item');
    const scrollPrompt = document.querySelector('.scroll-prompt');
    
    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll event to show/hide navbar
    window.addEventListener('scroll', function() {
        const currentScrollPos = window.pageYOffset;
        const mainSectionHeight = document.getElementById('main').offsetHeight;
        
        // Show/hide navbar based on scroll position
        if (currentScrollPos > mainSectionHeight * 0.7) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }
        
        // Highlight active section in navbar
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (currentScrollPos >= sectionTop - 200 && 
                currentScrollPos < sectionTop + sectionHeight - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
    
    // Auto-scroll functionality when clicking the scroll button
    if (scrollPrompt) {
        scrollPrompt.addEventListener('click', function() {
            const biographySection = document.getElementById('biography');
            
            if (biographySection) {
                biographySection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Add active class to CSS
    document.head.insertAdjacentHTML('beforeend', `
        <style>
        .nav-item.active::after {
            width: 100%;
        }
        .nav-item.active {
            color: #fff;
        }
        </style>
    `);
});