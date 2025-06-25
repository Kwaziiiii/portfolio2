document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

    // Theme switching functionality
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    // Initialize theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Add event listeners for theme toggles
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }

    // Mobile menu functionality
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });
    }

    // Scroll Animation Functionality
    function initScrollAnimations() {
        // Elements that should animate from sides (blocks)
        const sideElements = document.querySelectorAll('.specialite-card, .company-card, .documentation-card, .education-item');
        sideElements.forEach((el, index) => {
            if (index % 2 === 0) {
                el.classList.add('scroll-animate', 'from-left');
            } else {
                el.classList.add('scroll-animate', 'from-right');
            }
        });

        // Text elements that should animate from bottom
        const textElements = document.querySelectorAll('.hero h1, .hero .subtitle, .formation-title-container h2, .skills-title, .choice-title, .contact-title, .internship-title-container h2, .documentation-title-container h2, .intro-text p, .choice-text p, .education-history-title');
        textElements.forEach(el => {
            el.classList.add('scroll-animate', 'from-bottom');
        });

        // Project cards (horizontal staggered animation)
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(el => {
            el.classList.add('scroll-animate');
        });

        // Other elements that should animate
        const otherElements = document.querySelectorAll('.logos, .contact-form, .social-links-contact');
        otherElements.forEach(el => {
            el.classList.add('scroll-animate', 'from-bottom');
        });

        // Ticket cards (staggered animation)
        const ticketCards = document.querySelectorAll('.ticket-card');
        if (ticketCards.length > 0) {
            const ticketObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const cards = Array.from(ticketCards);
                        const idx = cards.indexOf(entry.target);
                        if (idx !== -1) {
                            setTimeout(() => {
                                entry.target.classList.add('animate');
                            }, idx * 120);
                        } else {
                            entry.target.classList.add('animate');
                        }
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

            ticketCards.forEach(card => {
                ticketObserver.observe(card);
            });
        }

        // Intersection Observer for triggering animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate');
                }
            });
        }, observerOptions);

        // Observe all elements with scroll-animate class
        const animatedElements = document.querySelectorAll('.scroll-animate');
        animatedElements.forEach(el => {
            observer.observe(el);
        });

        // Special handling for project cards to ensure they animate in sequence
        if (projectCards.length > 0) {
            const projectObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add animation class with staggered delay
                        const cards = Array.from(projectCards);
                        const idx = cards.indexOf(entry.target);
                        if (idx !== -1) {
                            setTimeout(() => {
                                entry.target.classList.add('animate');
                            }, idx * 120);
                        } else {
                            entry.target.classList.add('animate');
                        }
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

            projectCards.forEach(card => {
                projectObserver.observe(card);
            });
        }
    }

    // Initialize scroll animations
    initScrollAnimations();

    // Re-initialize animations when navigating between pages
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            // Page was loaded from back-forward cache
            setTimeout(initScrollAnimations, 100);
        }
    });
}); 