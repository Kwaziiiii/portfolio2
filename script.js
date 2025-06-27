// Wait for the DOM to be fully loaded before executing any JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements for mobile menu and theme functionality
    const menuBtn = document.getElementById('menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

    // Theme switching functionality
    /**
     * Sets the theme for the entire application
     * @param {string} theme - The theme to set ('dark' or 'light')
     */
    function setTheme(theme) {
        // Set the data-theme attribute on the document root element
        document.documentElement.setAttribute('data-theme', theme);
        // Store the theme preference in localStorage for persistence
        localStorage.setItem('theme', theme);
    }

    /**
     * Toggles between dark and light themes
     */
    function toggleTheme() {
        // Get current theme from document attribute, default to 'dark' if not set
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        // Switch to the opposite theme
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    // Initialize theme from localStorage or default to dark theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Add event listeners for theme toggle buttons
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }

    // Mobile menu functionality
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', function() {
            // Toggle the 'active' class to show/hide mobile navigation
            mobileNav.classList.toggle('active');
        });
    }

    // Scroll Animation Functionality
    /**
     * Initializes scroll animations for various page elements
     */
    function initScrollAnimations() {
        // Elements that should animate from sides (blocks) - alternating left/right
        const sideElements = document.querySelectorAll('.specialite-card, .company-card, .documentation-card, .education-item');
        sideElements.forEach((el, index) => {
            if (index % 2 === 0) {
                // Even indexed elements animate from left
                el.classList.add('scroll-animate', 'from-left');
            } else {
                // Odd indexed elements animate from right
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

        // Other elements that should animate from bottom
        const otherElements = document.querySelectorAll('.logos, .contact-form, .social-links-contact');
        otherElements.forEach(el => {
            el.classList.add('scroll-animate', 'from-bottom');
        });

        // Ticket cards (staggered animation with custom observer)
        const ticketCards = document.querySelectorAll('.ticket-card');
        if (ticketCards.length > 0) {
            // Create a custom Intersection Observer for ticket cards
            const ticketObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Get the index of the current card in the array
                        const cards = Array.from(ticketCards);
                        const idx = cards.indexOf(entry.target);
                        if (idx !== -1) {
                            // Add staggered delay based on card index
                            setTimeout(() => {
                                entry.target.classList.add('animate');
                            }, idx * 120); // 120ms delay between each card
                        } else {
                            entry.target.classList.add('animate');
                        }
                    } else {
                        // Remove animation class when element is out of view
                        entry.target.classList.remove('animate');
                    }
                });
            }, { 
                threshold: 0.1, // Trigger when 10% of element is visible
                rootMargin: '0px 0px -100px 0px' // Trigger 100px before element enters viewport
            });

            // Observe all ticket cards
            ticketCards.forEach(card => {
                ticketObserver.observe(card);
            });
        }

        // Main Intersection Observer for triggering animations
        const observerOptions = {
            threshold: 0.1, // Trigger when 10% of element is visible
            rootMargin: '0px 0px -50px 0px' // Trigger 50px before element enters viewport
        };

        // Create the main intersection observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation class when element comes into view
                    entry.target.classList.add('animate');
                } else {
                    // Remove animation class when element goes out of view
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
            // Create a separate observer for project cards with staggered animation
            const projectObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Get the index of the current project card
                        const cards = Array.from(projectCards);
                        const idx = cards.indexOf(entry.target);
                        if (idx !== -1) {
                            // Add staggered delay based on card index
                            setTimeout(() => {
                                entry.target.classList.add('animate');
                            }, idx * 120); // 120ms delay between each card
                        } else {
                            entry.target.classList.add('animate');
                        }
                    } else {
                        // Remove animation class when element is out of view
                        entry.target.classList.remove('animate');
                    }
                });
            }, { 
                threshold: 0.1, // Trigger when 10% of element is visible
                rootMargin: '0px 0px -100px 0px' // Trigger 100px before element enters viewport
            });

            // Observe all project cards
            projectCards.forEach(card => {
                projectObserver.observe(card);
            });
        }
    }

    // Initialize scroll animations when page loads
    initScrollAnimations();

    // Re-initialize animations when navigating between pages (for back-forward cache)
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            // Page was loaded from back-forward cache (browser back/forward)
            // Add a small delay to ensure DOM is ready
            setTimeout(initScrollAnimations, 100);
        }
    });
}); 