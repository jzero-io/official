// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Navbar scroll effect =====
const nav = document.querySelector('.nav');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
    } else {
        nav.style.background = 'rgba(10, 10, 15, 0.8)';
        nav.style.boxShadow = 'none';
    }

    lastScrollY = currentScrollY;
});

// ===== Intersection Observer for animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .ecosystem-card, .step, .faq-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===== Active nav link highlighting =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--color-primary)';
        }
    });
});

// ===== Copy code functionality =====
document.querySelectorAll('.code-content, .step-code').forEach(codeBlock => {
    codeBlock.style.cursor = 'pointer';
    codeBlock.title = 'Click to copy';

    codeBlock.addEventListener('click', async () => {
        const code = codeBlock.textContent;

        try {
            await navigator.clipboard.writeText(code);

            // Visual feedback
            const originalBg = codeBlock.style.background;
            codeBlock.style.background = 'rgba(16, 185, 129, 0.1)';
            codeBlock.style.transition = 'background 0.3s ease';

            setTimeout(() => {
                codeBlock.style.background = originalBg;
            }, 300);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    });
});

// ===== FAQ accordion (optional enhancement) =====
document.querySelectorAll('.faq-item h3').forEach(question => {
    question.style.cursor = 'pointer';
    question.style.position = 'relative';
    question.style.paddingRight = '40px';

    // Create wrapper for original content to preserve i18n
    const contentSpan = document.createElement('span');
    contentSpan.className = 'faq-question-text';
    while (question.firstChild) {
        contentSpan.appendChild(question.firstChild);
    }
    question.appendChild(contentSpan);

    // Add indicator
    const indicator = document.createElement('span');
    indicator.className = 'faq-indicator';
    indicator.textContent = '+';
    indicator.style.cssText = 'position: absolute; right: 0; top: 50%; transform: translateY(-50%); transition: transform 0.3s ease; pointer-events: none;';
    question.appendChild(indicator);

    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpened = answer.style.display === 'none' || answer.style.display === '';

        // Close all other FAQs
        document.querySelectorAll('.faq-item p').forEach(p => {
            p.style.display = 'none';
        });
        document.querySelectorAll('.faq-indicator').forEach(ind => {
            ind.textContent = '+';
            ind.style.transform = 'translateY(-50%)';
        });

        // Toggle current
        if (isOpened) {
            answer.style.display = 'block';
            indicator.textContent = '−';
            indicator.style.transform = 'translateY(-50%) rotate(180deg)';
        }
    });

    // Initially hide all answers
    const answer = question.nextElementSibling;
    if (answer && answer.tagName === 'P') {
        answer.style.display = 'none';
    }
});

// ===== Performance optimization: Lazy load images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Console welcome message =====
console.log('%c🚀 jzero', 'font-size: 24px; font-weight: bold; color: #00d9ff;');
console.log('%cAI-Friendly Go Microservices Framework', 'font-size: 14px; color: #a1a1aa;');
console.log('%chttps://github.com/jzero-io/jzero', 'font-size: 12px; color: #6366f1;');
