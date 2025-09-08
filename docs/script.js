// Navigation links (no smooth scrolling)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'auto',
                block: 'start'
            });
        }
    });
});

// Update active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Videos auto-play continuously (no hover control)
document.querySelectorAll('video').forEach(video => {
    // Ensure videos start playing when they come into view
    video.addEventListener('loadeddata', () => {
        video.play().catch(e => console.log('Video autoplay prevented:', e));
    });
    
    // Restart video when it ends (for loop functionality)
    video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play().catch(e => console.log('Video restart prevented:', e));
    });
});

// No animations - removed for better performance

// Video controls enhancement
document.querySelectorAll('video').forEach(video => {
    // Add loading state
    video.addEventListener('loadstart', () => {
        video.parentElement.classList.add('loading');
    });

    video.addEventListener('canplay', () => {
        video.parentElement.classList.remove('loading');
    });

    // Add error handling
    video.addEventListener('error', () => {
        const fallback = document.createElement('div');
        fallback.className = 'video-fallback';
        fallback.innerHTML = `
            <i class="fas fa-video-slash"></i>
            <p>Video unavailable</p>
        `;
        video.parentElement.replaceChild(fallback, video);
    });
});

// Copy citation to clipboard
function copyCitation() {
    const citation = document.querySelector('.citation-text pre code');
    if (citation) {
        navigator.clipboard.writeText(citation.textContent).then(() => {
            // Show success message
            const button = document.querySelector('.citation-links .btn');
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> Copied!';
            button.style.background = 'var(--success-color)';

            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
            }, 2000);
        });
    }
}

// Add copy button to citation
document.addEventListener('DOMContentLoaded', () => {
    const citationLinks = document.querySelector('.citation-links');
    if (citationLinks) {
        const copyButton = document.createElement('button');
        copyButton.className = 'btn btn-outline';
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy Citation';
        copyButton.onclick = copyCitation;
        citationLinks.appendChild(copyButton);
    }
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Performance metrics animation
function animateNumbers() {
    const metrics = document.querySelectorAll('.performance-badge');

    metrics.forEach(badge => {
        const text = badge.textContent;
        const number = parseFloat(text);
        if (!isNaN(number)) {
            let current = 0;
            const increment = number / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    current = number;
                    clearInterval(timer);
                }
                badge.textContent = current.toFixed(1) + '%';
            }, 30);
        }
    });
}

// Trigger animations when performance section is visible
const performanceSection = document.querySelector('.performance');
if (performanceSection) {
    const performanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                performanceObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    performanceObserver.observe(performanceSection);
}

// Add loading animation for hero video
document.addEventListener('DOMContentLoaded', () => {
    const mainVideo = document.getElementById('main-video');
    if (mainVideo) {
        mainVideo.addEventListener('canplaythrough', () => {
            mainVideo.style.opacity = '1';
        });
    }
});

// Parallax effect for hero section (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add some sparkle effects to innovation cards
document.querySelectorAll('.innovation-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 20px 40px rgba(37, 99, 235, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-up');
    });

    // Initialize video controls
    document.querySelectorAll('video').forEach(video => {
        video.volume = 0.3; // Set reasonable default volume
    });

    console.log('F₁ website loaded successfully!');
});
