// SHOOTING STARS IN HERO-CONTENT AREA ONLY
console.log('🌟 SHOOTING STARS SCRIPT STARTING');

function createShootingStar(x, y) {
  console.log('⭐ Creating shooting star at:', x, y);
  
  // Create shooting star element
  const star = document.createElement('div');
  star.innerHTML = '⭐';
  star.style.cssText = `
    position: absolute !important;
    left: ${x}px !important;
    top: ${y}px !important;
    width: 20px !important;
    height: 20px !important;
    color: #ffffff !important;
    font-size: 16px !important;
    z-index: 10 !important;
    pointer-events: none !important;
    text-shadow: 0 0 10px #00d4ff, 0 0 20px #667eea !important;
    animation: shootingStarAnim 1.5s ease-out forwards !important;
  `;
  
  // Add shooting trail
  const trail = document.createElement('div');
  trail.style.cssText = `
    position: absolute !important;
    left: ${x + 10}px !important;
    top: ${y + 10}px !important;
    width: 60px !important;
    height: 2px !important;
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0.9) 0%,
      rgba(0, 212, 255, 0.7) 30%,
      rgba(102, 126, 234, 0.5) 60%,
      rgba(255, 255, 255, 0) 100%
    ) !important;
    z-index: 9 !important;
    pointer-events: none !important;
    border-radius: 1px !important;
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.6) !important;
    animation: trailAnim 1.5s ease-out forwards !important;
  `;
  
  // Find hero-content container
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.appendChild(star);
    heroContent.appendChild(trail);
    console.log('✅ Shooting star added to hero-content');
    
    // Remove after animation
    setTimeout(() => {
      if (star.parentNode) star.parentNode.removeChild(star);
      if (trail.parentNode) trail.parentNode.removeChild(trail);
    }, 1500);
  } else {
    console.log('❌ Hero-content not found');
  }
}

// Add shooting star animations
const starStyle = document.createElement('style');
starStyle.textContent = `
  @keyframes shootingStarAnim {
    0% {
      opacity: 0;
      transform: translateX(-20px) translateY(10px) scale(0.5);
    }
    20% {
      opacity: 1;
      transform: translateX(0px) translateY(0px) scale(1);
    }
    80% {
      opacity: 0.8;
      transform: translateX(40px) translateY(-20px) scale(0.8);
    }
    100% {
      opacity: 0;
      transform: translateX(80px) translateY(-40px) scale(0.3);
    }
  }
  
  @keyframes trailAnim {
    0% {
      opacity: 0;
      width: 0px;
      transform: translateX(-20px) translateY(10px);
    }
    20% {
      opacity: 0.8;
      width: 60px;
      transform: translateX(0px) translateY(0px);
    }
    80% {
      opacity: 0.4;
      width: 40px;
      transform: translateX(40px) translateY(-20px);
    }
    100% {
      opacity: 0;
      width: 20px;
      transform: translateX(80px) translateY(-40px);
    }
  }
`;
document.head.appendChild(starStyle);

// Create shooting stars only when mouse is over hero-content
let heroContentActive = false;

document.addEventListener('DOMContentLoaded', function() {
  const heroContent = document.querySelector('.hero-content');
  
  if (heroContent) {
    console.log('✅ Hero-content found, setting up shooting stars');
    
    // Mouse enter/leave events for hero-content
    heroContent.addEventListener('mouseenter', function() {
      heroContentActive = true;
      console.log('🌟 Mouse entered hero-content - stars activated');
    });
    
    heroContent.addEventListener('mouseleave', function() {
      heroContentActive = false;
      console.log('🌟 Mouse left hero-content - stars deactivated');
    });
    
    // Mouse move event for hero-content
    heroContent.addEventListener('mousemove', function(e) {
      if (!heroContentActive) return;
      
      // Get position relative to hero-content
      const rect = heroContent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create shooting star with 15% probability
      if (Math.random() < 0.15) {
        createShootingStar(x, y);
      }
    });
    
    // Create ambient shooting stars occasionally
    setInterval(() => {
      if (heroContentActive) {
        const rect = heroContent.getBoundingClientRect();
        const randomX = Math.random() * rect.width;
        const randomY = Math.random() * rect.height;
        createShootingStar(randomX, randomY);
        console.log('🌌 Ambient shooting star created');
      }
    }, 4000); // Every 4 seconds
    
  } else {
    console.log('❌ Hero-content not found');
  }
});

