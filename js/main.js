// ========================================
// Mobile Menu Toggle
// ========================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navbar = document.getElementById('navbar');

if (mobileMenuToggle && navbar) {
    mobileMenuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        
        // Toggle icon between bars and times
        const icon = mobileMenuToggle.querySelector('i');
        if (navbar.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking on a non-dropdown link
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-dropdown > .nav-link)');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Close mobile menu when clicking on dropdown menu items (not the parent link)
    // This includes direct items like Patents, Research Grants, Honors, National Presentations
    const dropdownMenuLinks = document.querySelectorAll('.dropdown-menu > li > a, .dropdown-submenu a');
    dropdownMenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only close on mobile
            if (window.innerWidth <= 968) {
                // Close the mobile navigation
                navbar.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                
                // Close all dropdowns
                const navDropdowns = document.querySelectorAll('.nav-dropdown, .nav-dropdown-nested');
                navDropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    });

    // Handle mobile dropdown toggle on click (main dropdowns)
    const navDropdowns = document.querySelectorAll('.nav-dropdown:not(.nav-dropdown-nested)');
    navDropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector(':scope > .nav-link');
        
        dropdownLink.addEventListener('click', (e) => {
            // Only prevent default and toggle on mobile
            if (window.innerWidth <= 968) {
                e.preventDefault(); // Always prevent navigation on mobile
                dropdown.classList.toggle('active');
                
                // Close other main dropdowns
                navDropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            }
            // On desktop, allow the link to navigate (don't prevent default)
        });
    });

    // Handle nested dropdowns (like Scientific Publications, Conferences)
    const nestedDropdowns = document.querySelectorAll('.nav-dropdown-nested');
    nestedDropdowns.forEach(nestedDropdown => {
        const nestedLink = nestedDropdown.querySelector(':scope > a');
        
        if (nestedLink) {
            // Handle click on the link itself - use capture phase to intercept early
            nestedLink.addEventListener('click', (e) => {
                // Only handle on mobile
                if (window.innerWidth <= 968) {
                    // On mobile, always toggle the dropdown, never navigate
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation(); // Stop all other handlers
                    
                    nestedDropdown.classList.toggle('active');
                    
                    // Close other nested dropdowns in the same parent
                    const parentDropdown = nestedDropdown.closest('.nav-dropdown');
                    if (parentDropdown) {
                        const siblingNested = parentDropdown.querySelectorAll('.nav-dropdown-nested');
                        siblingNested.forEach(otherNested => {
                            if (otherNested !== nestedDropdown) {
                                otherNested.classList.remove('active');
                            }
                        });
                    }
                }
                // On desktop, allow normal navigation
            }, true); // Use capture phase
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navbar.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            
            // Close all dropdowns
            const allDropdowns = document.querySelectorAll('.nav-dropdown, .nav-dropdown-nested');
            allDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}

// ========================================
// Active Navigation Link on Scroll (Homepage Only)
// ========================================

window.addEventListener('scroll', () => {
    // Only run scroll-based highlighting on the homepage
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage !== 'index.html' && currentPage !== '') {
        return; // Exit if not on homepage
    }
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========================================
// Smooth Scrolling for Anchor Links
// ========================================

const anchorLinks = document.querySelectorAll('a[href*="#"]');

anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Ignore empty hash or just '#'
        if (href === '#' || href === '') {
            return;
        }
        
        // On mobile, if this is a dropdown parent link, don't scroll
        if (window.innerWidth <= 968) {
            const parentDropdown = link.closest('.nav-dropdown');
            const isMainDropdownLink = parentDropdown && link === parentDropdown.querySelector(':scope > .nav-link');
            
            // Check if this is a nested dropdown link
            const parentNestedDropdown = link.closest('.nav-dropdown-nested');
            const isNestedDropdownLink = parentNestedDropdown && link === parentNestedDropdown.querySelector(':scope > a');
            
            if (isMainDropdownLink || isNestedDropdownLink) {
                // This is a dropdown toggle link on mobile - don't handle scrolling
                return;
            }
        }
        
        // Check if link contains a hash
        if (href.includes('#')) {
            const parts = href.split('#');
            const page = parts[0];
            const hash = parts[1];
            
            // Get current page
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const targetPage = page || currentPage;
            
            // If we're on the same page OR page is empty (same page anchor)
            if (!page || page === currentPage || page === './' || page === window.location.pathname) {
                const target = document.getElementById(hash);
                
                if (target) {
                    e.preventDefault();
                    
                    // Close mobile menu if open
                    const navbar = document.getElementById('navbar');
                    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
                    if (navbar && navbar.classList.contains('active')) {
                        navbar.classList.remove('active');
                        const icon = mobileMenuToggle.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                    
                    const headerOffset = 120;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            } else {
                // Different page - force page reload to ensure proper navigation
                // Don't prevent default, let the browser handle it naturally
                // This will cause a page refresh and then scroll to the anchor
            }
        }
    });
});

// ========================================
// Back to Top Button
// ========================================

const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// Floating Book Appointment Button - Hide in Contact Section
// ========================================

const floatingBookBtn = document.getElementById('floatingBookBtn');
const contactSection = document.getElementById('contact');

if (floatingBookBtn && contactSection) {
    window.addEventListener('scroll', () => {
        const contactRect = contactSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if contact section is in viewport
        const isContactVisible = contactRect.top < windowHeight && contactRect.bottom > 0;
        
        if (isContactVisible) {
            floatingBookBtn.classList.add('hidden');
        } else {
            floatingBookBtn.classList.remove('hidden');
        }
    });
}

// ========================================
// Header Scroll Effect
// ========================================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        header.style.padding = '0.5rem 0';
    } else {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        header.style.padding = '1rem 0';
    }
});

