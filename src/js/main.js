document.addEventListener('DOMContentLoaded', function() {
    // Navigation Menu Functionality
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle navigation menu
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
        
        // Smooth scroll to sections
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth scroll indicator
    const scrollIndicator = document.getElementById('scrollIndicator');
    
    function updateScrollIndicator() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        if (scrollIndicator) {
            scrollIndicator.style.transform = `scaleX(${scrollPercent / 100})`;
        }
    }
    
    // Advanced Intersection Observer for timeline animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: [0, 0.1, 0.5, 1],
        rootMargin: '0px 0px -10% 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Staggered animation based on intersection ratio
                const delay = entry.intersectionRatio > 0.5 ? 0 : 200;
                
                setTimeout(() => {
                    entry.target.classList.add('animate');
                    
                    // Add special effects for key milestones
                    const year = entry.target.dataset.year;
                    if (['1947', '1915', '1930', '1942'].includes(year)) {
                        entry.target.classList.add('milestone');
                    }
                }, delay);
                
                // Enhanced parallax effect
                const backgroundImage = entry.target.style.backgroundImage;
                if (backgroundImage) {
                    const parallaxOffset = (1 - entry.intersectionRatio) * 30;
                    entry.target.style.backgroundPosition = `center ${50 + parallaxOffset}%`;
                }
            }
        });
    }, observerOptions);
    
    // Performance optimization: Lazy load images
    const lazyLoadImages = function() {
        const timelineItems = document.querySelectorAll('.fullscreen-section[data-year]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bgImage = entry.target.style.backgroundImage;
                    if (bgImage && bgImage.includes('url')) {
                        // Image is already loaded, just add loaded class
                        entry.target.classList.add('image-loaded');
                    }
                    imageObserver.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '100px'
        });
        
        timelineItems.forEach(item => {
            imageObserver.observe(item);
        });
    };
    
    // Initialize lazy loading
    lazyLoadImages();
    
    // Observe all timeline items
    timelineItems.forEach(item => {
        observer.observe(item);
    });
    
    // Advanced parallax effects
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        // Hero parallax
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        // Timeline items parallax
        timelineItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const speed = 0.1 + (index % 2) * 0.05;
            const yPos = -(scrolled - rect.top) * speed;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                item.style.transform = `translateY(${yPos}px)`;
            }
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Optimized scroll handling
    window.addEventListener('scroll', function() {
        updateScrollIndicator();
        requestTick();
    }, { passive: true });
    
    // Enhanced year badge interactions
    const years = document.querySelectorAll('.year');
    years.forEach(year => {
        year.addEventListener('click', function(e) {
            e.preventDefault();
            
            const item = this.closest('.timeline-item');
            const headerHeight = document.querySelector('header').offsetHeight;
            const itemTop = item.offsetTop - headerHeight - 50;
            
            // Smooth scroll with easing
            window.scrollTo({
                top: itemTop,
                behavior: 'smooth'
            });
            
            // Add visual feedback
            this.style.transform = 'translateY(-50%) scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'translateY(-50%) scale(1)';
            }, 200);
        });
        
        // Add ripple effect on click
        year.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                top: ${y}px;
                left: ${x}px;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .year {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
    
    // Progressive image loading with fade-in effect
    const images = document.querySelectorAll('.image-container img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.6s ease';
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Fallback for cached images
        if (img.complete) {
            img.style.opacity = '1';
        }
        
        // Enhanced error handling with placeholder
        img.addEventListener('error', function() {
            this.style.opacity = '1';
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iI2Y4ZjlmYSIvPgogIDx0ZXh0IHg9IjE3NSIgeT0iMTI1IiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2Yjc0ODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+Cjwvc3ZnPgo=';
            this.alt = 'Historical image not available';
        });
    });
    
    // Add smooth scroll polyfill for older browsers
    if (!('scrollBehavior' in document.documentElement.style)) {
        const scrollPolyfill = document.createElement('script');
        scrollPolyfill.src = 'https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
        document.head.appendChild(scrollPolyfill);
        
        scrollPolyfill.onload = function() {
            window.__forceSmoothScrollPolyfill__ = true;
            window.smoothscroll.polyfill();
        };
    }
    
    // Initialize scroll indicator
    updateScrollIndicator();
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            
            const currentItem = document.querySelector('.timeline-item.animate:last-of-type');
            if (!currentItem) return;
            
            const nextItem = e.key === 'ArrowDown' 
                ? currentItem.nextElementSibling 
                : currentItem.previousElementSibling;
                
            if (nextItem && nextItem.classList.contains('timeline-item')) {
                nextItem.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }
    });
    
    // Performance optimization: Lazy load timeline items
    timelineItems.forEach((item, index) => {
        if (index > 2) { // Only lazy load items after the first 3
            item.style.visibility = 'hidden';
            
            const lazyObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.visibility = 'visible';
                        lazyObserver.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '200px' });
            
            lazyObserver.observe(item);
        }
    });
    
    // Audio Player Functionality
    const audio = document.getElementById('regional-song');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeSlider = document.getElementById('volume-slider');

    if (audio && playPauseBtn && volumeSlider) {
        playPauseBtn.addEventListener('click', function() {
            if (audio.paused) {
                audio.play().catch(e => console.error("Audio play failed:", e));
            } else {
                audio.pause();
            }
        });

        volumeSlider.addEventListener('input', function() {
            audio.volume = this.value;
        });

        audio.addEventListener('play', () => {
            playPauseBtn.classList.remove('play');
            playPauseBtn.classList.add('pause');
            playPauseBtn.setAttribute('aria-label', 'Pause the song');
        });

        audio.addEventListener('pause', () => {
            playPauseBtn.classList.remove('pause');
            playPauseBtn.classList.add('play');
            playPauseBtn.setAttribute('aria-label', 'Play the song');
        });

        audio.addEventListener('volumechange', () => {
            volumeSlider.value = audio.volume;
        });
    }
});