// Manual test function
window.createTestStar = function() {
  console.log('🧪 Manual shooting star test');
  createShootingStar(200, 100);
};

console.log('🌟 SHOOTING STARS SCRIPT LOADED');

// ===== REST OF THE SCRIPT WITH NULL CHECKS =====

// Mobile Navigation Toggle (with null check)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
  });
} else {
  console.log('⚠️ Hamburger or navMenu not found, skipping mobile nav setup');
}

// Close mobile menu when clicking on a link (with null check)
if (hamburger && navMenu) {
  const navLinksForMenu = document.querySelectorAll('.nav-link');
  if (navLinksForMenu.length > 0) {
    navLinksForMenu.forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
  }
} else {
  console.log('⚠️ Nav links or menu elements not found, skipping nav link setup');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-category, .project-card, .timeline-item, .stat').forEach(el => {
    observer.observe(el);
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Skills progress animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Initialize counter animation when stats section is visible
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Form validation and submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Por favor, completa todos los campos.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Por favor, ingresa un email válido.', 'error');
            return;
        }
        
        // Create mailto link
        const mailtoLink = `mailto:giovanemere@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showNotification('¡Mensaje enviado! Se abrirá tu cliente de email.', 'success');
        
        // Reset form
        this.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Back to top button
function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    `;
    
    document.body.appendChild(backToTop);
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'translateY(-3px)';
        backToTop.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
    });
    
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'translateY(0)';
        backToTop.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
    });
}

// Initialize back to top button
createBackToTopButton();