// ========================================
// Scroll Animations (Fade In on Scroll)
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.expertise-card, .philosophy-item, .stat-card, .recognition-item, .quick-link-btn'
);

animateElements.forEach(element => {
    observer.observe(element);
});

// ========================================
// Quick Links Smooth Scroll with Offset
// ========================================

const quickLinks = document.querySelectorAll('.quick-link-btn');

quickLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            
            const headerOffset = 120; // Increased offset to show section titles
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Loading Animation
// ========================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ========================================
// Lazy Loading Images (if added later)
// ========================================

const lazyImages = document.querySelectorAll('img[data-src]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
} else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
}

// ========================================
// Dynamic Year in Footer
// ========================================

const updateFooterYear = () => {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
};

updateFooterYear();

// ========================================
// Accessibility: Keyboard Navigation Enhancement
// ========================================

document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navbar && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
});

// ========================================
// Form Handling (if contact form is added)
// ========================================

const handleFormSubmit = (formId) => {
    const form = document.getElementById(formId);
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            console.log('Form data:', data);
            
            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            
            alert('Thank you for your message! Dr. SERHAN will get back to you soon.');
            form.reset();
        });
    }
};

// ========================================
// Smooth Reveal Animations for Sections
// ========================================

const revealSections = () => {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(section);
    });
};

// Initialize section reveals
revealSections();

// ========================================
// Console Welcome Message
// ========================================

console.log('%c👨‍⚕️ Dr. Karim SERHAN - Consultant Surgeon', 'font-size: 20px; font-weight: bold; color: #0891b2;');
console.log('%cWebsite developed with care and precision', 'font-size: 14px; color: #64748b;');
console.log('%c14+ Years of Excellence in Surgical Care', 'font-size: 12px; color: #14b8a6;');

// ========================================
// Performance Monitoring
// ========================================

if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    });
}

// ========================================
// Dynamic Review Date Updates
// ========================================

