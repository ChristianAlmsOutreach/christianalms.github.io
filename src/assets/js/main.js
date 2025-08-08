document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('is-active');
        });
    }
    
    const scriptureRefs = document.querySelectorAll('.scripture-ref');
    scriptureRefs.forEach(ref => {
        ref.addEventListener('mouseenter', function(e) {
            const verse = e.target.dataset.ref;
            e.target.title = `Click to view ${verse} in a new tab`;
        });
        
        ref.addEventListener('click', function(e) {
            e.preventDefault();
            const verse = e.target.dataset.ref;
            const searchUrl = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(verse)}&version=KJV`;
            window.open(searchUrl, '_blank', 'noopener');
        });
    });
    
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.setAttribute('aria-current', 'page');
        }
    });
    
    if ('IntersectionObserver' in window) {
        const cards = document.querySelectorAll('.card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        cards.forEach(card => {
            observer.observe(card);
        });
    }
    
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = e.target.email.value;
            console.log('Newsletter signup:', email);
            alert('Thank you for subscribing! We will keep you updated on our mission and work.');
            e.target.reset();
        });
    }
});