// Theme toggle functionality (optional)
function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        top: 50%;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #f3f4f6;
        color: #374151;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transform: translateY(-50%);
    `;
    
    document.body.appendChild(themeToggle);
    
    // Theme toggle functionality
    let isDark = false;
    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        document.body.classList.toggle('dark-theme', isDark);
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

// Initialize theme toggle (uncomment if needed)
// createThemeToggle();

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Your scroll handling code here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

console.log('🚀 Portfolio website loaded successfully!');
console.log('👨‍💻 Developed by Edisson Giovanni Zuñiga Lopez');
console.log('📧 Contact: giovanemere@gmail.com');

// ===== HERO SECTION ENHANCEMENTS =====

// Typewriter Effect
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = this.txt;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize Typewriter Effect
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const words = JSON.parse(typewriterElement.getAttribute('data-words'));
        new TypeWriter(typewriterElement, words, 2000);
    }

    // Animate hero elements on load
    animateHeroElements();
    
    // Add parallax effect to floating elements
    addParallaxEffect();
    
    // Add interactive hover effects
    addInteractiveEffects();
});

// Animate hero elements with staggered delays
function animateHeroElements() {
    const elements = [
        { selector: '.hero-greeting', delay: 200 },
        { selector: '.name-part:nth-child(1)', delay: 400 },
        { selector: '.name-part:nth-child(2)', delay: 600 },
        { selector: '.name-part.surname', delay: 800 },
        { selector: '.hero-title-container', delay: 1000 },
        { selector: '.hero-description', delay: 1200 },
        { selector: '.hero-badges', delay: 1400 },
        { selector: '.hero-stats', delay: 1600 },
        { selector: '.hero-cta', delay: 1800 }
    ];

    elements.forEach(({ selector, delay }) => {
        const element = document.querySelector(selector);
        if (element) {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
    });
}

// Add parallax effect to floating elements
function addParallaxEffect() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.2;
            element.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
}

// Add interactive effects
function addInteractiveEffects() {
    // Hero photo interactive effects
    const heroPhoto = document.querySelector('.hero-photo');
    if (heroPhoto) {
        heroPhoto.addEventListener('mouseenter', () => {
            heroPhoto.style.filter = 'brightness(1.1) contrast(1.1)';
        });
        
        heroPhoto.addEventListener('mouseleave', () => {
            heroPhoto.style.filter = 'brightness(1) contrast(1)';
        });
    }

    // Badge hover effects with sound (optional)
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'translateY(-3px) scale(1.05)';
            badge.style.boxShadow = '0 8px 25px rgba(0, 255, 136, 0.2)';
        });
        
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'translateY(0) scale(1)';
            badge.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
    });

    // Name parts glitch effect on click
    const nameParts = document.querySelectorAll('.name-part');
    nameParts.forEach(part => {
        part.addEventListener('click', () => {
            part.style.animation = 'none';
            setTimeout(() => {
                part.style.animation = 'glitch 0.5s ease-in-out';
            }, 10);
        });
    });
}

// Add mouse movement parallax effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 10;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        element.style.transform += ` translate(${x}px, ${y}px)`;
    });
    
    // Photo glow follows mouse
    const photoGlow = document.querySelector('.photo-glow');
    if (photoGlow) {
        const intensity = Math.abs(mouseX - 0.5) + Math.abs(mouseY - 0.5);
        photoGlow.style.opacity = Math.min(intensity * 2, 1);
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledParallax = throttle(addParallaxEffect, 16); // ~60fps
window.addEventListener('scroll', throttledParallax);
// Professional Metrics Counter Animation - Enhanced Version
let animationTriggered = false;

function animateCounters() {
  if (animationTriggered) return; // Prevent multiple executions
  animationTriggered = true;
  
  const counters = document.querySelectorAll('.metric-number');
  console.log('🚀 Starting counter animation, found:', counters.length, 'counters');
  
  counters.forEach((counter, index) => {
    const text = counter.textContent.trim();
    console.log(`📊 Counter ${index + 1}:`, text);
    
    // Extract number from text (e.g., "50+" -> 50, "15+" -> 15)
    const match = text.match(/(\d+)/);
    if (match) {
      const finalNumber = parseInt(match[1]);
      const suffix = text.replace(match[1], ''); // Get the "+" or other suffix
      console.log(`🔢 Animating from 0 to ${finalNumber} with suffix "${suffix}"`);
      
      // Special handling for the 50+ counter (make it extra dramatic)
      if (finalNumber === 50) {
        console.log('🎯 Special animation for 50+ counter!');
        animateCounter(counter, 0, finalNumber, suffix, 5000, index * 800, true); // 5 seconds, extra dramatic
      } else {
        // Regular animation for other numbers
        animateCounter(counter, 0, finalNumber, suffix, 4000, index * 800, false);
      }
    } else if (text.includes('Multi-Cloud') || text.includes('Multi')) {
      // Special handling for text-based metrics
      console.log('🌐 Animating Multi-Cloud text');
      counter.style.opacity = '0';
      counter.style.transform = 'scale(0.8)';
      
      setTimeout(() => {
        counter.style.opacity = '1';
        counter.style.transform = 'scale(1)';
        counter.style.transition = 'all 0.8s ease';
        
        // Add a glow effect
        setTimeout(() => {
          counter.style.textShadow = '0 0 15px rgba(0, 212, 255, 0.6)';
          setTimeout(() => {
            counter.style.textShadow = 'none';
          }, 1000);
        }, 400);
      }, 1200 + (index * 800));
    }
  });
}

function animateCounter(element, start, end, suffix, duration, delay = 0, isSpecial = false) {
  // Set initial value immediately
  element.textContent = start + suffix;
  element.style.transform = 'scale(1)';
  
  // Add special styling for the 50+ counter
  if (isSpecial) {
    element.style.fontSize = '2rem'; // Make it slightly bigger
    element.style.fontWeight = '900'; // Extra bold
  }
  
  setTimeout(() => {
    console.log(`⏰ Starting animation for ${end}${suffix} after ${delay}ms delay`);
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation (easeOutExpo)
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(start + (end - start) * easeOutExpo);
      
      element.textContent = current + suffix;
      
      // Enhanced effects for special counter (50+)
      if (isSpecial) {
        // More dramatic pulsing for 50+
        const pulseScale = 1 + Math.sin(progress * Math.PI * 10) * 0.12;
        element.style.transform = `scale(${pulseScale})`;
        
        // Rainbow effect during animation
        const hue = (progress * 360) % 360;
        element.style.filter = `brightness(${1.2 + progress * 0.8}) hue-rotate(${hue}deg) saturate(${1.5 + progress})`;
        
        // Intense glow
        const glowIntensity = progress * 25;
        element.style.textShadow = `0 0 ${glowIntensity}px rgba(0, 212, 255, ${progress}), 0 0 ${glowIntensity * 2}px rgba(255, 107, 107, ${progress * 0.5})`;
      } else {
        // Regular effects for other counters
        const pulseScale = 1 + Math.sin(progress * Math.PI * 8) * 0.08;
        element.style.transform = `scale(${pulseScale})`;
        
        const intensity = 0.7 + (progress * 0.6);
        element.style.filter = `brightness(${intensity}) saturate(${1 + progress * 0.5})`;
        
        const glowIntensity = progress * 15;
        element.style.textShadow = `0 0 ${glowIntensity}px rgba(0, 212, 255, ${progress * 0.8})`;
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // Enhanced final celebration for special counter
        console.log(`🎉 Animation complete for ${end}${suffix}`);
        
        if (isSpecial) {
          // Epic celebration for 50+
          element.style.transform = 'scale(1.6)';
          element.style.filter = 'brightness(2) drop-shadow(0 0 30px rgba(0, 212, 255, 1)) hue-rotate(180deg)';
          element.style.textShadow = '0 0 30px rgba(0, 212, 255, 1), 0 0 60px rgba(255, 107, 107, 0.8)';
          
          setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.filter = 'brightness(1)';
            element.style.textShadow = 'none';
            element.style.transition = 'all 0.8s ease';
          }, 1200); // Longer celebration
        } else {
          // Regular celebration
          element.style.transform = 'scale(1.4)';
          element.style.filter = 'brightness(1.8) drop-shadow(0 0 20px rgba(0, 212, 255, 1))';
          element.style.textShadow = '0 0 25px rgba(0, 212, 255, 1)';
          
          setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.filter = 'brightness(1)';
            element.style.textShadow = 'none';
            element.style.transition = 'all 0.6s ease';
          }, 800);
        }
      }
    }
    
    requestAnimationFrame(updateCounter);
  }, delay);
}

// Multiple trigger methods to ensure animation runs
function initCounterAnimation() {
  console.log('🎬 Initializing counter animation system');
  
  // Method 1: Immediate trigger after DOM load
  setTimeout(() => {
    console.log('🎯 Trigger 1: Immediate after DOM load');
    animateCounters();
  }, 1500);
  
  // Method 2: Intersection Observer
  const metricsContainer = document.querySelector('.professional-metrics');
  if (metricsContainer) {
    console.log('👁️ Setting up Intersection Observer');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animationTriggered) {
          console.log('🎯 Trigger 2: Intersection Observer activated');
          setTimeout(() => {
            animateCounters();
          }, 300);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '50px'
    });
    
    observer.observe(metricsContainer);
  }
  
  // Method 3: Manual trigger button (for testing)
  if (window.location.hash === '#debug') {
    const debugBtn = document.createElement('button');
    debugBtn.textContent = '🔄 Restart Counter Animation';
    debugBtn.style.cssText = 'position:fixed;top:10px;right:10px;z-index:9999;padding:10px;background:#00d4ff;color:white;border:none;border-radius:5px;cursor:pointer;';
    debugBtn.onclick = () => {
      animationTriggered = false;
      animateCounters();
    };
    document.body.appendChild(debugBtn);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('📄 DOM Content Loaded - Initializing counters');
  initCounterAnimation();
});

// Backup initialization on window load
window.addEventListener('load', function() {
  if (!animationTriggered) {
    console.log('🔄 Backup trigger: Window load event');
    setTimeout(() => {
      animateCounters();
    }, 500);
  }
});
