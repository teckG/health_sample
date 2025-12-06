document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.main-nav');
    
    mobileToggle.addEventListener('click', () => {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', !isExpanded);
        
        if (!isExpanded) {
            navMenu.style.display = 'block';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = 'white';
            navMenu.style.padding = '1rem';
            navMenu.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            navMenu.style.zIndex = '1000';
        } else {
            navMenu.style.display = ''; 
        }
    });

    // --- Back to Top Button Logic ---
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        // Show button after scrolling down 300px
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }

        // Header sticky effect
        const header = document.querySelector('.site-header');
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
            header.style.padding = "0.5rem 0";
        } else {
            header.style.boxShadow = "none";
            header.style.padding = "1rem 0";
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Form Submission (Simulation) ---
    const form = document.querySelector('.appointment-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Request Sent!';
        btn.style.backgroundColor = '#14B8A6';
        btn.style.borderColor = '#14B8A6';
        
        setTimeout(() => {
            alert("Thank you. Our Tema clinic staff will contact you shortly to confirm.");
            form.reset();
            btn.innerText = originalText;
            btn.style.backgroundColor = '';
            btn.style.borderColor = '';
        }, 1000);
    });
});