function updateReviewDates() {
    const reviewCards = document.querySelectorAll('.testimonial-card[data-review-date]');
    const now = new Date();
    
    reviewCards.forEach(card => {
        const reviewDate = new Date(card.getAttribute('data-review-date'));
        const diffTime = Math.abs(now - reviewDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        const dateElement = card.querySelector('.testimonial-date');
        
        if (diffDays < 7) {
            dateElement.textContent = `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
        } else if (diffDays < 30) {
            const weeks = Math.floor(diffDays / 7);
            dateElement.textContent = `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
        } else if (diffDays < 365) {
            const months = Math.floor(diffDays / 30);
            dateElement.textContent = `${months} month${months !== 1 ? 's' : ''} ago`;
        } else {
            const years = Math.floor(diffDays / 365);
            dateElement.textContent = `${years} year${years !== 1 ? 's' : ''} ago`;
        }
    });
}

// Update review dates on page load
updateReviewDates();

// Update review dates daily (every 24 hours)
setInterval(updateReviewDates, 24 * 60 * 60 * 1000);

// ========================================
// Testimonials Background Video Sequence
// ========================================

const testimonialVideo1 = document.getElementById('testimonialVideo1');
const testimonialVideo2 = document.getElementById('testimonialVideo2');

if (testimonialVideo1 && testimonialVideo2) {
    let currentVideo = 1;

    // Function to switch videos
    function switchVideo() {
        if (currentVideo === 1) {
            testimonialVideo1.classList.remove('active');
            testimonialVideo2.classList.add('active');
            testimonialVideo2.currentTime = 0;
            testimonialVideo2.play();
            currentVideo = 2;
        } else {
            testimonialVideo2.classList.remove('active');
            testimonialVideo1.classList.add('active');
            testimonialVideo1.currentTime = 0;
            testimonialVideo1.play();
            currentVideo = 1;
        }
    }

    // Listen for video end events
    testimonialVideo1.addEventListener('ended', switchVideo);
    testimonialVideo2.addEventListener('ended', switchVideo);

    // Ensure first video plays on load
    testimonialVideo1.play().catch(err => {
        console.log('Autoplay prevented:', err);
    });
}

// ========================================
// Drag to Scroll for Testimonials
// ========================================

const testimonialsContainer = document.querySelector('.testimonials-scroll-container');

if (testimonialsContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    testimonialsContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        testimonialsContainer.style.cursor = 'grabbing';
        startX = e.pageX - testimonialsContainer.offsetLeft;
        scrollLeft = testimonialsContainer.scrollLeft;
    });

    testimonialsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        testimonialsContainer.style.cursor = 'grab';
    });

    testimonialsContainer.addEventListener('mouseup', () => {
        isDown = false;
        testimonialsContainer.style.cursor = 'grab';
    });

    testimonialsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - testimonialsContainer.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        testimonialsContainer.scrollLeft = scrollLeft - walk;
    });

    // Set initial cursor
    testimonialsContainer.style.cursor = 'grab';
}

// ========================================
// Export functions for potential external use
// ========================================

window.siteUtils = {
    handleFormSubmit,
    updateFooterYear,
    updateReviewDates
};

// ========================================
// Active Navigation Highlighting Based on Current Page
// ========================================

function highlightActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Define page groups for parent navigation items
    const academicPages = [
        'academic-achievements.html',
        'research-articles.html',
        'book-chapters.html',
        'peer-reviewed-abstracts.html',
        'peer-reviewed-abstracts.html'
    ];
    
    const newsPages = [
        'thyroid-surgery.html',
        'breast-cancer-surgery.html',
        'podcasts.html'
    ];
    
    const aboutPages = [
        'about-dr-karim.html'
    ];
    
    // Remove all active classes first
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Highlight the appropriate navigation item
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Check if we're on an academic achievements related page
        if (academicPages.includes(currentPage)) {
            if (href === 'academic-achievements.html' || href.includes('academic-achievements')) {
                link.classList.add('active');
            }
        }
        // Check if we're on a news related page
        else if (newsPages.includes(currentPage)) {
            if (link.textContent.trim() === 'News') {
                link.classList.add('active');
            }
        }
        // Check if we're on an about page
        else if (aboutPages.includes(currentPage)) {
            if (href === 'about-dr-karim.html' || link.textContent.includes('About Dr. Karim')) {
                link.classList.add('active');
            }
        }
        // Check for exact page match
        else if (href === currentPage || href.endsWith(currentPage)) {
            link.classList.add('active');
        }
    });
}

// Run on page load
highlightActiveNavigation();